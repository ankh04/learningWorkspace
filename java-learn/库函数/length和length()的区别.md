# length 和 length() 的区别
`length`是**数组**`Arrays`类的一个属性，对于类型为`int[], double[], String[]`的变量，都有`length`这个属性。
而对于**字符串**类，比如`String`类或是`StringBuilder`类的对象，它们并没有`length`这个属性，它们使用`length()`方法获取字符串的长度。

简单来说，数组用`length`，而字符串用`length()`。

这一结论进一步印证了，在 Java 中字符串不是数组（在很多其他编程语言中确实这样）。