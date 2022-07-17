# 07 - 异常处理

## 一、异常处理

在程序编写过程中，有一个 80/20 原则：

> 将 80% 的精力花费在 20% 的事情上，而这 20% 的事情就是处理各种可能出现的错误或异常(Exception)。

### 1. 认识程序中的异常

异常也成为例外，指的是所有可能造成计算机无法正常处理的情况，如果没有进行妥善处理，可能造成计算机宕机。异常处理是一种特定的程序错误处理机制，是为了让程序员更加关注正常的程序执行序列而设计的。

在处理异常时，需要注意：

- 不需要打乱程序的结构，如果没有任何错误发生，程序的运行不受任何影响。
- 要根据错误的类型的不同有的放矢，实施对应的错误处理操作。

Python 通过面向对象的方法来处理异常。在一个方法的运行过程中，如果发生了一个异常，这个方法将生成一个代表该异常的对象，并把它交给运行时系统，运行时系统将寻找相应的代码来处理这一异常。

### 2. 异常处理的三步走

高级语言(如 C++，Java)通常内置了一套 `try...except...finally...` 的三步走式错误处理机制，Python 也不例外。

如果某一段代码可能会出错，则将这段代码置于 `try` 的作用域内，一旦发生异常，不会继续执行后续代码，而是直接跳转至异常处理代码，即 `except` 语句，如果无异常发生，则忽略 `except` 语句。一个 `try` 可以有多个 `except` 语分支，分别处理不同类型的异常，但最多只有一个分支被执行。如果异常处理过程中还有 `finally` 语句，无论是否发生异常，都要执行该语句，该语句是可选的。

```python
def divi_test():
    x = 1 / 0
try:
    divi_test()
except ZeroDivisionError as err:
    print("Error: ", err)
finally:
    print("Continue...")

# Error:  division by zero
# Continue...
```

如果系统给定的异常处理类型不够用，还可以使用 `raise` 语句来自定义异常：

```python
x = 10
if x > 5:
    raise Exception("x应小于5, 当前值为: {}".format(x))

# Exception                                 Traceback (most recent call last)
# Input In [4], in <cell line: 2>()
#       1 x = 10
#       2 if x > 5:
# ----> 3     raise Exception("x应小于5, 当前值为: {}".format(x))
# 
# Exception: x应小于5, 当前值为: 10
```

## 二、错误调试

### 1. `assert` 调试

代码的错误分为语法错误与逻辑错误。语法错误相对简单，在解释器的帮助下通常能很快定位问题所在，而调试逻辑错误需要一定的技巧。

一种简单粗暴的方法是直接用 `print()` 将需要观察的变量打印出来。这种方法有很明显的缺点：调试完后需要将 `print()` 删除，工作量大，输出信息繁杂。

由此，有了第二种方法：断言 `assert`。

凡是可用 `print()` 来辅助查看的，都可以用 `assert` 来替代。它用来测试某个条件(condition)的的布尔值，系统默认这个值为真，此时断言悄无声息，一旦条件为假，就会触发异常。其语法格式为：

```python
assert <condition> [, arguments]
```

其中，错误信息 `argument` 是可选的。

```python
def avg(score):
    assert len(score) != 0, "列表为空"
    return sum(score) / len(score)
score = []
print("平均分为: ", avg(score))

# AssertionError                            Traceback (most recent call last)
# Input In [8], in <cell line: 5>()
#       3     return sum(score) / len(score)
#       4 score = []
# ----> 5 print("平均分为: ", avg(score))
# 
# Input In [8], in avg(score)
#       1 def avg(score):
# ----> 2     assert len(score) != 0, "列表为空"
#       3     return sum(score) / len(score)
# 
# AssertionError: 列表为空
```

### 2. 其他调试方法

除了利用 `print()` 和 `assert` 进行调试外，还可以使用 IDE 的功能进行调试。IDE 通常带有非常好用的单步调试功能，配合控制台的输出，能便捷定位错误。

当开发的项目规模较大时，Python 的日志模块 `logging` 才是终极武器。使用该模块的的好处在于，它允许我们指定记录信息的级别，有 `debug`、`info`、`warning`、`error` 等。这样一来我们就不用担心太多的输出信息会冲淡关注力。
