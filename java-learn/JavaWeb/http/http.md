### http简述
HTTP: Hyper Text Transfer Protocol 超文本传输协议
作用:规定请求格式和响应格式

### 请求格式
三个组成部分:`请求行`,`请求头`,`请求体`
##### 请求行
[[请求方式]]
请求地址
请求协议版本

##### 请求消息头

作用：通过具体的参数对本次请求进行详细的说明

格式：键值对，键和值之间使用冒号隔开

相对比较重要的请求消息头：

| 名称           | 功能                                 |
| -------------- | ------------------------------------ |
| Host           | 服务器的主机地址                     |
| Accept         | 声明当前请求能够接受的"[[媒体类型]]" |
| Referer        | 当前请求来源页面的地址               |
| Content-Length | 请求体内容的长度                     |
| Content-Type   | 请求体的"[[媒体类型]]"               |
| Cookie         | 浏览器访问服务器携带的Cookie数据     |


##### 请求体
作用：作为请求的主体，发送数据给服务器。具体来说其实就是POST请求方式下的请求参数。

格式：

###### [1]form data

含义：当前请求体是一个表单提交的请求参数。

![./images](data:image/png;base64,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)

查看源码后，发现格式如下：

> username=tom&password=123456

-   每一组请求参数是一个键值对
-   键和值中间是等号
-   键值对之间是&号

###### [2]Request Payload

含义：整个请求体以某种特定格式来组织数据，例如JSON格式。

![./images](https://heavy_code_industry.gitee.io/code_heavy_industry/assets/img/img005.35d6260c.png)

### 响应格式
三个组成部分:`响应行`,`响应头`,`响应体
##### 响应状态行

> HTTP/1.1 200 OK

-   HTTP协议版本
-   [[响应状态码]]
-   响应状态的说明文字

#####  响应消息头
-   响应体的说明书。
-   服务器端对浏览器端设置数据，例如：服务器端返回Cookie信息。

| 名称           | 功能                                            |
| -------------- | ----------------------------------------------- |
| Content-Type   | 响应体的[[媒体类型]]                            |
| Content-Length | 响应体的内容长度                                |
| Set-Cookie     | 服务器返回新的Cookie信息给浏览器                |
| location       | 在重定向的情况下,告诉浏览器访问下一个资源的地址 |

##### 响应体

服务器返回的数据主体，有可能是各种数据类型。

-   HTML页面
-   图片
-   视频
-   以下载形式返回的文件
-   CSS文件
-   JavaScript文件