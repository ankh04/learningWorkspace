## Vue中如何设置全局变量？
**方法一**
在vue2.x中，通过原型链的方式设置。即`Vue.prototype.$xxxx=xxx` 的形式来挂载，然后通过` this.$xxxx`来获取挂载到全局的变量或者方法。

在vue3.x中，设置`config.globalProperties`，这些 `property` 将被复制到应用中作为实例化组件的一部分。

```JavaScript
// 之前 (Vue 2.x) 
Vue.prototype.$http = () => {} 
// 之后 (Vue 3.x) 
const app = createApp({}) 
app.config.globalProperties.$http = () => {}
```

**方法二**
通过父子组件通信的方式，具体来说可以有：
- vuex
- 使用provide/inject功能
- 订阅发布模式
