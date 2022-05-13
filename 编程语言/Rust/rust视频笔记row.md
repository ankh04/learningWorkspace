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

## Struct
\#[derive(Debug)]表示派生
被这个注解修饰的struct可以有打印功能, 但是需要使用特殊的占位符`{:?}`或`{:#?}`

### 方法
使用`impl`关键词定义方法
方法的第一个参数是`self`, 如果是借用就用`&self`

关联函数的定义和普通方法的定义是一致的, 但是关联函数不能使用self参数

## 枚举
可以将数据附加到枚举的变体中
```rust
enum IpAddr {
	V4(String),
	V6(String)
}
```

使用时是这样的
```rust
let home = IpAddr::v4(String::from("127.0.0.1"));
```

枚举也可以使用impl关键字定义*枚举的方法*

**枚举很适合和match一起使用**

## Option枚举
Rust中没有null, null的问题在于: 当你尝试像使用非null值那样使用null值的时候, 就会出现错误

但是null的概念还是有用的, 即变量因为某种原因处于无效或缺失的状态.

Option枚举就是类似于null概念的枚举

Option枚举, Some枚举, None枚举是prelude中的枚举

标准库中的Option枚举定义如下:
```rust
enum Option<T> {
	Some(T),
	None,
	}
```

### Option枚举比null好在哪里?
Option\<T\>不能直接当做T使用
```rust
let x: i8 = 5;
let y: Option<i8> = Some(5);

let sum = x + y;
```
最后一行会报错, 不能直接让x和y相加

如果需要使用y, 则需要将y转化成i8类型的, 在这个转化过程中会对None的情况进行讨论(从而强制要求了必须有检查非空的操作)

## match匹配
match匹配必须穷举所有的可能(也可以使用_通配符, 适配其他的所有情况)

match很适合和枚举一起使用, 对于带有数据的枚举, 也可以match

## if let匹配
match匹配需要考虑所有情况, 而if let匹配只考虑一种情况

```rust
let v = 0u8;

match v {
	3 => println!("three"),
	_ => (),
}

// 下面的if let和上面的match是等价的
if let 3 = v {
	println!("three");
}
```

## package crate module
crate有两种类型: binary library

一个package至少要有一个crate, library最多只能有一个, binary可以有任意多个

#### cargo的约定:
cargo默认会创建一个binary crate, 它的入口文件为 `src/main.rs`
这个binary crate的名和package名相同

如果有library crate, 它的默认入口文件为 `src/lib.rs` (Cargo 并不会默认创建library crate), 这个library crate的名也和package名相同 

#### module
module用来在一个 crate 内对代码进行分组
使用 mod 关键字建立module
module可以嵌套

模块的另一个重要作用是定义*私有边界*
模块中的内容默认是私有的    使用 `pub`关键词将某些条目标记为公共的

子模块可以使用父模块的所有条目
但是父模块不能使用子模块的私有条目

struct使用pub修饰后, 这个struct就是公共的了, 但是如果想在外部访问里边的字段, 还需要对对应的字段设置pub(pub struct里的字段默认是是有的)

enum也可以加pub, 但是 pub enum 里的变体默认是公共的

可以通过文件目录的方式将一个module拆分成多个rs文件

## 字符串
字符串拼接

push_str方法, 用来拼接两个字符串, 需要注意的是传入的参数应该是字符串切片

push方法, 用来在一个字符串后添加一个字符

+运算符, 将两个字符串拼接, 注意 + 后的参数应该是一个字符串切片, + 前的字符串的使用权将交给 + 运算的结果

format!宏: `let new_str = format!("{}-{}-{}", a, b, c);`  值得注意的是, format宏并不会取得 a b c 的所有权

## collect()
这个方法可以把元组, 迭代器等数据类型转化成集合类型(比如HashMap等)

## HashMap
如果HashMap的key的类型实现了Copy trait, 那么就会把值复制进hashmap的key

如果没有实现(比如像String这样的), 就会移动所有权

如果不是直接传值, 而是传引用, 所有权就不会变化

## unwrap
使用unwrap简化switch处理错误

如果Result结果是 Ok, 则返回 Ok 里的结果
如果Result结果是 Err, 则调用 panic! 宏

## expect
expect和unwrap差不多, 不过expect可以指定错误信息

## ?运算符
?运算符可以*简化*传播错误的代码
和unwrap expect类似, 如果结果是Ok, 直接返回结果, 如果结果是 Err, 则传播错误

#### from函数与?运算符
from可以把错误类型进行转换, ?运算符内置了form操作

#### main函数与?运算符
main函数的默认返回类型是 (). 也可以把main函数的返回类型修改成 Result.
```rust
fn main() -> Result<(), Box<dyn Error>> {
  File::open("hello.txt")?
}

```

## trait
实现trait
```rust
impl SomeTrait for SomeStruct {...}
```

impl Trait 可以作为函数参数类型
```rust
	fn h(x: impl SomeTrait) {...}
```

Trait bound
```rust
	fn h<T: SomeTrait>(x: T) {...}
```

如果需要同时实现多个trait, 使用+连接
```rust
	fn h(x: impl SomeTrait + OtherTrait) {...}
```

where关键字用来简化签名:
```rust
// 这种写法函数签名太长了, 不是很直观
fn h<T: Trait1 + Trait2, U: Trait3 + Trait4>(x: T, y: U) -> String {...}


// 使用where关键词简化函数签名
fn h<t, U>(x: T, y: U) -> String 
where 
	T: Trait1 + Trait2,
	U: Trait3 + Trait4,
{...}
```


## 测试
单元测试: \#\[cfg(test)\]
集成测试: 不需要上面的标注(在tests目录下创建集成测试文件)(只有library crate才能创建集成测试)


## 函数式编程的特点
把函数作为参数
把函数作为返回值
把函数赋值给一个变量

## 闭包
闭包可以捕获它们所在的环境.
而普通函数不可以

因此闭包相比于普通函数, 会有额外的内存开销

## 迭代器
iter方法: 在不可变引用上创建迭代器
into_iter方法: 创建的迭代器会获得所有权
inter_mut方法: 迭代可变的引用


迭代器是惰性的, 如果不消耗它, 它就什么都不会做



#### 消耗迭代器
调用next的方法叫做"消耗型适配器"

sum方法就会消耗尽迭代器

collect方法也是消耗型的

#### 迭代器适配器
将某个迭代器转化成不同种类的迭代器

map方法就是一个迭代器适配器


**迭代器是零开销抽象**
也就是说迭代器这样的抽象, 在底层代码上是不会有额外开销的, 速度是很快的.