import Taro from '@tarojs/taro'

import getSystemInfo from './getSystemInfo'

class Utils {

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
}

export default Utils