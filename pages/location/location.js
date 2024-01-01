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
    buldings:["实验楼","办公室","教室"],
    rooms:["2210","2211","2213","2214","2215","2216","2217","2218"],
    isLoad: true,
		isLoadTime: true,
		day: timeHelper.time('Y-M-D'),
		used: []
  },

  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event) {

    wx.request({
      url: `http://113.250.189.122:8090/api/wechat/getLocation\/${event.detail.value+1}`, 
      header: {
        "Content-Type": "application/json"
      },
      method:"get",
      data: {
      },
      success :function(res) {
        let data=res.data.data.map(o=>o.name)
        this.setData({rooms:data})
      }.bind(this)
    })
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
  },
  onLoad(options){
    let data={};
    wx.request({
      url: 'http://113.250.189.122:8090/api/wechat/getBuildingAll', 
      header: {
        "Content-Type": "application/json"
      },
      method:"get",
      data: {
      },
      success :function(res) {
        data=res.data.data.map(o=>o.name);
        this.setData({buldings:data})
      }.bind(this)
    })

    wx.request({
      url: `http://113.250.189.122:8090/api/wechat/getLocation/1`, 
      header: {
        "Content-Type": "application/json"
      },
      method:"get",
      data: {
      },
      success :function(res) {
        let data=res.data.data.map(o=>o.name)
        this.setData({rooms:data})
      }.bind(this)
    })
  }

})