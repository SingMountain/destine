const { time } = require("../../helper/time_helper");

// pages/time/time.js
Page({
  options: {
    styleIsolation: 'apply-shared',
  },



  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    mode: '',
    timeId:'',
    time1:'00:00',//开始时间
    time2:'23:59',//结束时间
    hasDays: [],
    minute: '12:30',
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
  }
],
  },
  bindClickCmpt: async function (e) {
    this.setData({date:e.detail.day})
    wx.request({
      url: `http://113.250.189.122:8090/api/wechat/getEmptyByDate/${e.detail.date}`, 
      header: {
        "Content-Type": "application/json"
      },
      method:"get",
      data: {
      },
      success :function(res) {
        console.log(res)
        let data=res.data.data;
        this.setData({activitiesList:data})
      }.bind(this)
    })
	},

	bindMonthChangeCmpt: function (e) {
	},
  handleSelect(e) {
    const { value, entireValue } = e.detail;

    console.log(value);
    console.log(entireValue);
  },
 
  //开始时间
  showPicker(e) {
      const { mode } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
        timeId:e.currentTarget.id
      });
    
    },
    hidePicker() {
      const { mode,date,time1,time2 } = this.data;
    
      this.setData({
        [`${mode}Visible`]: false,
      });
      wx.request({
        url: `http://113.250.189.122:8090/api/wechat/getEmptyByTime?endTime=${date} ${time2}&startTime=${date} ${time1}`, 
        header: {
          "Content-Type": "application/json"
        },
        method:"get",
        data: {
        },
        success :function(res) {
          let data=res.data.data;
          this.setData({activitiesList:data})
        }.bind(this)
      })
    },
    onConfirm(e) {
      const { value } = e.detail;
      const { mode } = this.data;
      const {timeId} = this.data;
      this.setData({
        [mode]: value,
        [`time${timeId}`]:value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
    },
    onTapBooking(e){
      
    },
    bindClickList(e){
      let listId=e.currentTarget.dataset.id;
      let {activitiesList,date}=this.data
      wx.navigateTo({
        url: '../time_selector/time_selector',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }

        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { 
            data: activitiesList[listId],
            date:date
          })
        }
      })
    },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // 月份从0开始，需要加1
    let day = today.getDate();
    let defaultDay=year + '-' + month + '-' + day;
    this.setData({date:defaultDay})

    wx.request({
      url: `http://113.250.189.122:8090/api/wechat/getEmptyByDate/${defaultDay}`, 
      header: {
        "Content-Type": "application/json"
      },
      method:"get",
      data: {
      },
      success :function(res) {
        let data=res.data.data;
        this.setData({activitiesList:data})
        console.log(res)
      }.bind(this)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})