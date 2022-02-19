## Maven方式
可以打开maven的[仓库](https://mvnrepository.com/),在里边搜索你需要的spring模块即可,然后复制其中的maven依赖代码即可.
常用的几个模块包括
```xml
<!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.3.16</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>5.3.16</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-beans -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-beans</artifactId>
    <version>5.3.16</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-aop -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aop</artifactId>
    <version>5.3.16</version>
</dependency>

```
需要注意的是,每个模块的版本最好需要统一,否则有时会出现问题.

为了防止版本不统一出现问题,官方贴心的给出了以下解决方案.
Maven支持`bill of materials(BOM)`依赖,这样一种模式,可以在pom.xml文件中加入`dependencyManagement`标签来确保所有的spring模块都是统一的版本
```xml

<dependencyManagement>

 <dependencies>

	<dependency> 
		<groupId>org.springframework</groupId> 
		<artifactId>spring-framework-bom</artifactId> 
		<version>5.0.0.M4</version>
	<type>pom</type>
	<scope>import</scope>
	</dependency>

 </dependencies>

</dependencyManagement>
```
在加入了上述配置后,在这之后的spring模块引入上,就不需要再添加版本信息了,就像这样
```xml
<!-- https://mvnrepository.com/artifact/org.springframework/spring-context -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework/spring-core -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
</dependency>
```

## 压缩包方式
从spring提供的[下载地址](http://repo.spring.io/release/org/springframework/)x下载对应版本的压缩文件,从里便可以得到对应的jar包