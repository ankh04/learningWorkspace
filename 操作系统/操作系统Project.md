#Project/OperatingSystem
## Target
使用 rust 实现自己的操作系统. (结合[[编译器Project]], 让这个操作系统可以运行自己编写的编译器)

## Resources
[ucore手册](https://rcore-os.github.io/rCore-Tutorial-Book-v3/index.html) 使用rust开发, 文章详细, 主要沿着这个来学习 ❗️❗️❗️
[MIT的操作系统课笔记](https://mit-public-courses-cn-translatio.gitbook.io/mit6-s081/lec05-calling-conventions-and-stack-frames-risc-v/5.1-introduction-to-lecture05) 也是基于 risc-v 的操作系统, 可供参考
[基于riscv的计算机组成原理](x-devonthink-item://FD00F261-7D67-4B99-8A89-E2BDC3F9921E)

[计算机组成原理riscv补充材料](https://www.elsevier.com/books-and-journals/book-companion/9780128122754) 干货满满, 强烈建议看看
[怎样制作一块CPU](https://cpushack.com/MakingWafers.html) 图文并茂(英语 可以试图翻译成中文)
[历史上的CPU](https://www.cpushack.com/CPU/cpu.html) 从英特尔的4004到msp430, 很详细, 很全面的说明

[这篇文章描述了Java这样的面向对象的语言在汇编层次是怎么是实现的](x-devonthink-item://EF1E0DF9-0D0C-4BEE-ABE2-444A825E6833)
[riscv指令集cheetsheet](x-devonthink-item://52215B90-589F-453E-90C9-844AAC00FFB9)


## Progress
### [[2022-04-17 📅]]
- [x] 跑通了第一章的代码
- [x] 阅读了第一章"hello world", 初步了解了bootloader, rustSBI 以及函数调用相关的知识

### [[2022-04-18 📅]]
- [x] 写了第一章的部分笔记(程序内存布局, 操作系统加载流程)
- [x] 画了一张自己特别满意的程序内存布局的图[[程序内存布局图示]]
- [x] 学习了一些 riscv 的知识

### [[2022-04-19 📅]]
- [x] 阅读了计算机组成原理 基于riscv视角. (不得不说这本书写得是真的好, 让我捋清楚了好多知识)
- [x] 找到一些cpu架构相关的资源 [[操作系统Project#Resources|resources]]

### [[2022-04-20 📅]]
- [x] 完成了函数嵌套调用的汇编代码

### [[2022-04-24 📅]]
- [x] 做了riscv的笔记 [[riscv|图解计算机组成原理]]

### [[2022-04-25 📅]]
- [x] gdb调试riscv环境配置
	[调试rCore的效果](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220425222817.png)
- [x] #done 自己实现一遍第一章的代码
- [x] #done 初步了解riscv
- [x] #done 第一章笔记 --- rustSBI的作用

### [[2022-05-02 📅]]
- [x] 第二章代码调通
- [x] 特权级机制阅读完毕

### [[2022-05-03 📅]]
- [x] 批处理系统阅读(文本+代码)完毕 [[批处理系统row|笔记]]

### [[2022-05-07 📅]]
- [x] 批处理系统笔记处理完毕

### [[2022-05-09 📅]]
- [x] 链接器原理
- [x] x86汇编

### [[2022-05-10 📅]]
- [x] 阅读计算机体系结构第一章(读了感觉啥都没读...  这个是比较后期的书, 之后再读吧)
- [x] learn Rust