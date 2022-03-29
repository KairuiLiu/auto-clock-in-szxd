module.exports = {
  corpId: 'dingdd44fee6e26b31f3f2c783f7214b6d69',
  login: {
    username: '', // 学号
    password: '', // i.swu.edu.cn 密码
    encryptCookie: 'lD01YhBPHVTHP',
  },
  position: {
    latitude: 29.826612,
    longitude: 106.425291,
    province: '重庆市',
    city: '重庆市',
    district: '北碚区',
    road: '文渊路',
    address: '重庆市北碚区文渊路2号靠近志成大厦',
    cityAdCode: '023',
    districtAdCode: '500109',
    // LBSWuaCacheId: '49148817',
  },
  morning: {
    formId: '3fc165a338ee4450966268383da9a007',
    formInfo: {
      wd: '1',
      $wd: '正常，＜37.2℃',
      drjkmsfzc: '是',
      $drjkmsfzc: '是',
      drxcmsfzc: '是',
      $drxcmsfzc: '是',
    },
  },
  evening: {
    unknownParams: {
      $qdjg: '未签到',
      $qdsjxpz: '是', // 签到时进行拍照
      $qdtj: '必须在范围内签到',
      $xhxq: '周六',
    },
  },
  imgPool: {
    methods: 'qingfuwu', // 'urls', 'apiImg', 'api', 'qingfuwu'
    url: [
      {
        fileContentType: 'image/png',
        fileUniqueCode: '3c84da69acf6404699d14e041c0a8951',
        fileSize: 28131,
        fastDFSThumbImagePath:
          'M00/55/D5/3sZ4dGJCw5KAIOlKAABt479Z7vc182_150x150.png',
        fastDFSGroupName: 'group1',
        fastDFSPath: 'M00/55/D5/3sZ4dGJCw5KAIOlKAABt479Z7vc182.png',
      },
      {
        fileContentType: 'image/png',
        fileUniqueCode: '3c84da69acf6404699d14e041c0a8951',
        fileSize: 28131,
        fastDFSThumbImagePath:
          'M00/55/D5/3sZ4dGJCw5KAIOlKAABt479Z7vc182_150x150.png',
        fastDFSGroupName: 'group1',
        fastDFSPath: 'M00/55/D5/3sZ4dGJCw5KAIOlKAABt479Z7vc182.png',
      },
    ],
    apiImg: 'https://picsum.photos/200',
    api: 'https://i.picsum.photos/id/210/200/',
    qingfuwu: {
      baseUrl: 'https://qc9g3f.api.cloudendpoint.cn',
      passwd: '123',
    },
  },
  resultEmailQingfuwu: {
    enable: true,
    email: '1104886256@qq.com',
  },
};
