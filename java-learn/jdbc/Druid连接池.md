去[maven官网](https://search.maven.org/)搜索druid
下载alibaba的jar包即可
![[Pasted image 20220213083946.png]]


导入jar包后,使用DruidDataSource实例化一个DataSource对象,然后再对其进行配置,最后通过getConnection方法获得连接
```java
DruidDataSource ds = new DruidDataSource();  
ds.setDriverClassName("com.mysql.cj.jdbc.Driver");  
ds.setUrl("jdbc:mysql://192.168.1.5:3306/fruitdb");  
ds.setUsername("root");  
ds.setPassword("294132870");  
  
DruidPooledConnection conn = ds.getConnection();  
System.out.println("conn = " + conn);
```