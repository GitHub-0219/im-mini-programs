# FlyChat - 企业协作即时通讯

## 项目简介

FlyChat 是一款类飞书风格的企业协作即时通讯 Web 应用，采用纯 HTML + CSS + JS 开发，无框架依赖。

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- 响应式设计，兼容手机(375px)、平板(768px)、PC(1200px+)
- CSS 变量主题系统
- 模拟数据（无后端依赖）

## 页面说明

| 文件 | 功能 |
|------|------|
| index.html | 消息列表（会话列表、搜索、置顶、免打扰） |
| chat.html | 聊天页面（消息气泡、多种消息类型、@功能、引用/转发/撤回） |
| contacts.html | 通讯录（字母索引、组织架构树、联系人详情） |
| workspace.html | 工作台（日程、待办、审批、打卡签到） |
| profile.html | 个人中心（状态设置、通知、存储管理） |
| group.html | 群组管理（群公告、成员、群文件） |

## 设计规范

- 主色：#3370FF（飞书蓝）
- 字体：-apple-system, PingFang SC, Microsoft YaHei
- 圆角：8px / 12px
- 阴影：0 2px 8px rgba(0,0,0,0.08)

## 快速开始

```bash
# 直接在浏览器中打开
open index.html

# 或使用本地服务器
python3 -m http.server 8080
```

## 响应式断点

- Mobile: < 768px（底部Tab导航）
- Tablet: 769px - 1199px（侧边栏 + 主内容）
- PC: ≥ 1200px（完整侧边栏布局）

## 小程序适配

详见 `docs/小程序适配说明.md`

## 目录结构

```
flychat/
├── index.html          # 消息列表
├── chat.html           # 聊天页面
├── contacts.html       # 通讯录
├── workspace.html      # 工作台
├── profile.html        # 个人中心
├── group.html          # 群组管理
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── data.js         # 模拟数据
├── docs/               # 项目文档
└── README.md
```
