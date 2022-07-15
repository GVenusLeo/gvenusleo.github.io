# 02 - NumPy (2)

## 一、爱因斯坦求和约定

对于矩阵运算，NumPy 还提供了 `einsum()` 方法，它根据爱因斯坦求和约定来执行一些求和操作。该方法并不是一个简单的求和运算方法，而是一个高效的符号计算规则，它可以实现矩阵的各种求和操作(如点乘、转置、矩阵求迹等)。在深度学习框架(如 TensorFlow 或 PyTorch)中，`einsum()` 还可以用与神经网络框架的任意计算图，并支持反向传播计算。

### 1. 爱因斯坦求和约定

爱因斯坦求和约定(Einstein summation convention)又称为爱因斯坦标记法(Einstein notation)，由物理学家阿尔伯特 · 爱因斯坦于 1916 年提出，在处理关于坐标的方程式时十分有用。

这种约定，简单来说就是**省去了求和公式中的求和符号**。对于下面的点乘公式：

$$
s = \sum_{i}\nu_i \omega_i
$$

这个公式表述的是，两个向量对应的元素相乘后再求和。爱因斯坦觉得这种数学符号过于繁琐，求和符号纯属多余，于是发明了另一种写法：

$$
s = \nu_i \omega^i
$$

在爱因斯坦的标记体系中，**下标表示行向量中的元素**：

$$
\begin{bmatrix}
 \nu _1 & \nu _2 & ... & \nu_k
\end{bmatrix}
$$

**上标表示列向量中的元素**：
$$
\begin{bmatrix}
\omega ^1
 \\ \omega ^2
 \\ ...
 \\ \omega ^k

\end{bmatrix}
$$

类似的，矩阵 A 中第 m 行第 n 列的元素，以前标记为$A_{mn}$，现在标记为$A_n^m$。

下面列出用爱因斯坦标记法来表示的一般运算：

1.  内积(Inner product)：即数量积。

$$
{u}\cdot {\nu } = u_j\nu^i
$$

2.  向量乘以矩阵(Matrix-vector multiplication)：矩阵 A 乘以向量$\nu$。

$$
u^i = A_j^i\nu^j
$$

3.  矩阵乘法(Matrix multiplication)：矩阵$A_{i\times j}$与矩阵$B_{j\times k}$的乘法。

$$
C_{k}^j = A_j^iB_k^j
$$

4.  矩阵的迹(Trace)：$i\times i$的矩阵 A 的主对角线(左上角至右下角)上各元素的和。

$$
t = A_i^i
$$

5.  外积(Outer product)：M 维向量和 N 维向量的外积是一个$M\times N$的矩阵 A。

$$
A_j^i = a^ib_j
$$

### 2. NumPy 中的 `einsum()` 方法

`einsum()` 使用格式字符串来间接实现上下标的功能，从而实现求和、求内积、求外积、矩阵乘法、矩阵转置、求迹等操作。弱国分别使用 `sum()`、`mat()`、`trace()`、`tensordot()` 等方法来实现这些功能，不但方法名称复杂，额日期额对于高维张量，进行维度计算时很容易出错。

`einsum()` 方法的格式如下：

```python
einsum("格式字符1, 格式字符2, 格式字符3 -> 格式字符4", arg1, arg2, arg3)
```

理论上 `einsum()` 方法支持任意多的参数，该方法的第一个参数即格式字符串至关重要，直接决定这个方法实现的功能。格式字符串的规定如下：

- 不同的输入字符之间用逗号 `,` 隔开，输入字符与输出字符之间用箭头 `->` 隔开。
- 输入字符的数量要与参与运算的变量数量相匹配。
- 格式字符的字符数(字符串长度)和张量的维度相对应。

例如，对于指令 `einsum('ijk, ijl -> kl', a, b)`，可以知道张量 `a` 和 `b` 都是三维矩阵，计算结果是一个二维张量。

```python
import numpy as np

arr = np.arange(10)
sum = np.einsum('i ->', arr)        # 一维张量求和
print(sum)

# 45

arr2 = np.arange(20).reshape(4, 5)
sum2 = np.einsum('ij -> j', arr2)   # 二维张量按列求和
print(sum2)

# [30 34 38 42 46]
```

如果处理的张量维度很高，可以将多个维度用省略号替代，以表示剩下所有维度：

```python
result = np.einsum('i... -> ...', arr)  # 对arr进行降维求和
```

除了使用 `einsum()` 做加法，还可以做矩阵乘法。

```python
import numpy as np

a = np.arange(10).reshape(5, 2)
b = np.array([[2, 3, 4], [6, 7, 8]])
c = np.ones(shape=(2, 3))

result1 = np.einsum('ij, jk -> ik', a, b)   # 外积，等价于a @ b和np.dot(a, b)
print(result1)

# [[  6   7   8]
#  [ 22  27  32]
#  [ 38  47  56]
#  [ 54  67  80]
#  [ 70  87 104]]

result2 = np.einsum('ij, ij -> ij', b, c)   # 点乘，等价于a * b和np.multiply(a, b)
print(result2)

# [[2. 3. 4.]
#  [6. 7. 8.]]

result3 = np.einsum('ij, ij ->', b, c)      # 内积，等价于np.inner(a, b)
print(result3)

# 30.0

result4 = np.einsum('ii ->', np.arange(9).reshape(3, 3))    # 矩阵的迹
print(result4)

# 12

result5 = np.einsum('ij -> ji', a)          # 矩阵的转置
print(result5)

# [[0 2 4 6 8]
#  [1 3 5 7 9]]
```

## 二、NumPy 中的轴

在 NumPy 的多维数组中，常有“**约减**”(Reduce，也译作“规约”)的提法，表示将众多数据按照某一规则合并为一个或几个数据。约减之后，数据个数在总量上减少。例如，数组的加法操作是一种约减，求 N 维数组的均值 mean、最大值 max、最小值 min 等，都属于约减操作。

有时会有这样需求：对指定维度方向的值进行统计，如统计某一行的均值、最大值等。这时需要给“约减”指令指定方向。

事实上，`sum()`、`min()`、`max()`、`mean()` 等函数都有一个轴 `axis` 的参数，其默认值为 `None`，即不指定约减方向。

- `axis=0`：表示从垂直方向进行约减。
- `axis=1`：表示从水平方向进行约减。
- `axis=None`：表示所有维度都会被约减。

![N维数组约减方向](/img/data-analysis-02.png)

```python
import numpy as np

a = np.array([[2, 3, 4], [3, 4, 5]])
result = a.sum(axis=0)
print(result)
result = a.sum(axis=1)
print(result)

# [5 7 9]
# [ 9 12]
```

上面的代码也可以通过 `sinsum()` 实现。

对于高维数组，`axis` 的值可以是一个向量，如 `axis=[1,0]` 表示先进行水平方向的约减，再进行垂直方向上的约减。

对于高维数组，按照上面的图理解其约减过程并不直观，更加普适的解释是按照括号层次来理解。括号由外到内，对应从小到大的维数，如：

```python
import numpy as np

a = np.array([[[1,1,1], [2,2,2]], [[3,3,3], [4,4,4]]])
result = a.sum(axis=0)
print(result)

# [[4 4 4]
#  [6 6 6]]

result = a.sum(axis=1)
print(result)

# [[3 3 3]
#  [7 7 7]]
result = a.sum(axis=2)
print(result)

# [[ 3  6]
#  [ 9 12]]
```

上面的三维数组有 3 层括号，其维度由外到内分别为 [0，1，2]，指定 `axis=0` 表示在第 0 个维度的元素之间进行操作，即在去除最外层括号后对应的元素之间进行约减，没有被约减的维度，其括号保持不变。

其他可实施约减的函数，如 `max`、`min` 和 `mean` 等，其轴方向的约减也是类似的。

## 三、操作数组元素

### 1. 通过索引访问数组元素

与访问列表元素一样，可以通过数组的下标即索引值访问数组中的值，数组同样支持反向索引。访问二维数组时，需要两个索引值，NumPy 提供了两种方法：

```python
import numpy as np

a = np.array([[2,3,4], [6,7,8]])
a[1][1] = 10
print(a[1,1])

# 10
```

### 2. 切片访问

与列表类似，NumPy 中可以使用**切片**来批量获取或修改数组数据，切片操作的核心是从原始数组中，按照给定规则提取出一个新的数组，对原始数组没有任何影响。

```python
import numpy as np

a = np.arange(10)
b = a[slice(0,9,2)]
print(a)
print(b)

# [0 1 2 3 4 5 6 7 8 9]
# [0 2 4 6 8]
```

上面的代码通过 `slice()` 函数实现了从 0 到 9 间隔为 2 的切片。

切片更简单的实现方法时通过冒号分隔切片参数：

```python
数组名[start:end:step]
```

这 3 个参数都是可以省略的，步长也可以取负值，具体的用法同列表切片。

### 3. 二维数组的转置与展平

使用 `transpose()` 方法将二维数组**转置**，该方法可以简写为 `T`：

```python
import numpy as np

a = np.array([[1,2,3], [4,5,6], [7,8,9]])
print(a.transpose())	# print(a.T)

# [[1 4 7]
#  [2 5 8]
#  [3 6 9]]
```

该转置仅仅得到原数组的视图，**原数组没有改变**。

使用 `ravel()` 方法和 `flatten()` 方法可以**将多维数组降维成一维数组**：

```python
import numpy as np

a = np.array([[1,2,3], [4,5,6], [7,8,9]])
print(a.ravel())
print(a.flatten())

# [1 2 3 4 5 6 7 8 9]
# [1 2 3 4 5 6 7 8 9]
```

这两种方法都是得到原数组的视图，**原数组没有改变**。不同的是，`flatten()` 会重新分配内存，完成一次从原始数据到新内存空间的深拷贝。

也可以通过显式的变形来完成数组的降维：

```python
import numpy as np

a = np.array([[1,2,3], [4,5,6], [7,8,9]])
print(a.reshape(1, -1))

# [[1 2 3 4 5 6 7 8 9]]
```

上面通过 `reshape()` 函数重新定义了一个二维数组，“1”表示数组行数为 1，“-1”表示函数的列数由系统自动推断。**对于 N 维数组，当 N-1 维尺寸确定后，用“-1”标记剩余维度，表示让系统推算剩余维度尺寸，这种做法在高维数组操作中(如深度学习框架 TensorFlow)很常用。**
