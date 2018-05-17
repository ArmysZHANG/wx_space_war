const spaceimages = require('./picture.js');
let audio_state = true;

function init(opts) {
  var c_width = this.c_width = opts.width;
  var c_height = this.c_height = opts.height;
  var cxt = this.cxt = opts.ctx;
  var id = this.id = opts.id;
  this.cxt.setFontSize(30);
  this.cxt.setFillStyle("#333");

  //等待动画刷新事件
  var refresh = function () {
    drawBg();
    drawVideoSwitch();
    audio_state == true ? drawVideoOpen() : drawVideoClose();
    drawLogo();
    drawPlayPanel();
    drawPlay();
    wx.drawCanvas({
      canvasId: id,
      actions: cxt.getActions()
    })
  }

  //设置背景
  function drawBg() {
    var bg_img = spaceimages["loding_bg"];
    bg_img.width = c_width
    bg_img.height = c_height
    var bg_img_width = c_width;
    var bg_img_height = c_height;
    cxt.drawImage(bg_img.src, 0, 0, bg_img_width, bg_img_height);
  }

  //构造音频开关按钮容器
  function drawVideoSwitch() {
    var logo_img = spaceimages["video_panel"];
    var logo_width = logo_img.width;
    var logo_height = logo_img.height;

    var y = 20, x = (c_width - 80);
    cxt.drawImage(logo_img.src, x, y, logo_width, logo_height);
  }
  //构造音频开按钮
  function drawVideoOpen() {
    var logo_img = spaceimages["video_open"];
    var logo_width = logo_img.width;
    var logo_height = logo_img.height;

    var y = 30, x = (c_width - 70);
    cxt.drawImage(logo_img.src, x, y, logo_width, logo_height);
  }
  //构造音频关按钮
  function drawVideoClose() {
    var logo_img = spaceimages["video_close"];
    var logo_width = logo_img.width;
    var logo_height = logo_img.height;

    var y = 30, x = (c_width - 70);
    cxt.drawImage(logo_img.src, x, y, logo_width, logo_height);
  }
  //构造logo
  function drawLogo() {
    var logo_img = spaceimages["loding_log"];
    var logo_width = c_width;
    var logo_height = logo_img.height;

    var y = 50;
    cxt.drawImage(logo_img.src, 0, y, logo_width, logo_height);
  }
  //构造play组
  function drawPlayPanel() {
    var logo_img = spaceimages["play_panel"];
    var logo_width = c_width - (c_width * (20 / 100));;
    var logo_height = logo_img.height;

    var y = (c_height - 150), x = (c_width * (10 / 100));
    cxt.drawImage(logo_img.src, x, y, logo_width, logo_height);
  }
  //构造play按钮
  function drawPlay() {
    var logo_img = spaceimages["play"];
    var logo_width = c_width - (c_width * (55 / 100));
    var logo_height = logo_img.height;

    var y = (c_height - 145), x = (c_width * (30 / 100));
    cxt.drawImage(logo_img.src, x, y, logo_width, logo_height);
  }

  //开始动画
  var loadingClock = setInterval(refresh, 1);
  function playAudio(path) {

  }

  var player = this.player = {};
  player.x;
  player.y;
  player.lastX;
  player.lastY;

  player.audioSwitch = function () {
    audio_state = !audio_state
  }
}

init.prototype.audioSwitch = function () {
  this.player.audioSwitch();
  return audio_state;
}
module.exports = init;