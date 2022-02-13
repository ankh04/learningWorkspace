```java

package host.ankh.servlet; /**  
 * @author ankh  
 * @created at 2022-02-13 8:44 PM  
 */  
import com.alibaba.fastjson.JSONObject;  
  
import javax.servlet.ServletException;  
import javax.servlet.annotation.WebServlet;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.PrintWriter;  
import java.util.Arrays;  
import java.util.Map;  
import java.util.Set;  
  
@WebServlet(name = "QuickServlet", value = "/test")  
public class QuickServlet extends HttpServlet {  
  
    public QuickServlet() {  
        System.out.println("创建对象...");  
 }  
  
    @Override  
 public void init() throws ServletException {  
        System.out.println("初始化...");  
 }  
  
    @Override  
 public void destroy() {  
        System.out.println("销毁...");  
 }  
  
    @Override  
 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
        System.out.println("get被执行");  
 }  
  
    @Override  
 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
        // 获取包含全部请求参数的Map  
 // 这里的参数指的是url里的参数  
 System.out.println("post被执行");  
 Map<String, String[]> pm = request.getParameterMap();  
  
 // 遍历这个Map  
 Set<String> keySet = pm.keySet();  
 for (String key : keySet) {  
            String[] values = pm.get(key);  
 System.out.println(key + "=" + Arrays.toString(values));  
 }  
        System.out.println("------------------------------------");  
  
 String season = request.getParameter("season");  
 System.out.println("season = " + season);  
  
 // 只能获取到多个值中的第一个  
 String team = request.getParameter("team");  
 System.out.println("team = " + team);  
  
 // getParameterValues()方法：取单选框的请求参数  
 String[] seasons = request.getParameterValues("season");  
 System.out.println("Arrays.asList(seasons) = " + Arrays.asList(seasons));  
  
 // getParameterValues()方法：取多选框的请求参数  
 String[] teams = request.getParameterValues("team");  
 System.out.println("Arrays.asList(teams) = " + Arrays.asList(teams));  
  
 System.out.println("------------------------------------");  
  
  
 // 负载payload通过getReader()方法读取  
 // java没有内置处理json数据的方法,可以使用阿里巴巴的fastjson解析json字符串  
 StringBuilder sb = new StringBuilder();  
 JSONObject builderJson = null;  
 try (BufferedReader reader = request.getReader();) {  
            char[] buff = new char[1024];  
 int len;  
 while ((len = reader.read(buff)) != -1) {  
                sb.append(buff, 0, len);  
 }  
            String str = sb.toString();  
 builderJson = JSONObject.parseObject(str);  
 System.out.println(builderJson.toString());  
 } catch (IOException e) {  
            e.printStackTrace();  
 }  
  
        System.out.println("------------------------------------");  
  
  
  
 // 处理返回数据  
 PrintWriter writer = response.getWriter();  
 writer.write("hello servlet");  
 }  
}
```