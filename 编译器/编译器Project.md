#Project/Compiler

[[词法分析]]

[[正则引擎]]


## Resources
[国防科技大学-编译原理课程](https://www.icourse163.org/learn/NUDT-1003101005?tid=1467085462#/learn/content): 思路清晰, 课件完整, 值得学习
[华东交通大学-编译原理课程](https://www.icourse163.org/learn/ECJTU-1463143168?tid=1467136475#/learn/content): 有待考察, 据说老师上课呢很有激情
[编译原理(龙书)](https://book.douban.com/subject/3296317/) : 信息密度大, 概念清晰明了, 直接读比较吃力, 最好参考着视频课程看.

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