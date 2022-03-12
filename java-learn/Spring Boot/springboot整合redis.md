使用`spring-boot-starter-data-redis`来整合redis到springboot中,在`spring-boot-starter-data-redis`之前,有一个叫做`Jedis`的包用来在Java中使用redis,但是`spring-boot-starter-data-redis`中并没有用Jedis而是用了`lettuce([ ˈletɪs ]生菜)`.下面介绍这两者的不同

### lettuce 和 jedis 的区别
- jedis: 采用的直连,是多线程不安全的,如果想避免这个缺陷,需要用jedis pool的技术. jedis 是 BIO(blocking IO)模式的,即一个线程处理一个请求
- lettuce: 采用netty,实例可以在多个线程中共享,是线程安全的. lettuce 是 [[NIO模式 | NIO(no blocking IO 模式)]]的,即少量线程处理大量请求


### 源码
每个SpringBoot Start 都对应一个自动配置类,redis->RedisAutoConfiguration
每个自动配置类又对应一个配置实体 RedisAutoConfiguration->RedisProperties
里边有这些属性可以配置
```java
private int database = 0;  
private String url;  
private String host = "localhost";  
private String username;  
private String password;  
private int port = 6379;  
private boolean ssl;  
private Duration timeout;  
private Duration connectTimeout;  
private String clientName;  
private RedisProperties.ClientType clientType;  
private RedisProperties.Sentinel sentinel;  
private RedisProperties.Cluster cluster;  
private final RedisProperties.Jedis jedis = new RedisProperties.Jedis();  
private final RedisProperties.Lettuce lettuce = new RedisProperties.Lettuce();
```
`spring-boot-starter-data-redis`使用`redisTemplate`连接redis数据库
```java
public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {  
	// 注意这里并没有进行序列化,而工作中常常需要对保存到redis的数据进行序列化,因此这个方法需要重写
    RedisTemplate<Object, Object> template = new RedisTemplate();  
 template.setConnectionFactory(redisConnectionFactory);  
 return template;  
}
```
在这个类里可以看到,需要设置redis的连接工厂的接口`redisConnectionFactory`
这个接口有两个实现类
![[Pasted image 20220312121900.png]]
默认是使用Lettuce实现类获取数据库连接.

### 配置redis
了解完以上源码内容,就可以很清晰的设置redis配置了
##### 1. 引入`spring-boot-starter-data-redis`
```xml
<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-redis -->  
<dependency>  
 <groupId>org.springframework.boot</groupId>  
 <artifactId>spring-boot-starter-data-redis</artifactId>  
</dependency
```
##### 2. 配置redis
```yml
spring:
	redis:  
		  host: 192.168.3.146  
		  port: 6379  
		  database: 0  
```

##### 3. 测试
```java
@SpringBootTest  
public class RedisTest {  
 @Autowired  
 private RedisTemplate redisTemplate;  
  
 @Test  
 void testRedis() {  
        redisTemplate.opsForValue().set("key", "123");  
        System.out.println(redisTemplate.opsForValue().get("key"));  
 }  
}
```