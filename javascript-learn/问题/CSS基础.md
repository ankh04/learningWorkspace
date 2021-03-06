## 什么是CSS?
CSS, Cascading Style Sheets 层叠样式表.
*层叠*: 与样式的继承相关, 与优先级相关

## CSS的属性值可以是什么?
CSS 中使用的每个属性都允许拥有一个或一组值.

值可以是:
 - **数字**
有些CSS属性直接接收数字, 不用添加任何单位, 比如:
- 透明度 0 ~ 1

 - **长度**
 CSS有两种类型的长度——*相对长度*和*绝对长度*
 ==绝对长度单位==
| 单位 | 名称         | 等价换算             |
| ---- | ------------ | -------------------- |
| cm   | 厘米         | 1cm = 1in / 2.54     |
| mm   | 毫米         | 1mm = 1cm / 10       |
| Q    | 四分之一毫米 | 1Q = 1cm / 40        |
| in   | 英寸         | 1in = 2.54cm = 96 px |
| pt   | 点           | 1pt = 1in / 72       |
| px   | 像素         | 1px = 1in / 96       | 
==相对长度单位==
| 单位 | 相对于                                                                |
| ---- | --------------------------------------------------------------------- |
| em   | 在font-size中相对于父元素的字体大小, 在其他属性中相对于自身的字体大小 |
| ex   | 相对于字符"x"的高度                                                   |
| ch   | 相对于字符"0"的宽度                                                   |
| rem  | 相对于根元素的字体大小                                                |
| vh   | 视窗高度的 1%                                                         |
| vw   | 视窗宽度的 1%                                                                      |

 - **百分比**
相对于*父元素*与之对应的属性的值的百分比.

 - **颜色**
计算机表示颜色的常见模式有:
	- RGB模式 --- *发光色彩模式*  红 蓝 绿
	- CMYK模式 ---  *反光色彩模式* 青色 洋红 黄 黑
	- Lab模式 --- 亮度L 绿色到红色a 蓝色到黄色b
	- HSL模式 --- 相色 饱和度 亮度

不同的浏览器支持的色彩表示方式不同, 但RGB模式在浏览器中得到了广泛支持.
颜色可以是下面的几种情况
	- 颜色关键词 --- 即颜色的名字
	- 十六进制的 RGB 值
	- rgb()或rgba()表示的颜色
	- hsl()或hsla()表示的颜色 

- **图片**
由 url() 表示的一个实际图像文件

 - **位置**
 可以是 `top`, `left`, `bottom`, `right`, `center` 这样的关键字

 - **函数**
比如 url()  rgb() hsl()  calc() 这样的函数
calc()用于算出在编写 CSS 时无法定义的值，并且需要浏览器在运行时为您计算出这些值，那么它特别有用。 如果对应于编译器的名词, 它应该是*动态属性*(即运行时计算)


## 字体有哪些相关的css属性?
- font-size 字体大小
单位可以是[[CSS基础#CSS的属性值可以是什么|相对长度单位]], 也可以是绝对长度单位

- font-weight 字体粗细
可以是关键词, 比如: `normal` `bold`
也可以是数字, 比如: `100` 

- font-family 字体族
SimSun --> 简体(Simplified)宋体(Song)

- line-height 行高
![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220610210807.png)

上面的四个属性可以合起来, 写在 `font` 属性里:
```css
font: 400 14px/24px "宋体";
```
格式为: `font: 加粗 字号/行高 字体`

- text-decoration 文本装饰, 比如下划线, 上划线, 穿过文本的线
	- none 取消文本装饰
	- underline 下划线
	- overline 上划线
	- line-through 穿过文本的线
这个属性可以同时接收多个值, 比如可以同时有上划线和下划线.

- text-transform 字母,以及标点符号的形式
	- none 防止任何转型
	- uppercase 转为大写
	- lowercase 转为小写
	- capitalize 首字母大写
	- full-width 转为全角

- text-shadow 字体阴影

- text-align 文本对齐
	- left 左对齐
	- right 右对齐
	- center 居中
	- justify 展开

- letter-spacing 字母间距

- word-spacing 单词间距