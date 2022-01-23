### props.history.push
这种方法是最简单直接的，但是需要满足一些前提条件，首先被跳转的组件应该由`HashRouter`包裹，通常是这样
```JavaScript
import { HashRouter as Router, Switch, Route } from "react-router-dom";
...
export default function AppRouter() {
    return (
        <Router>
            <Switch>
                { loadRoutes() }
            </Switch>
        </Router>
    )
}
```
在被包裹的页面中的`props`中新增了`history`属性，但对于某些子组件可能就不存在，于是需要向这些子组件传递`history`参数
```JavaScript
function App(props: any) {
  return (
    <div className="App">
      <div className="login-box">
        <Login history={ props.history } />
      </div>
    </div>
  )
}
```
接下来才可以在`Login`组件中使用`this.props.history.push`方法。
### redirect
可以考虑条件渲染`Redirect`组件。
```JavaScript
if (flag) {
	return (
		<Redirect to="..." />
	)
} else {
	return (
		...
	)
}
```