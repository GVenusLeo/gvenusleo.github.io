# 04 - Pandas (1)

Pandas 是基于 NumPy 构建的数据分析包，与 NumPy 不同，Pandas 在设计之初就是倾向于支持图表和混杂数据运算的，其数据处理结构为 `Series` (类似于一维数组)和 `DataFrame` (类似于二维数组)。相比之下，NumPy 是基于数组构建的，NumPy 中的数组一旦被设置为某种数据类型就不能改变。

Pandas 除了可以通过管理索引来快速访问数据、执行分析和转换运算，还利用 Matplotlib 作为后端支持进行高效绘图。其数据读取能力也极为出色，支持从多种数据存储文件(如 CSV、TXT、Excel、HDF5 等)中读取数据，支持从数据库(如 SQL)中读取数据，还支持从 Web (如 JSON、HTML 等)中读取数据。

使用 Pandas 时需要先导入：

```python
import pandas as pd
```

下面先介绍 Pandas 的核心数据结构之一：Series。

## 一、Series 的创建

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

Series 与字典也有不同之处：字典是一种无序的数据类型，而 Series 是有序的；Series的索引和值之间是相互独立的；Series 的索引可变的，而字典的键不可变。

Series 还提供了简单的统计方法 `describe()` 用于以列为单位进行统计分析：

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

