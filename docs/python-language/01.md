# 01 - 数据结构

## 一、列表的操作

- `get(key, default=None)`：提取给定键对应的值，如果键不在字典中，返回默认值。
- `pop(index)`：不指定索引值，则默认输出列表最后一个元素。
- `remove(x)`：输出列表中第一个与指定值相同的元素。
- `clear()`：将列表清空。
- `del`：公用的内置静态函数，删除指定位置的元素。

## 二、字典的操作

- `update()`：将一个字典整体更新到另一个字典中，相当于拼接。
- `pop()`：通过指定 key 键值将字典中特定元素删除。
- `popitem()`：删除字典末尾的键值对。

## 三、集合的操作

集合支持并集(Union)、交集(Intersection)等一系列标准数学运算。

```python
set1 = set([1, 2, 3, 4, 5])
set2 = {4, 5, 6, 7, 8}

# 求并集，也可使用 set1 | set2
set3 = set1.union(set2)

# 求交集，也可使用 set1 & set2
set4 = set1.intersection(set2)

# 求差集(元素在set1中，不在set2中)，也可使用 set1 - set2
set5 = set1.difference(set2)

# 求对称集(元素在set1或set2中，不同时在两者中)，也可使用 set1 ^ set2
set6 = set1.symmetric_difference(set2)

# set3 = {1, 2, 3, 4, 5, 6, 7, 8}
# set4 = {4, 5}
# set5 = {1, 2, 3}
# set6 = {1, 2, 3, 6, 7, 8}
```

## 四、可迭代对象操作

### 1. `zip(sequence1, sequence2)`

将两个可迭代数据对象(如列表、元组、字符串等)内的元素一一对应起来，形成一个元组，所有元组汇集构成一个列表。

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
list3 = list(zip(list1, list2))

# list3 = [('a', 1), ('b', 2), ('c', 3)]
```

### 2. `enumerate(sequence, [start=0])`

将可迭代对象内的元素与其索引一一对应形成一个元组，所有元组汇集构成一个列表。可选参数表示下表起始位置。

```python
list1 = ('a', 'b', 'c')
list2 = list(enumerate(list1))

# list2 = [(0, 'a'), (1, 'b'), (2, 'c')]
```

## 五、三元操作符

```python
a = x if x > 0 else -x
```

## 六、推导式

### 1. 列表推导式

```python
# 过滤元素
list_ints = [i**2 for i in list_a if type(i) == int]

# 嵌套平铺
list_vec = [i for j in list_a for i in j]

# 多条件组合
list_new = [(x, y) for x in list_a for y in list_b if x != y]
```

### 2. 字典推导式

```python
# 字典键值反转
kv_exchange = {v:k for k, v in dict_a.items()}
```
