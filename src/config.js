module.exports = {
  corpId: 'dingdd44fee6e26b31f3f2c783f7214b6d69',       // [无需修改] 钉钉企业ID, 同一学校只有一个 
  login: {
    username: '',                             // 学号
    password: '',                             // 登录 i.swu.edu.cn 时使用的密码
    encryptCookie: 'lD01YhBPHVTHP',           // [无需修改] 同一登录系统使用的加密Cookie名
  },
  position: {                                 // 健康上报与查寝时使用的位置信息(非必要不修改)
    latitude: 29.826612,                      // 纬度, 可以自行搜索坐标拾取工具设置但需保留6位小数
    longitude: 106.425291,                    // 经度
    province: '重庆市',                        // 定位省份
    city: '重庆市',                            // 定位市
    district: '北碚区',                        // 定位区
    road: '文渊路',                            // 定位路
    address: '重庆市北碚区文渊路2号靠近志成大厦',   // 详细地址, 用于在打卡结果中显示
    cityAdCode: '023',                        // 定位城市号, 即固定电话区号
    districtAdCode: '500109',                 // 定位区县号, 即身份证前六位地区码. 可执行搜索身份证省市编码表
    // LBSWuaCacheId: '49148817',             // 疑似为定位服务提供商缓存编号, 非必填项, 请忽略
  },
  morning: {                                  // 健康上报信息, (非必要不修改)
    formId: '3fc165a338ee4450966268383da9a007', // 健康上报表单号
    formInfo: {                               // 需要手动指定表单字段
      wd: '1',                                // 温度选择(1=<37.2)
      $wd: '正常，＜37.2℃',                    // 温度选择文字描述
      drjkmsfzc: '是',                         // 当日健康码是否正常选项
      $drjkmsfzc: '是',                        // 当日健康码是否正常文字描述
      drxcmsfzc: '是',                         // 当日行程码是否正常选项
      $drxcmsfzc: '是',                        // 当日行程码是否正常文字
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
    //   - 'apiImg'   [默认]GET指定API获取图片并上传提交
    //   - 'urls'     通过预先指定提交信息提交, 提交时随机选择一个提交 
    //   - 'api'      GET指定API获取上传信息并提交 
    //   - 'qingfuwu' [推荐]使用轻服务, 预先通过网站上传大量图片到轻服务, 轻服务每次使用一个提交并销毁图片
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
  },
  resultEmail: {                                  // 采用邮件通知
    enable: false,                                // 是否开启
    qing: false,                                  // 是否采用轻服务中间件
    saver: '1111111111@qq.com',                   // 收件邮箱地址
    senderService: '',                            // 发件邮箱服务器(采用轻服务中间件可以不写)
    sender: '',                                   // 发件邮箱地址(采用轻服务中间件可以不写)
    senderPassword: '',                           // 发件邮箱密码(采用轻服务中间件可以不写)
  },
};
