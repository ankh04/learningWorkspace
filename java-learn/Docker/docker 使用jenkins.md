找到自己的jenkins的image id,运行
```shell
docker run \
  --rm -d\
  --net host\
  -u root \
  -p 7070:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  42f72e216612
```
查看容器id
```shell
docker ps
```
查看日志
```shell
docker logs xxxxx
```

```shell
docker run --net host -v $PWD:/mnt -d -p 8888:8888 paddlecloud/paddlespeech:develop-cpu-657c42

paddlespeech asr --lang zh --input 高音.mp3
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

如果设置了还是没用,可以考虑对容器做代理
1. 首先在宿主机设置代理,具体操作见[[命令行翻墙]]

2. 首先对docker做全局代理设置
创建`~/.docker/config.json`,写入以下内容
```
{
     "proxies": {

         "default":
         {
             "httpProxy": "http://127.0.0.1:7890",
             "httpsProxy": "http://127.0.0.1:7890",
             "noProxy": "localhost,127.0.0.1,.example.com"
         }
       }
   }
   }
```
然后重启docker

3. 运行容器,并且在`docker run`命令中加入`--net host`参数,让容器的和宿主机公用同一个网络名称空间
	注意此事就没有 宿主机和容器的端口映射了,
以上操作引用自[这里](https://kebingzao.com/2019/02/22/docker-container-proxy/)



##  [Jenkins. Invalid agent type "docker" specified. Must be one of [any, label, none]](https://stackoverflow.com/questions/62253474/jenkins-invalid-agent-type-docker-specified-must-be-one-of-any-label-none)
安装 `Docker Pipeline`插件


构建的时候出了这个错误
```shell
process apparently never started in /var/jenkins_home/workspace/simple-node-js-react-npm-app@tmp/durable-61d45e75

(running Jenkins temporarily with -Dorg.jenkinsci.plugins.durabletask.BourneShellScript.LAUNCH_DIAGNOSTICS=true might make the problem clearer)

script returned exit code -2
```
以下是我的分析,由于jenkinsFile里使用docker下载的node进行构建的,这样带来一个问题,程序需要进一步的进入node的docker环境进行构建,这样第一层的docker代理就没办法向下传递了,因此npm一致由于墙的原因下载不了数据,导致超时错误

这里考虑在jenkins本地安装node,并配置国内镜像源.

	这里顺便把maven,jdk,node一起换成本地的好了
```
$ whereis java
java: /usr/bin/java /usr/share/java /usr/lib/jvm/java-17-openjdk/bin/java

$ whereis mvn
mvn: /usr/bin/mvn /opt/maven/bin/mvn

$ whereis node
node: /usr/bin/node /usr/local/bin/node /usr/include/node

$ whereis docker
docker: /usr/bin/docker /var/lib/docker
```

然后记得做数据卷
```shell
docker run \
  --rm -d\
  --net host\
  -u root \
  -p 7070 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /usr/lib/jvm/java-17-openjdk:/usr/lib/jvm/java-17-openjdk \
  -v /opt/maven:/opt/maven \
  -v /usr/software/node:/usr/software/node \
  -v /var/lib/docker:/var/lib/docker \
  -v "$HOME":/home \
  42f72e216612
```