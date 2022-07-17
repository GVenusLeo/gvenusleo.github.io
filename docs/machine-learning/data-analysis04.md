# 04 - Pandas (1)

Pandas 是基于 NumPy 构建的数据分析包，与 NumPy 不同，Pandas 在设计之初就是倾向于支持图表和混杂数据运算的，其数据处理结构为 `Series` (类似于一维数组)和 `DataFrame` (类似于二维数组)。相比之下，NumPy 是基于数组构建的，NumPy 中的数组一旦被设置为某种数据类型就不能改变。

Pandas 除了可以通过管理索引来快速访问数据、执行分析和转换运算，还利用 Matplotlib 作为后端支持进行高效绘图。其数据读取能力也极为出色，支持从多种数据存储文件(如 CSV、TXT、Excel、HDF5 等)中读取数据，支持从数据库(如 SQL)中读取数据，还支持从 Web (如 JSON、HTML 等)中读取数据。

使用 Pandas 时需要先导入：

```python
import pandas as pd
```

下面先介绍 Pandas 的核心数据结构之一：Series。

## 一、Series 的创建

### 1. 创建 Series

**Series** 是一种类似于一维数组的数据结构，是由一组数据及与之对应的标签(即索引)构成的。创建 Series 的语法非常简单：

```python
pd.Series(data, index=index)
```

`data` 为数据源，可以为任意 Python 对象，Series 为数据增加对应的标签(label)作为索引。如果没有显式添加索引，Python 会自动添加一个 0～n-1 内的索引值。通常的视图是索引在左，数值在右。可以通过 Series 的 `index` 和 `values` 属性分别获取索引和数组元素的值：

```python
import pandas as pd

a = pd.Series([23, 51, 68, 47])
print(a)
print(a.index)
print(a.values)

# 0    23
# 1    51
# 2    68
# 3    47
# dtype: int64
# RangeIndex(start=0, stop=4, step=1)
# [23 51 68 47]
```

创建 Series 对象时，其标签也可以被显式指定为其他类型，甚至可再创建索引后被二次修改：

```python
import pandas as pd

a = pd.Series(data=[23, 51, 68, 47], index=['a', 'b', 'c', 'd'])
print(a)
a.index = ['one', 'two', 'three', 'four']
print(a)

# a    23
# b    51
# c    68
# d    47
# dtype: int64
# one      23
# two      51
# three    68
# four     47
# dtype: int64
```

Series 与 Python 中的字典有相似之处，也可以由现有字典数据类型通过打包来创建：

```python
import pandas as pd

a = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
a = pd.Series(a)
print(a)

# a    1
# b    2
# c    3
# d    4
# dtype: int64
```

Series 与字典也有不同之处：字典是一种无序的数据类型，而 Series 是有序的；Series的索引和值之间是相互独立的；Series 的索引可变的，而字典的键不可变。

### 2. name 属性

除了 `index` 和 `values` 外，Series 还有 `name` 和 `index.name` 属性。`name` 可以理解为数值列的名称。如果把 `index` 也理解为一个特殊索引列的话，那么 `index.name` 就是这个索引列的名称。

`name` 属性多用在 Pandas 另外一个常见的数据结构 DataFrame 中，DataFrame 可视为多个 Series 对象的组合。

默认情况下，`name` 与 `index.name` 都被设置为 None。在特定场合下，我们也可以通过如下代码进行修改：

```python
import pandas as pd

a = pd.Series([23, 45, 67, 89])
a.name = '长度'
a.index.name = '标签'
print(a)

# 标签
# 0    23
# 1    45
# 2    67
# 3    89
# Name: 长度, dtype: int64
```

### 3. 简单统计分析

Series 还提供了简单的统计方法 `describe()` 用于以列为单位进行简单的**统计分析**：

```python
import pandas as pd
import numpy as np

a = pd.Series(np.random.random(5))
print(a.describe())

# count    5.000000     # 个数
# mean     0.504238     # 均值
# std      0.414995     # 方差
# min      0.078468     # 最小值
# 25%      0.092296     # 前 25% 分位数
# 50%      0.545315     # 前 50% 分位数
# 75%      0.805322     # 前 75% 分位数
# max      0.999787     # 最大值
# dtype: float64
```

## 二、Series 中的数据访问

可以通过**索引**或者**标签**访问、修改 Series 中的数值，甚至可以按任意顺序访问多个索引或标签对应的值：

```python
import pandas as pd

a = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
a = pd.Series(a)
a[0] = 99
print(a[['a', 'd']])

# a    99
# d     4
# dtype: int64
```

需要注意：如果同时访问多个标签对应的数值，那么这多个索引或标签需要以列表的形式出现。

## 三、Series 中的向量化操作与布尔索引

### 1. 向量化操作

类似于 NumPy，Pandas 中的数据结构也支持广播操作。

```python
import pandas as pd

a = pd.Series([1, 2, 3])
print(a*2)

# 0    2
# 1    4
# 2    6
# dtype: int64
```

::: tip 注意
任何 NaN ( Not a Number，即空置)参与的计算，返回的结果依然是 NaN。
:::

还可以实施向量化的加法操作：

```python
import pandas as pd

a = pd.Series([1, 2, 3])
print(a + a)                # 等价于 a*2
```

### 2. 布尔索引

类似于 NumPy，Pandas 也支持利用布尔表达式提取符合条件的值：

```python
import pandas as pd

a = pd.Series([1, 2, 3, 4])
print(a > a.median())       # a 中元素与中位数比较
print(a[a > a.median()])

# 0    False
# 1    False
# 2     True
# 3     True
# dtype: bool
# 2    3
# 3    4
# dtype: int64
```

Series 对象也可以作为 NumPy 函数的一个参数：

```python
import pandas as pd
import numpy as np

a = pd.Series(np.random.randint(1, 10, (4,)))
print(a)
print(np.square(a))

# 0    8
# 1    4
# 2    2
# 3    7
# dtype: int64
# 0    64
# 1    16
# 2     4
# 3    49
# dtype: int64
```

## 四、Series 中的切片

可通过索引切片选取或处理 Series 中一个或多个值，其返回的依然是 Series 对象：

```python
import pandas as pd

a = pd.Series([1, 2, 3, 4])
print(a[1:3])

# 1    2
# 2    3
# dtype: int64
```

## 五、Series 中的缺失值

在处理数据时，经常会遇到一些缺失值，Pandas 对缺失值的处理十分友好，们可以使用 NumPy 中的 `numpy.nan` 来创建一个缺失值，在 Pandas 中，缺失值用 NaN ( Not a Number，非数字)来表示。可以使用 Pandas 中的 `isnull()` 和 `notnull()` 两个方法来检测数据中是否含有缺失值。

```python
import pandas as pd
import numpy as np

a = pd.Series(np.array([2, 4, 6, np.nan]))
print(a[a.isnull() == True])

# 3   NaN
# dtype: float64
```

## 六、Series 中的数据的修改

### 1. 删除数据

使用 Pandas 中的 `drop()` 方法可以删除一条或多条数据，该操作是在原 Series 对象的一个视图上进行的，并不会改变原 Series 对象，如果想直接删除 Series 中的数据，可以启用 `drop()` 方法中的 `inplace` 参数：

```python
import pandas as pd

a = pd.Series([1, 2, 3, 4])
a.drop([0, 2])
print(a)
a.drop([0, 2], inplace=True)
print(a)

# 0    1
# 1    2
# 2    3
# 3    4
# dtype: int64
# 1    2
# 3    4
# dtype: int64
```

### 2. 修改和添加数据

与字典类似，可以直接通过索引向 Series 对象修改和添加数据：

```python
import pandas as pd

a = pd.Series([1, 3, 5])
a[3] = 7
a[0] = 0
print(a)

# 0    0
# 1    3
# 2    5
# 3    7
# dtype: int64
```

