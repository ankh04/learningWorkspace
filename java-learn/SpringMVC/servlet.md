## servlet 生命周期
Servlet声明周期遵循以下过程:
- 初始化时调用`init`方法(或者是第一次调用servlet的时候调用`init`方法)
- 调用`service`方法处理请求
- servlet关闭之前执行`destroy`方法
- 最后由JVM回收servlet的垃圾

servlet的生命周期就是典型的模板模式

#### init 方法
这个方法只会被调用一次,可以设置成第一次创建servlet的时候调用(第一次请求会比较慢),也可以被设置成服务器第一次启动的时候调用(启动服务器的时候会慢一点).
每次收到一个http请求的时候,会**创建一个servlet实例并产生一个新的线程**,然后交给service方法处理

#### service方法
service收到一个servlet请求时,会产生一个新的线程,根据HTTP请求的类型(GET, POST, DELETE, PUT等)调用`doGet`,`doPost`,`doDelete`,`doPut`等方法.
所以只要根据需要重写`doGet`,`doPost`,`doDelete`,`doPut`方法即可

#### destroy方法
servlet生命周期结束前会调用该函数,可以在这个方法里关闭数据库连接,停止后台线程,持久化Cookie,或是其他清理活动.

#### servlet 架构图
![](https://www.runoob.com/wp-content/uploads/2014/07/Servlet-LifeCycle.jpg)
1. 第一个到达服务器的 HTTP 请求被委派到 Servlet 容器
2. Servlet 容器在调用 service() 方法之前加载 Servlet
3. 然后 Servlet 容器处理由多个线程产生的多个请求，每个线程执行一个单一的 Servlet 实例的 service() 方法。