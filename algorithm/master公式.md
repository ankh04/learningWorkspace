# Master公式(主定理)
若一个算法的递归行为复杂度可以写为：
$$
T(N)=aT(\frac{N}{b})+O(N^d)
$$
根据$a,b,c$的关系可以得到$T(N)$的复杂度为：
$$
\begin{align*}
\begin{split}
T(N)= \left \{
\begin{array}{ll}
    N\log_ba,                    & \log_ba>d\\
    N^d\log_ba,                  & \log_ba=d\\
    N^d,                         & \log_ba<d
\end{array}
\right.
\end{split}
\end{align*}
$$