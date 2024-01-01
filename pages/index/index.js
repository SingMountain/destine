
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';

Page({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    image: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    idQR:'http://113.250.189.122:8090/api/wechat/generate?qrText=S231231095',
    activitiesList:[
      {
        time:"13:00",
        location:"2214",
        human_amount:69
  },   {
    time:"13:00",
    location:"2214",
    human_amount:69
  },   {
    time:"13:00",
    location:"2214",
    human_amount:69
  },{
    time:"13:00",
    location:"2214",
    human_amount:69
  },{
    time:"13:00",
    location:"2214",
    human_amount:69
  }
],
    noticeBar_visible: true,
    visible: false,
  },

    onLoad(options){
      wx.request({
        url: `http://113.250.189.122:8090/api/wechat/getListById?organizerId=S231231095`, 
        header: {
          "Content-Type": "application/json"
        },
        method:"get",
        data: {
        },
        success :function(res) {
         this.setData({activitiesList:res.data.data})
        }.bind(this)
      })
    },
    // 事件处理函数
    onSwiperTap(e) {
      const { index } = e.detail;
      console.log(index);
    },
    onSwiperChange(e) {
      const { current, source } = e.detail;
      this.setData({
        swiperIndex:this.data.swiperList[current].match(/\=(.*)/)[1],
      })
      console.log(current, source);
    },
    onSwiperImageLoad(e) {
    
      console.log(e.detail.index);
    },


 
})
