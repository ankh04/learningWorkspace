## 持有锁的线程什么时候会释放锁？
有且只有三种情况会释放锁：
- 同步代码块执行完毕
- 在执行同步代码块的过程中，遇到异常导致线程终止
- 在执行同步代码块的过程中，执行了锁所属对象的 wait() 方法

在下面的情况下都不会释放锁
- Thread.sleep()
- Thread.yield()
- 锁所属对象的 notify() 方法

## synchronized关键字用在静态方法和非静态方法上有什么区别？
修饰非静态方法 锁的是this 对象
修饰静态方法 锁的是class对象