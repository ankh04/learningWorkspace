## 与String的不同
既然已经有了[[String]]，为什么还需要`StringBuffer`和`StringBuilder`呢。
String的问题在于，每个对象都是不可改变的，在需要经常改变字符串的的情形下，需要重复创建新的字符串，效率会很低。
因此出现了可变的String--> `StringBuffer`和`StringBuilder`

## `StringBuffer`和`StringBuilder`的区别
Buffer是1.0时期就提供的库，而Builder是5.0开始提供的，Buffer内部的所有方法都是`synchronized`，因此是**线程安全**的。
而Builder是基本是Buffer的克隆，只是去掉了同步，因此**Builder是线程不安全的，但是Builder速度更快。**
速度上，三中String相关的类有以下关系
```ad-note
StringBuilder > StringBuffer > String
```

## 方法
Buffer和Builder内的方法都会改变原对象，很多方法甚至返回都是void。

## 字符串长度
既然Buffer和Builder都有可变性，那么字符串的长度是否也是自动改变的呢？
答案是肯定的，在初始化的时候，会初始一个16长度的char\[\]的字符串，如果需要16个长度不满足时，则会进行扩容，扩容规则为原来容量的2倍 + 2，同时将原来的元素复制到新数组中。
但需要注意，`length()`方法返回的是实际字符串的长度，而不是容量大小。
```java
String str = new String();//char[] value = new char[0];  
String str1 = new String("abc");//char[] value = new char[]{'a','b','c'};  
  
StringBuffer sb1 = new StringBuffer();//char[] value = new char[16];底层创建了一个长度是16的数组。  
System.out.println(sb1.length());//  
sb1.append('a');//value[0] = 'a';  
sb1.append('b');//value[1] = 'b';  
  
StringBuffer sb2 = new StringBuffer("abc");//char[] value = new char["abc".length() + 16];
```
就需要有两个注意点
```ad-note
问题1. System.out.println(sb2.length());//3  
问题2. 扩容问题:如果要添加的数据底层数组盛不下了，那就需要扩容底层的数组。  
 默认情况下，扩容为原来容量的2倍 + 2，同时将原有数组中的元素复制到新的数组中。  
  
指导意义：开发中建议使用：StringBuffer(int capacity) 或 StringBuilder(int capacity)
```