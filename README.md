# 💬 IM 即时通讯小程序

![WeChat](https://img.shields.io/badge/兼容-微信小程序-07C160?style=flat&logo=wechat&logoColor=white)
![Feishu](https://img.shields.io/badge/兼容-飞书-3370FF?style=flat)
![DingTalk](https://img.shields.io/badge/兼容-钉钉-0089FF?style=flat&logo=dingtalk&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

> 📱 2 个 IM 即时通讯小程序，分别对标**飞书**和**微信/钉钉**，支持聊天、通讯录、群组、工作台等核心功能。

---

## ✨ 功能特性

| 模块 | 功能说明 |
|------|----------|
| 💬 单聊 | 一对一实时消息通讯 |
| 👥 群聊 | 多人群组消息与管理 |
| 📇 通讯录 | 组织架构、联系人管理 |
| 👤 个人中心 | 个人信息、设置、头像 |
| 🏢 工作台 | 企业应用入口与工作流 |
| 📎 消息类型 | 文字、图片、文件、表情等 |

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| 小程序框架 | 微信/飞书/钉钉小程序开发 |
| WebSocket | 实时消息通讯 |
| CSS3 | UI 样式与动画 |
| JavaScript | 业务逻辑与数据处理 |

---

## 📁 项目结构

```
im-mini-programs/
├── flychat/                # 🦅 FlyChat（飞书风格）
│   ├── index.html          #   入口页面
│   ├── chat.html           #   聊天页面
│   ├── contacts.html       #   通讯录页面
│   ├── group.html          #   群组页面
│   ├── profile.html        #   个人中心页面
│   ├── workspace.html      #   工作台页面
│   ├── README.md           #   项目说明
│   ├── css/                #   样式文件
│   ├── js/                 #   脚本文件
│   └── docs/               #   开发文档
├── worktalk/               # 💼 WorkTalk（微信/钉钉风格）
│   ├── index.html          #   入口页面
│   ├── chat.html           #   聊天页面
│   ├── contacts.html       #   通讯录页面
│   ├── profile.html        #   个人中心页面
│   ├── README.md           #   项目说明
│   └── css/                #   样式文件
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/GitHub-0219/im-mini-programs.git
cd im-mini-programs

# 使用微信开发者工具打开
# 文件 → 导入项目 → 选择 flychat/ 或 worktalk/ 目录

# 查看开发文档
cat flychat/docs/开发文档.md
```

### 开发环境要求

| 工具 | 版本要求 |
|------|----------|
| 微信开发者工具 | 最新稳定版 |
| Node.js | >= 14.x |
| 飞书开发者工具 | 最新稳定版 |

---

## 📸 截图

| FlyChat 聊天 | WorkTalk 通讯录 | 群组管理 |
|--------------|-----------------|----------|
| ![聊天](screenshots/flychat-chat.png) | ![通讯录](screenshots/worktalk-contacts.png) | ![群组](screenshots/group.png) |

---

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。
