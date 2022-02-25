找到自己的jenkins的image id,运行
```shell
 docker run \
  --rm \ 
  -d \
  -u root \
  -p 7070:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  xxxxxxxx
```
查看容器id
```shell
docker ps
```
查看日志
```shell
docker logs xxxxx
```


## 128错误
[解决方案](https://blog.csdn.net/tt75281920/article/details/105434989)
url写https的仓库地址而不要写本地的,如果非要用本地的,需要使用ssh
```shell
https://github.com/ankh04/simple-java-maven-app.git
```
记住增加账户凭证


## github无法访问
设置hosts
```shell
curl https://raw.hellogithub.com/hosts >> /etc/hosts
```


##  [Jenkins. Invalid agent type "docker" specified. Must be one of [any, label, none]](https://stackoverflow.com/questions/62253474/jenkins-invalid-agent-type-docker-specified-must-be-one-of-any-label-none)
安装 `Docker Pipeline`插件