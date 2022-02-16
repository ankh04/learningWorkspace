## 基本属性
`refs`简化了繁琐的查找DOM元素的操作,能够减少类似于`document.getElementById`这样的操作.
使用方法:在标签内使用ref属性标识自己
## 三种使用方法
- 字符串形式的ref(不推荐)

![[Pasted image 20220216195118.png]]
官网对于这种方式的介绍如上,该方法造成的问题如下:
	-   It requires that React keeps track of currently rendering component (since it can't guess `this`). This makes React a bit slower.(性能问题)
	-   It doesn't work as most people would expect with the "render callback" pattern (e.g. `<DataGrid renderRow={this.renderRow} />`) because the ref would get placed on `DataGrid` for the above reason.
	-   It is not composable, i.e. if a library puts a ref on the passed child, the user can't put another ref on it (e.g.
[Any better way to get refs in ReactTransitionGroup? #8734](https://github.com/facebook/react/issues/8734)). Callback refs are perfectly composable.(如果组件库中使用了字符串ref,用户在使用这个组件的时候就不能再使用字符串ref了)
- 回调形式的ref
ref属性如果被赋值为一个函数,则会在render阶段自动调用这个函数
回调形式的ref具体又分为两种
1. 内联形式
```JavaScript
<input ref={c => this.inputRef = c} />
```
2. 函数形式
```JavaScript
inputCallback = (c) => this.inputRef = c;
<input ref={inputCallback}/>
```
第一种形式更简洁,但是在重新渲染(render)的时候会执行两次回调,第一次返回null,第二次返回DOM节点.
第二种形式更繁琐些,但是在重新渲染时不会执行两遍.
但是这两种形式除此之外并没有很大的区别,性能上区别也不大(引用自官网)
- createRef创建ref容器
```JavaScript
myRef = React.createRef();
<input ref = {myRef}/>
```
获取DOM元素时使用`myRef.current`
这种形式最繁琐,但是官网推荐这种方法.