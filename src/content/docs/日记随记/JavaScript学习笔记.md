---
title: JavaScript学习笔记
description: JavaScript学习笔记
date: 2024-07-07
---
## 基础知识
### 变量
变量是数据的“命名存储”。我们可以使用变量来保存商品、访客和其他信息。
- 变量名称必须仅包含字母、数字、符号 $ 和 _
- 不能以数字开头
- 变量名区分大小写
- 变量名不能使用关键字

写法 1：
```
let message;
message = 'Hello!'; // 给变量赋值
alert(message); // 显示变量内容
```
写法 2，将变量定义和赋值合并成一行：
```
let message = 'Hello!'; // 定义变量，并且赋值
alert(message); // Hello!
```
写法 3，声明多个变量：
```
let message = 'Hello!',
    name = 'John',
    age = 30;
```
改变变量的值：
```
let message = 'Hello!';
message = 'Goodbye!';
```
声明两个变量，然后将其中一个变量的数据拷贝到另一个变量：
```
let message = 'Hello!';
let copyMessage = message;
```
常量：
声明一个常数（不变）变量，可以使用 const 而非 let，
使用大写字母表示常量，以便提醒自己不要修改它的值。
```
const PI = 3.14159265359;
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

### 数据类型
JavaScript 有8 种基本的数据类型（7 种原始类型和 1 种引用类型）
- 字符串（String）\
  用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
- 数值（Number）\
  用于任何类型的数字，整数或浮点数，在 ±(253-1) 范围内的整数。
- bigint（BigInt）\
  用于任意精度的整数。
- 布尔值（Boolean）\
  用于 true 和 false
- 数组（Array）
- 对象（Object） \
  用于更复杂的数据结构。
- null \
  用于未知的值 —— 只有一个 null 值的独立类型。
- undefined \
  用于未定义的值 —— 只有一个 undefined 值的独立类型。

写法：
```
let str = 'Hello'; // 字符串
let num = 10; // 数值
let bool = true; // 布尔值
let arr = [1, 2, 3]; // 数组
let obj = {name: 'John', age: 30}; // 对象
let nullVar = null; // null
let undefinedVar; // undefined
let bigInt = 12345678901234567890n; // 尾部的 "n" 表示这是一个 BigInt 类型
```
双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如：
```
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```
### 交互：alert()、prompt()、confirm()
**alert()：** \
显示一个消息框，并等待用户点击确定按钮。
```
alert('Hello, world!');
```
弹出的这个带有信息的小窗口被称为 模态窗。“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口。在上面示例这种情况下 —— 直到用户点击“确定”按钮。

**prompt()：** \
显示一个输入框，用户可以输入文本。`prompt` 接收两个参数：提示信息和默认值。

`title` 显示给用户的文本 \
`default` 可选，指定 input 框的默认值
```
let name = prompt('What is your name?', 'John');
alert(`Hello, ${name}!`);
```
**confirm()：** \
confirm 函数显示一个带有 question 以及确定和取消两个按钮的模态窗口。

点击确定返回 true，点击取消返回 false。
```
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
```

### 类型转换
大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型。