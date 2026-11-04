# kiro-chat-archive

Kiro 会话中产生的文件和聊天记录归档。

> 这是公开仓库，任何人都能看到。请不要在聊天里发送密码、密钥、身份证号等敏感信息。

## 目录结构

```
chat-history/            每次会话的聊天记录，文件名为 YYYY-MM-DD[-主题].md
files/YYYY-MM-DD-主题/    该次会话产生的文件（代码、文档等）
.kiro/steering/          Kiro 的同步规则
```

## 同步方式

每次 Kiro 会话结束前，Kiro 会把本次会话的聊天记录和产生的文件提交到这个仓库。
同步规则见 [.kiro/steering/archive-sync.md](.kiro/steering/archive-sync.md)。
