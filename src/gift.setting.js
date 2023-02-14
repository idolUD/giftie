
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '情人节214送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: '肖先生',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '中国珠宝黄金豆豆', alias: 'Dior双飞', image: '/images/1.png',  description: '「投资理财神器」' },
  { key: 'w', name: 'YSL 黑鸦片香水', alias: 'YSL黑鸦片', image: '/images/2.png',  description: '“馥郁香息 以香示爱”' },
  { key: 'e', name: '飞亚达小绿表', alias: '小绿表', image: '/images/3.png',  description: '「公主的礼物」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“520”' },
  { key: 't', name: 'CL口红', alias: 'CL口红', image: '/images/5.png',  description: '「热烈唇粹 爱意升温」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '情人节晚餐', alias: '情人节晚餐', image: '/images/7.png',  description: '“吃吃吃！！”' },
  { key: 'i', name: '未中奖', alias: '未中奖', image: '/images/8.png',  description: '「机不可失，明年再来」' },
];
