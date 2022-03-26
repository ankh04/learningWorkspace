# Web的概念
## Web的特征
- 信息表达
用超级文本技术(HTML)和层叠样式表(CSS)表达信息
- 信息定位
使用资源定位技术(URL)来实现网络上的信息的精准定位
- 信息传输
用网络应用层协议HTTP来规范客户端和Web服务器之间的通信

## HTML
### HTML的特点
- 文本信息
- 利用\<img\>, \<audio\>, \<video\>等标记展现的图片,音频,视频信息
- 利用\<table\>,\<p\>,\<br\>等标记以固定格式展现的信息
- 利用超链接\<a\>标签来连接其他信息

## URL
- url(Uniform Resource Locator):统一资源定位器
见名知义,URL就是定位互联网上的资源的信息.
### URL的组成部分
- 应用层协议(HTTP, FTP, HTTPS)
- 主机 IP 地址或域名(如果是域名,则通过DNS解析得到IP)
- 资源所在路径/文件名(可不填,默认是根目录下的index文件)

## HTTP
顾名思义,[[http|HTTP(Hypertext Transfer Protocol)]]是关于如何在网络中传输HTML文档的协议. HTTP规定了Web的基本运作过程, 以及客户端与 Web 服务器通信的细节.

- HTTP(应用层)是建立在TCP/IP(传输层)上的, 默认使用80端口
- 常用的版本是`HTTP/1.1`和`HTTP/2`

### HTTP交换信息的过程
1. 服务器和客户端建立TCP连接(三次握手)
2. 客户端发送HTTP请求
3. 服务器端返回HTTP请求
4. 客户端和服务器之间断开TCP连接(在HTTP/1.1以上的版本有**长连接**的概念,因此并不是每一次交换HTTP信息都需要建立和断开TCP连接)

### HTTP请求格式
由三部分组成
- 请求方法, URI, HTTP版本
- 请求头 (Request Header)
- 请求正文 (Request Content)

可以使用命令行查看http信息
```shell
curl -v www.baidu.com
```
输出如下
```shell
*   Trying 112.80.248.75:80...
* Connected to www.baidu.com (112.80.248.75) port 80 (#0)
> GET / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.77.0
> Accept: */*
# 返回信息稍后再看
```
`>`符号后面的就是HTTP的请求格式.
第一行是`GET / HTTP/1.1`, 说明了请求方式`GET`, URI是`/`,即根目录; 版本是`HTTP/1.1`
后面的三行都是头信息, 本例中没有请求正文,所以为空

### HTTP响应格式
响应如下
```shell
< HTTP/1.1 200 OK
< Accept-Ranges: bytes
< Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform
< Connection: keep-alive
< Content-Length: 2381
< Content-Type: text/html
< Date: Sat, 26 Mar 2022 14:12:31 GMT
< Etag: "588604f0-94d"
< Last-Modified: Mon, 23 Jan 2017 13:28:16 GMT
< Pragma: no-cache
< Server: bfe/1.0.8.18
< Set-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/
<
<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>
* Connection #0 to host www.baidu.com left intact
```
响应格式也是三部分构成:
- HTTP版本, 状态码, 描述
- 响应头
- 响应正文
注意到`响应头`和`响应正文`之间有一个空行, 这个空行是区分两个部分的关键, 后面在使用Java建立服务器和客户端时会用到这个信息.
