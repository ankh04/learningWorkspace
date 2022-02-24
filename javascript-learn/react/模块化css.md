React中不同组件的css文件可能会有类名冲突,为了解决这个方式,可以使用less在最外边加上一个嵌套.这种解决方法是最简洁的.

第二种方法就是利用WebPack的模块化css了

可以将`xxx.css`文件重命名为`xxx.module.css`,然后在js中引入这个css模块
```JavaScript
import xxx from "xxx.module.css"
```
然后在jsx语法里使用这个模块的属性作为类名
```jsx
<App className="xxx.xxxClass" />
```
这种方法比较繁琐,但好处是不用更改css的结构,支持原生的css.