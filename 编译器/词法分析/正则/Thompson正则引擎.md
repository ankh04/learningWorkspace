Thompson算法给出了一个对NFA更有效的遍历方式

Thompson算法会同时遍历多个分支, 从而避免了回溯, 如果最终有任何一个分支到达了可接受域, 则匹配成功. 
对于正则表达式`abab|abbb`匹配字符串`"abbb"`. 该算法的流程如下:

![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220408204258.png)

在 Step2 中, 上面的分支遇到阻碍进行不下去了, 并不影响下面的分支. 因此, 最终只会消耗4步. 会比[[基于回溯的正则引擎]]快一倍.


## 实现方式
### 状态的定义
首先给出状态的定义:
```java
class State {
	int c;  
	State out;  
	State out2;  
	int lastList;
}
```

`State.c`表示该状态对应状态转移函数的值, 该值是字符的`ASCII`码值, 因此是`int`

下面定义两种特殊的状态, 分支状态 和 接受状态.
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220408204914.png)

当 c 等于 256 时, 代表是分支状态.
当 c 等于 257 时, 代表是接受状态.

另外, 如果 c 等于 0, 代表只是一个空转移.


### 正则符号转化成NFA
从正则表达式到NFA需要将==正则符号==转化成对应的==转移图==
 下面仅给出`连接`, `选择`, `闭包`的转移图:
 ![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220408205328.png)

我们将每个最基本的转移图定义为`Fragment`简称`Frag`

### 实现Frag
试图发现上述转移图的共同点, 进而方便我们进行抽象, 设计Frag类.

可以发现, 上述Frag都只有一个初试状态, 有一个或多个输出状态.

因此, 将Frag类定义为:
```java
class Frag{
	State start;  
	ArrayList<State> out;
}
```
我们希望能像搭积木一样, 将各个"单元Frag"组合起来, 形成复杂的正则表达式的表达.
因此, 我们应该定义一些组合Frag的工具方法:

```java
ArrayList<State> listFactory(State out); //将一个State变为一个out

ArrayList<State> append(ArrayList<State> l1, ArrayList<State> l2); // 将两个 out 合并成一个 out

void patch(ArrayList<State> l, State s); // 将 out 中所有状态的输出都指向s

```

### 对正则表达式进行词法分析
上一节讲述了如何将正则语法中的关键词转化成NFA, 但这写正则关键词该如何获取呢?
通常的方法是使用NFA对正则字符串进行词法分析, 但这样做比较麻烦, 我们目前只计划实现"|", "?", "+", "\*" 这样几个比较简单的正则符号, 因此使用==前序转后序==进行词法分析.

转化成后序后, 只需要一个栈就可以对所有词法进行分析了.

#### 实现前序转后序
这个实现不是很复杂, 在很多简单的命令行计算器中, 也会用到这样的算法, 只不过在处理正则表达式的时候, 需要注意a和b的连接也是一个二元运算, 我们使用符号`.`来表示连接操作.

而`\*`, `+`, `?`这样的符号就是一元运算符

另外还需要处理括号这样的优先级相关的运算符

实现代码如下:
```java
public static char[] in2post(String regex) {
    char[] re = regex.toCharArray();

    // 后序表达式的存储空间
    ArrayList<Character> dst = new ArrayList<>();
    // 当扫描到括号时(), 需要保存现场, paren变量用来保存现场的
    LinkedList<Parenthesis> paren = new LinkedList<>();
    paren.push(new Parenthesis());

    int nalt = 0;
    int natom = 0;
    for (int i = 0, len = re.length; i < len; i++) {
 	   switch (re[i]) {
 		   case '(':
 			   if (natom > 1) {
 				   --natom;
 				   dst.add('.');
 			   }
 			   paren.getLast().nalt = nalt;
 			   paren.getLast().natom = natom;
 			   paren.push(new Parenthesis());
 			   nalt = 0;
 			   natom = 0;
 			   break;
 		   case '|':
 			   if (natom == 0) return null;
 			   while (--natom > 0) dst.add('.');
 			   nalt++;
 			   break;
 		   case ')':
 			   if (natom == 0) return null;
 			   while (--natom > 0) dst.add('.');
 			   while (nalt > 0) {
 				   dst.add('|');
 				   nalt--;
 			   }
 			   paren.pop();
 			   nalt = paren.getLast().nalt;
 			   natom = paren.getLast().natom;
 			   natom++;
 			   break;
 		   case '*':
 		   case '+':
 		   case '?':
 			   if (natom == 0) return null;
 			   dst.add(re[i]);
 			   break;
 		   default:
 			   if (natom > 1) {
 				   --natom;
 				   dst.add('.');
 			   }
 			   dst.add(re[i]);
 			   natom++;
 			   break;
 	   }
    }

    while (--natom > 0) {
 	   dst.add('.');
    }
    while (nalt > 0) {
 	   dst.add('|');
 	   nalt--;
    }
    char[] res = new char[dst.size()];
    int i = 0;
    for (Character c : dst) {
 	   res[i++] = c;
    }

    return res;
}
    
```
对于一个正则表达式`abc(as|db)a*c+c`, 将它转化成后序表达式的结果就是:
`ab.c.as.db.|.a*.c+.c.`

### 实现从正则表达式到NFA
有了上述准备, 我们可以将词法分析出来的各种正则符号, 转化成"单元转移图", 并将它们连接起来.

总得来说, 这一步需要做三件事:
1. 遍历正则表达式的词素
2. 将词素转化单元转移图
3. 将多个单元转移图组合到一起

具体方法是这样的, 先准备一个存储Frag的栈, 通过遍历之前的后序表达式, 对每个词素进行操作.

最后栈中只会剩下一个Frag, 这就是我们需要的根 Frag, 通过把这个根Frag的所有输出连接到

```java
public State post2nfa(char[] postfix) {
	LinkedList<Frag> stack = new LinkedList<>();
	Frag e1, e2;
	State s;
	for(int i = 0, len = postfix.length; i < len; i++) {
		switch (postfix[i]) {
			case '.':
				// 连接符号
				// 将栈顶的前两个符号弹出来, 将它们连接
				e1 = stack.pop();
				e2 = stack.pop();
				Frag.patch(e2.out, e1.start);
				stack.push(new Frag(e2.start, e1.out));
				break;
			case '|':
				// 做两个分支
				e1 = stack.pop();
				e2 = stack.pop();
				s = new State(State.SPLIT, e1.start, e2.start);
				stack.push(new Frag(s, Frag.append(e1.out, e2.out)));
				break;
			case '?':
				// 也是做两个分支
				// 但是有一个分支是空的
				e1 = stack.pop();
				s = new State(State.SPLIT, e1.start, State.nullState());
				stack.push(new Frag(s, Frag.append(e1.out, Frag.listFactory(s.out2))));
				break;
			case '*':
				// 也是做两个分支, 不过有一个分支需要指回来
				e1 = stack.pop();
				s = new State(State.SPLIT, e1.start, State.nullState());
				for (State state : e1.out) {
					state.out = s;
				}
				stack.push(new Frag(s, Frag.listFactory(s.out2)));
				break;
			case '+':
				e1 = stack.pop();
				s = new State(State.SPLIT, e1.start, State.nullState());
				Frag.patch(e1.out, s);
				stack.push(new Frag(e1.start, Frag.listFactory(s.out2)));
				break;
			default:
				// 如果是关键词以外的字符(比如字母)
				// 作为单字符Frag压入栈
				s = new State(postfix[i], State.nullState(), State.nullState());
				stack.push(new Frag(s, Frag.listFactory(s.out)));
				break;
		}
	}

	Frag e = stack.pop();
	Frag.patch(e.out, this.matchState);
	return e.start;
}

```

### 测试NFA
NFA写出来后, 就应该考虑如何使用NFA来匹配字符串了.

由于Thompson遍历NFA的方式是并行的, 对于每一步, 可能同时处于多个状态, 于是考虑抽象出一个结构`clist`用来表示当前状态的集合, 而`nlist`用来表示下一个状态. 之所以使用两个变量, 是为了避免反复的分配空间.

最顶层的match方法用来匹配字符串:
```java
boolean match(String str) {
  char[] s = str.toCharArray();
  ArrayList<State> clist, nlist, t;
  // 这里的clist就是当前NFA所处的状态
  // nlist是接下来NFA将会到达的状态

  clist = startList(root, l1); // 最开始的clist就是从s0开始
  nlist = l2;
  // 为了避免反复分配内存空间, 在每步后交换 nlist 和 clist
  for (int i = 0, len = s.length; i < len; i++) {
    step(clist, s[i], nlist);
    t = clist;
    clist = nlist;
    nlist = t;
  }

  return isMatch(clist);
}
```

addState方法用来将某个状态加入当前状态集合
```java
 void addState(ArrayList<State> l, State s) {
    // addState 用来把一个状态加入到一个状态集合里
    // 如果这个状态已经在这个集合里了, 就不加入了
    // 如果遍历整个集合寻找是否已经存在会很低效, 于是考虑使用listid作为一个唯一标识
    // 在每次添加之前, 都会吧当前的listId放入该状态的 lastList 中.
    // 如果当前步(即listId)和 状态的 lastList 属性相等, 就说明该步已经添加过这个状态了

    if (s == null || s.lastList == listId) return;
    s.lastList = listId;
    if (s.c == 0) {
 	   addState(l, s.out);
 	   return;
    }
    if (s.c == State.SPLIT) {
 	   // 两个分支都是 unlabeled arrows, 将两个 unlabeled arrows 指向的状态加入 l 中
 	   addState(l, s.out);
 	   addState(l, s.out2);
 	   return;
    }
    l.add(s);
 }
```

最初的状态集合通过调用`startList`方法:
```java
 ArrayList<State> startList(State start, ArrayList<State> l) {
    // 初始化最初的 clist
    // 步数加一
    listId++;
    // 把初试状态 s0 加入 clist
    addState(l, start);
    // 返回 clist
    return l;
 }
```

在match方法中, 需要对字符串的每个字符进行匹配, 这个过程是通过`step`方法实现的, `step`执行完毕后, 将当前状态集合和下一个状态集合交换, 表示来到了下一个状态集合. `step`方法的实现代码为:
```java
 void step(ArrayList<State> clist, int c, ArrayList<State> nlist) {
    // step 函数的作用是:
    // 通过给当前状态clist 添加一个状态 c
    // 计算下一个状态集合 nlist
    State s;
    // 步数加一
    listId++;
    // 清空nlist
    nlist.clear();
    for (int i = 0, len = clist.size(); i < len; i++) {
 	   s = clist.get(i);
 	   if (s.c == c) {
 		   addState(nlist, s.out);
 	   }
    }
 }
```