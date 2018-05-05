// 自己的订阅号
const personal = {
  appID: 'wxaea3d9250f2fa460',
  appSecret: '45d8281ff37fa611a3259b1573f426db',
  token: 'nodeprojectwechat',
}

// 开发模式的自定义菜单，无法使用未认证的个人订阅号，这里改用测试账号
const createMenu = {
  appID: 'wxdd9d951c4f4091d4',
  appSecret: '83596918bcc3373fee1482339c50f1af',
  token: 'nodeprojectwechat'
}

const menuOptions = {
  'button': [
    {
      'name': '生活',
      'sub_button': [
        {
          'type': 'click',
          'name': '尤克里里',
          'key': 'UKELILI'
        },
        {
          'type': 'click',
          'name': '健身',
          'key': 'FITNESS'
        }
      ]
    },
    {
      'name': '更多',
      'sub_button': [
        {
          'type': 'view',
          'name': 'GitHub',
          'url': 'https://github.com/ljunb',
        },
        {
          'type': 'click',
          'name': '关于我',
          'key': 'ABOUT_ME'
        }
      ]
    }
  ]
}

const apiPrefix = 'https://api.weixin.qq.com/cgi-bin'

module.exports = {
  wechat: createMenu,
  api: {
    accessToken: `${apiPrefix}/token`,
    menu: `${apiPrefix}/menu/create`,
  },
  port: 9003,
  menu: menuOptions,
}