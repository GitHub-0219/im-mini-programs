// FlyChat Mock Data & Core Logic
const FlyChat = {
  currentUser: {
    id: 'u001',
    name: '张三',
    avatar: '张',
    title: '前端工程师',
    dept: '技术部',
    status: '在线',
    phone: '138****1234',
    email: 'zhangsan@company.com'
  },

  conversations: [
    { id: 'c001', name: '李四', avatar: '李', type: 'private', lastMsg: '方案我看了，有些地方需要调整', time: '刚刚', unread: 2, pinned: true, muted: false },
    { id: 'c002', name: '前端技术群', avatar: '前', type: 'group', lastMsg: '王五: 新版本已发布', time: '10:30', unread: 5, pinned: true, muted: false },
    { id: 'c003', name: '王芳', avatar: '王', type: 'private', lastMsg: '好的，明天开会讨论', time: '09:15', unread: 0, pinned: false, muted: false },
    { id: 'c004', name: '产品设计组', avatar: '产', type: 'group', lastMsg: '赵六: 设计稿已更新', time: '昨天', unread: 0, pinned: false, muted: true },
    { id: 'c005', name: '刘总', avatar: '刘', type: 'private', lastMsg: '下周三之前完成', time: '昨天', unread: 1, pinned: false, muted: false },
    { id: 'c006', name: '周七', avatar: '周', type: 'private', lastMsg: '收到，谢谢！', time: '周一', unread: 0, pinned: false, muted: false },
    { id: 'c007', name: '全员通知', avatar: '全', type: 'group', lastMsg: 'HR: 年会通知', time: '周一', unread: 0, pinned: false, muted: true },
    { id: 'c008', name: '吴八', avatar: '吴', type: 'private', lastMsg: '帮我看看这个bug', time: '上周五', unread: 0, pinned: false, muted: false },
    { id: 'c009', name: '项目冲刺群', avatar: '项', type: 'group', lastMsg: '孙九: 今天完成联调', time: '上周五', unread: 0, pinned: false, muted: false },
    { id: 'c010', name: '陈十', avatar: '陈', type: 'private', lastMsg: '周末一起打球？', time: '上周四', unread: 0, pinned: false, muted: false },
  ],

  messages: {
    'c001': [
      { id: 'm001', sender: 'u002', name: '李四', avatar: '李', type: 'text', content: '张三，在吗？', time: '10:00', status: 'read' },
      { id: 'm002', sender: 'u001', name: '张三', avatar: '张', type: 'text', content: '在的，什么事？', time: '10:02', status: 'read' },
      { id: 'm003', sender: 'u002', name: '李四', avatar: '李', type: 'text', content: '上次说的那个项目方案，你看了吗？', time: '10:03', status: 'read' },
      { id: 'm004', sender: 'u001', name: '张三', avatar: '张', type: 'text', content: '看了，我觉得整体思路不错，但技术选型部分可以再优化一下', time: '10:05', status: 'read' },
      { id: 'm005', sender: 'u002', name: '李四', avatar: '李', type: 'text', content: '具体哪些地方需要优化？', time: '10:06', status: 'read' },
      { id: 'm006', sender: 'u001', name: '张三', avatar: '张', type: 'file', content: '技术方案v2.docx', fileSize: '2.3MB', time: '10:10', status: 'read' },
      { id: 'm007', sender: 'u002', name: '李四', avatar: '李', type: 'text', content: '好的，我先看看这个文档', time: '10:12', status: 'read' },
      { id: 'm008', sender: 'u002', name: '李四', avatar: '李', type: 'text', content: '方案我看了，有些地方需要调整', time: '10:30', status: 'delivered' },
      { id: 'm009', sender: 'u001', name: '张三', avatar: '张', type: 'voice', content: '', duration: '0:15', time: '10:32', status: 'sent' },
    ],
    'c002': [
      { id: 'm010', sender: 'u003', name: '王五', avatar: '王', type: 'text', content: '大家好，新版API文档已更新', time: '09:00', status: '' },
      { id: 'm011', sender: 'u004', name: '赵六', avatar: '赵', type: 'text', content: '收到，我去看看', time: '09:05', status: '' },
      { id: 'm012', sender: 'u001', name: '张三', avatar: '张', type: 'text', content: '@王五 文档链接发一下', time: '09:10', status: 'read', atUser: '王五' },
      { id: 'm013', sender: 'u003', name: '王五', avatar: '王', type: 'file', content: 'API文档v3.2.pdf', fileSize: '5.1MB', time: '09:15', status: '' },
      { id: 'm014', sender: 'u003', name: '王五', avatar: '王', type: 'text', content: '新版本已发布', time: '10:30', status: '' },
    ],
    'c003': [
      { id: 'm015', sender: 'u005', name: '王芳', avatar: '王', type: 'text', content: '明天的评审会准备好了吗？', time: '08:30', status: 'read' },
      { id: 'm016', sender: 'u001', name: '张三', avatar: '张', type: 'text', content: '准备好了，PPT已经做完', time: '08:45', status: 'read' },
      { id: 'm017', sender: 'u005', name: '王芳', avatar: '王', type: 'text', content: '好的，明天开会讨论', time: '09:15', status: 'read' },
      { id: 'm018', sender: 'u001', name: '张三', avatar: '张', type: 'text', content: '好的，明天开会讨论', time: '09:15', status: 'read', replyTo: 'm017' },
    ],
  },

  contacts: {
    'A': [
      { id: 'u010', name: '安琪', avatar: '安', title: 'UI设计师', dept: '设计部' },
    ],
    'C': [
      { id: 'u011', name: '陈十', avatar: '陈', title: '运维工程师', dept: '技术部' },
      { id: 'u012', name: '程鹏', avatar: '程', title: '产品经理', dept: '产品部' },
    ],
    'L': [
      { id: 'u002', name: '李四', avatar: '李', title: '后端工程师', dept: '技术部' },
      { id: 'u013', name: '刘总', avatar: '刘', title: '技术总监', dept: '管理层' },
    ],
    'W': [
      { id: 'u003', name: '王五', avatar: '王', title: '全栈工程师', dept: '技术部' },
      { id: 'u005', name: '王芳', avatar: '王', title: '项目经理', dept: '项目管理部' },
      { id: 'u006', name: '吴八', avatar: '吴', title: '测试工程师', dept: '质量部' },
    ],
    'Z': [
      { id: 'u004', name: '赵六', avatar: '赵', title: '前端工程师', dept: '技术部' },
      { id: 'u007', name: '周七', avatar: '周', title: 'HR专员', dept: '人力资源部' },
    ],
  },

  orgTree: [
    { id: 'org1', name: '星辰科技有限公司', type: 'company', children: [
      { id: 'org2', name: '技术部', type: 'dept', children: [
        { id: 'org2-1', name: '前端组', type: 'team', members: ['张三', '赵六', '安琪'] },
        { id: 'org2-2', name: '后端组', type: 'team', members: ['李四', '陈十'] },
        { id: 'org2-3', name: '测试组', type: 'team', members: ['吴八'] },
      ]},
      { id: 'org3', name: '产品部', type: 'dept', children: [
        { id: 'org3-1', name: '产品组', type: 'team', members: ['程鹏'] },
      ]},
      { id: 'org4', name: '设计部', type: 'dept', children: [
        { id: 'org4-1', name: 'UI组', type: 'team', members: ['安琪'] },
      ]},
      { id: 'org5', name: '人力资源部', type: 'dept', children: [
        { id: 'org5-1', name: 'HR组', type: 'team', members: ['周七'] },
      ]},
      { id: 'org6', name: '管理层', type: 'dept', children: [
        { id: 'org6-1', name: '高管', type: 'team', members: ['刘总'] },
      ]},
    ]},
  ],

  groupMembers: [
    { id: 'u001', name: '张三', avatar: '张', role: 'admin' },
    { id: 'u002', name: '李四', avatar: '李', role: 'member' },
    { id: 'u003', name: '王五', avatar: '王', role: 'member' },
    { id: 'u004', name: '赵六', avatar: '赵', role: 'member' },
    { id: 'u005', name: '王芳', avatar: '王', role: 'member' },
    { id: 'u006', name: '吴八', avatar: '吴', role: 'member' },
  ],

  announcements: [
    { id: 'a001', content: '请大家在本周五前提交季度总结报告。', time: '2024-01-15', author: '张三' },
    { id: 'a002', content: '下周一下午2点全员会议，请准时参加。', time: '2024-01-10', author: '刘总' },
  ],

  groupFiles: [
    { name: '项目计划书v2.docx', size: '1.2MB', uploader: '张三', time: '2024-01-14' },
    { name: '设计规范.pdf', size: '8.5MB', uploader: '安琪', time: '2024-01-12' },
    { name: '会议纪要0110.docx', size: '340KB', uploader: '王芳', time: '2024-01-10' },
    { name: '接口文档.json', size: '156KB', uploader: '李四', time: '2024-01-08' },
  ],

  schedule: [
    { time: '09:00', title: '产品需求评审会', location: '3楼会议室A' },
    { time: '11:00', title: '技术方案讨论', location: '线上-腾讯会议' },
    { time: '14:00', title: '每日站会', location: '工位区' },
    { time: '16:00', title: '设计评审', location: '5楼设计室' },
  ],

  todos: [
    { id: 't001', text: '完成用户模块API开发', done: false, due: '今天' },
    { id: 't002', text: '修复登录页样式问题', done: true, due: '今天' },
    { id: 't003', text: '编写单元测试', done: false, due: '明天' },
    { id: 't004', text: '代码Review PR#123', done: false, due: '明天' },
    { id: 't005', text: '更新技术文档', done: true, due: '上周五' },
  ],

  approvals: [
    { id: 'ap001', type: '请假', title: '年假申请 - 1月20日至1月24日', info: '申请人：张三 | 时长：5天', status: 'pending' },
    { id: 'ap002', type: '报销', title: '出差报销 - 北京客户拜访', info: '金额：¥3,560 | 申请人：李四', status: 'approved' },
    { id: 'ap003', type: '请假', title: '病假申请 - 1月8日', info: '申请人：王芳 | 时长：1天', status: 'rejected' },
  ],

  groupInfo: {
    name: '前端技术群',
    avatar: '前',
    count: 6,
    notice: '本群用于前端技术交流，请勿发送无关内容。',
    owner: '张三',
    createTime: '2023-06-15',
  }
};
