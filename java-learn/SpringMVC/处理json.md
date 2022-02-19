# 处理和返回JSON数据
### 1. 引入Jackson
虽然alibaba的fastjson很快,但是代码质量很低,不推荐使用
```xml
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core -->  
<dependency>  
 <groupId>com.fasterxml.jackson.core</groupId>  
 <artifactId>jackson-core</artifactId>  
 <version>2.13.1</version>  
</dependency>  
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->  
<dependency>  
 <groupId>com.fasterxml.jackson.core</groupId>  
 <artifactId>jackson-databind</artifactId>  
 <version>2.13.1</version>  
</dependency>  
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-annotations -->  
<dependency>  
 <groupId>com.fasterxml.jackson.core</groupId>  
 <artifactId>jackson-annotations</artifactId>  
 <version>2.13.1</version>  
</dependency>
```
```ad-note
三个包一个不能少,千万不能只引core,这样在返回的时候是不会自动转换的
```
### 2. 设置@ResponseBody
### 3. 返回对象
```java
@PostMapping("/postBody1")  
@ResponseBody  
public Person postBody1(String a, String b, @RequestBody String r) {  
	// 这里是打印url参数  
	System.out.println("a = " + a);  
	System.out.println("b = " + b);  
	// 这里是打印请求体  
	System.out.println("r = " + r);  
	// 通过设置@ResponseBody,将返回信息作为响应体返回  
	return new Person("huanyu", 24, "female");  
}
```
```ad-note
这里的Person对象需要提供完整的getter方法
```
