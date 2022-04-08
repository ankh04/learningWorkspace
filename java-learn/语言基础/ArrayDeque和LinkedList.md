ArrayDeque和LinkedList都实现了`Deque`接口,  但是ArrayDeque的效率要比LinkedList高. 
原因主要有两点
- LinkedList更容易引起垃圾回收, 而垃圾回收是昂贵的
- LinkedList的存储空间分布零碎, 不方便CPU读写
原文:
>I believe that the main performance bottleneck in `LinkedList` is the fact that whenever you push to any end of the deque, behind the scene the implementation allocates a new linked list node, which essentially involves JVM/OS, and that's expensive. Also, whenever you pop from any end, the internal nodes of `LinkedList` become eligible for garbage collection and that's more work behind the scene. Also, since the linked list nodes are allocated here and there, usage of CPU cache won't provide much benefit.



## 该如何选择?
通常来说, 如果队列中的元素只有几百个, 两者的区别并不大.

但如果数量量级来到了万, 使用ArrayDeque效率会更高.

![](https://picture-bed-1301848969.cos.ap-shanghai.myqcloud.com/20220408120611.png)


ArrayDeque效率比LinkedList好, 应当尽可能用ArrayDeque.

但需要注意的是, ArrayDeque没有实现 List 接口, 因此它更适合作为内部变量使用.