## ArrayDeque和LinkedList有什么区别? 该如何选择?
![[ArrayDeque和LinkedList]]


## 内部类与嵌套类在Java中如何定义? 它们有什么相同与不同点?
![[内部类与嵌套类]]


## 面向对象的三大特性是什么?
**封装**
将数据与对数据的操作封装在一起, 构成一个对象.
数据被保护在对象内部, 尽可能隐藏内部的细节, 仅通过对外接口与外部发生关系.
==封装的优点==
- 减少耦合
- 可读性更好

**继承**
继承实现了 IS-A 关系, 子类可以继承父类非private的属性和方法.

继承应当遵循*里氏替换原则*, 子类对象必须能够替换父类对象

比如 Cat 可以作为 Animal 来使用. 父类引用指向子类对象称为*向上转型*
```java
Animal animal = new Cat();
```

**多态**
多态分为运行时多态和编译时多态
- 编译时多态主要指方法的重载
- 运行时多态指对象引用所指向的具体类型在运行期间才确定

## UML中常见的关系有哪些?
- 泛化关系
用来描述继承关系, 使用 extends 关键字
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220519100511.png)

- 实现关系
用来实现一个接口, 使用 implement 关键字
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220519100700.png)

- 聚合关系
表示整体由部分组成, 但如果整体不存在了, 部分还是会存在
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220519100805.png)

- 组合关系
与聚合关系类似, 区别在于, 如果整体不存在了, 部分也就不存在了
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220519100912.png)

- 关联关系
表示不同对象之间有关联, 是一种静态关系, 可以分成四种:
1. 一对一
2. 多对一
3. 一对多
4. 多对多

- 依赖关系
表示不同对象之间有关联, 是一种动态关系, 主要由三种形式:
1. A 类是 B 类的局部变量
2. A 类是 B 类方法当中的一个参数
3. A 类向 B 类发送消息, 从而影响 B 类发生变化
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220519101316.png)



## Java语言有哪些特点?
- 简单易学
- 面向对象(继承, 封装, 多态)
- 平台无关性( 由Java虚拟机实现的平台无关性 )
- 支持多线程
- 可靠性
- 安全性
- 支持网络编程
- 编译与解释并存(JIT)
- **Java生态**(最重要)

## JVM JDK JRE分别是什么?
### JVM
JVM是运行Java字节码的虚拟机. 不同的操作系统都有不同的JVM, 从而实现了"一次编译, 处处运行"
## JRE
JRE是Java的运行时环境, 包含了Java类库, 以及一些和操作系统打交道的库.
JRE和JVM是运行一个Java程序必备条件.
### JDK
JDK是Java开发套件, 包含了JRE的所有内容, 并且还付加了java编译器 javac 和其他工具比如jdb, javadoc等等.

## 什么是字节码, 它有什么好处?
JVM执行的代码就是字节码.
字节码的好处在于, 它不面向于任何特定的处理器, 只面向虚拟机.
另一方面, 字节码让Java保留了解释型语言的特点, 并且规避了传统解释型语言执行效率低的特点.

## 字符型常量和字符串常量的区别?
1.  **形式** : 字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符。
2.  **含义** : 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)。
3.  **占内存大小** ： 字符常量只占 2 个字节; 字符串常量占若干个字节。

## 方法的签名包括哪些部分?
方法名 + 参数列表
**⚠️注意** 权限相关的修饰符, 以及返回值并不是方法的签名.

## 重写和重载的区别?
**重写**: 覆盖父类的相同方法
**重载**: 同一个方法名不同参数列表的多个方法, 是重载关系

重写的返回类型可以改变么?
如果是引用类型则可以改变, 但如果是基本类型和void, 则不能改变.

## Java的基本数据类型有哪些?
Java有8种基本数据类型:
-   6 种数字类型：
    -   4 种整数型：`byte`、`short`、`int`、`long`
    -   2 种浮点型：`float`、`double`
-   1 种字符类型：`char`
-   1 种布尔型：`boolean`。

浮点数字字面量的默认类型是 double
整数数字字面量的默认类型是 int

如果需要使用float类型, 则需要在字面量后面加上f, 比如`3.14f`
如果需要使用long类型, 则需要在字面量后面加上L, 比如`100000000000L`

## 基本类型和包装类型的区别?
八种基本类型都有对应的包装类分别为：`Byte`、`Short`、`Integer`、`Long`、`Float`、`Double`、`Character`、`Boolean` 。

-   包装类型不赋值就是 `null` ，而基本类型有默认值且不是 `null`。
-   **包装类型可用于泛型，而基本类型不可以**。
-   **基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中**，基本数据类型的成员变量（未被 `static` 修饰 ）**存放在 Java 虚拟机的堆中**。包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。
-   相比于对象类型， **基本数据类型占用的空间非常小**。

## 自动拆箱和装箱是什么?
-   **装箱**：将基本类型用它们对应的引用类型包装起来；
-   **拆箱**：将包装类型转换为基本数据类型；
举例
```java
Integer i = 10;  //装箱
int n = i;   //拆箱
```

上面两行代码等价于:
```java
Integer i = Integer.valueOf(10)
int n = i.intValue()
```
频繁拆装箱会影响系统性能.


#### 缓存机制
缓存范围:
1. -128至127之间的整数
2. true 和 false的布尔值
3. ‘\\u0000’至‘\\u007f’之间的字符（\[0, 127\]的char字符）

如果一个值属于上面的范围, 并且被自动装箱了, 那么它就被缓存了, 即每次使用 valueOf 时并不会创建新的对象, 而是返回缓存的对象.


## 创建对象用什么运算符? 对象实体和对象引用有什么区别?
使用`new`关键词创建对象实例放在堆中, 并把指向这个实例的对象引用返回.(对象引用往往放在栈上)


## 深拷贝和浅拷贝的区别? 什么是引用拷贝?
-   **浅拷贝**：浅拷贝会在堆上创建一个新的对象（区别于引用拷贝的一点），不过，如果原对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用同一个内部对象。
-   **深拷贝** ：深拷贝会完全复制整个对象，包括这个对象所包含的内部对象。
-   **引用拷贝** : 引用拷贝就是两个不同的引用指向同一个对象。

## Object类中的方法有哪些?
可以重写的方法有:
- `hashCode`  *native*: 返回对象的哈希值, 主要用在哈希表上
- `equals`: 用于比较两个对象是否相等
- `clone` *native*: 用于创建并返回当前对象的一份拷贝
- `toString`: 返回对象的字符串表达
- `finalize`: 被垃圾回收时触发的操作

不可以重写的方法:
和线程相关的多是不可重写的: `notify`, `notifyAll`, `wait`

## \=\= 和 equals() 的区别
\=\= 和 `equals()` 都可以用来判断*引用类型的变量*, 但是 \=\=比较的是引用地址, 而`equals()`是通过Object上重写的方法的返回值进行判断的.
- 如果 equals() 方法没有重写, 则效果和\=\=一样

只有\=\=可以用于基本类型的比较, 在这种情况下只比较值是否相等.

## String, StringBuffer, StringBuilder 的区别?
StringBuffer StringBuilder 都是继承自 `AbstractStringBuilder`类, `AbstractStringBuilder`提供了很多修改字符串的方法

**可变性**
String是不可变的 StringBuffer和StringBuilder是可变的.

**线程安全性**
String是不可变的, 因此是线程安全的
StringBuffer加了同步锁, 是线程安全的
StringBuilder没有加同步锁, 不是线程安全的

**性能**
每次对String进行改变的时候, 都会生成一个新的 String 对象, 速度会比较慢
StringBuffer StringBuilder 则会对现有的对象进行更改, 而不会生成新对象, 速度会更快
StringBuilder因为没有加同步锁, 速度比StringBuffer快10%~15%

**连接字符串**
对于String类型, 可以使用 "+" 运算符, 这是Java中仅有的两个重载过的运算符之一(另一个是 "+=")

不过重载后的 "+" 运算符只不过是调用了 StringBuilder 的 append() 方法完成了连接操作, 然后再使用 toString() 方法得到一个 String 对象.

从上面的分析可以看出, + 运算符连接字符串的效率很低

如果需要大量连接字符串, 建议使用 StringBuilder 和 StringBuffer


## 什么是字符串常量池? intern()方法有什么作用?
字符串常量池是 JVM 为了提升性能减少内存消耗针对字符串开辟的一块区域, 目的是避免字符串的重复创建:
```java
// 在堆中创建字符串对象”ab“
// 将字符串对象”ab“的引用保存在字符串常量池中
String aa = "ab";
// 直接返回字符串常量池中字符串对象”ab“的引用
String bb = "ab";
System.out.println(aa==bb);// true
```


intern方法可以将字符串对象的引用保存在字符串常量池中, 可以分为两种情况:
-   如果字符串常量池中保存了对应的字符串对象的引用，就直接返回该引用。
-   如果字符串常量池中没有保存了对应的字符串对象的引用，那就在常量池中创建一个指向该字符串对象的引用并返回。

```java
// 在堆中创建字符串对象”Java“
// 将字符串对象”Java“的引用保存在字符串常量池中
String s1 = "Java";
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s2 = s1.intern();
// 会在堆中在单独创建一个字符串对象
String s3 = new String("Java");
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s4 = s3.intern();
// s1 和 s2 指向的是堆中的同一个对象
System.out.println(s1 == s2); // true
// s3 和 s4 指向的是堆中不同的对象
System.out.println(s3 == s4); // false
// s1 和 s4 指向的是堆中的同一个对象
System.out.println(s1 == s4); //true

```


## Exception 和 Error 有什么区别?
Exception和Error都是`Throwable`的子类:

Exception是可以处理的异常, 而Error是不可以处理的异常, 遇到Error, JVM会终止.

Exception又分为 Checked Exception 和 Unchecked Exception.
**Checked Exception** 即 受检查异常 ，Java 代码在编译过程中，如果受检查异常没有被 `catch`或者`throws` 关键字处理的话，就没办法通过编译。常见的受检查异常有： IO 相关的异常、`ClassNotFoundException` 、`SQLException`...。

**Unchecked Exception** 即 **不受检查异常** ，Java 代码在编译过程中 ，我们即使不处理不受检查异常也可以正常通过编译。常见的不受检查异常有:
-   `NullPointerException`(空指针错误)
-   `IllegalArgumentException`(参数错误比如方法入参类型错误)
-   `NumberFormatException`（字符串转换为数字格式错误，`IllegalArgumentException`的子类）
-   `ArrayIndexOutOfBoundsException`（数组越界错误）
-   `ClassCastException`（类型转换错误）
-   `ArithmeticException`（算术错误）
-   `SecurityException` （安全错误比如权限不够）
-   `UnsupportedOperationException`(不支持的操作错误比如重复创建同一用户)


## Java是按值传递还是引用传递?
C++这样的语言提供了按值传递和引用传递两种方式, 但Java中只有值传递.

Java 中将实参传递给方法（或函数）的方式是 **值传递** ：
-   如果参数是基本类型的话，传递的就是基本类型的字面量值的拷贝，会创建副本。
-   如果参数是引用类型，传递的就是实参所引用的对象在堆中地址值的拷贝，同样也会创建副本。

## 什么是序列化? 为什么要序列化?
序列化就是将*数据结构或对象*转化成*二进制字节流*的过程
**序列化的目的:** 持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象

**使用序列化的场景**
- 对象在网络传输的时候需要先被序列化
- 对象存储到文件的时候需要序列化
- 对象存储到缓存数据库(redis)需要序列化

**常见的序列化协议**
先说两种常见的序列化:
- java序列化: 这是JDK自带的序列化实现, 性能不佳
- json序列化: 常用的库是阿里的fastjson, 但性能也不是最好的

==高性能的二进制序列化==
hessian序列化
protobuf序列化
protostuff序列化
kryo序列化

## Java中获取 Class 对象的方式有哪些?
```java
Class clazz = TargetClass.class;

Class clazz1 = Class.forName("host.ankh.TargetClass");

TargetClass o = new TargetClass();
Class clazz2 = o.getClass(); // 这个是继承自Object类上的native方法

ClassLoader.getSystemClassLoader().loadClass("host.ankh.TargetClass");
```

## Java的代理是什么?
代理模式就是使用*代理对象*代替真实对象.
好处: 可以在不修改原目标对象(或者是原对象不可更改)的情况下提供额外的功能, *扩展*目标对象的功能.

代理可以分为静态代理和动态代理: 
**静态代理:** 静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 class 文件。
**动态代理:** 从 JVM 角度来说，动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。

#### 动态代理
动态代理又可以分为 *JDK动态代理* 和 *CGLIB动态代理*

JDK是基于接口的代理(就是说被代理的对象必须实现了某个接口, 因为代理是对接口的代理)
而CGLIB代理这没有上面的限制, 它可以代理任何类, 即使没有实现接口.(原因在于CGLIB使用了ASM的字节码生成库)

但另一方面, JDK速度会比CGLIB快

==JDK代理示例:==
**1.定义发送短信的接口**

```
public interface SmsService {
    String send(String message);
}
```

**2.实现发送短信的接口**

```
public class SmsServiceImpl implements SmsService {
    public String send(String message) {
        System.out.println("send message:" + message);
        return message;
    }
}
```

**3.定义一个 JDK 动态代理类**

```
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * 代理类中的真实对象
     */
    private final Object target;

    public DebugInvocationHandler(Object target) {
        this.target = target;
    }


    public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        //调用方法之前，我们可以添加自己的操作
        System.out.println("before method " + method.getName());
        Object result = method.invoke(target, args);
        //调用方法之后，我们同样可以添加自己的操作
        System.out.println("after method " + method.getName());
        return result;
    }
}

```

`invoke()` 方法: 当我们的动态代理对象调用原生方法的时候，最终实际上调用到的是 `invoke()` 方法，然后 `invoke()` 方法代替我们去调用了被代理对象的原生方法。

**4.获取代理对象的工厂类**

```
public class JdkProxyFactory {
    public static Object getProxy(Object target) {
        return Proxy.newProxyInstance(
                target.getClass().getClassLoader(), // 目标类的类加载
                target.getClass().getInterfaces(),  // 代理需要实现的接口，可指定多个
                new DebugInvocationHandler(target)   // 代理对象对应的自定义 InvocationHandler
        );
    }
}
```

`getProxy()` ：主要通过`Proxy.newProxyInstance（）`方法获取某个类的代理对象

**5.实际使用**

```
SmsService smsService = (SmsService) JdkProxyFactory.getProxy(new SmsServiceImpl());
smsService.send("java");
```

运行上述代码之后，控制台打印出：

```
before method send
send message:java
after method send
```

==CGLIB代理示例==
如果你要使用它的话，需要手动添加相关依赖。

```
<dependency>
  <groupId>cglib</groupId>
  <artifactId>cglib</artifactId>
  <version>3.3.0</version>
</dependency>
```

**1.实现一个使用阿里云发送短信的类**

```
package github.javaguide.dynamicProxy.cglibDynamicProxy;

public class AliSmsService {
    public String send(String message) {
        System.out.println("send message:" + message);
        return message;
    }
}
```

**2.自定义 `MethodInterceptor`（方法拦截器）**

```
/**
 * 自定义MethodInterceptor
 */
public class DebugMethodInterceptor implements MethodInterceptor {


    /**
     * @param o           代理对象（增强的对象）
     * @param method      被拦截的方法（需要增强的方法）
     * @param args        方法入参
     * @param methodProxy 用于调用原始方法
     */
    @Override
    public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        //调用方法之前，我们可以添加自己的操作
        System.out.println("before method " + method.getName());
        Object object = methodProxy.invokeSuper(o, args);
        //调用方法之后，我们同样可以添加自己的操作
        System.out.println("after method " + method.getName());
        return object;
    }

}
```

**3.获取代理类**

```
public class CglibProxyFactory {

    public static Object getProxy(Class<?> clazz) {
        // 创建动态代理增强类
        Enhancer enhancer = new Enhancer();
        // 设置类加载器
        enhancer.setClassLoader(clazz.getClassLoader());
        // 设置被代理类
        enhancer.setSuperclass(clazz);
        // 设置方法拦截器
        enhancer.setCallback(new DebugMethodInterceptor());
        // 创建代理类
        return enhancer.create();
    }
}
```

**4.实际使用**

```
AliSmsService aliSmsService = (AliSmsService) CglibProxyFactory.getProxy(AliSmsService.class);
aliSmsService.send("java");
```

运行上述代码之后，控制台打印出：

```
before method send
send message:java
after method send
```


## 介绍下Java的IO模型?

平常开发过程中接触最多的就是 **磁盘 IO（读写文件）** 和 **网络 IO（网络请求和响应）**。

**从应用程序的视角来看的话，应用程序对操作系统的内核发起 IO 调用（系统调用），操作系统负责的内核执行具体的 IO 操作。也就是说，应用程序实际上只是发起了 IO 操作的调用而已，具体 IO 的执行是由操作系统的内核来完成的。**

当应用程序发起 I/O 调用后，会经历两个步骤：

1.  内核等待 I/O 设备准备好数据
2.  内核将数据从内核空间拷贝到用户空间。

Java中有三种IO模型: BIO(阻塞IO), NIO(非阻塞IO), AIO(异步IO)
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220528113215.png)


## Java中常见的集合接口有哪些?
大致可以分为两类:
- Collection接口类: `List`, `Queue`, `Set`
- Map接口类: `HashMap`, `Hashtable`, `TreeMap`
它们的继承关系如下:
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220530132055.png)


## 说下 List, Set, Queue, Map四者的区别?
-   `List`(对付顺序的好帮手): 存储的元素是有序的、可重复的。
-   `Set`(注重独一无二的性质): 存储的元素是无序的、不可重复的。
-   `Queue`(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。
-   `Map`(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，"x" 代表 key，"y" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。


## 简要介绍下List, Set, Queue, Map的底层数据结构?
#### List

-   `Arraylist`： `Object[]` 数组
-   `Vector`：`Object[]` 数组
-   `LinkedList`： 双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)

####  Set

-   `HashSet`(无序，唯一): 基于 `HashMap` 实现的，底层采用 `HashMap` 来保存元素
-   `LinkedHashSet`: `LinkedHashSet` 是 `HashSet` 的子类，并且其内部是通过 `LinkedHashMap` 来实现的。有点类似于我们之前说的 `LinkedHashMap` 其内部是基于 `HashMap` 实现一样，不过还是有一点点区别的
-   `TreeSet`(有序，唯一): 红黑树(自平衡的排序二叉树)

#### Queue

-   `PriorityQueue`: `Object[]` 数组来实现二叉堆
-   `ArrayQueue`: `Object[]` 数组 + 双指针

再来看看 `Map` 接口下面的集合。

#### Map

-   `HashMap`： JDK1.8 之前 `HashMap` 由数组+链表组成的，数组是 `HashMap` 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间
-   `LinkedHashMap`： `LinkedHashMap` 继承自 `HashMap`，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，`LinkedHashMap` 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看：[《LinkedHashMap 源码详细分析（JDK1.8）》](https://www.imooc.com/article/22931)

-   `Hashtable`： 数组+链表组成的，数组是 `Hashtable` 的主体，链表则是主要为了解决哈希冲突而存在的
-   `TreeMap`： 红黑树（自平衡的排序二叉树）


## ArrayList和LinkedList的区别?
- **都不保证线程安全**
- ArrayList底层使用Object**数组**, LinkedList底层使用**双向链表**
- ArrayList在中间**插入元素**的速度比较慢是O(N), LinkedList插入元素的速度会快一些
- ArrayList由于基于数组, 所以天然支持**快速随机访问**, LinkedList不支持快速随机访问
- **内存空间占用**: 由于ArrayList会留有数组的容量空间, 会有一定的浪费; 而LinkedList的每个元素需要存放前继和后继, 也会有空间的浪费

## Comparable接口和Comparator接口的区别?
- Comparator接口来自`java.lang`包, 有一个 `compareTo(Object obj)`方法,  常常和 `Collections.sort()`这样的方法一起使用
- Comparable接口来自`java.util`包, 有一个`compare(Object obj1, Object obj2)`方法, 常常是entity类自己实现
下面有两个例子:
#### Comparator定制排序
```java
ArrayList<Integer> arrayList = new ArrayList<Integer>();
arrayList.add(-1);
arrayList.add(3);
arrayList.add(3);
arrayList.add(-5);
arrayList.add(7);
arrayList.add(4);
arrayList.add(-9);
arrayList.add(-7);

// 定制排序的用法
Collections.sort(arrayList, new Comparator<Integer>() {

	@Override
	public int compare(Integer o1, Integer o2) {
		return o2.compareTo(o1);
	}
});
System.out.println("定制排序后：");
System.out.println(arrayList);
```
输出为:
```
定制排序后：
[7, 4, 3, 3, -1, -5, -7, -9]
```

#### 重写CompareTO方法实现排序
```java
// person对象没有实现Comparable接口，所以必须实现，这样才不会出错，才可以使treemap中的数据按顺序排列
// 前面一个例子的String类已经默认实现了Comparable接口，详细可以查看String类的API文档，另外其他
// 像Integer类等都已经实现了Comparable接口，所以不需要另外实现了
public  class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        super();
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    /**
     * T重写compareTo方法实现按年龄来排序
     */
    @Override
    public int compareTo(Person o) {
        if (this.age > o.getAge()) {
            return 1;
        }
        if (this.age < o.getAge()) {
            return -1;
        }
        return 0;
    }
}

```
调用
```java
    public static void main(String[] args) {
        TreeMap<Person, String> pdata = new TreeMap<Person, String>();
        pdata.put(new Person("张三", 30), "zhangsan");
        pdata.put(new Person("李四", 20), "lisi");
        pdata.put(new Person("王五", 10), "wangwu");
        pdata.put(new Person("小红", 5), "xiaohong");
        // 得到key的值的同时得到key所对应的值
        Set<Person> keys = pdata.keySet();
        for (Person key : keys) {
            System.out.println(key.getAge() + "-" + key.getName());

        }
    }
```

输出:
```
5-小红
10-王五
20-李四
30-张三
```

## Queue与Deque的区别?
`Queue` 是单端队列，只能从一端插入元素，另一端删除元素，实现上一般遵循 **先进先出（FIFO）** 规则
`Deque` 是双端队列，在队列的两端均可以插入或删除元素。`Deque` 扩展了 `Queue` 的接口, 增加了在队首和队尾进行插入和删除的方法，同样根据失败后处理方式的不同分为两类.

| `Queue`接口 | 抛出异常    | 返回特殊值 |
| ----------- | ----------- | ---------- |
| 插入队尾    | add(E e)    | offer(E e) |
| 删除队尾    | remove(E e) | poll(E e)  |
| 查询队首    | element()   | peek()           |

| `Deque`接口 | 抛出异常        | 返回特殊值     |
| ----------- | --------------- | -------------- |
| 插入队尾    | addLast(E e)    | offerLast(E e) |
| 删除队尾    | removeLast(E e) | pollLast(E e)  |
| 查询队尾    | getLast()       | peekLast()     |
| 插入队首    | addFirst(E e)    | offerFirst(E e) |
| 删除队首    | removeFirst(E e) | pollFirst(E e)  |
| 查询队首    | getFirst()       | peekFirst()     |


## 什么是PriorityQueue?
`PriorityQueue` 是在 JDK1.5 中被引入的, 其与 `Queue` 的区别在于元素出队顺序是与优先级相关的，即总是优先级最高的元素先出队。

-   `PriorityQueue` 利用了二叉堆的数据结构来实现的，底层使用可变长的数组来存储数据
-   `PriorityQueue` 通过堆元素的上浮和下沉，实现了在 O(logn) 的时间复杂度内插入元素和删除堆顶元素。
-   `PriorityQueue` 是非线程安全的，且不支持存储 `NULL` 和 `non-comparable` 的对象。
-   `PriorityQueue` 默认是小顶堆，但可以接收一个 `Comparator` 作为构造参数，从而来自定义元素优先级的先后。

## 为什么HashMap的长度是2的幂次方?
为了方便取余:
hashcode % n == hashcode & (n - 1)
如果n是2的幂次方, 上述等式成立

## HashMap和TreeMap的区别?
TreeMap底层是红黑树, 会比HashMap多一个搜索的能力.

## HashSet检查重复的方式?
先比较hashcode, 如果hashcode不同, 则两个值肯定不同
如果hashcode相同, 再使用 equals() 方法比较两个值.

## Collections 工具类有哪些常用方法?
主要分为两大类, `排序`和`查找替换`
**排序:**
```java

void reverse(List list)//反转
void shuffle(List list)//随机排序
void sort(List list)//按自然排序的升序排序
void sort(List list, Comparator c)//定制排序，由Comparator控制排序逻辑
void swap(List list, int i , int j)//交换两个索引位置的元素
void rotate(List list, int distance)//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面

```

**查找, 替换**
```java
int binarySearch(List list, Object key)//对List进行二分查找，返回索引，注意List必须是有序的
int max(Collection coll)//根据元素的自然顺序，返回最大的元素。 类比int min(Collection coll)
int max(Collection coll, Comparator c)//根据定制排序，返回最大元素，排序规则由Comparatator类控制。类比int min(Collection coll, Comparator c)
void fill(List list, Object obj)//用指定的元素代替指定list中的所有元素
int frequency(Collection c, Object o)//统计元素出现次数
int indexOfSubList(List list, List target)//统计target在list中第一次出现的索引，找不到则返回-1，类比int lastIndexOfSubList(List source, list target)
boolean replaceAll(List list, Object oldVal, Object newVal)//用新元素替换旧元素
```

## 集合判空有哪几种方法?
- 通过 isEmpty()方法
- 通过 size() == 0判断
推荐使用第一种, 因为可读性更好, 而且时间复杂度为O(1), 在涉及到同步的集合中, 第二种方法的复杂度将不是O(1)


## 集合与数组之间怎么转换?
数组转集合
```java
String [] s= new String[]{
    "dog", "lazy", "a", "over", "jumps", "fox", "brown", "quick", "A"
};
List<String> list = Arrays.asList(s);
```
```ad-note
注意, 在使用asList的时候, 传递的数组必须是对象数组, 而不是基本类型数组

另外, asList转换得到的结果并不是`ArrayList`, 而是普通的 Arrays. 进而不能使用 remove add 这样的方法. 可以使用下面的方法转换成 ArrayList
new ArrayList<>(Arrays.asList(s));
或者是
List.of(s); // java9
```
*错误:*
```java
int[] myArray = {1, 2, 3};
List myList = Arrays.asList(myArray);
```
*正确:*
```java
Integer[] myArray = {1, 2, 3};
List myList = Arrays.asList(myArray);
```

集合转数组
```java
List<Strig> list = new ArrayList<>();
String[] s=list.toArray(new String[0]);
```


## 怎么快速找到一个数组的最大值?
```java
Arrays.stream(arr).max().getAsInt();
```


## Java是按值传递还是按引用传递? 一共有哪些传参形式?
传递参数的形式可以分为:
- 按引用传递
- 按值传递
- 按名字传递 algo60 (这种方式不会对传入的表达式进行计算, 而只会做**替换**)
- 得结果传递(这种方式会在结束的时候, 把局部变量的值赋给实际参数的地址)

Java是按值传递, 但如果某个变量本身就是地址引用, 那么传进去时也是地址引用了(就是对地址的复制).


## Vector和ArrayList有什么异同？
Vector和ArrayList内部都是数组实现的。

有以下两方面的不同
1） 同步性:Vector是线程安全的，也就是说是同步的 ，而ArrayList 是线程序不安全的，不是同步的 数2。
2）数据增长:当需要增长时,Vector默认增长为原来一倍 ，而ArrayList却是原来的50%  ，这样,ArrayList就有利于节约内存空间。
      如果涉及到堆栈，队列等操作，应该考虑用Vector，如果需要快速随机访问元素，应该使用ArrayList 。

Stack的父类是Vector

## 正则表达式中的\\w \\d \\W \\D 分别表示什么意思?
**\\d** 匹配一个数字字符。等价于\[0-9\]。
**\\D** 匹配一个非数字字符。等价于\[^0-9\]。

**\\w** 匹配包括下划线的任何单词字符。类似但不等价于“\[A-Za-z0-9_\]”，这里的"单词"字符使用Unicode字符集。
**\\W** 匹配任何非单词字符。等价于“\[^A-Za-z0-9_\]”。

大写表示*非*。

## 什么是内部类？局部类？匿名类？
**内部类:** 直接在类的内部定义的类，但不在块、构造器、方法里
内部类可以使用public private protected访问控制符

**局部类：** 在块、构造器、方法里定义的类就是局部类
局部类和局部变量一样，有对应的生命周期。
局部类只能在作用域类访问，因此没有访问控制符可以使用

**匿名类：** 匿名类就是没有名称的类，它的名称有编译器生成。没有名称意味这匿名类不能在其他地方引用，也不能在其他地方实例化。
匿名类不能使用任何关键字和访问控制符，匿名类和局部类访问规则一样，只不过内部类显式的定义了一个类，然后通过new的方式创建这个局部类实例，而匿名类直接new一个类实例，没有定义这个类。匿名类最常见的方式就是回调模式的使用，通过默认实现一个接口创建一个匿名类然后，然后new这个匿名类的实例。
例子：
```java
new Thread(new Runnable() {
	@Override
	public void run() {
	
	}
}).start();
```


## 类的初始化顺序是什么样的？
静态代码块 > 非静态代码块 > 构造函数

对于涉及继承的情况，参考下面的代码
```java
class SuperClass{
    private static String STR = "Super Class Static Variable";
    static{
        System.out.println("Super Class Static Block:"+STR);
    }
 
    public SuperClass() {
        System.out.println("Super Class Constructor Method");
    }
    {
        System.out.println("Super Class Block");
    }
 
}
public class ObjectInit extends SuperClass{
    private static String STR = "Class Static Variable";
    static{
        System.out.println("Class Static Block:"+STR);
    }
 
    public ObjectInit() {
        System.out.println("Constructor Method");
    }
    {
        System.out.println("Class Block");
    }
    public static void main(String[] args) {
        @SuppressWarnings("unused")
        ObjectInit a =new ObjectInit();
    }
}
```
执行结果为：
**Super Class Static Block:Super Class Static Variable**  
**Class Static Block:Class Static Variable**  
**Super Class Block**  
**Super Class Constructor Method**  
**Class Block**  
**Constructor Method**

## Java如何创建socket连接？
对于服务器端：
ServerSocket server = new ServerSocket(端口号)
对于客户端：
Socket client = new Socket(IP地址，端口号)