import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import utils from '@/utils'
import './index.less'

export default class SearchBar extends Component<PropsWithChildren> {
  [key: string]: any
  constructor(props) {
    super(props)
    this.state = {}
    this.search_text_list = [
      '燕窝上新 万份精华免费领',
      '秋季潮养生，买二赠二起',
      '万圣好礼趴，领60元大额券',
      '新人专享补贴价低至0.01元',
      '膳魔师￥99换购',
      '超值换购',
      '0元试正装好物',
    ]
  }
  render() {
    return (
      <View className='search_bar' style={{ top: utils.menuButtonBoundingClientRect.top + 'px', height: utils.menuButtonBoundingClientRect.height + 'px' }}>
        <View className='main_box'>
          <Swiper
            className='swiper'
            vertical
            circular
            autoplay
            interval={3000}
          >
            {this.search_text_list.map(item => (
              <SwiperItem key={item}>
                <View className='swiper_item'>{item}</View>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
      </View>
    )
  }
}