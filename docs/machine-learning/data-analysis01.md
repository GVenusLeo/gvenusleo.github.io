# 01 - NumPy (1)

## 一、NumPy 简介

在机器学习算法中，经常用到数组与矩阵(向量)运算。虽然 Python 提供了列表可以用作数组，但列表中的元素可以是任意对象，为了区分彼此 Python 必须保存每个对象的指针。而对于数值运算来说，它们的对象类型通常是整齐划一的，因此直接采用 Python 自带的列表显然是低效的。

虽然 Python 提供 `array`(数组)模块，但仅支持一维数组，也没有各种运算函数，不适合用于数值运算。

为了弥补 Python 数值运算的不足，Jim Hugunin 等人联合开发了 NumPy 项目。NumPy 是 Python 的扩展程序库，支持 N 维数组对象(ndarray)和矩阵运算，并对数组运算提供了大量的数学函数库。NumPy 功能十分强大，支持广播、线性代数运算、傅里叶变换、随机数生成等功能，对很多第三方库(如 SciPy、Pandas 等)提供了底层支持。

由于 NumPy 是第三方库，使用前需要用 `pip` 安装，使用时需要先进行 `import` 导入。

## 二、生成 NumPy 数组

### 1. 利用序列生成

生成 NumPyt 数组最简单的方法是使用 `array()` 方法，该方法可以接受任意类型的数据作为数据源。

NumPy 数组中的元素必须是同一数据类型，当数据源类型的精度不统一时，NumPy 会遵循“就高不就低(upast)”的原则进行类型转换。如：数据源中既有整数也有浮点数时，NumPy 自动将所有数据转为浮点数。

每个数组都有一个 `dtype` 属性，用来描述数组的数据类型。除非使用 `astype()` 方法显式指定，否则 `np.array()` 会自动推断数据类型。

```python
import numpy as np

data = [6, 2.5, 4, 0]
arr = np.array(data)
print(arr)
print(arr.dtype)
arr = arr.astype(np.int32)
print(arr.dtype)

# [6. , 2.5, 4. , 0. ]
# float64
# int32
```

如果数据序列是嵌套的，且嵌套序列等长，通过 `array()` 方法可以把嵌套的序列转为与嵌套级别相匹配的高维数组。

```python
import numpy as np

data = [[1, 2, 3, 4], [5, 6 ,7 ,8]]
arr = np.array(data)
print(arr)

# [[1, 2, 3, 4],
#  [5, 6, 7, 8]]
```

### 2. 利用特定函数生成

除了利用数据序列生成 NumPy 数组，还可以使用 `np.arange()` 方法来生成：

```python
np.arange(start, stop, step, dtype)
```

该方法根据指定的起始值 `start`、终止值 `stop`、步长 `step` 生成一个 ndarray 对象。起始值默认为 0，取值区间左闭右开，步长默认为 1，`dtype` 是可选的。

```python
import numpy as np

arr = np.arange(2, 10, 1.5)
print(arr)

# [2.  3.5 5.  6.5 8.  9.5]
```

如果想在指定区间内生成指定个数的等间隔数组，可以使用 `np.linspace()` 函数。该函数前两个参数分别指定左右区间边界，默认都是闭区间，第三个参数指定元素个数。可以通过使用 `endpoint=False` 来修改区间为左开右闭区间。

```python
import numpy as np

ls = np.linspace(1, 10, 5)
print(ls)

# [ 1.    3.25  5.5   7.75 10.  ]
```

### 3. 其他常用函数

除了 `np.arange()`、`np.linscpce()` 等函数生成数组外，还可以利用 `np.zeros()` 和 `np.ones()` 等函数生成指定维度和填充固定值的数组。这两个函数通常用于对某些变量进行初始化。

- `np.zeros()`：生成的数组由 0 填充。
- `np.ones()`：生成的数组由 1 填充。

这两个函数通过一个元组或列表指定生成的数组的维度，可以通过 `dtype` 参数设置元素类型。

```python
import numpy as np

zeros = np.zeros((3, 4))
print(zeros)

# [[0. 0. 0. 0.]
#  [0. 0. 0. 0.]
#  [0. 0. 0. 0.]]

ones = np.ones((3, 4), dtype = float)
print(ones)

# [[1. 1. 1. 1.]
#  [1. 1. 1. 1.]
#  [1. 1. 1. 1.]]
```

还有一种生成全 0 或全 1 数组的方法：`np.zores_like()` 方法和 `np.ones_like()` 方法。这两个方法会借用某个给定的数组的类型和维度，但其中全部元素被换为 0 或 1。

```python
import numpy as np

arr = np.arange(6)
arr = arr.reshape((2, 3))  ## 重构数组尺寸
arr = np.ones_like(arr)
print(arr)

# [[1 1 1]
#  [1 1 1]]
```

上面的例子使用了一个函数 `np.reshape()`，该函数的作用是重构数组的尺寸。
与 `np.zeros_like()` 和 `np.ones_like()` 类似的函数还有：

- `np.empty_like()`：生成和给定数组的尺寸和类型相同的数组，但该数组中的元素没有被初始化。
- `np.full_like()`：生成和给定数组的尺寸和类型相同的数组，该数组中的元素被初始化为某个给定值。

## 三、N 维数组的属性

一个 N 维数组就是一个通用的同类数据容器，也就是说它包含的每个元素数据类型相同。每个数组都有两个重要属性：

- `ndim`：维度(dimension)属性。
- `shape`：形状属性。

```python
import numpy as np

arr = np.arange(6)
arr = arr.reshape((2, 3))
print(arr.ndim)
print(arr.shape)

# 2
# (2, 3)
```

通常，一维数组也成为 1D 张量(1D Tensor)，二维数组也成为 2D 张量，以此类推。
> 张量(Tensor)是矩阵在任意维度上的推广，张量的维度通常称为轴(axis)。
> - 0D 张量：只包括一个数字的张量，如常数 3.14。
> - 1D 张量：一维数组，也成为向量。
> - 2D 张量：二维数组，也成为矩阵。
> - 3D 张量或更高维张量：以此类推。

需要注意的是，NumPy 表示三维数组维度信息的方式与我们通常的认知不同。比如：想创建两个 3 行 5 列的数组，它的形状参数维 `(2,3, 5)`，而不是 `(3,5, 2)`。

## 四、NumPy 数组的运算

### 1. 逐元素运算

对两个已知列表，求对应元素的和，除了利用 `for` 循环外，还可以利用列表推导式。但这两个方法的代码可读性均不强。更高效和直观的方法是使用 NumPy 数组的逐元素运算。

```python
import numpy as np

list1 = [12, 43, 37, 58, 44]
list2 = [76, 39, 41, 72, 48]
list1_arr = np.array(list1)
list2_arr = np.array(list2)
list_sum = list1_arr + list2_arr
print(list_sum)

# [ 88  82  78 130  92]
```

NumPy 吸收了 Fortran 和 MATLAB 等语言的优点，只要操作的数组形状(维度)一致，就可以很方便地进行逐元素(element-wise)的加、减、乘、除、取余、指数运算等操作。

### 2. 算术运算

NumPy 提供很多统计函数：

- `sum()`：求和
- `min()`：求最小值
- `max()`：求最大值
- `median()`：求中位数
- `mean()`：求平均数
- `average()`：求加权平均数
- `std()`：求标准差
- `var()`：求方差

此外，还提供很多数学函数如三角函数 `sin()`、`cos()`、`tan()` 等。更多函数和具体用法可查阅 NumPy 官方文档：

### 3. 矩阵运算

NumPy 中数组(或张量)的运算，都是基于更为基础的算法库—基础线性子程序(basic linear algebra subprograms，简称 BLAS)而实现的。BLAS 是一个更底层的、高度并行和优化的张量操作程序，通常用 Fortran、C 语言来编写，为了追求效率，部分代码甚至用更为底层的汇编语言来编写。

一般来说，NumPy 的数组元素按都是逐元素进行的，但实际上，数学中的二维数组(矩阵)的运算有时并不是简单的逐元素计算，也没有要求参与计算的矩阵维度必须一致，比如矩阵的乘法。

![数学意义上的矩阵乘法运算规则](/img/da01.png)

NumPy 为逐元素的数组乘法提供了 `multiply()` 函数，为数学意义上的矩阵乘法(点乘)提供了 `dot()` 函数。除了使用 `dot()` 函数对数组进行点乘外，还可以直接将数组转为矩阵形式，然后直接相乘，得到与点乘相同的结果。

```python
import numpy as np

a = np.arange(9).reshape(3, 3)
b = np.ones(shape=(3, 2))
result = np.dot(a, b)
print(result)

# [[ 3.  3.]
#  [12. 12.]
#  [21. 21.]]

a = np.mat(a)
b = np.mat(b)
print(a * b)

# [[ 3.  3.]
#  [12. 12.]
#  [21. 21.]]
```

对于 NumPy 中的矩阵(maxtrix)，还有几个常用函数：

```python
import numpy as np

a = np.mat(np.random.random((2, 2)))
print(a)
print(a.I)  # 返回逆矩阵
print(a.T)  # 返回转置矩阵
print(a.A)  # 返回对应的二维数组
```

此外，还有以下函数：

- `np.eye()`：生成单位矩阵。
- `np.diag()`：生成指定对角线元素的矩阵。
