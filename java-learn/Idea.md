### 快速打印的几种方法
```java
// sout  
System.out.println();  
// soutp  
System.out.println("args = " + Arrays.deepToString(args));  
// soutm  
System.out.println("Hello.main");  
  
int a = 10;  
// soutv  
System.out.println("a = " + a);  
  
// xxx.sout  
System.out.println(a);  
// xxx.soutv  
System.out.println("a = " + a);

int[] arr = new int[] {1, 2, 3};  
// fori 需要自己填参数  
for (int i = 0; i < arr.length; i++) {  
  
}  
// itar 自动寻找列表遍历  
for (int j = 0; j < arr.length; j++) {  
    int i = arr[j];  
  
}
```

在 `Live Templates` 中使用 `$VAR1$`,`$VAR2$`这样的字符表示光标的位置。


### 查看接口实现类
`option`+`command`+`B`

### 导入jar包
快捷键`command`+`;`打开项目结构，在dependencies选项卡中添加jar包
![[Pasted image 20220204180658.png]]

### 查看方法的参数信息
快捷键 `command`+`p`
### 查看继承结构
快捷键`command` + `option` + `U`
### 查看该类中所有的方法
快捷键`command` + 7