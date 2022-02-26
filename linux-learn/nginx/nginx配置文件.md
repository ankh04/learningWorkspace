# nginx配置文件

### 位置
```shell
docker exec -it nginx bash
cd /etc/nginx/

# 里边有个nginx.conf
# 这个nginx.conf主要包含evnts块,http块
# 这个nginx.conf在里边include了/etc/nginx/conf.d/*.conf
# 所有需要频繁更改的server块放在/etc/nginx/conf.d/*.conf这里
```