import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Image, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import utils from '@/utils'
import api from '@/request/req'

import SearchBar from './coms/SearchBar'

import './index.less'

export default class Index extends Component<PropsWithChildren> {
  [key: string]: any
  state: {
    [key: string]: any
  }
  constructor(props: any) {
    super(props)
    this.state = {
      userInfo: {},
      banner_list: [
        'https://mystore-img.watsonsvip.com.cn/upload/873e0267-8dc9-42f4-b0c5-095d39c08bd5.png?imageMogr2/interlace/1/quality/75&x-oss-process=image/interlace,1/quality,q_75',
        'https://mystore-img.watsonsvip.com.cn/upload/894e23ad-f10b-4d0a-9f8f-2adb8bbb9e31.png',
        [
          'https://mystore-h5.watsonsvip.com.cn/img/rolled-cat-Initialize.png',
          'https://mystore-h5.watsonsvip.com.cn/img/standing_cat01.gif'
        ],
      ],
      groups_list: []
    }
  }

  async componentWillMount() {
    const userInfo = await utils.getUserInfo()
    this.setState({
      userInfo
    })
    let banner_list = await api.get('/get-assets/index-banners')
    const groups_list = await api.get('/get-gruops')
    this.setState({
      banner_list,
      groups_list
    })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {
      userInfo,
      banner_list,
      groups_list
    } = this.state

    return (
      <View className='index'>
        <View className='hearder'>
          <View className='top_bg' style={{ height: utils.systemTopHeight }}></View>
          <Image src={userInfo.avatarUrl} style={{ top: utils.menuButtonBoundingClientRect.top + 'px', height: utils.menuButtonBoundingClientRect.height + 'px', width: utils.menuButtonBoundingClientRect.height + 'px' }} className="avatarUrl" />
          <SearchBar />
        </View>
        <View className='title' style={{ paddingTop: utils.menuButtonBoundingClientRect.top + utils.menuButtonBoundingClientRect.height + 30 + 'px' }}>
          <View className='text1'>晚上好，{userInfo.nickName}</View>
          <View className='text2'>只要坚持，就能成功</View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center' }}>
          <Swiper
            className='banner'
            circular
            autoplay
            interval={3000}
          >
            {banner_list.map(banner => (
              <SwiperItem key={banner}>
                {
                  Array.isArray(banner) ?
                    (
                      <View className='two_img'>
                        <Image src={banner[0]}></Image>
                        <Image src={banner[1]} className="gif"></Image>
                      </View>
                    )
                    : (
                      <Image src={banner}></Image>
                    )
                }
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        {
          groups_list.map(item => (
            <View key={item.big_bg} className="groups">
              <Image src={item.big_bg} className="big_bg"></Image>
              <View className='bottom'>
                <ScrollView
                  scrollX
                  className='ScrollView'>
                  {
                    item.goodsList.map(goods => (
                      <View key={goods.spu_id + Math.random()} className="goods">
                        <Image src={goods.url} className="goods_img"></Image>
                        <View className='goods_name'>{goods.spu_name}</View>
                        <View className='price'>
                          <Text>￥</Text>
                          {utils.toFixed(goods.price)}
                        </View>
                      </View>
                    ))
                  }
                </ScrollView>

              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
