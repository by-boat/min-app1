import Taro from '@tarojs/taro'

import getSystemInfo from './getSystemInfo'

class Utils {

  static toFixed = (num: number, dig?: any) => {
    return (Number(num) / 100).toFixed(dig || 2)
  }

  static get systemTopHeight() {
    const { height, top } = Taro.getMenuButtonBoundingClientRect() || {}
    return height + top + 'px'
  }

  static get menuButtonBoundingClientRect() {
    return Taro.getMenuButtonBoundingClientRect() || {}
  }

  static getSystemInfo() {
    return Taro.getSystemInfoSync()
  }

  static getUserInfo() {
    return new Promise((resolve) => {
      let user_info = Taro.getStorageSync('user_info')
      if (user_info) {
        resolve(user_info)
      } else {
        (function again() {
          Taro.showModal({
            title: '提示',
            content: '请允许授权个人信息~',
            success: (res) => {
              if (res.confirm) {
                Taro.getUserProfile({
                  desc: '用户展示详细信息',
                  success: (res) => {
                    user_info = {
                      nickName: res.userInfo.nickName,
                      avatarUrl: res.userInfo.avatarUrl,
                    }
                    Taro.setStorageSync('user_info', user_info)
                    resolve(user_info)
                  },
                  fail: again
                })
              } else if (res.cancel) {
                again()
              }
            }
          })
        })()
      }

    })
  }

  static showToast(data: string | Record<string, any>) {
    if (typeof data === 'string') {
      Taro.showToast({
        title: data,
        icon: 'none',
        duration: 2000
      })
    } else {
      const { title, icon = 'none', duration = 2000 } = data
      Taro.showToast({
        title,
        icon,
        duration
      })
    }
  }
}

export default Utils