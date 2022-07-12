## SQL的基本类型(域)有哪些?
- char  固定长度的字符串
- varchar  可变长度的字符串
- int  整数
- numeric(p,d) 保留p位有效数字, 并且小数点右边有d位
- double 双精度
- float 单精度

## SQL中DDL的基本模式是什么?
**create table**  *r*
			(
				*A1*  *D1*, 
				*A2*  *D2*, 
				...,
				*An*  *Dn*,
				<完整性约束1>,
				...,
				<完整性约束2> 
			);
*A*表示关系*r*中的一个属性名
*D*表示属性*A*的域

举例来说可以是:
```sql
create table department
	(
		dept_name    varchar(20),
		building     varchar(15),
		budget       numeric(12,2),
		primary key (dept_name)
	);
```

常见的完整性约束有:
- **primary key (A1, A2, ..., An)**
- **foreign key (A1, A2, ..., An) references s**
- **not null**

## drop table 和 delete table有什么区别?
delete table 是保留关系, 但删除关系中的所有元组

drop table 是把整个关系都删除


## 怎样在关系中添加或删除新的属性?
使用 alter table 指令
- 添加属性
```sql
alter table r add A D;
```
其中A是属性名, D是属性的域

- 删除属性
```sql
alter table r drop A;
```

## 常见的字符串运算有哪些指令?
- concat 连接
- left 从左开始n个字符的子字符串
- right 从右开始n个字符的子字符串
- trim 删除前后空格

**模式匹配**
使用关键词`like`, 可以使用的特殊字符:
- 百分号 % 匹配任意字符串
- 下划线 _  匹配单个字符串

## mysql中有intersect交运算, except查运算么?
没有.
但可以使用子查询代替

## SQL中布尔值有哪几种值?
有三种`true`, `false`, `unknown`
只有涉及空值的比较运算时会出现`unknown` (所有与空值比较的运算返回值都为unknown,   `null=null`返回值也是unknown)
|         | and unknown | or unknown |
| ------- | ----------- | ---------- |
| true    | unknown     | true       |
| false   | false       | unknown    |
| unknown | unknown     | unknown    | 

而`not unknown = unknown`

`false and unknown` 和 `true or unknown`  可以用or和and的*短路性质*来解释


## 什么是嵌入式SQL? 什么是嵌入式数据库?
**嵌入式SQL**
嵌入式SQL就是直接在宿主语言中写SQL语句. 但是这样的代码在编译之前必须由特殊的预处理器进行处理，该预处理器将嵌入SQL请求替换为合法的宿主语言语法, 然后将这个结果产生交给宿主语言编译器进行编译.

**嵌入式数据库**
嵌入式数据库是直接运行在应用程序中的数据库, 比如SQLite(因此, SQLite是最常见的数据库, 比MySQL还要常见) 浏览器的数据库.  这样的数据库不是跑在服务器的, 比服务器端的数据库功能少, 但强在方便而且不需要网络传输.

**两者的区别**
嵌入式SQL是写在宿主语言里的SQL, 还是在服务器端的数据库运行的. 但是嵌入式数据库是本地运行的数据库.
