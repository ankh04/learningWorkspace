
通过Pacman直接安装
```shell
sudo pacman -S redis
```

将redis目录下的`redis.conf`移动到`/etc`下
```shell
cp ./redis.conf /etc/redis.conf
```

后台启动redis
进入redis.conf文件,修改`daemonize`为yes 然后修改supervised 为auto
如果是非root用户,需要给redis加上redis.conf的权限
```shell
sudo chown redis /etc/redis.conf
```
启动redis
```shell
sudo redis-server /etc/redis.confq
```


查看redis是否启动
```shell
ps -ef | grep redis
```
通过以上命令得到的pid,可以用来关闭redis
```shell
sudo kill [pid]
```

## 本地连接
通过`redis-cli`进行本地连接

## 远程连接
远程连接需要设置`redis.conf`里的
- `bin 127.0.0.1 -::1` 需要注释掉
- `protected-mode no` 设置为no
- `supervised auto`设置为auto
- 