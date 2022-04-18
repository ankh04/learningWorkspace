#Project/OperatingSystem
## Target
使用 rust 实现自己的操作系统. (结合[[编译器Project]], 让这个操作系统可以运行自己编写的编译器)

## Resources
[ucore手册](https://rcore-os.github.io/rCore-Tutorial-Book-v3/index.html) 使用rust开发, 文章详细, 主要沿着这个来学习
[MIT的操作系统课笔记](https://mit-public-courses-cn-translatio.gitbook.io/mit6-s081/lec05-calling-conventions-and-stack-frames-risc-v/5.1-introduction-to-lecture05) 也是基于 risc-v 的操作系统, 可供参考
[基于riscv的计算机组成原理](x-devonthink-item://FD00F261-7D67-4B99-8A89-E2BDC3F9921E)

## Progress
- [ ] #todo 第一章笔记 --- rustSBI的作用
- [ ] #todo 初步了解riscv
- [ ] #todo 自己实现一遍第一章的代码
### [[2022-04-17 📅]]
- [x] 跑通了第一章的代码
- [x] 阅读了第一章"hello world", 初步了解了bootloader, rustSBI 以及函数调用相关的知识

### [[2022-04-18 📅]]\
- [x] 写了第一章的部分笔记(程序内存布局, 操作系统加载流程)
- [x] 画了一张自己特别满意的程序内存布局的图[[程序内存布局图示]]
- [x] 学习了一些 riscv 的知识