## 什么是Spring Bean
Bean是由 Spring IoC 容器实例化, 管理, 依赖注入的基本单元
Bean是根据 Spring 内部的配置元数据 `Bean Definition` 实例化的

## Spring有哪些方式可以用来配置Bean
- XML
- 注解
- Java 配置类

## Bean在 IoC 容器中的运行流程是什么样的?
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220613232321.png)

![[3.Bean的生命周期]]

## 什么是Bean的延迟加载?
默认情况下, IoC容器在启动时便会创建好所有的单例 Bean
如果不希望启动时创建, 希望在使用该Bean时创建, 就称为`延迟加载`
通过设置Bean 的`lazy-init=true`属性开启延迟加载.

## Spring如何解决循环依赖问题?
整体思路是这样的:
- Spring 在创建 bean 的时候并不是等它完全完成，而是在创建过程中将创建中的 bean 的 ObjectFactory 提前曝光（即加入到 `singletonFactories` 缓存中）
- 一旦下一个 bean 创建的时候需要依赖 bean ，则直接使用 ObjectFactory 的 `getObject()` 方法来获取

对于三个互相依赖的Bean: `A` , `B`, `C`
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220616212008.png)
依赖注入过程如下:
-   首先 A 完成初始化第一步并将自己提前曝光出来（通过 ObjectFactory 将自己提前曝光），在初始化的时候，发现自己依赖对象 B，此时就会去尝试 get(B)，这个时候发现 B 还没有被创建出来
-   然后 B 就走创建流程，在 B 初始化的时候，同样发现自己依赖 C，C 也没有被创建出来
-   这个时候 C 又开始初始化进程，但是在初始化的过程中发现自己依赖 A，于是尝试 get(A)，这个时候由于 A 已经添加至缓存中（一般都是添加至三级缓存 `singletonFactories` ），通过 ObjectFactory 提前曝光，所以可以通过 `ObjectFactory#getObject()` 方法来拿到 A 对象，C 拿到 A 对象后顺利完成初始化，然后将自己添加到一级缓存中
-   回到 B ，B 也可以拿到 C 对象，完成初始化，A 可以顺利拿到 B 完成初始化。到这里整个链路就已经完成了初始化过程了

**回到代码**
==三级缓存==
在`getSingleton`方法中可以看到三个缓存: `singletonObjects`, `earlySingletonObjects`, `singletonFactories`
```java
// DefaultSingletonBeanRegistry.java  
  
@Nullable  
protected Object getSingleton(String beanName, boolean allowEarlyReference) {  
    // 从单例缓冲中加载 bean  
    Object singletonObject = this.singletonObjects.get(beanName);  
    // 缓存中的 bean 为空，且当前 bean 正在创建  
    if (singletonObject == null && isSingletonCurrentlyInCreation(beanName)) {  
        // 加锁  
        synchronized (this.singletonObjects) {  
            // 从 earlySingletonObjects 获取  
            singletonObject = this.earlySingletonObjects.get(beanName);  
            // earlySingletonObjects 中没有，且允许提前创建  
            if (singletonObject == null && allowEarlyReference) {  
                // 从 singletonFactories 中获取对应的 ObjectFactory  
                ObjectFactory<?> singletonFactory = this.singletonFactories.get(beanName);  
                if (singletonFactory != null) {  
                    // 获得 bean  
                    singletonObject = singletonFactory.getObject();  
                    // 添加 bean 到 earlySingletonObjects 中  
                    this.earlySingletonObjects.put(beanName, singletonObject);  
                    // 从 singletonFactories 中移除对应的 ObjectFactory  
                    this.singletonFactories.remove(beanName);  
                }  
            }  
        }  
    }  
    return singletonObject;  
}
```

==三级缓存==
那么最重要的三级缓存`singletonFactories`是什么时候缓存的呢?
在`doCreateBean`的时候缓存的:
```java
boolean earlySingletonExposure = (mbd.isSingleton() // 单例模式  
        && this.allowCircularReferences // 运行循环依赖  
        && isSingletonCurrentlyInCreation(beanName)); // 当前单例 bean 是否正在被创建  
if (earlySingletonExposure) {  
    if (logger.isTraceEnabled()) {  
        logger.trace("Eagerly caching bean '" + beanName +  
                "' to allow for resolving potential circular references");  
    }  
    // 提前将创建的 bean 实例加入到 singletonFactories 中  
    // <X> 这里是为了后期避免循环依赖  
    addSingletonFactory(beanName, () -> getEarlyBeanReference(beanName, mbd, bean));  
}
```
从上面的代码可以看出, 在满足了三个条件后, 就可以缓存进三级缓存:
-   单例
-   运行提前暴露 bean
-   当前 bean 正在创建中

```ad-note
从上面的条件可以看出: 循环依赖仅针对与Singleton作用域, 对于prototype作用域无效
```
这里有更详细的[介绍](http://svip.iocoder.cn/Spring/IoC-get-Bean-createBean-5/#2-1-getSingleton)