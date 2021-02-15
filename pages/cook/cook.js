
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        list : [
            {
                "text":"首页",
                "iconPath":"",
                "dot": false,
                "page":""
            },
            {
                "text":"我的",
                "iconPath":"",
                "dot": false
            }
        ],
        goodsList : [
            
        ]
    },
    onLoad() {
        this.setData({
            search: this.search.bind(this)
        })
    },
    search: function (value) {
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        //     }, 200)
        // })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },
    tabChange: function (e) {
        console.log('tab change',e.detail.index)
        switch (e.detail.index) {
            case 0:
                wx.reLaunch({
                  url: "../cook/cook",
                })
            case 1:
                wx.reLaunch({
                  url: "../user/user",
                })
        }
    }
});
