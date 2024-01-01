const timeHelper = require('../../helper/time_helper');
const getTime=function(date,data){
  const self=this;
  wx.request({
    url: `http://113.250.189.122:8090/api/wechat/getEmptyTime?dateTime=${date}&locationId=${data.locationId}`, 
    header: {
      "Content-Type": "application/json"
    },
    method:"get",
    data: {
    },
    success :function(res) {
      let data=res.data.data;
      console.log(data)
    }.bind(this)
  })
}
Page({
  data:{
    isLoad: true,
		isLoadTime: true,
		day: timeHelper.time('Y-M-D'),
    used: [],
    location:'',
  },
  onLoad: function(option){
    const self=this;
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(e) {
      let {date,data}=e;
      self.setData({location:data});
      //获取被预约的时间段
      getTime(date,data);
    })

  },
  options: {
    styleIsolation: 'apply-shared',
  },
  handleBack() {
    console.log('go back');
  },
  bindTimeSelect(e){
    const self=this;
    let {start,endPoint,day}=e.detail;
    let {location}=this.data;
    wx.request({
      url: `http://113.250.189.122:8090/api/wechat/save`, 
      header: {
        "Content-Type": "application/json"
      },
      method:"post",
      data: {
          "endTime": `${day} ${endPoint}:00`,
          "locationId": location.locationId,
          "organizerId": "S231231095",
          "resComment": "我是一个测试预约内容",
          "startTime": `${day} ${start}:00`,
          "status": 0,
          "title": "我是一个测试标题"
      },
      success :function(res) {
        getTime(day,location);
        console.log(res)
      }
    })
  
    
  }
})