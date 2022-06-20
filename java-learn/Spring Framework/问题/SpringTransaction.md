## 什么是事务?
事务就是对数据库进行操作
事务需要满足一些操作特性(ACID):
- 原子性 Atomicity: *不可分割*, 要不全部完成, 要不全部不完成
- 一致性 Consistency: 在事务的开始和结束, *数据库的完整性*没有被破坏
- 隔离性 Isolation: 允许多个*并发事务*同时对数据进行读取和修改. 根据隔离的强弱, 可以分为四种:
	- 读未提交(read uncommited)
	- 读提交(read commited) -- 解决脏读
	- 可重复读(repeatable read) -- 解决不可重复读
	- 串行化(serializable) -- 解决幻读
- 持久性 Durability: 对数据的修改是*持久化的*, 即使发生故障也不会丢失

## Spring支持哪两种事务管理类型?
- **声明式**事务: 通过注解或xml==配置==事务, 实现业务代码和事务管理的分离
- **编程式**事务: 通过编码的方式实现事务管理, 即在代码中调用Spring提供的事务相关的api函数. 优点是灵活度高, 缺点是维护困难.

## Spring事务如何与各种数据持久层框架做集成?
- 常见的数据持久层框架有: `Spring JDBC` , `Hibernate`, `MyBatis`, `Spring JPA`
- spring中实现事务管理需要实现`PlatformTransactionManager`这个接口
	- 这个接口里有三个方法:
		- getTransaction (返回TransactionStatus对象)
		- commit(提交事务)
		- rollback(回滚事务)
- Spring 中有一个抽象类实现了这个接口, 这个抽象类是: `AbstractPlatformTransactionManager`, 这个类中会有`doCommit`, `doRollback`这样的方法来实现`PlatformTransactionManager`接口中的方法(*模板方法*设计模式)
- 通过继承这个抽象类, 各个持久层框架来实现各种逻辑, 达到可以集成到Spring的目的

## 什么是事务的隔离级别? 有哪些隔离级别?
当并行事务出现时, 保证数据可靠性的机制.
- 读未提交(read uncommitted)
	没有任何防护措施. 字面意义上的可以读取未提交的数据(这种情况称为脏读)
- 读提交(read committed)
	仅能读取已提交的数据(解决了脏读问题)
- 可重复读(repeatable read)
	当一个事务在查询时, 另一个事务对表进行了*修改*, 第一个事务第二次查询时*内容不一致*, 就发生了不可重复读
	可以通过设置==行级锁==达到可重复读的效果
- 串行化(serializable)
	当一个事务在查询时, 另一个事务对表进行了*添加或删除*, 第一个事务第二次查询时发现*表的行数变化*(即凭空出现或凭空消失了几行), 就发生了幻读
	可以通过设置==表级锁==达到避免幻读的效果

## Spring事务设计有哪些亮点?
- 通过 `PlatformTransactionManager`这个接口提供了统一的api接口, 而不需要关心底层的持久层框架的具体实现
- 声明式事务可以确保业务代码和事务管理的分离
