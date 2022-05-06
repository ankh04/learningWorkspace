## cargo
cargo build --release 用来发布程序(会比不加--release编译更慢, 但产生的程序运行会更快)

cargo check 用来检查当前程序是否能通过编译, 会比 cargo build 快

Cargo.toml 记录了项目的配置信息, 
toml --- tom's obvious minimum language (**google一下toml**)

## hello world
默认情况下rust会自动把prelude模块的内容导入进来

**prelude模块包含了哪些内容?**

如果使用了 prelude 之外的内容, 就需要使用 `use` 关键词导入相应的模块

io库来自于标准库 `std`:  std::io

标准库以外的库可以在[crates.io](https://crates.io/)中搜索查询

末尾带!的都是宏 **有哪些常见的宏?**

:: 代表关联函数, 即是关于某个类型本身实现的, 而不是针对某个实例实现的(类似于静态方法)


String::new() 中的关联函数 new 是一个惯用函数名, 用来创建类型实例, String::new() 创建了一个空的String类型的实例

io::Result 是read_line 函数的返回值类型, 这个Result类型是一个 enum, 通常就是几种结果的集合, 不同的模块有不同的 Result (**常见的Result有哪些**). 这里的 io::Result 只有两种情况 ---- ok, Err

Result 通常需要进行处理, 可以通过*expect* 函数进行处理

{} 是println中的占位符


随机数种子是由操作系统提供的(是一种系统调用)

## 猜数游戏
如何导入别人的库?

1. 首先在 crates.io 上面搜索想要的包
2. 然后在 `Cargo.tomal` 的 dependencies 项目上添加


*trait* 类似于其他语言的*接口*

match *从上到下*匹配每个*arm*  

rust 支持重复声明, 后面的声明会*隐藏(shadow)* 前面的变量

rust 中的循环使用 **loop** 关键词

## 语言基础
#### 表达式和语句
x + 3 是表达式
x + 3; 是语句


块也是一个表达式
一个块的最后一行如果是表达式, 那么这个块的值就是最后一个表达式的值

#### range

Range: 1..4: 1, 2, 3(不包含尾部)

#### Vector 与 数组
Vec是可变长度的
数组是固定长度的
建议使用Vec

#### 控制流
建议多使用for而不是while

#### 