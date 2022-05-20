module.exports = {
  // environment: 运行环境
  //   - 'local'     [默认]本地/服务器
  //   - 'qingfuwu'  字节跳动轻服务
  //   - 'tencent'   腾讯云函数
  //   - 'github'    github action
  environment: 'local',
  corpId: 'dingdd44fee6e26b31f3f2c783f7214b6d69',       // [无需修改] 钉钉企业ID, 同一学校只有一个
  login: {
    username: '',                              // 学号
    password: '',                              // 登录 i.swu.edu.cn 时使用的密码
    encryptCookie: 'lD01YhBPHVTHP',            // [无需修改] 同一登录系统使用的加密Cookie名
  },
  position: {                                  // 健康上报与查寝时使用的位置信息(非必要不修改)
    latitude: 29.826612,                       // 纬度, 可以自行搜索坐标拾取工具设置但需保留6位小数
    longitude: 106.425291,                     // 经度
    province: '重庆市',                         // 定位省份
    city: '重庆市',                             // 定位市
    district: '北碚区',                         // 定位区
    road: '文渊路',                             // 定位路
    address: '重庆市北碚区文渊路2号靠近志成大厦',    // 详细地址, 用于在打卡结果中显示
    cityAdCode: '023',                         // 定位城市号, 即固定电话区号
    districtAdCode: '500109',                  // 定位区县号, 即身份证前六位地区码. 可执行搜索身份证省市编码表
    // LBSWuaCacheId: '49148817',              // 疑似为定位服务提供商缓存编号, 非必填项, 请忽略
  },
  morning: {                                   // 健康上报信息, (非必要不修改)
    formId: '3fc165a338ee4450966268383da9a007',// 健康上报表单号, 防止请求失败兜底
    formInfo: {                                // 需要手动指定表单字段
      wd: '1',                                 // 温度选择(1=<37.2)
      $wd: '正常，＜37.2℃',                     // 温度选择文字描述
      drjkmsfzc: '是',                          // 当日健康码是否正常选项
      $drjkmsfzc: '是',                         // 当日健康码是否正常文字描述
      drxcmsfzc: '是',                          // 当日行程码是否正常选项
      $drxcmsfzc: '是',                         // 当日行程码是否正常文字
    },
  },
  evening: {                                   // 查寝配置项目(非必要不修改)
    unknownParams: {                           // 需要手动指定表单字段
      $qdjg: '未签到',                          // 签到状态
      $qdsjxpz: '是',                          // 签到时进行拍照
      $qdtj: '必须在范围内签到',                  // 没什么卵用的tag
      $xhxq: '周六',                            // 表单的首次创建星期数(真不知道为啥要保存这东西)
    },
  },
  imgPool: {                                    // 查寝图片提交方式
    // methods: 可选
    //   - 'apiImg'     [默认]GET指定API获取图片并上传提交
    //   - 'urls'       通过预先指定提交信息提交, 提交时随机选择一个提交
    //   - 'api'        GET指定API获取上传信息并提交
    //   - 'tencentCOS' 使用腾讯云COS, 预先通过网站上传大量图片到COS, 云函数每次使用一个提交并销毁图片
    //   - 'qingfuwu'   使用轻服务, 预先通过网站上传大量图片到轻服务, 轻服务每次使用一个提交并销毁图片
    //   - 'github'     [推荐]使用github action从仓库中上传, 每次使用一个提交并销毁图片
    methods: 'apiImg',
    // 若选择`apiImg`则需配置此接口, 默认为一个获得随机200x200图像的接口
    apiImg: 'https://picsum.photos/200',
    // 若选择urls需要手动填写下表, 可以使用`node /src/getLocalImageInfo.js demo.png`获取图片信息,
    url: [
      {
        fileContentType: 'image/png',
        fileUniqueCode: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        fileSize: 99999,
        fastDFSThumbImagePath:
          'XXX/XX/XX/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx_150x150.png',
        fastDFSGroupName: 'groupX',
        fastDFSPath: 'XXX/XX/XX/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png',
      },
    ],
    // 若选择`api`需要填写GET地址,
    api: '',
    // 若选择轻服务, 需要填写项目地址与上传下载密码(注意`.cn`后没有`/`)
    qingfuwu: {
      baseUrl: 'https://xxxxxx.api.cloudendpoint.cn',
      passwd: 'abc123',
    },
    // 若选择腾讯云COS, 则需填写存储地址
    tencentCOS:{
      secretId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',     // 登录 https://console.cloud.tencent.com/cam/capi 生成
      secretKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',        // 登录 https://console.cloud.tencent.com/cam/capi 生成
      bucket: 'xxxxxxx-1234567890',               // 在存储桶-概览-基本信息-存储桶名称
      region: 'ap-xxxxxxxx',                      // 在存储桶-概览-基本信息-所属地域括号中内容
      prefix: 'img/'                              // 存储图片文件夹, 非必要不动
    }
  },
  resultEmail: {                                  // 采用邮件通知
    enable: false,                                // 是否开启
    qingMid: false,                               // 是否采用轻服务小中间件发送邮件, 若不采用则必须配置89-91行
    restImg: false,                               // [限腾讯云COS/轻服务/Github Action修改]是否在返回查寝信息时返回剩余照片数
    saver: '1111111111@qq.com',                   // 收件邮箱地址
    senderService: '',                            // [采用轻服务中间件可以不写]发件邮箱服务器, 例如`QQ`, `outlook`
    sender: '',                                   // [采用轻服务中间件可以不写]发件邮箱地址
    senderPassword: '',                           // [采用轻服务中间件可以不写]发件邮箱密码
  },
  githubTryCount: 3,                              // Github Action 尝试次数上限
};
