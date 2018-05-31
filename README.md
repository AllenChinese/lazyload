# lazyload

懒加载工具。

## 什么是懒加载

懒加载就是图片延迟加载。img标签开始通过使用统一的占位图片，这样浏览器只需要请求一次图片。当相应图片出现在可视区域后，才用新图片路径替换。


## 为什么使用懒加载

我们知道浏览器的最大并发连接数是有限的，一般是4或6个。而对于一个丰富图片的页面，可能一屏加载的数量在几十甚至上百，网页的加载时间就变得很长，甚至会阻塞js的加载。这个时候懒加载就显得很重要。

## 懒加载实现

    <img src="占位图片地址" data-origin="实际图片地址" />


利用监听滚动条事件，当图片进入可视区域时，将 src 中的占位符地址改为 data-origin 中地址。

## 引用

    <link rel="stylesheet" href="index.css">

或者

    npm install

## 使用

### HTML结构

    <div id="loadContainer" class="load-container">
      <ul>
        <li>
          <img class="lazy-img" data-origin="https://images.pexels.com/xxx" alt="">
        </li>
      </ul>
    </div>

1、一个id表示是一个提供懒加载的容器。

2、所有需要懒加载的图片都需要添加一个统一的class。

### JavaScript

初始化 Loadlazy 对象,并配置相关参数。

    new Loadlazy({
      el: '#loadContainer', // 容器必须 id
      lazy: '.lazy-img', // img class
      distanceToTop: 0 // 触发懒加载距离
    })

