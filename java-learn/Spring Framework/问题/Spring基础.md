## 什么是Spring Framework
![[基本概念#介绍]]

## Spring有哪些核心模块?
![[基本概念#Spring的模块]]


## 使用Spring框架能带来哪些好处?
-   **DI** ：**[Dependency Injection(DI)](http://howtodoinjava.com/2013/03/19/inversion-of-control-ioc-and-dependency-injection-di-patterns-in-spring-framework-and-related-interview-questions/)** 方法，使得构造器和 JavaBean、properties 文件中的依赖关系一目了然。
-   **轻量级**：与 EJB 容器相比较，IoC 容器更加趋向于**轻量级**。这样一来 IoC 容器在有限的内存和 CPU 资源的情况下，进行应用程序的开发和发布就变得十分有利。
-   **面向切面编程(AOP)**： Spring 支持面向**切面编程**，同时把应用的业务逻辑与系统的服务分离开来。
-   **集成主流框架**：Spring 并没有闭门造车，Spring **集成**了已有的技术栈，比如 ORM 框架、Logging 日期框架、J2EE、Quartz 和 JDK Timer ，以及其他视图技术。
-   模块化：Spring 框架是按照**模块**的形式来组织的。由包和类的命名，就可以看出其所属的模块，开发者仅仅需要选用他们需要的模块即可。
-   **便捷的测试**：要 [测试一项用Spring开发的应用程序](http://howtodoinjava.com/2013/04/19/how-to-unit-test-spring-security-authentication-with-junit/) 十分简单，因为**测试**相关的环境代码都已经囊括在框架中了。更加简单的是，利用 JavaBean 形式的 POJO 类，可以很方便的利用依赖注入来写入测试数据。
-   **Web 框架**：Spring 的 **Web 框架**亦是一个精心设计的 Web MVC 框架，为开发者们在 Web 框架的选择上提供了一个除了主流框架比如 Struts 、过度设计的、不流行 Web 框架的以外的有力选项。
-   **事务管理**：Spring 提供了一个便捷的**事务管理**接口，适用于小型的本地事物处理（比如在单 DB 的环境下）和复杂的共同事物处理（比如利用 JTA 的复杂 DB 环境）。
-   **异常处理**：Spring 提供一个方便的 API ，将特定技术的异常(由JDBC, Hibernate, 或 JDO 抛出)转化为一致的、Unchecked 异常。

也会有一些缺点
-  **调试困难** 每个框架都有的问题，调试阶段不直观，后期的 bug 对应阶段，不容易判断问题所在。要花一定的时间去理解它。
-  **封装底层细节** 把很多 JavaEE 的东西封装了，在满足快速开发高质量程序的同时，隐藏了实现细节。

## Spring中使用了哪些设计模式?
-   代理模式 — 在 AOP 和 remoting 中被用的比较多。
-   单例模式 — 在 Spring 配置文件中定义的 Bean 默认为单例模式。
-   模板方法 — 用来解决代码重复的问题。比如 [RestTemplate](http://howtodoinjava.com/2015/02/20/spring-restful-client-resttemplate-example/)、JmsTemplate、JdbcTemplate 。
-   前端控制器 — Spring提供了 DispatcherServlet 来对请求进行分发。
-   视图帮助(View Helper) — Spring 提供了一系列的 JSP 标签，高效宏来辅助将分散的代码整合在视图里。
-   依赖注入 — 贯穿于 BeanFactory / ApplicationContext 接口的核心理念。
-   工厂模式 — BeanFactory 用来创建对象的实例。

-   [《Spring 框架中的设计模式(一)》](http://www.iocoder.cn/Spring/DesignPattern-1)
-   [《Spring 框架中的设计模式(二)》](http://www.iocoder.cn/Spring/DesignPattern-2)
-   [《Spring 框架中的设计模式(三)》](http://www.iocoder.cn/Spring/DesignPattern-3)
-   [《Spring 框架中的设计模式(四)》](http://www.iocoder.cn/Spring/DesignPattern-4)
-   [《Spring 框架中的设计模式(五)》](http://www.iocoder.cn/Spring/DesignPattern-5)

