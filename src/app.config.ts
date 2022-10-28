export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mall/index',
    'pages/category/index',
    'pages/cartList/index',
    'pages/others/index',
  ],
  tabBar: {
    "color": "#999",
    "selectedColor": "#000",
    "backgroundColor": "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        text: '首页',
        iconPath: './images/tabbar_img/home-off.png',
        selectedIconPath: './images/tabbar_img/home-on.png'
      },
      {
        pagePath: "pages/mall/index",
        text: '商城',
        iconPath: './images/tabbar_img/shopMall-off.png',
        selectedIconPath: './images/tabbar_img/shopMall-on.png'
      },
      {
        pagePath: "pages/category/index",
        text: '分类',
        iconPath: './images/tabbar_img/category-off.png',
        selectedIconPath: './images/tabbar_img/category-on.png'
      },
      {
        pagePath: "pages/cartList/index",
        text: '购物车',
        iconPath: './images/tabbar_img/cartList-off.png',
        selectedIconPath: './images/tabbar_img/cartList-on.png'
      },
      {
        pagePath: "pages/others/index",
        text: '我的 ',
        iconPath: './images/tabbar_img/others-off.png',
        selectedIconPath: './images/tabbar_img/others-on.png'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
