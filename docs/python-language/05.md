# 05 - 生成器与迭代器

Python 中一切皆对象，为了高效地生成和访问这些对象，可以借助生成器(generator)和迭代器(iterator)。

## 一、生成器

使用推导式可以创建一个可迭代对象，但由于受到内存的限制，这些特迭代对象的容量只有限的。即使创建了一个元素很多的可迭代对象并把所有元素都加载到内存中，一段时间内被访问的也仅仅是小部分元素，这就造成了内存的浪费。

基于此，提出需求：可迭代对象中的元素是否可以按照某种算法推算出来，在后续的循环过程中，根据这些元素不断推算出其他被访问的元素？这样一来就不必创建完整的列表、字典和集合，从而节省了空间。

在 Python 中，这种一边循环一边计算的机制，称为生成器。

### 1. 生成器的定义

生成器本质上是一个生成元素的函数。创建一个生成器最简单的方法是将一个列表推导式最外层的方括号 `[]` 改为圆括号 `()`。

```python
n = 10
n_list = [i**2 for i in range(n) if i%2==0]
n_gnrt = (i**2 for i in range(n) if i%2==0)

print(n_list, "\n", type(n_list))
print(n_gnrt, "\n", type(n_gnrt))

# [0, 4, 16, 36, 64] 
# <class 'list'>
# <generator object <genexpr> at 0x0000011E45BC2C70> 
# <class 'generator'>
```

列表中的元素可以直接访问，而生成器中的元素需要借助全局内置函数 `next()` 访问。每次使用 `next()` 函数会顺序输出生成器的下一个元素，而不是从最开始的位置输出，直到输出最后一个元素。没有元素输出时，会抛出 `StopIteration` 异常。

```python
g = (i**2 for i in range(10) if i%2==0)
next(g)
g.__next__()

# 4
```

生成器也是一个特殊的迭代器，因此也可以调用它的内置函数 `__next__()` 实现和全局函数 `next()` 一样的效果。

生成器的正确打开方式通常不是反复调用 `next()` 函数，而是和循环语句配合使用。由于 Python 语法糖的存在，确保了访问不会越界，因此不会发生 `StopIteration` 异常。

```python
g = (i**2 for i in range(10) if i%2==0)
for num in g:
    print(num, end=" ")

# 0 4 16 36 64
```

### 2. 使用 `yield` 创建生成器

如果推算的算法比较复杂，很难利用列表推导式来表达，可以使用含有 `yield` 关键字的函数。

```python
def fibonacci(x):
    n, a, b = 0, 0, 1
    while n < x:
        yield b
        a, b = b, a+b
        n = n + 1
y = fibonacci(5)
print(type(y))

# <class 'generator'>
```

使用 `yield` 代替函数中的 `return` 或 `print`，此时函数将不再是一个简单的函数，而是一个生成器。

### 3. 生成器的执行流程

生成器和函数的执行流程不一样。

- 普通函数遇到 `return` 语句或执行到函数的最后一句时就会返回，结束整个函数的运行。
- 变成生成器的函数，每次调用 `next()` 的时候执行，执行到 `yield` 语句就停止，再次调用 `next()` 时，就会从上次返回的 `yield` 语句接着往下运行。

需要注意：如果含有 `yield` 语句的函数还有 `return` 语句，那么这个 `return` 语句不能用于函数正常返回，而是用于 `StopIteration` 的异常说明。即生成器无法直接使用 `return` 的返回值，如果想获得该返回值，需要捕获 `StopIteration` 异常，然后输出 `StopIteration.value`。

## 二、迭代器

### 1. 可迭代对象和迭代器

Python 中可迭代对象包括列表、元组、字典、集合、字符串等，这些数据类型更确切地说是存储数据的容器(container)。逐个获取容器中的元素的过程称为**迭代**(iteration)。迭代是 Python 最强大的功能之一。

**迭代器**可以简单理解为能够访问容器元素的“智能指针”。Python 中的迭代器是作为一个迭代类的对象而存在的。作为对象，它具有一些成员函数(或方法)可供使用，在函数(或方法)内，我们可以添加更多具体的操作，从而表现出比纯粹的指针更多的“智能”。

与 C 和 C++ 不同，Python 中迭代器可以通过 `StopIteration` 来表示迭代的完成，并进行合理的异常处理。具体做法为：

> 迭代器内维护者一个状态，该状态用来记录当前迭代“指针”所在的位置，以便下次迭代时获取正确的元素。一旦所有的元素都被遍历，迭代器就会指向容器对象的尾部，并触发停止迭代的异常。

迭代器有一个显著特点：惰性估值(Lazy evluation)：只有党迭代至某个值时，该元素才会被计算并获取。基于此特点，迭代器特别适合用于遍历大文件和无限集合。

### 2. 创建迭代器

迭代器是对象，具体的迭代器是某个迭代类定义的对象。比如 `list_iterator` 是列表类迭代器的对象，`set_iterator` 是集合类迭代器的对象。所有的迭代器在设计之初通常都会在类中实现两个方法：

- `__iter__()`：用于返回一个迭代器对象。
- `__next__()`：由于返回迭代对象内部的下一个元素值。

```python
from itertools import islice

class Fibonacci:
    def __init__(self):
        self.previous, self.current = 0, 1
    def __iter__(self):
        return self
    def __next__(self):
        value = self.current
        self.previous = self.current
        self.current = self.current + self.previous
        return value

f = Fibonacci()
a = list(islice(f, 0, 5))
print(a)
b = list(islice(f, 0, 5))
print(b)

# [1, 1, 2, 3, 5]
# [8, 13, 21, 34, 55]
```

`itertools` 是 Python 的内置模块，该模块包含了一些列用来产生不同类型迭代器的函数和类。`islice` 是该模块的一个常用函数，用法为：

```python
islice(iterable, start, stop[, step])
```

第一个参数 `iterable` 是一个可迭代对象，随后的参数分别为迭代对象的起始位、终止位和步长。它的含义与列表和元组的切片函数类似。事实上，`islice` 就是“迭代切片”的意思，其中 `i` 代表可迭代对象 `iterable`，`slice` 表示“切片”。但是，迭代切片不支持负数索引。

上面的例子中先定义了一个 `Fibonacci` 类，随后该类定义了一个对象 `f`，他是一个可迭代对象，因为 `Fibonacci` 实现了 `__iter__()` 方法。与此同时，`f` 也是一个迭代器，因为它实现了 `__next__()` 方法，该方法保证了变量 `self.previous` 和 `self.current` 在迭代内部的更新。每次调用 `next()` 方法时，`__next__()` 方法都会在背后默默做两件事：

- 为下一次调用 `next()` 方法修改状态。
- 为当前调用生成返回结果。
