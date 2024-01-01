import data from './data'

function getDateString(date = new Date()) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  }
}

const { year, month, day, hour, minute } = getDateString()

Page({
  options: {
    styleIsolation: 'apply-shared',
  },
  data: {
    searchValue: '',
    value: 0,
    value1: 0,
    items: ['活动室', '会议室', '教室', '实验室'],
    defaultVal: true,
    activitiesList:[1,2,3],
    dateValue: [year, month, day, hour, minute],
    selectButton:true,
    loading: false,
    locationValue:[],
    options: [],
    province: [],
    displayValue:[],
  },
    onBack(){
      wx.navigateBack();
    },
    createButton(e){
      console.log("前")
      wx.navigateTo({
        url: "/pages/createAct/createAct",
        success(res){
          console.log(res)
        },
        fail(res){
          console.log(res)
        }
      });
      console.log('后')
    },
    onChange(e) {
      this.setData({ value: e.detail.value });
    },
    onChange1(e) {
      this.setData({ value1: e.detail.value });
    },
    handleChange(e) {
      this.setData({
        defaultVal: e.detail.value,
      });
    },


    dataSetValue(values, key) {
      this.setData({
        [`value${key}`]: values.value,
        [`displayValue${key}`]: values.displayValue.join(' '),
      })
    },
    dateOnValueChange(e) {
      const { index } = e.currentTarget.dataset
      this.dataSetValue(e.detail, index)
      console.log(`onValueChange${index}`, e.detail)
    },
    selectButtonOnChange(e){
      this.setData({selectButton:e.detail.value })
    },
    onLoad() {
      this.setData({ options: data })
    },
    locationOnValueChange(e) {
      this.setData({ locationValue: e.detail.value ,
      displayValue:e.detail.displayValue
      })

    },
  
});
