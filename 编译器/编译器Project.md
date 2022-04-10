#Project/Compiler

[[词法分析]]

[[正则引擎]]


## Resources
[国防科技大学-编译原理课程](https://www.icourse163.org/learn/NUDT-1003101005?tid=1467085462#/learn/content): 思路清晰, 课件完整, 值得学习
[华东交通大学-编译原理课程](https://www.icourse163.org/learn/ECJTU-1463143168?tid=1467136475#/learn/content): 有待考察, 据说老师上课呢很有激情

## Progress

### [[2022-04-10 📅]]
语法分析:
- [x] 上下文无关法
- [x] 左递归导致无线循环
- [x] 回溯导致效率下降
- [x] 使用==右递归==消除左递归
- [x] 建立 First集 和 FOLLOW集 消除回溯
- [x] 上述过程就是LL(1)的过程