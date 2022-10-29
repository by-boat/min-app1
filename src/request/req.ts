import Taro from "@tarojs/taro";
import utils from '@/utils'
const baseURL = 'http://192.168.0.195:3000'

class API {
  [key: string]: any
  constructor(options: any = {}) {
    // let { baseURL = '/' } = options
    // if (!/\/$/.test(baseURL)) {
    //   baseURL = baseURL + '/'
    // }
    this.options = options
    this.baseURL = baseURL
    this.genMethods(['get', 'post', 'delete', 'put'])
  }

  genMethods(methods) {
    methods.forEach((method) => {
      this[method] = (url: string, data, config = {}) =>
        this.makeReq({
          url,
          data,
          ...config,
          method
        })
    })
  }

  async makeReq(config) {
    return new Promise((reslove, reject) => {
      const {
        url,
        data,
        method = 'GET',
        showError = true
      } = config

      const params = {
        url: baseURL + url,
        method,
        data
      }
      Taro.request(params).then((res) => {
        const { code, data, msg } = res.data
        if (code === 200) {
          reslove(data)
        } else if (showError) {
          utils.showToast(msg)
          reject()
        }
      })
    })
  }
}

export default new API()