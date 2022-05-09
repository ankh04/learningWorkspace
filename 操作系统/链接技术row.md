静态链接器的两个主要功能:
- 符号解析
- 重定位

## 目标文件
有三种目标文件:
- 可执行目标文件: 可以直接==复制==到内存并执行
- 可重定位目标文件: 在==编译时==与其他可重定位目标文件合并, 创建可执行目标文件
- 共享目标文件: 在==运行时或加载时==被动态加载到内存并链接

链接可能发生在三种时刻:
- 编译时
- 运行时
- 加载时

#### 目标文件的格式
elf  

## elf文件格式
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220508214829.png)

#### elf header
elf header 的前16个字节描述了*系统字的大小和字节顺序(大端or小端)*. 剩下的部分用来帮助链接器进行语法分析

#### 查看elf header 的命令
可以使用 `readelf -a a.out` 来查看main.o文件的elf header信息
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220509105547.png)

#### 节
上图中, 以.开头的部分(.text,   .bss,   .data等), 称为*节*

#### section header table
这里的数据记录了节的位置和大小