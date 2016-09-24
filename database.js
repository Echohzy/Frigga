var articleList = [
  {
    id: 1,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    nick_name: "Canaan",
    title: "测试文章测",
    shortDescribetion: "这是一篇测试文章啦啦啦啦",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 2,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/Fj01S29qiW8bGthGfiUcobmfg8Tf_xl",
    nick_name: "Canaan",
    title: "这还是测试文章啦啦啦",
    shortDescribetion: "啦啦啦这是测试测试测试啦",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 3,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    nick_name: "Canaan",
    title: "并不知道该说什么",
    shortDescribetion: "测试测试测试",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 4,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    nick_name: "Canaan",
    title: "奥运会",
    shortDescribetion: "里约大冒险",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 5,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    nick_name: "Canaan",
    title: "一本正经的测试文章",
    shortDescribetion: "啦啦啦啦啦啦啦",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 6,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    nick_name: "Canaan",
    title: "并不知道该说什么",
    shortDescribetion: "测试测试测试",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 7,
    avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    nick_name: "Canaan",
    title: "并不知道该说什么",
    shortDescribetion: "测试测试测试",
    like: 10,
    comment: 14,
    release_date: new Date()
  }
];


var article = {
  title: "测试文章啦啦啦啦",
  content: "这是测试这是测试这是测试啦啦啦啦啦啦啦",
  author_avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
  created_at: new Date(2016,8,8),
  nick_name: "Canaan",
  like: 3,
  comment: 2,
  commentData: [{
    created_at: new Date(2016, 8,16),
    creator_nick_name: "Canaan",
    creator_avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    id: 1,
    content: "这是测试用的评论" 
  },{
    created_at: new Date(2016, 8,16),
    creator_nick_name: "Canaan",
    creator_avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    id: 2,
    content: "这是测试用的评论"
  }]
};

var account = {
  backgroundImage: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
  avatar: "../../images/test3.jpg",
  nick_name: "Canaan",
  user_name: "test"
};

export {
  articleList,
  article,
  account
};