/**
 * Loadlazy 懒加载包
 * @param el {String} 当前懒加载区域容器标签 例如 #container， 只能为 id 选择器
 * @param distanceToTop {Number} 图片距离可视多少距离触发加载
 */
/**
 *
 *
 * @class Loadlazy
 */
class Loadlazy {
  constructor ({el, lazy, distanceToTop}) {
    Object.assign(this, {el, lazy, distanceToTop})
    this.init()
  }

  init () {
    this.initEl()
    this.checkInSight()
    this.scrollEvent()
  }

  initEl () {
    this.$el = document.querySelector(this.el)
    console.log(this.$el)
    if (!this.$el) throw Error('can not find load container')
  }

  /**
   * 判断图片是否在可视区域方法
   * 1、通过 document.documentElement.clientHeight 获取屏幕可视窗口高度
   * 2、通过 document.documentELement.scrollTop 获取浏览器窗口顶部与文档顶部之间的距离，滚动条距离
   * 3、通过 element.offsetTop 获取元素相对文档顶部的距离
   */
  isInSight (ele) {
    let _clientHeight = document.documentElement.clientHeight,
        _scrollTop = document.documentElement.scrollTop,
        _offsetTop = ele.offsetTop

    return _offsetTop + this.distanceToTop <= _clientHeight + _scrollTop
  }

  /**
   * 检验是否在可视区域
   */
  checkInSight () {
    let imgs = document.querySelectorAll(this.lazy)

    Array.from(imgs).forEach(ele => {
      // console.log(this.isInSight(ele))
      if (this.isInSight(ele)) {
        this.loadImg(ele)
      }
    })
  }

  /**
   * 加载图片方法
   */
  loadImg (ele) {
    // console.log(ele.dataset.origin)
    // console.log(ele.src)
    if (!ele.src && ele.dataset.origin) {
      // console.log(ele.dataset.origin)
      let source = ele.dataset.origin
      ele.src = source
    }
  }

  /**
   * 监听滚动条事件
   */
  scrollEvent () {
    window.onscroll = () => {
      console.log('1')
      this.checkInSight()
    }
  }
}

// 使用
new Loadlazy({
  el: '#loadContainer',
  lazy: '.lazy',
  distanceToTop: 0
})