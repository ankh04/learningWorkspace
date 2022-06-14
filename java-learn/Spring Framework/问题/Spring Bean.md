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
