# bean作用域
Spring内置了6个作用域,其中有4个适合web应用相关的.
用户也可以自定义bean作用域.
Spring提供的作用域如下:

| 作用域      | 描述                                                   |
| ----------- | ------------------------------------------------------ |
| singleton   | (默认)单例模式,即一个IOC容器创建出的bean对象都是同一个 |
| prototype   | 每次创建的bean对象都各不相同                           |
| request     | 每一个HTTP请求对应一个bean对象                         |
| session     | 每个HTTP Session对应一个bean对象                       |
| application | 每个ServletContext对应一个bean对象                     |
| websocket   | 每个WebSocket对应一个bean对象                                                       |
