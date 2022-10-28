import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import utils from '@/utils'

import SearchBar from './coms/SearchBar'

import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount() {
    // const systemInfo = utils.getSystemInfo()
    // console.log(systemInfo)
    console.log(Taro.getMenuButtonBoundingClientRect())
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='hearder'>
          <View className='top_bg' style={{ height: utils.systemTopHeight }}></View>
          <SearchBar />
        </View>
      </View>
    )
  }
}
