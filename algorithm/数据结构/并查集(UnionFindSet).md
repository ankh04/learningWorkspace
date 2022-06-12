## 为什么需要有并查集
并查集用于解决类似以下描述的问题
```ad-note
在一些有N个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，其间要反复查找一个元素在哪个集合中。
```
并查集所要解决的问题是:
1.  查询两个元素所属集合是否是同一个集合:`isSameSet`
2. 合并两个不相交集合:`union`
若使用链表,2操作是O(1)的,但是1操作不是
若使用哈希表,1操作是O(1)的,但2操作不是
并查集需要这两个操作的复杂度都是`O(1)`的.

基于以上性质,并查集常常用来处理**不相交集合(disjoint-set)**的合并和查询问题(这种类似问题在<算法导论>第21章有详细介绍).

## 并查集的实现方式
**数据结构:**
- 父节点集合
- 并查集深度
- 并查集节点
**需要实现的方法:**
- find(x) --- 找到x节点的父根节点
- union(x,y) --- 将x与y节点所在的并查集合并
- isSameSet(x,y) --- 判断x和y节点是否属于同一个并查集

实现并查集的方式有很多,下面介绍其中的三种
#### 不相交集森林
数组是实现这种并查集最朴素但效率也较高的方式
```java
class UnionFindSet {
	private int[] parents;
	private int[] ranks;

	UnionFindSet(int n) {
		parents = new int[n];
		ranks = new int[n];
		
		// 第i个节点的父节点为parents[i]
		// 一开始把所有节点的父节点初始化为它们自己
		Arrays.setAll(parents, (ind) -> ind);
		// 第i个节点所属的集合的rank为ranks[i]
		// 一开始把所有节点的rank初始化为0
		Arrays.fill(ranks, 0);
	}

	public int find(int node) {
		int parent = node;
		while (parent != parents[parent]) {
			// 如果父节点不是自己,说明上面有节点
			// 一值往上找到根节点为止
			parent = parents[parent];
			// 顺便统计该集合的rank
			
		}
		// 启发式策略(参见<算法导论>p329)
		int pNode = node;
		while (pNode != parent) {
			int oldP = parents[pNode];
			parents[pNode] = parent;
			pNode = oldP;
		}
		// 运行到这里时, parent == parents[parent]
		return parent;
	}

	public void union(int node1, int node2) {
		if (isSameSet(node1, node2)) {
			// 如果两个节点属于同一个集合,什么都不做
			return;
		}
		int pNode2 = find(node2);
		int pNode1 = find(node1);
		if (ranks[pNode2] < ranks[pNode1]) {
			// 如果node2所属集合的rank小于node1所属集合的rank
			// 将node2的父节点指向node1的父节点
			this.parents[pNode2] = pNode1;
			// 此时node1 和 node2 将同属于一个集合,且该集合的rank不会改变
		}
		if (ranks[pNode1] < ranks[pNode2]) {
			this.parents[pNode1] = pNode2;
			// 此时node1 和 node2 将同属于一个集合,且该集合的rank不会改变
		}
		if (ranks[pNode1] == ranks[pNode2]) {
			// 当两者的rank相等时,将node2的父节点指向node1的父节点,此时rank会发生变化
			this.parents[pNode2] = pNode1;
			ranks[pNode1]++;
		}
	}

	public Boolean isSameSet(int node1, int node2) {
		return find(node1) == find(node2);
	}
}
```
当并查集中的元素不是数字或是更加复杂的对象时,可以封装对应的对象
```java
class UnionFindNode {
	public Object value;
	public UnionFindNode parent;
	public int rank;
}
```

#### 链表方式
这种方式使用链表作为数据结构,但是进行一次并查集操作的平均复杂度比上面的方式要高,具体的实现可以参考<算法导论>的326页

## 应用场景
并查集很适合使用在多线程操作不相交集合的情景,详情可以参考[这里](https://www.bilibili.com/video/BV1NU4y1M7rF?p=12&t=4866)的1:09:00的讲解


## 模板
```java
class UnionFind {  
    int count = 0;  
    int[] parent;  
    int[] rank;  
    public UnionFind(int[] grid) {  
        int n = grid.length;  
  
        parent = new int[n];  
        rank = new int[n];  
  
        for (int i = 0; i < n; i++) {  
            count++;  
            parent[i] = i;  
            rank[i] = 0;  
        }    
    }  
    public int find (int i) {  
        if (parent[i] != i) {  
            parent[i] = find(parent[i]);  
        }        return parent[i];  
    }  
    public boolean isSameSet(int i, int j) {  
        if (find(i) == find(j)) {  
            return true;  
        }        return false;  
    }  
    public void union(int x, int y) {  
        if (isSameSet(x, y)) {  
            return;  
        }  
        int rootx = find(x);  
        int rooty = find(y);  
        if (rank[rootx] > rank[rooty]) {  
            parent[rooty] = rootx;  
        } else if (rank[rootx] < rank[rooty]) {  
            parent[rootx] = rooty;  
        } else {  
            parent[rooty] = rootx;  
            rank[rootx] += 1;  
        }  
        count--;  
    }  
    public int getCount() {  
        return this.count;  
    }  
}
```