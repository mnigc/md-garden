---
title: 搞懂 API 接口
description: API 接口是产品经理必备的技能，掌握 API 接口的设计、开发、测试、运维等流程，能够帮助你更好地理解和运用产品，提升产品的竞争力。
---
> 想象一下，你走进一家咖啡馆，你对咖啡师说：“我要一杯拿铁。”咖啡师接收到你的指令，用他的专业技能制作出一杯香浓的拿铁给你。在这个过程里，你不需要知道咖啡机怎么使用，也不需要了解咖啡豆的烘焙工艺，更不需要知道咖啡怎么做。
> 
> 你和咖啡师之间的交流，就像你和咖啡师之间有个“接口”——它定义了你如何请求服务，以及服务如何响应你。
> 
> 在软件的世界里，接口就像是一个规则手册，告诉不同的程序或者服务，“嘿，如果你想和我聊天，这是你能对我说的话，以及我可能会怎么回答你。”
> 
> 这些规则让软件组件能够相互沟通，而不需要了解对方内部的复杂细节。

### 接口的定义

#### 接口地址 (Endpoint)
接口地址就像是咖啡馆的位置，它是你与咖啡师交互的具体地点。你必须知道这个地址，才能去点咖啡、去咖啡。在接口中，这就是服务器上的具体资源位置，比如 https://api.example.com/users

#### 请求方法 (Request Method)
相当于你选择的点咖啡方式
1. **GET** \
Get 就像你你在咖啡馆门口，手里拿着一张咖啡馆的菜单，你知道菜单上咖啡的价格、种类（只是获取信息）,GET 方法是最常见的一种 API 请求方式，它的作用是向指定资源发出请求并返回实体主体内容。比如：当我们在浏览器中输入一个 URL 地址时，浏览器就会发送一个 GET 请求到服务器上获取相应的网页内容，可以理解为只读。 
- 使用：用”?”连接，多个参数间用”&”连接（URL末尾；
- 应用场景 eg：请求数据：查询，菜单列表，搜索等数据的请求；
- 特点：数据量较小，返回速度快，接口暴露在外，存在风险。

2. **POST** \
而 Post 是你直接走进咖啡馆，看到菜单之后，跟服务员点单“我要一杯大杯的热拿铁，少糖”（不仅仅是在获取信息，而是在发起一个动作，即下订单）。服务员会记录订单、信息、排号。POST 方法是向指定资源提交数据进行处理请求，它通常用于提交表单、上传文件等操作。比如：当我们在网站上填写表单并点击提交按钮时，浏览器就会将表单数据以 POST 请求的方式发送到服务器上进行处理，可以理解为创建。
- 使用：特定地方（提交、上传的地方）提交数据来进行请求；
- 应用场景 eg：注册、上传、等功能；
- 特点：请求数据量大，安全性要求高。

3. **PUT** \
PUT 方法是向指定资源位置上上传其最新内容的操作，它通常用于更新已有的资源信息。比如：当我们在网站上编辑一篇文章并保存时，服务器就会将最新的文章内容以PUT 请求的方式覆盖原有的文章信息，可以理解为修改。

4. **DELETE** \
DELETE 方法是请求服务器删除 request-URL 所标示的资源的操作，它通常用于删除指定的页面或者资源。比如：当我们在浏览器中打开一个错误的页面时，我们可以点击浏览器上的“刷新”按钮或者按下 “Delete” 键来请求服务器删除该页面。

5. **OPTIONS** \
OPTIONS方法是HTTP协议中的一个预检请求方法，它用于获取目标资源的通信选项等信息。比如：当我们在浏览器中打开一个跨域资源共享（CORS）的网页时，浏览器会先发送一个 OPTIONS 请求到服务器上获取该资源的允许跨域访问的信息。

6. **HEAD** \
HEAD 方法是 HTTP 协议中的一个非响应性请求方法，它用于获取目标资源的头部信息，不会返回实际的数据内容。比如：当我们在浏览器中查看一个网页的源代码时，我们可以使用浏览器上的“查看页面源代码”功能来发送一个 HEAD 请求到服务器上获取该网页的头部信息。

#### 返回参数 (Response Parameters)
返回参数是API接口返回给调用者的数据，它包含了 API 接口的响应信息，比如：状态码、数据、错误信息等。

当咖啡师听到你的要求后，他会开始制作咖啡，并在完成后告诉你：“您的大杯热拿铁，少糖，一共 9.9 元。”

这里，“大杯热拿铁”、“少糖”和“9.9元”就是返回参数，它们是咖啡师基于你的请求给出的反馈。

在 API 中，返回参数是服务器根据你的请求生成的信息，比如订单状态、结果代码、200、404等。

#### 返回结果示例 (Response Example)
如果把整个过程完整地描述出来，就相当于API的返回结果示例。

例如，当你在咖啡馆下单后，你可能会收到一个收据，上面写着：“订单号#123456，一杯大杯热拿铁（少糖），总价9.9，预计10分钟后完成。”

这个收据就是一个返回结果示例，在API中，这通常是一个JSON或XML格式的数据包，详细说明了你的请求是如何被处理的，以及结果是什么。

### 主动推送与主动拉取
#### 推送 VS 拉取
推送与拉取是两种不同系统间的通信，这两种方式解释了数据生产者与数据消费者是如何进行数据交互的

**推送** \
推送是数据生产者把生产的存储的数据传输到数据消费者里（消费者提供接收的接口），数据消费者是不知何时能接收到何时的数据，消费者接收到数据的时点是由数据生产者决定的。（业务时点可触发,可定时）

**拉取** \
拉取是数据消费者从数据生产者 get 数据源，数据生产者只需要提供数据源（提供数据源的接口）,不用关心、也不知道数据消费者何时获取该数据。数据消费者决定获取数据的时点(定时)

#### 如何选择推送/拉取数据
**推送**
- 若果数据实时性要求比较强，可采用数据生产端推送
- 按照绘制的 UML 数据流转方向绘制箭头，一般是推送

**拉取**
- 若果数据实时性不强，宜采用数据消费端拉取数据
- 如果 1 个上游方数据源有多个下游方数据消费者，则可采用数据消费端拉取数据。

|  功能  | 主动推送 | 主动拉取 |
| --- | --- | --- |
|  接口规范  | 由数据终端提供接口，数据源端调用接口推送数据 | 由数据源端提供接口，数据终端调用接口拉取数据 |
|  缓存  | 在不影响正常运行的情况下，数据源端可不做缓存，实时获取并推送数据，消耗资源过大时做缓存 | 数据源端需要做缓存，以避免终端频繁拉取。若因参数值过多而致缓存过大时，应按调用方标识限制接口调用频次 |
|  截断标志  | 数据源端记录最后一次推送的数据ID，并在下一次推送时判断此标识往后推送数据 | 数据终端记录最后一次拉取的数据ID，并在下次一拉取时传递给数据源端 |
|  日志与故障排查	  | 双方都需要保留日志	 | 双方都需要保留日志	 |
|  在有一个数据源端和多个数据终端的系统中 | 优点：无；缺点：数据源端需要依据不同的数据终端提供的接口规范推送数据，若这些数据终端要求的推送间隔时间不致，则会使用定时器和缓存实现更为复杂 | 优点：所有终端使用统一的接口规范，数据拉取间隔时间由终端自由决定；缺点：无 |
|  在有多个数据源端和一个数据终端的系统中  | 优点：所有数据源端使用统一的接口规范，数据推送间隔时间由数据源端自由决定；缺点：无 | 优点：无；缺点：数据终端需要依据不同的数据源端提供的接口规范拉取数据 |

### 同步和异步
同步和异步是指数据传输的模式，同步是指数据源端主动向数据终端传输数据，数据终端接收到数据后才返回响应，异步是指数据源端主动向数据终端请求数据，数据终端接收到请求后，会立即返回响应，但数据传输过程可能需要一段时间。

同步 API 是指只有当前 API 执行完成后，才能继续执行下一个 API。这就好比到餐馆点餐时，一个指定的服务员被分配来为你服务，当点完餐时，服务员将订单送到厨房并在厨房等待厨师制作菜肴，当厨师将菜肴烹饪完成后，服务员将菜肴送到你的面前，至此服务完成，此时这个服务员才能服务另外的客人。步模式是指一个服务员某一时间段只能服务于一个客人的模式。

异步 API 是指当前 API 的执行不会阻塞后续代码的执行。这就好比到餐馆点餐时，在点餐后服务员将你的订单送到厨房，此时服务员没有在厨房等待厨师烹饪菜肴，而是去服务了其他客人，当厨师将你的菜肴烹饪好后，服务员再将菜肴送到你的面前。异步模式是指一个服务员同时可以服务多个客人的模式。

#### 同步 API 的执行方式
同步API的执行方式是指代码从上到下一行一行执行，下一行的代码必须等待上一行代码执行完成后才能执行，示例代码如下。
```
console.log('before');
cogsole.log('after');
```
上述代码中，只有第 1 个 console.log0 方法执行完成后，才能执行第 2 个 console.log0 方法。同步代码中每行代码按照顺序依次执行。

#### 异步 API 的执行方式
异步 API 的执行方式是指代码在执行过程中某行代码需要耗时，代码的执行不会等待耗时操作完成后再去执行下一行代码，而是不等待直接向后执行。异步代码的执行结果需要通过回调函数的方式处理示例代码如下。
```
console.log('before');
setTimeout(() => {
  consohy.log('1ast');
}, 2000);
console.log('after');
```
上述代码使用 console.log0 方法输出 before，然后开启一个定时器，在2秒之后使用 console.log() 输出 last，在程序结尾输出 after。这段代码的依次打印结果是 before=after-last。这是因为定时器为异步 APl，程序不需要等待它执行完成，而是继续向后执行代码输出 after。


### 接口文档示例
【API 示例】获取明天北京的天气预报。

【请求方法】GET

【接口地址】https://api.weatherprovider.com/v1/forecast

【请求参数】

![请求参数](https://image.woshipm.com/2024/06/28/306bdffa-3522-11ef-afcb-00163e0b5ff3.png)

【返回参数】

![返回参数](https://image.woshipm.com/2024/06/28/362e513e-3522-11ef-afcb-00163e0b5ff3.png)

【返回结果示例】

![返回结果示例](https://image.woshipm.com/2024/06/28/43be7860-3522-11ef-afcb-00163e0b5ff3.png)