```shell
docker run -d -v nginx:/etc/nginx --net host nginx
```


在配置nginx的时候有个坑
```
upstream my_server {                                                         
    server 10.0.0.2:8080;                                                
    keepalive 2000;
}
server {
    listen       80;                                                         
    server_name  10.0.0.1;                                               
    client_max_body_size 1024M;

    location /my/ {
        proxy_pass http://my_server/;
        proxy_set_header Host $host:$server_port;
    }
}
```
通过以下配置,访问nginx地址http://10.0.0.1:80/my的请求会被转发到my_server服务地址http://10.0.0.2:8080/。

而如果把`my_server`后面的`/`去掉
```
upstream my_server {                                                         
    server 10.0.0.2:8080;                                                
    keepalive 2000;
}
server {
    listen       80;                                                         
    server_name  10.0.0.1;                                               
    client_max_body_size 1024M;

    location /my/ {
        proxy_pass http://my_server;
        proxy_set_header Host $host:$server_port;
    }
}
```
那么，访问nginx地址http://10.0.0.1:80/my的请求会被转发到my_server服务地址http://10.0.0.2:8080/**my**。这是因为proxy_pass参数中如果不包含url的路径，则会将location的pattern识别的路径作为绝对路径。