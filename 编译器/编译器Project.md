#Project/Compiler

[[词法分析]]

[[正则引擎]]


## Resources
[国防科技大学-编译原理课程](https://www.icourse163.org/learn/NUDT-1003101005?tid=1467085462#/learn/content): 思路清晰, 课件完整, 值得学习
[华东交通大学-编译原理课程](https://www.icourse163.org/learn/ECJTU-1463143168?tid=1467136475#/learn/content): 有待考察, 据说老师上课呢很有激情
[编译原理(龙书)](https://book.douban.com/subject/3296317/) : 信息密度大, 概念清晰明了, 直接读比较吃力, 最好参考着视频课程看.

[LL(1)文法的Java实现](https://blog.51cto.com/u_2837193/4956710?b=totalstatistic), 详细直接, 而且可以部署到web

## Progress
### [[2022-04-10 📅]]
语法分析:
- [x] 上下文无关法
- [x] 左递归导致无线循环
- [x] 回溯导致效率下降
- [x] 使用==右递归==消除左递归
- [x] 建立 First集 和 FOLLOW集 消除回溯
- [x] 上述过程就是LL(1)的过程

### [[2022-04-14 📅]]
语法分析笔记:
- [x] #note 上下文无关文法笔记[[文法]]
- [x] #note 语法分析树[[语法分析树]]
- [x] #note 推导[[推导]]

### [[2022-04-15 📅]]
语法分析笔记:
- [x] #note 自顶向下的语法分析[[自顶向下的语法分析]]
- [x] #note 左递归[[左递归]]
- [x] #note 预测分析器[[预测分析器]]

### [[2022-04-16 📅]]
- [x] 学习了自底向上的语法分析-符号语法

### [[2022-04-22 📅]]
- [x] #coding 巴克斯范式类---从字符串提取终结符和非终结符
- [x] 复习了一下FIRST集合的构造方法

### [[2022-04-23 📅]]
- [x] #coding FIRST集合
- [x] #coding FOLLOW集合
- [x] #coding LL1分析

### [[2022-05-01 📅]]
- [x] #coding [算符优先文法分析](https://github.com/ankh04/ILoveBuildWheel/commit/1eeff2027b12bc5f07453220cf24d3e895245397)

### [[[2022-05-02 📅]]]
- [x] 阅读规范归约
- [x] 阅读LR文法

### [[2022-05-03 📅]]
- [x] 阅读SLR(1)文法
- [x] 阅读LR(k)文法

## todo
- [ ] rust 实现LR(1)算法
- [ ] java 实现LR(1)算法