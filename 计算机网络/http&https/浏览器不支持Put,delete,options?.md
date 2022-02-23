## 浏览器不支持put,delete,options?
浏览器是支持put,delete,options的,知识对于`<form>`标签,如果使用内置的submit事件,那么只支持post和get.浏览器完全可以用AJAX发送post和get以外的http请求.

但实践中往往不建议使用post和get以外的请求,原因在于
- post和get请求已经能够满足需求
- put请求没有安全验证机制
- delete删除服务器的资源太危险
- options能获得服务器的信息,不安全