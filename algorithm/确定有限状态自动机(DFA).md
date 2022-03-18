# 确定有限状态自动机(Deterministic Finite Automaton)
确定有限状态自动机使能够实现状态自动转移的自动机. 给定有限的状态和符号集$\Sigma$,通过状态转移函数转移到下一个状态.

### 基本概念
一个完整的确定有限状态自动机$\mathcal{M}$往往包含以下五部分
- 一个非空有限状态集合$\mathcal{Q}$
- 一个有限的符号集$\Sigma$
- 一个状态转移函数$\delta(q,a) = p,where \space q,p\in \mathcal{Q},a\in \Sigma$
- 一个开始状态$s\in \mathcal{Q}$
- 一个可以接受的状态集$\mathcal{F} \in \mathcal{Q}$

一个有限自动状态机可以表示成:$\mathcal{M} = \{\mathcal{Q},\Sigma,\delta,s,\mathcal{F}\}$

### 其他符号
为了方便对自动机进行表述,往往还需要以下符号:

$\Sigma^\star$ :属于符号集$\Sigma$的字符所组成所有字符串集合(空字符串也属于它)
终态函数$\phi(w)$:这个函数表示字符串$w\in \Sigma^\star$ 中的字符依次经过状态转移函数后得到的最终状态.

### 简单的例子
对于下面的自动机:
- $\mathcal{Q} = \{S_1, S_2\}$
- $\Sigma = \{0,1\}$
- $s = S_1$
- $\mathcal{F} = {S_1}$
- $\delta$ 由以下表格定义

|       | 0     | 1     |
| ----- | ----- | ----- |
| $S_1$ | $S_2$ | $S_1$ |
| $S_2$ | $S_1$ | $S_2$ |

可以发现如果输入的符号是1,状态将不会变化;而每次输入0,状态就会变化.
因此我们可以得出结论,上述DFA描述的是只接受**偶数个0**的字符串的自动机
上述状态转移函数也可以用图形的方式表述出来
![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/DFAexample.svg/2560px-DFAexample.svg.png)