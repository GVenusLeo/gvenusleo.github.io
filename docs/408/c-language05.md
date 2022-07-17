# 05 - 循环语句

## 一、`while` 语句

`while` 语句一般形式为：

```c
while (表达式) 语句
```

其中 ` 表达式 ` 为循环条件，` 语句 ` 为循环体。`while` 的特点为：先判断循环条件，后执行循环体。

```c
#include <stdio.h>

int main()
{
    int n, result = 1;
    scanf("%d", &n);
    while (n > 1)
    {
        result = result * n;
        n--;
    }
    printf("%d", result);
    return 0;
}
```

## 二、`do...while` 语句

`do...while` 语句的一般形式为：

```c
do
    语句
while (表达式)
```

该语句的特点是：先执行循环体，后判断循环条件。

```c
#include <stdio.h>

int main()
{
    int n, result = 1;
    scanf("%d", &n);
    do
    {
        result = result * n;
        n--;
    } while (n > 0);
    printf("%d", result);
    return 0;
}
```

## 三、`for` 语句

相比 `while` 语句和 `do...while...` 语句，`for` 语句更加灵活，不仅可以用于循环次数已经确定的情况，也可以用于循环次数不确定而只给出了循环结束条件的情况。其一般形式为：

```c
for (表达式1; 表达式2; 表达式3)
    语句
```

其中三个表达式的作用依次为：

- ` 表达式 1`：设置初始条件，只执行一次，可以为多个变量设置初始值，可省略。
- ` 表达式 2`：循环条件，可省略。
- ` 表达式 3`：循环的调整，执行完循环体后才执行，可省略。

```c
#include <stdio.h>

int main()
{
    int n, result = 1;
    scanf("%d", &n);
    for (; n > 0; n--)
        result = result * n;
    printf("%d", result);
    return 0;
}
```

C99 标准允许在 ` 表达式 1` 中定义变量并初赋值，但定义变量的作用域仅限于 `for` 循环内，在循环外不可调用该变量。

3 种循环语句都可以相互嵌套。

## 四、改变循环执行状态

### 1. `break` 语句

`break` 语句可以直接跳出循环体，提前结束循环，接着执行循环下面的语句。该语句只能用于循环语句和 `switch` 语句中。

```c
#include <stdio.h>

int main()
{
    int n, result = 1;
    scanf("%d", &n);
    while (1)
    {
        result = result * n;
        n--;
        if (n == 0)
            break;
    }
    printf("%d", result);
    return 0;
}
```

### 2. `continue` 语句

`continue` 语句用于结束此次循环而不终止整个循环，而是接着执行下一次循环的操作。

```c
#include <stdio.h>
#define M 100

int main()
{
    int n;
    for (n = 1; n < 100; n++)
    {
        if (n % 7 != 0)
            continue;
        printf("%d\t", n);
    }
    return 0;
}
```
