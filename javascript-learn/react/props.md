## 基本属性
1. 每一个组件实例都会有props属性
标签属性都会保存在这个props中
对于下面的组件有:
```JavaScript
class Demo extends React.Component{  
    render() {  
         console.log(this);  
		 return (  
		            <ul>  
						 <li>姓名:{this.props.name}</li>  
						 <li>性别:{this.props.gender}</li>  
						 <li>年龄:{this.props.age}</li>  
					 </ul> 
				)  
    }  
}

ReactDOM.render(<Demo name="张环宇" gender="女" age="24"/>, document.getElementById("app"))
```
有以下输出
![[Pasted image 20220216191454.png]]

2. 可以通过扩展属性将对象进行扩展传递
```JavaScript
let person = {
	name: "张环宇",
	gender: "女",
	age: "24"
}
ReactDOM.render(<Demo {...person} />, document.getElementById("app"))
```
需要注意的是,这个扩展语法并不是js原生的,这是一种jsx语法,只能用在jsx中.
原生的js只支持对数组进行扩展,和复制对象的时候使用扩展操作符.

## 设置类型检查
React提供了`props`的类型检查,需要将响应的检查规则写在类组件的**静态属性上**
```JavaScript
class Demo extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,// 设置为字符串,且必填
		gender: PropTypes.string,
		age: PropTypes.number
	}
	...
}
```
注意指定类型时,使用的`PropTypes`对象需要从专门的`prop-types`的包中引用.
使用`isRequired`属性设置必填项

## 设置默认值
与类型检查相似,也需要将默认值对象写在类组件的**静态属性**上
```JavaScript
class Demo extends React.Component {
	static defaultProps = {
		age: 18
	}
	...
}

```

## 构造函数中的props
如果在构造函数中传入props,则可以拿到对应的参数
```JavaScript
constructor(props) {
	super(props)
	console.log(props)
}
```

## 函数组件中使用props
```JavaScript
function Demo(props) {
	return (
		<ul>  
			 <li>姓名:{props.name}</li>  
			 <li>性别:{props.gender}</li>  
			 <li>年龄:{props.age}</li>  
		 </ul> 
	)

}
// 函数组件也可以设置默认值和类型检查
Demo.defaultProps = {
	age: 18
}
Demo.propTypes = {
	name: PropTypes.string.isRequired
}
```