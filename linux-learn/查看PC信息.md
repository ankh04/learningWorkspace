## 查询PC型号
```shell
dmidecode -t 1

```

![[Pasted image 20220217215812.png]]

## 查询主板型号
```shell
dmidecode -t 2
```
![[Pasted image 20220217215850.png]]
## 查看CPU型号
```shell
sudo cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
```
![[Pasted image 20220217220005.png]]

## 查看内存信息
1. 查看内存型号
```shell
dmidecode -t 17
```
![[Pasted image 20220217221107.png]]
可以看到型号和厂家
2. 查看内存插槽数和当前内存数
 ![[Pasted image 20220217221215.png]]