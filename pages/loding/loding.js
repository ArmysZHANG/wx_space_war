const Space = require('../../dynamic_tools/loding.js');
const spaceaudios = require('../../dynamic_tools/audios.js');

Page({
  data: {
    windowHeight: "603px",
    windowWidth: "375px",
    height: 603,
    width: 375,
    loding_music: spaceaudios["loding_music"].src,
    action: {
      method: 'play'
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    let that = this;
    let res = wx.getSystemInfoSync();

    that.setData({
      windowHeight: res.windowHeight + "px",
      windowWidth: res.windowWidth + "px",
      height: res.windowHeight,
      width: res.windowWidth
    })

    const space = that.space = new Space(
      {
        ctx: wx.createContext(),
        id: 'lodingId',
        height: res.windowHeight,
        width: res.windowWidth,
      });
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  audioPlayback: function () {
    const space = this.space;
    let state = space.audioSwitch();
    return state;
  },
  click: function (ev) {
    let method = "play";
    let that = this;
    var x = ev.touches[0].x;
    var y = ev.touches[0].y;
    let width = this.data.width;
    let c_width = (width - 80);
    if (x > c_width && x <= (c_width + 59) && y > 20 && y <= 65) {
      let state = that.audioPlayback();
      method = state == true ? "play" : "pause"
      console.log(method)
      this.setData({
        "action.method": method
      });
    }
  }
})