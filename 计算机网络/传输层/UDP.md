UDP在传输层做尽量少的工作.
UDP除了**复用/分解功能**以及**少量的差错检测**外, 什么都不做.

UDP与TCP不同, 没有握手环节, 因此UDP是*无连接的*

UDP和TCP的主要区别在于: ==TCP提供了可靠数据传输服务(因此牺牲了一部分性能)==
UDP没有拥塞控制机制
UDP没有连接状态
UDP的首部很小, 只有8字节


应用程序如果想在保证一定的数据可靠性的前提下保证速度, 可以考虑在UDP的基础上让应用程序来保证数据可靠性(这种实现可能比TCP简单, 但比TCP快)
 
DNS通常使用UDP

## UDP校验和
UDP发送端把除校验和之外的三个首部字段加在一起, 然后再按位取反求出校验和.

UDP接收端把四个首部字段加在一起, 如果是全1, 那么就是校验成果, 否则校验失败.

