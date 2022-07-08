# 03 - 常用内置模块

## 一、`collections` 模块

`collections` 基于 Python 的基础数据类型构建，定位“高性能容量数据类型”，主要的数据类型包括：

- `namedtuple`：生成可以使用名字来访问元素内容的元组子类。
- `deque`：双向队列，列表类的补充，可从另一侧高效添加和弹出(删除)元素。
- `OrderedDict`：有序字典，为字典类提供排序功能的定制版。
- `defaultdict`：带有默认值的字典。
- `Counter`：计数器，主要用来对列表、元组等数据类型中的元素计数。

### 1. `namedtuple`

`namedtuple` 是“命名版的元组”，可以返回一个新的元组子类，利用整个子类可以创建一个自定义命名元组对象。

`namedtuple` 的构造需要两个参数，分别是元组子类的名字和其属性的名字，多个属性时使用列表。

```python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
```

`namedtuple` 是一个工厂类，及通过它生成的依然是元组的子类，与元组完全兼容。

```python
isinstance(p, tuple)  ## 判断对象p是否是元组的实例
```

### 2. `deque`

由于列表采用线性存储，按索引访问元素(只读)很快，但插入和删除(写)很慢，特别是数据量很大时，效率很低。`deque` 实现了高效插入和删除的操作，适合用于队列和栈的操作。

```python
from collections import deque

dq = deque(['a', 'b', 'c'])  ## 创建双向队列
dq.append(1)  ## 在右边添加元素
dq.appendleft(2)  ## 在左边添加元素
dq.insert(2, 'x')  ## 在指定位置添加元素
dq.pop()  ## 删除最右边元素
dq.popleft()  ## 删除最左边元素
dq.remove('b')  ## 删除指定元素
dq.reverse()  ## 队列逆序
```

### 3. `OrdereDict`

Python 中普通字典是无序的，在对字典对象迭代时无法确定 `key` 的顺序。`OrdereDict` 在底层通过双向链表实现有序字典，内部通过 `map()` 函数对指定元素序列做映射，高效存储键值对。

```python
from collections import OrderedDict

od = OrderedDict()
od['a'] = 1
od['c'] = 3
od['b'] = 2
keys = ['x', 'y', 'z']
values = [4, 5, 6]
od.update(zip(keys, values))  ## 追加新字典
od.move_to_end('b')  ## 将指定元素移到队尾
od.pop('a')  ## 删除指定元素
```

### 4. `defaultdict`

使用字典时，如果引用的键不存在。会抛出异常 `KeyError`。使用 `defaultdict` 可以为不存在的键设定默认值。

```python
from collections import defaultdict

dd = defaultdict(lambda: 'N/A')  ## 设置默认值
```

### 5. `Counter`

`Counter` 是 `cellections` 提供的一个简易计数类。

```python
from collections import Counter

str_list = ['a', 'b', 'a', 'c', 'b', 'a']
result = Counter(str_list)  ## 计数
most_2 = result.most_common(2)  ## 返回出现频率最高的两个对象

# result = Counter({'a': 3, 'b': 2, 'c': 1})
# most_2 = [('a', 3), ('b', 2)]
```

## 二、`datetime` 模块

### 1. 获取当前时间

```python
from datetime import datetime

now = datetime.now()
y, m, d = now.year, now.month, now.day
date = datetime(2022, 1, 1, 12, 30, 59)
```

### 2. 时间戳

以 1970 年 1 月 1 日 00:00:00 UTC+00:00 时区的时刻为纪元时间(epoch time)，得到时间戳(timestamp)。

```python
from daetime import datetime

now = datetime.now()
ts = now.timestamp()
```

### 3. 字符串转时间

```python
from datetime import datetime

cday = datetime.strptime('2022-4-3 20:20:59', '%Y-%m-%d %H:%M:%S')
```

`strptime()` 第一个参数为日期字符串，第二个为格式化参数。常见日期格式为：

| 格式符 | 格式说明 |
| :---: | --- |
| `%a` | 星期的缩写，如 Mon |
| `%A` | 星期的全称，如 Monday |
| `%b` | 月份的缩写，如 Jan |
| `%B` | 月份的全称，如 January |
| `%c` | 返回区域设置的适当的日期或时间的表示 |
| `%d` | 返回当前日期是当前月份的第几天 |
| `%f` | 表示微秒，范围 0-999999 |
| `%I` | 以 12 小时制表示当前的小时数，范围 01-12 |
| `%j` | 返回当前是当年的第几天，范围 001-336 |
| `%m` | 返回左侧 0 值填充的月份，范围 01-12 |
| `%M` | 返回左侧 0 值填充的分钟数，范围 01-59 |
| `%P` | 返回上午 AM 或下午 PM |
| `%S` | 返回左侧 0 值填充的秒数，范围 01-59 |
| `%U` | 返回当周是当年的第几周，以周日为第一天 |
| `%W` | 返回当周是当年的第几周，以周一为第一天 |
| `%w` | 返回当天是当周的第几天，范围 0-6，6 表示星期天 |
| `%x` | 日期的字符串表示，显示格式与区域设置有关 |
| `%X` | 时间的字符串表示，如 20:22:18 |
| `%y` | 两个数字表示的年份，如 22 |
| `%Y` | 两个数字表示的年份，如 2022 |
| `%z` | 表示与 UTC 时间的间隔，如果是本地时间，返回空字符串 |
| `%Z` | 表示失去名称，如果是本地时间，返回空字符串 |

### 4. `strftime()` 格式化输出

使用 `strftime()` 将 `datetime` 对象格式化为字符串输出。

```python
from datetime import datetime

now = datetime.now()
print(now.strftime('%a, %Y-%m-%d %H:%M'))
```

### 5. 时间加减

```python
from datetime import datetime, timedelta

now = datetime.now()
later = now + timedelta(hours=10, minutes=10)
other = datetime(2020, 1, 1, 12, 30)
days = (now - other).days
```

## 三、`json` 模块

### 1. `dumps` 与 `loads`

使用 `json` 模块对 JSON 数据进行编解码，用到这两个函数：

- `json.dumps()`：将 Python 对象编码为 JSON 格式的字符串。
- `json.loads()`：将 JSON 格式的字符串解码为 Python 对象。

```python
import json

data = {
    'name': 'ACME',
    'shares': 100,
    'price': 542.23
}
json_str = json.dumps(data)
data_dict = json.loads(json_str)
```
### 2. `dump` 与 `load`

如果要处理的是文件而不是字符串，可以使用 `json.dump()` 和 `json.load()` 来编码和解码 JSON 数据。

```python
import json

data = {
    'name': 'ACME',
    'shares': 100,
    'price': 542.23
}
with open('data.json', 'w') as f:
    json.dump(data, f)
with open('data.json', 'r') as f:
    data_dict = json.load(f)
```

## 四、`random` 模块

```python
import random

float1 = random.random()                # 生成[0, 1)之间的随机浮点数
float2 = random.uniform(1, 10)          # 生成[1, 10)之间的随机浮点数
int1 = random.randint(1, 10)            # 生成[1, 10]之间的随机整数
int2 = random.randrange(1, 10, 2)       # 生成[1, 10]之间的随机整数，步长为2

all_chars ='abcde0123456789'
all_list = [1, 2, 3, 4, 5, 6, 7]
ch = random.choice(all_chars)           # 在可迭代对象中随机选择一个元素
ch_list = random.choices(all_list, k=3) # 在可迭代对象中随机选择k个元素
ch_sp = random.sample(all_list, 3)      # 在可迭代对象中随机选择3个不重复元素
random.shuffle(all_list)                # 将可迭代对象中的元素打乱
```

为了使以后每次运行时返回的随机数不变，可以在调用随机数函数事前调用 `seeds()` 方法，指定一个“种子”。

```python
import random

random.seed(1)          # 使用一个确定的种子
rd = random.random()
```
