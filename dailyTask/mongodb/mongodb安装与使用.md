## macOS下用brew安装
```shell
brew tap mongodb/brew
brew install mongodb-community
```

## 使用docker安装
```shell
docker pull mongo:latest

 
docker run -d --restart=always -p 27017:27017 --name mymongo -v /data/db:/data/db -d mongo
```


## 连接远程mongodb
```shell
mongo --host 192.168.3.146
```