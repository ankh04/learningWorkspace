## 创建字符串的方式
**字面量**
```java
String s1 = "123";
```
`new`对象
```java
String s2 = new String("abc");
```
两者的区别在于，字面量是把数据存储在方法区中的`常量池`，而对象方式则是把数据存储在`heap`堆中。所以有以下结论
```java
String s1 = "123";
String s2 = "123";
String s3 = new String("123");
String s4 = new String("123");
s1 == s3; // false
s1 == s2; // true
s3 == s4; // false
```
现在给出以下结论
```ad-note
1.常量与常量的拼接结果在常量池。且常量池中不会存在相同内容的常量。  
2.只要其中有一个是变量，结果就在堆中。  
3.如果拼接的结果调用intern()方法，返回值就在常量池中
```
根据以上结论，我们有：
```java
String s1 = "123abc";  
String s2 = "123";  
String s3 = "abc";  
String s4 = "123" + "abc";  
String s5 = s2 + "abc";  
String s6 = "123" + s3;  
String s7 = s2 + s3;  
  
System.out.println(s1 == s4);//true  
System.out.println(s1 == s5);//false  
System.out.println(s1 == s6);//false  
System.out.println(s1 == s7);//false  
System.out.println(s5 == s6);//false  
System.out.println(s1 == s7.intern());//true
```
## String类的内部
```ad-note
String:字符串，使用一对""引起来表示。  
1.String声明为final的，不可被继承  
2.String实现了Serializable接口：表示字符串是支持序列化的。  
	 实现了Comparable接口：表示String可以比较大小  
3.String内部定义了final char[] value用于存储字符串数据  
4.String:代表不可变的字符序列。简称：不可变性。  
 体现：①.当对字符串重新赋值时，需要重写指定内存区域赋值，不能使用原有的value进行赋值。  
      ②. 当对现有的字符串进行连接操作时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值。  
      ③. 当调用String的replace()方法修改指定字符或字符串时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值。  
5.通过字面量的方式（区别于new）给一个字符串赋值，此时的字符串值声明在字符串常量池中。  
6.字符串常量池中是不会存储相同内容的字符串的。
```
### String类的方法
因为String类具有不可变性，所以String类的所有方法不会改变String对象，且会返回一个新的String对象。