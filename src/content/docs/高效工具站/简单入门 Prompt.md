---
title: 简单入门 Prompt
description: Prompt 是给模型或程序提供输入或指示的文本，它可以是一个问题、一段描述或一个任务说明。
---

>AIGC 掀起的浪潮很多人已经感受到了，最开始使用门槛还比较高，但是现在已经有不少人都开始使用各类 GPT 进行创作，在工作上协助做一些事情，包括我自己。
>
>如果要让AI能够输出的内容更加精准且符合自己期望，就必须清楚的告诉AI，你需要什么东西，然后把需求告诉它，那么这个过程其实就是 #prompt

### prompt 简介
prompt 翻译成中文，就是“提示”。但是在计算机编程和人工智能领域，Prompt 通常指的是给模型或程序提供输入或指示的文本。它可以是一个问题、一段描述或一个任务说明。**Prompt 的作用就是：提供给模型输入文本，指导模型生成合适的回答**

🌰举个例子

```
---GPT 输入---
将“你好”分别翻译成汉语、西班牙语、阿拉伯语

---GPT 输出---
汉语（中文）翻译："你好！"  
西班牙语（Español）翻译："¡Hola!"  
阿拉伯语（العربية）翻译："مرحبا!"
```

### 怎么用
那么该如何用好 Prompt，我从网上找了万能公式框架

| 关键内容<img width="200"/> | 描述<img width="900"/> |
| ---------- | ---------------------------------------------- |
| 能力和角色 | 你希望AI扮演怎样的角色                         |
| 洞察       | 背景信息和上下文                               |
| 陈述       | 你希望GPT为你做什么，这里就是具体的需求了      |
| 个性       | 你希望AI以什么风格回答你，语气、扮演角色之类的 |

上面这种看起来很全、很复杂、需要输入的内容太多，实际上我在使用AI的大部分时间，是不需要完整的输入那么多内容，比如上面的例子，我总不能说“请你以翻译官的角色，翻译······”，太浪费时间了。所以对于简单的任务，直接告诉它你想要什么也是没问题的，况且，作为新手，光是构思 prompt 可能需要花费大量时间

通常情况下，如果需要精准的回答或者需要AI执行复杂的任务时候，则需要提供具体的任务信息，越具体，效果越好。如果一下子想不出如何设计 prompt，那么我们就可以从简单的开始，如果GPT提供的结果不满意，则不断的在 prompt 中添加更多的元素和上下文，那么所得到的结果便会越来越接近我们的目标。最终达到满意的结果后，我们便可以把刚才的 prompt 保存下来作为一个模板，以后在相同或相似的场景下都可以直接拿出来用。


就像知乎上的[数字生命卡兹克](https://www.zhihu.com/people/zhang-ren-jie-77)所说：
>prompt 真正专业性，在我以上的表述中，仅仅只是门外的惊鸿一瞥。“思维链”“ICL”等等，才是沉在水下的冰山，也是我这个门外汉，想去努力触碰的方向。  

### 更多学习资料
1. [提示工程指南 | Prompt Engineering Guide (promptingguide.ai)](https://www.promptingguide.ai/zh)
2. [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
3. [awesome-chatgpt-prompts-zh: ChatGPT 中文调教指南](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)
4. [ChatGPT3-Free-Prompt-List](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List)
5. [AiShort (ChatGPT Shortcut) - 简单易用的 ChatGPT 快捷指令表，让生产力倍增！](https://www.aishort.top/)
6. [AI Prompt Generators & Prompt Library](https://hero.page/ai-prompts)