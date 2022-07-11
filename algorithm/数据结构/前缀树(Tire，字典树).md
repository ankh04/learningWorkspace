# 前缀树
![[Pasted image 20220317152631.png]]

### 实现
```java
class Tire {  
    private Tire[] children;  
	private boolean isEnd;  
  
	public Tire() {  
        this.children = new Tire[26];  
	}  
  
    public void insert(String word) {  
	    // 将当前实例赋值给node,这个node在之后会是指向当前Tire层的指针  
		Tire node = this;  
		for (int i = 0, len = word.length(); i < len; ++i) {  
            // 获取第i个位置的字符  
			 char ch = word.charAt(i);  
			 // 获取当前"小写字母"的索引  
			 int ind = ch - 'a';  
			 // 如果当前索引处没有Tire, 就在索引位置处创建新的Tire  
			 if (node.children[ind] == null) node.children[ind] = new Tire();  
			 // 将node指向刚刚创建的新Tire  
			 node = node.children[ind];  
		 }  
         // 当前word遍历完成后,node所在的Tire位置就是该word的end位置了  
		 node.isEnd = true;  
	}  
  
    // 用于查找word是否在Tire树中  
 public boolean search(String word) {  
        // 将当前实例赋值给node,这个node在之后会是指向当前Tire层的指针  
		Tire node = this;  
		for (int i = 0, len = word.length(); i < len; ++i) {  
            // 获取第i个位置的字符  
			char ch = word.charAt(i);  
			// 获取当前字母的索引  
			int ind = ch - 'a';  
			if (node.children[ind] == null) {  
				return false;  
			}  
            // 更新node,进入下一层  
			node = node.children[ind];  
		}  
        // 最后一层的node也必须不为空,而且必须是结尾点  
		return node != null && node.isEnd;  
	}  
}
```