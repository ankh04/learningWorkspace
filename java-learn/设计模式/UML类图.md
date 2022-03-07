      

UML——Unified modeling language UML (统一建模语言)，是一种用于软件系统分析和设计的语言工具，它用 于帮助软件开发人员进行思考和记录思路的结果

UML描述了类之间的下列六种关系:
	      关联、实现、泛化(继承)、依赖、组合、聚合

其中**依赖**是最宽泛的关系,其他的五中关系都可以看作是依赖的特例

关联分为单向关联和双向关联

      
聚合关系(Aggregation)表示的是整体和部分的关系，整体与部分可以分开。聚合关系是关联关系的特例，所以他具有关联的导航性与多重性。
      

组合关系(Composition):也是整体与部分的关系，但是整体与部分不可以分开。

```java
class Sample {
	private Apple property1 = new Apple();//组合关系
	private Pen property2;//聚合关系

	public setPen(Pen pen) {
		this.property2 = pen;
	}
}

```
