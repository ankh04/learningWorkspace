关于后端的jwt实现可以参考[这里](https://blog.csdn.net/weixin_45070175/article/details/118559272?utm_source=app&app_version=4.16.0)

注意到jwt的校验应该留到后端去做,前端如果需要从jwt解析信息,需要使用`jwt-decode`包而不是`jsonwebtoken`,jsonwebtoken是服务器端使用的.