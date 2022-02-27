参照[这里](https://blog.csdn.net/u011781521/article/details/79669180)

直接使用in语法是行不通的
```xml
<delete id="deleteByIds" parameterType="java.lang.String">  
 delete from t_admin  
 where id in (#{ids})
</delete>
```

可以考虑把#换成$
```xml
<delete id="deleteByIds" parameterType="java.lang.String">  
 delete from t_admin  
 where id in (${ids})</delete>
```
但这样做并不安全,有sql注入的风险


还可以考虑使用MyBatis提供的[foreach标签](https://mybatis.org/mybatis-3/zh/dynamic-sql.html)
```xml
<select id="selectPostIn" resultType="domain.blog.Post"> 
	SELECT *
	FROM POST P 
	<where> 
		<foreach item="item" index="index" collection="list" 
				 open="ID in (" separator="," close=")" nullable="true"> 
			#{item} 
		</foreach>
	</where>
</select>
```
_foreach_ 元素的功能非常强大，它允许你指定一个集合，声明可以在元素体内使用的集合项（item）和索引（index）变量。它也允许你指定开头与结尾的字符串以及集合项迭代之间的分隔符。
```ad-note
你可以将任何可迭代对象（如 List、Set 等）、Map 对象或者数组对象作为集合参数传递给 _foreach_。当使用可迭代对象或者数组时，index 是当前迭代的序号，item 的值是本次迭代获取到的元素。当使用 Map 对象（或者 Map.Entry 对象的集合）时，index 是键，item 是值。
```

