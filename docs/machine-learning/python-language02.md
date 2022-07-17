# 02 - 函数

## 一、函数参数

### 1. 可变参数

存在可变参数是指，在函数调用时，其参数的个数不定。通过在参数名前添加星号 `*` 指明可变参数不管可变参数有多少个，传递时都被收集在以形参名为标识符的元组中，一次可变参数也称为“收集参数”。

通常以 `args` 作为形参名(参数 arguments 的英文缩写)。

```python
def varParaFun1(name, *args):
    print(name)
    print(args)
    print(type(args))

varParaFun1('a', 1, 2, 3, 4, 5)

# a
# (1, 2, 3, 4, 5)
# <class 'tuple'>
```

使用一个星号 `*` 时将可变参数收集在一个元组中，使用两个星号 `**` 时则将可变参数收集在一个字典中，此时调用函数时，传递的可变参数必须是键值对的类型。

```python
def varParaFun2(name, **kwargs):
    print(name)
    print(kwargs)
    print(type(kwargs))
varParaFun2('a', a=1, b=2, c=3)

# a
# {'a': 1, 'b': 2, 'c': 3}
# <class 'dict'>
```

### 2. 默认参数

在函数定义时提前给某些形参提供默认值。

```python
def defaultFun1(name, age=18):
    print(name, age)
defaultFun1('a')
defaultFun1('a', 20)

# a 18
# a 20
```

定义默认参数时务必使用不可变对象(immutable)，如数值型、元组、字符串、不可变集合(frozenset)、`None` 等。如果使用可变对象(如列表)，当函数被调用后，函数对象和默认参数会同时存在与内存中，下次调用时，默认参数已经改变。

```python
def defaultFun2(list_arg=[]):
    list_arg.append(1)
    print(list_arg)
defaultFun2()
defaultFun2()

# [1]
# [1, 1]

def defaultFun3(list_arg=None):
    if list_arg is None:
        list_arg = []
    list_arg.append(1)
    print(list_arg)
defaultFun3()
defaultFun3()

# [1]
# [1]
```

使用不可变对象时，在多任务环境下同时读取对象不需要加锁来避免用户写数据带来的延迟，同时对读取数据也没有影响。因此，在程序设计中，应尽量将操作对象设计为不可变对象。

### 3. 参数序列的打包与解包

Python 中以逗号分隔的多个对象给一个变量赋值时，会被先打包(packing)为一个匿名元组，再进行赋值。同时元组也可以作为一个整体给多个分散对象赋值。

```python
val = 1, 2, 3, 4
print(type(val))
a, b, c, d = val

# <class 'tuple'>
```

将可迭代对象的元素分别赋值给分散对象的过程称为为解包(unpacking)。被解包的序列中的元素对象必须与赋值符号左边的元素数量一致。

在函数参数传递过程中，有一种类似可变参数的参数传递形式：调用函数时在参数前添加星号 `*`，星号实际作用于实参，这类实参主要包括列表、元组、集合、字典等可迭代对象。在实际调用时，Python 解释器会对这些可迭代对象进行解包，然后将解包的对象一一分配给多个形参。

```python
def unpackFun1(a, b, c):
    print(a, b, c)
val = 1, 2, 3
unpackFun1(*val)

# 1 2 3
```

对于由字典构成的参数，使用两个星号 `**` 进行解包。

```python
def unpackFun2(a, b, c):
    print(a, b, c)
val = {'a': 1, 'b': 2, 'c': 3}
unpackFun2(**val)

# 1 2 3
```

## 二、函数的递归

递归是指函数(或方法)直接或间接调用自身的一种操作。递归是一种计算方法，也是一种思维方式。科技作家吴军博士认为：

> 递归思想时人与计算机最大的差别之一。

著名计算机科学家彼得·多伊奇(L. Peter Deutsch)甚至认为：

> To iterate is human, to recurse is divine.(迭代是人，递归是神)

递归的方法论可以分为两步：先从上向下层层展开，再从下到上步步回溯。

递归的优点在于：定义清楚，逻辑简单。但缺点也很明显：使用递归方式需要函数做大量的压栈和弹栈操作，涉及函数执行上下文(context)的现场保存和现场恢复，所以程序运行速度比不用递归时要满，大量的堆栈消耗的内存也更多，过深的递归调用还会造成堆栈溢出。此外，递归操作不慎容易进入死循环，因此一定要设置递归终止条件。

## 三、函数式编程

将大块代码拆分为不同的功能块(即函数)，这些功能块通过层层调用，可以把复杂任务分解为简单任务。这种“分而治之”的模块化思想，就是面向过程程序设计的思想。函数就是面向过程编程范式的基本单位。

函数编程的一个显著性特征就是，允许把函数本身作为参数传给另一个函数(对象)，还允许返回一个函数(对象)。

### 1. `lambda` 表达式

`lambda` 表达式是只有一行的匿名函数。返回的结果默认为表达式的结果。也可以通过赋值的方式将 `lambda` 赋值给一个变量，从而使匿名函数有变量名。

```python
add_fun = lambda x, y: x + y
add_fun(1, 2)
```

### 2. `filter()` 函数

`filter()` 函数是一个过滤器，用于再可迭代数据序列中筛选出符合条件的元素。`filter()` 有两个参数，第一个为定义筛选规则的函数，第二个为可迭代的数据序列。该函数返回的结果是一个迭代器对象，需要转换为列表会其他对象才可进一步使用。

```python
a_list = [1, 2, 3, 4, 5]
data_fl = list(filter(lambda x: x % 2 != 0, a_list))

# data_fl = [1, 3, 5]
```

### 3. `map()` 函数

类似于 `filter()` 函数，`map()` 函数同样需要函数和可迭代数据序列至少两个参数。该函数工具参数中函数定义的规则将可迭代数据序列转换位另一个序列，返回的结果也是一个迭代对象。

实际上 `map()` 函数参数中，可迭代数据序列可以有多个，具体需要几个取决于第一个参数定义的规则。

```python
def add_fun(x, y):
    return x + y
data = list(map(add_fun, [1, 2, 3], [4, 5, 6]))

# data = [5, 7, 9]
```

`map()` 函数的功能可以通过 [列表推导式](https://www.yuque.com/gvenusleo/python/vdczf1#12e579dd) 实现，但列表推导式实际上使简化的`for`循环，效率较低。使用`map()`可以提高性能。

### 4. `reduce()` 函数

`reduce()` 用于对序列内的元素按照自定义的规则进行操作，从而将数据减少到只有一个最终的数据。该函数已从全局命名空间中移除，需要通过导入 `functools` 模块来调用。使用该函数可以高效代替 `for()` 循环做很多工作。

```python
from functools import reduce

# 求 1 到 100 的和
add_1_100 = reduce(add_fun, range(1, 101))
# 求序列中的最大值
int_max = reduce(lambda x, y: x if x > y else y, [1, 6, 4, 7])
```

### 5. `sort()` 函数

`sort()` 函数可以自定义规则给可迭代对象排序。该函数返回一个新的可迭代对象，不会对原有对象产生影响。

```python
sort_list1 = sorted([20, -30, 70, -40], key=abs, reverse=False)
sort_list2 = sorted([('a', 3), ('b', 2), ('c', 4)], key=lambda x: x[1])
```
