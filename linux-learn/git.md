如果输入密码错误了3次,再进行git push会没有任何反应
运行以下命令就好了
```shell
git config --global credential.helper wincred
```
在高版本的git中可以运行
```shell
# 清楚密码用户名缓存
git credential-manager uninstall 
```