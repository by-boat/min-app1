import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import utils from '@/utils'
import './index.less'

export default class Mall extends Component<PropsWithChildren> {
  [key: string]: any
  constructor(props) {
    super(props)
    this.state = {}

  }
  render() {
    return (
      <View>商城页</View>
    )
  }
}