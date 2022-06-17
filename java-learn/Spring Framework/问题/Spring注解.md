## 如何使用注解装配?
在配置文件中使用`<context: annotation-config />`开启注解装配.

## @Component @Controller @Repository @Service有什jj么区别?
- `@Component` *将类标记为Bean*
- `@Controller` 是 @Component的特化, 不提供额外功能, 但是会有更好的语义. *表示将类标记为 String MVC控制器*
- `@Service` 是 @Component的特化, 不提供额外功能, 但是会有更好的语义. *表示将类标记为服务层*
- `@Repository`  是 @Component的特化, 不提供额外功能, 但是会有更好的语义. *表示将类标记为 DAO*

## @Required有什么作用?
用在setter方法上, 表示必须为这个属性填入依赖
```java
public class Employee {  
  
    private String name;  
      
    @Required  
    public void setName(String name){  
        this.name=name;  
    }  
      
    public string getName(){  
        return name;  
    }  
      
}
```

## @Autowired有什么作用?
可以用在 `setter方法`, `构造函数`,  `域` 上

默认先按类型注入, 再按名称注入

## @Quailfer注解有什么作用?
当一个依赖可以被Bean装配, 就需要手动指定一个*消除歧义*
```java
public class EmployeeAccount {  
  
    @Autowired  
    @Qualifier(emp1)  
    private Employee emp;  
  
}
```