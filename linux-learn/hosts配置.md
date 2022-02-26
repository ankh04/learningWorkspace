在hosts中配置了如下设置
```shell
192.168.3.114 ankh
```


本地也ping通了
但是浏览器怎么也打不改

网上说是要清dns,发现清了也没用


最后发现是clashX的原因,由于clash做了系统代理,所以该本地的hosts是没有意义的.

在Clash的yaml配置文件里配置绕过该ip地址即可

关于clash的yaml配置规则可以看[这里](http://blog.joylau.cn/2020/05/01/Clash-Config/)
```shell
- 'SOURCE-IP-CIDR,192.168.3.114/32,DIRECT'
```


设置了还是不行,考虑把clash的dns关掉就可以了
```yaml
dns:
	- false
```