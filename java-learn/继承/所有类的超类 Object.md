# 所有类的超类 Object
Object 是所有类的始祖（根类），即 Java 中每个类都继承自 Object。
对于没有明确指出超类的类声明，该类将自动扩展 Object。
这意味着 Object 的属性和方法会被每个类继承，==并且 Object 类型的变量可以引用任何类型的对象==。所以 Object 类中的方法都是很基本很重要的方法，掌握它们是很必要的。
### equals 方法
`equals`方法用于检测一个对象的**引用**是否等于另一个对象的**引用**。
如果需要基于状态检测对象的相等性，则需要在该类中覆盖 `equals` 方法。
### hashCode 方法
散列码（hashCode）是由对象导出的一个整型值，如果对象`x`和`y`是不相同的，那么它们的散列码**一般**也不相等。
之所以说**一般**不相等，对于`String`类来说，它的散列码是按字符串内容导出的，所以对于
```java
String a = "abc";
String b = "abc";
```
尽管变量`a`和`b`可能不是同一个内存地址上的对象，但它们的散列码却相等。
```ad-note
值得注意的是，`equals`方法和`hashCode`方法的定义必须相容，即`x.equals(y)`返回位`true`时，`x.hashCode()`和`y.hashCode()`的值必须相同。
例如对于`String`类来说，是满足`equals`方法和`hashCode`方法的相容性的。
```
### toString 方法
这个方法十分常见，在使用字符串"+"的时候会自动调用 toString 方法
```java
var p = new Point(1,2);
String message = "The current position is " + p;
// which is automatically equal to "The current position is " + p.toString()
```
另外，在使用`System.out.println(x)`时，会自动调用`x.toString()`

Object 内实现的 toString 方法返回的是对象类名和散列码的字符串，比如
```java
System.out.println(System.out); // => java.io.PrintStream@2ff684
```
对于大多数类，都覆盖了 Object 的 toString 方法，且返回的格式往往是---类名+\[字段值\]。比如对于 Point 类
```java
System.out.println(new Point(1,2)); // => java.awt.Point[x=1,y=2]
```
````ad-note
特别注意Arrays类并没有覆盖 Object 的 toString 方法，这意味着
```java
int[] luckyNumbers = [2, 3, 5, 7, 11, 13];
String s = '' + luckyNumbers; // => [I@1a46e30
```
如果想得到`[2, 3, 5, 7, 11, 13]`这样的字符串结果，则需要使用 Arrays 类的**静态方法** `Arrays.toString(luckNumbers)`
````
### 对象包装器和自动装箱
前面提到，所有的类都继承于 Object 。那么对于基本类型呢？其实基本类型也有对应的类，这些类称为**包装器**，对于`int`类型，它的包装器是`Integer`。
包装器是`final`的，即不能派生出它们的子类。

基本类型和包装器会在需要的时候进行自动装箱和拆箱，所以这两者的往往没什么区别，但对于`==`操作符，两者的表现会不太一样。 对于包装器来说，`==`操作符比较的两个对象的地址是否相同，而对于基本对象则是比较字面量
```java
int a = 10;
int b = 10;
System.out.println(a == b); // true

Integer c = 100;
Integer d = 100;
System.out.println(c == d); // uncertain
```
对于变量`c`和变量`d`，它们是否相等往往取决于虚拟机的行为，结果往往是不确定的。