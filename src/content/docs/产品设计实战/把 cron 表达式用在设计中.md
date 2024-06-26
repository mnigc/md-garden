---
title: 把 cron 表达式用在设计中
description: Cron 表达式是一种用于表示时间和日期的格式，主要用于安排和执行定期重复的任务或作业。它通常被用作计划任务调度器中的时间表达式。在设计之前，我们先详细的了解一下Cron表达式，至少我们自己要会用，才知道如何设计。
---

在我工作中遇到了这样一些场景，需要定期完成的任务的需求，大部分情况，都是根据用户的需求，由开发在后台写一个定时任务，来定期提醒。但是，有些任务提醒时间不固定，可能经常变动，而让开发频繁地更改也不是办法，所以，开发一个由前台控制的强大的定期任务配置工具则可以解决几乎所有场景。

Cron 表达式是一种用于表示时间和日期的格式，主要用于安排和执行定期重复的任务或作业。它通常被用作计划任务调度器中的时间表达式。在设计之前，我们先详细的了解一下Cron表达式，至少我们自己要会用，才知道如何设计。

Cron 表达式由6个字段组成，按顺序分别表示秒、分钟、小时、日期、月份和星期几。每个字段都可以使用特定的符号来指定时间或日期的取值范围。下面是一个基本的Cron表达式的格式：

`秒(0-59) 分钟 (0-59) 小时 (0-23) 日期 (1-31) 月份 (1-12) 星期几 (0-7，其中0和7都代表周日)`

从左到右，依次对每个字段指定相应的值，就可以确定一个任务的执行时间点和周期了。值可以由数字配合字符来组合。

在大部分使用cron的场景下， - * / ? 这几个常用字符就可以满足我们的需求了。

【*】：每的意思。在不同的字段上，就代表每秒，每分，每小时等。\
【-】：指定值的范围。比如[1-10]，在秒字段里就是每分钟的第1到10秒，在分就是每小时的第1到10分钟，以此类推。\
【,】：指定某几个值。比如[2,4,5]，在秒字段里就是每分钟的第2，第4，第5秒，以此类推。\
【/】：指定值的起始和增加幅度。比如[3/5]，在秒字段就是每分钟的第3秒开始，每隔5秒生效一次，也就是第3秒、8秒、13秒，以此类推。\
【?】：仅用于【日】和【周】字段。因为在指定某日和周几的时候，这两个值实际上是冲突的，所以需要用【?】标识不生效的字段。比如【0 1 * * * ?】就代表每年每月每日每小时的1分0秒触发任务。这里的周就没有效果了。

**🌰常见例子**
- 0/2 * * * * ?   表示每2秒 执行任务
- 0 0/2 * * * ?    表示每2分钟 执行任务
- 0 0 2 1 * ?   表示在每月的1日的凌晨2点调整任务
- 0 15 10 ? * MON-FRI   表示周一到周五每天上午10:15执行作业

在搜索引擎搜索“ Cron 表达式”，会找到很多在线的工具，可以做可视化配置。

[在线Cron表达式生成器1](https://cron.qqe2.com/)

![](https://s2.loli.net/2023/10/26/98Gojab5BncMYPF.png)

[在线Cron表达式生成器2](http://cron.ciding.cc/)

![image.png](https://s2.loli.net/2023/10/26/l9X1R4a8TgWzm63.png)

如果是面向开发人员或懂点技术的内部人员，这样的一套完全是满足需求的，但是如果要把这样一套工具给客户，我相信客户会抓狂，因为使用起来比较复杂，在线上常用的工具中，是通过切换单位的交互方式，站在大众视角看，只展示当前时间单位配置的数据而不展示其他时间单位的配置数据，无疑增加了记忆成本，无法所见即所得，而这个单位下又把所有的配置方式全列出来，看起来这是一个非常复杂的工具，让大部分人望而却步。同时，我也相信没有客户愿意去学表达式的代码含义。

我在设计过程中，根据上述痛点，做了一些优化：
1. 把所有时间单位展示出来，能一眼看出配置结果是怎样的
2. 把配置项作为切换，把不需要配置的隐藏起来
3. 简化一些单位，比如去掉了“秒”，“时分”使用时间组件结合在一起配置
4. 时间单位的配置可自定义时间点

![](https://s2.loli.net/2023/10/26/gsob7hp6y9KJdnj.png)

更加人性化一点，我们可以在“周”的配置项中新增一个“工作日”，就免去了每次都要取消选择周六周日，但是考虑到不是所有的公司的工作日不一样，可以先不考虑。

同时，还增加了一个排除法定节假日，这对开发来说可能会有一些难度，需要经常将每年的法定节假日的数据更新到后端，我查了一下，网上有节假日查询接口，免费和收费都有。

目前这个是初版的设计方案，可能还有一些漏洞，我会在后面的工作中实践以及学习中继续补充。