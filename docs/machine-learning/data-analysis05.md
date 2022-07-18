# 05 - Pandas (2)

现状介绍 Pandas 中的第二种主要的数据结构 **DataFrame**。如果把 Series 看作Excel表中的一列，那么 DataFrame 就是Excel中的一张表。从数据结构的角度来看，Series 好比一个带标签的一维数组，而 DataFrame 就是一个带标签的二维数组，它可以由若干个一维数组( Series )构成。

## 一、构建 DataFrame

DataFrame 不仅有行索引，也有列索引。可以通过字典、Series 等数据结构来构建 DataFrame：

```python
import pandas as pd

a = pd.DataFrame({'x': [1, 3, 5, 7],
                  'y': [2, 4, 6, 8]})
print(a)

#    x  y
# 0  1  2
# 1  3  4
# 2  5  6
# 3  7  8
```

使用 NumPy 二维数组并指定行名、列名：

```python
import pandas as pd
import numpy as np

a = pd.DataFrame(np.random.randint(1, 10, 9).reshape(3, 3),
                 columns=['one', 'two', 'three'],
                 index=['a', 'b', 'c'])
print(a)

#    one  two  three
# a    7    8      4
# b    7    8      7
# c    9    2      3
```

