## HTML是什么? 超文本是什么? 标记语言是什么?
HTML全称为 `HyperText Markup Language` 超文本标记语言.

HTML**不是编程语言**, 而是一种**标记语言**

HTML 是用来**描述语义**的语言.

#### 何为超文本?
文字, 图片, 音频, 视频, 动画, 多媒体等内容一起构成了*超文本*
另外, 超文本之间也可以互相引用.

#### 何为标记语言
- 标记语言是一套标记标签, 比如: \<a\>
- 标记语言没有编译过程, 而编程语言是由编译过程的(即编程语言需要编译器翻译成计算机可以理解的机器码, 而标记语言则直接由浏览器解析执行)


## Web的特征是什么?
![[Web的概念#Web的特征]]


## HTML的历史是怎样的?
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220531194122.png)
html1 至 html3 是美国军方以及高等研究所用的，并未对外公开。
## html页面的文档声明头是什么?
一个标准的html的第一行必定是 `<!DOCTYPE ...>` 开头的.
这一行就是*文档声明头*: DocType Declaration, DTD

文档声明头的==作用==是: 告诉浏览器文档使用哪种 HTML 或 XHTML 规范


html4.01有两大种规范, 每大种规范里面又有三种小规范, 一共有六种小规范.
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220531195033.png)


html4的文档框架是这样的:
```html

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
</head>
<body>

</body>
</html>

```

而html5就简化了文档声明头, 最后只剩很简短的: `<!DOCTYPE html>`

## 头标签head里会包含哪些配置?
头标签的配置信息写在`meta`标签里, 常见的配置有:
- 字符集 比如 utf-8 gbk这样的
- 视口 viewport
- 关键词 -- 用来描述网站的关键词, 用于搜索引擎检索
- 页面描述 -- 用来描述网站, 用于搜索引擎展示

## html中如何换行?
- 可以使用`<br />`标签换行
- html标签之间的**换行, tab都会被忽略**
- html标签内的连续多个空格, 换行, tab都将*折叠*为一个空格
