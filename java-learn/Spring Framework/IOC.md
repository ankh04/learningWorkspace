# IOC
## Spring的IOC容器和beans
Spring Framework实现了`Inversion of Control(IOC)`的原则,IOC也被叫做依赖注入(dependency injection (DI)).具体来说,一个对象内部往往依赖着许多其他对象,现在有这么一个过程,可以让通过设置构造器参数,或工厂函数的参数,或是对象的属性的方式,让一个对象的所有依赖自动的添加进来,这一过程将开发者对对象的控制权转移到了IOC容器上,因此将这一过程称为控制反转(IOC).

`spring-beans`和`spring-context`模块是Spring IOC模式的基石.`BeanFactory`接口提供了管理对象的基本方法.`ApplicationContext`是`BeanFactory`的子接口,它还整合了`AOP`,`event publication`的功能.
简单来说`BeanFactory`提供了配置框架的基础功能,而`ApplicationContext`提供了更多细化的功能.日常使用`ApplicationContext`就好.

在Spring中,组成你应用的并且被Spring IoC容器管理的所有对象都可以叫做`beans`,一个bean就是被IOC容器`初始化`,`装配`和`管理`的Java对象.不同bean之间的依赖关系通过`配置元数据(configuration metadata)`进行阐述.
## IOC容器
Spring IOC容器就是指接口`org.springframework.context.ApplicationContext`接口. 这个接口负责初始化,配置,和组装beans. IOC容器通过读取`配置元数据`知道对什么对象进行初始化,配置和组装.配置元数据有以下几种形式:
- XML
- Java注解
- Java类
Spring提供了两个开箱即用的`ApplicationContext`的实现类,分别是`ClassPathXmlApplicationContext`和`FileSystemXmlApplicationContext`,一个可以读取类路径下的xml文件,一个可以读取磁盘上任意位置的xml文件.
下面这种图概括的表示了Spring的工作流程
![[Pasted image 20220218170837.png]]

## 配置元数据
### xml
1. 配置xml文件
一个基本的xml配置文件长成这样子:
```xml
<?xml version="1.0" encoding="UTF-8"?>  
<beans xmlns="http://www.springframework.org/schema/beans"  
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"  
 xmlns:aop="http://www.springframework.org/schema/aop"  
 xsi:schemaLocation="http://www.springframework.org/schema/beans  
 http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">  
  
	 <bean id="userDAO" class="host.ankh.spring.dao.UserDAOImpl">  
	  
	 </bean>  
	 
	 <bean id="UserService" class="host.ankh.spring.service.UserServiceImpl">  
		 <!-- 进行这一步之前.需要确保UserService类中有对应的setter方法  -->
		 <property name="userDAO" ref="userDAO" />  
	 </bean>  
	 <!--  aop  -->  
	 <context:component-scan base-package="host.ankh.spring"/>  
	 <aop:aspectj-autoproxy/>  
	 <bean id="LogAspect" class="host.ankh.spring.aspect.LogAspect">  
	  
	 </bean>
</beans>
```

id是bean的唯一标识,class属性指定bean的class路径,bean下面还有一个property子标签,子标签的name属性对应bean对象的属性,而ref代表这个属性对应的bean对象.

2. 创建IOC容器
将上面的xml文件放入resources中,使用以下代码创建ApplicationContext对象
```java
ApplicationContext context = ClassPathXmlApplicationContext("SpringConfig.xml");
```
也可以一次性导入多个配置文件
```java
ApplicationContext context = ClassPathXmlApplicationConetxt(new String[] {"SpringConfig1.xml", "SpringConfig2.xml"})
```
如果嫌上面的语法冗长,还可以考虑这样写xml文件
```xml
<beans>
	<import resource="config1.xml"/>
	<import resource="resource/config2.xml"/>
	<import resource="/resource/config3.xml"/>

	...
	<bean id="..." class="..."/>
</beans>
```

3. 使用IOC容器

通过ApplicationContext对象的`getBean`方法可以拿到装配好的对象
```java
// 获取IOC容器
ApplicationContext context = ClassPathXmlApplicationContext("SpringConfig.xml");

// 获取装配好的对象
UserServiceImpl service = context.getBean("UserService", UserServiceImpl.class);

// 使用该对象
service.getUserList();
```

```ad-note
需要注意使用context.getBean创建出来的实例默认是单例的
通过更改参数为`prototype`取消单例模式
```

### 注解
- 注解方式可以作用在类上,方法上,属性上
- 针对bean管理,Spring提供了四种注解
	- @Component
	- @Service
	- @Controller
	- @Repository
- @Component注解是其他几种的原注解,这四种注解的功能是一致的,但是其他三个的语义性会更好.
##### 注解方式IOC步骤
1. 创建bean类
使用`@Component`,`@Service`,`@Controller`,`@Repository`中的任意一个创建bean类,注解的value参数可以省略,如果省略,该bean的id会变为类名,首字母小写,即:
`MyClass`->`myClass`
```java
@Component(value = "userDAOImpl") // 这里的注解相当于xml的<bean id="userDAOImpl" class="..." />
public class UserDAOImpl {  
    public UserDAOImpl() {  
    }  
  
    // 模拟数据库请求  
	public List<User> findUserList() {  
	    return Collections.singletonList(new User("huanyu", 24));  
	}  
}
```
2. 开启注解扫描
```xml
<context:component-scan base-package="host.ankh.spring"/>
```
3. 依赖注入
① @Autowired
@Autowired可以用来修饰**构造器**,**Setter**,**类的属性**,或者是任意的**方法**.
@Autowired有三种模式

| 模式        | 解释                                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| byName      | 如果一个类属性`field`被byName的@Autowired修饰,Spring会去寻找名为`field`的bean                                                                                                                |
| byType      | (默认)如果一个类型为`myClass`的类属性`field`被byType 的@Autowired修饰,Spring会去寻找类型为`myClass`的bean,如果找到了两个匹配类型的bean,会报错,如果没找到,什么也不会发生,这个依赖将被设置为空 |
| constructor | 和byType类似,不过是按构造器参数来寻找的                                                                                                                                                      |

```java
@Autowired  
private UserDAOImpl userDAO;
```
② @Qualifier
@Qualifier和@Autowired应当一同使用.由于@Autowired默认是byType的,如果byType没有找到,可以通过指定@Qualifier的value参数进行byName的查找
```java
@Autowired 
@Qualifier(value = "userDAOImpl")
private UserDAOImpl userDAO;
```
③ @Value
注入普通类型属性
```java
@Value(value = "abc")
private String name;
```
4. 使用IOC容器
```java
// 获取IOC容器
ApplicationContext context = new ClassPathXmlApplicationContext("SpringConfig.xml");

// 获取装配好的对象
UserServiceImpl service = context.getBean("UserService", UserServiceImpl.class);

// 使用该对象
service.getUserList();
```
可以发现,这一步的代码和基于xml的代码是一模一样的.由于Spring需要知道要扫描哪些类,所以在需要在xml文件中配置`context`标签.其实还可以使用注解指明需要扫描的类,从而完全不用xml配置.
##### 基于注解的注解扫描
1. 创建配置类
```java
@Configuration
@ComponentScan(basePackage = {"host.ankh.spring"})//如果需要扫描多个包,用逗号隔开
public class SpringConfig{

}
```
2. 使用IOC容器
```java
public void testSpring() {
	// 使用AnnotationConfig...这个方法来获取context
	ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);

	// 获取装配好的对象
	UserServiceImpl service = context.getBean("UserService", UserServiceImpl.class);

	// 使用该对象
	service.getUserList();
}
```

```ad-note
## 注解会比XML更好么?
这是一个富有争议的话题.
注解能够在声明中提供更多的context,并且配置简洁精准,且更贴近源码.
XML却能不侵入源码进行设置,在修改xml配置后也不需要重新编译.

注解的优点也是它的缺点,它太贴近源码,导致类不再是POJO,而且配置分散在各个类中,很难统一管理.
XML的缺点是配置过于繁琐

```
```ad-warning
在Spring中注解在XML前运行,如果一个对象同时有XML和注解的配置,XML的配置会覆盖注解的配置
```
