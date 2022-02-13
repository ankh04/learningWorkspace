### Tomcat扮演的角色
对外是 web服务器

![./images](https://heavy_code_industry.gitee.io/code_heavy_industry/assets/img/img006.6322df7f.png)
对内是 Servlet容器

![./images](https://heavy_code_industry.gitee.io/code_heavy_industry/assets/img/img007.5451f45d.png)


通过执行Tomcat根目录下的`\bin\startup.sh`文件即可
注意权限问题
之后就可以访问`localhost:8080`访问Tomcat首页

如果需要关闭则可以使用 `\bin\shutdown.sh` 关闭tomcat服务.

Idea中内置了Tomcat
需要指定web结构的module,然后配置Tomcat Server