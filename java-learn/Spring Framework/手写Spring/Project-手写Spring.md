#Project/Spring  #造轮子

## Target
完成一个相对完整的Spring框架, 包括 core context 等核心模块

还包括 SpringMVC

Spring JDBC

Spring 事务管理


## Resources
[mini-spring](x-devonthink-item://68095AEE-BDD0-4C01-9C12-E8BA074FC290): github上实现spring的迷你版, 有中文, 代码详细

[spring技术内幕](x-devonthink-item://89C9E2C9-DE4C-4D61-A0E0-6E27B95C7EFD): 写得很详细的spring代码原理书, 设计的方面很全面

## Progress
\[\#\#--------------------------\]
### [[2022-04-10 📅]]
IOC顶层结构设计: 
- [x] 基本环境搭建
- [x] IOC容器与BeanFactory相关的类
- [x] 注解相关

### [[2022-04-14 📅]]
DI注入代码:
只是熟悉了代码, 还没有实现
- [ ] getBean --- DI核心
- [ ] initiateBean --- 将 BeanDefinition 转化成实例, 并存入 IOC
- [ ] postProcessor --- 后处理器
- [ ] poluteBean --- 对Autowired注解的变量进行注入

### [[2022-04-15 📅]]
DI注入代码:
实现了DI部分
- [x] getBean --- DI核心
- [x] initiateBean --- 将 BeanDefinition 转化成实例, 并存入 IOC
- [x] postProcessor --- 后处理器
- [x] populateBean --- 对Autowired注解的变量进行注入