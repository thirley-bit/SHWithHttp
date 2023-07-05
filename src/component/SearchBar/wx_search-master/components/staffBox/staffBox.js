// shipment/components/staffBox/staffBox.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [{
                    src: 'https://img2.baidu.com/it/u=2783448435,3957437405&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    name: '老张',
                    dutyName: '调度',
                    phone: '13197372226',
                    id: 1
                },
                {
                    src: 'https://img2.baidu.com/it/u=2783448435,3957437405&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    name: '老王',
                    dutyName: '调度',
                    phone: '13197372226',
                    id: 2
                },
                {
                    src: 'https://img2.baidu.com/it/u=2783448435,3957437405&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    name: '老李',
                    dutyName: '调度',
                    phone: '13197372226',
                    id: 3
                },
            ]
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        index: -1,
        Xstart: 0,
        isAnimation: false,
        aniMation: {},
        id: -1
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getPx(rpx) {
            let px
            wx.getSystemInfo({
                success(res) {
                    px = rpx * (res.windowWidth / 750)
                }
            })
            return Number(px)
        },
        touchstart(e) {
            if (this.data.isAnimation) {
                this.createAnimationPX(0)
            }
            this.setData({
                index: e.currentTarget.dataset.index,
                Xstart: e.changedTouches[0].pageX
            });

        },
        touchmove(e) {
            //  从右往左的移动距离 = 触摸初始位置x坐标 - 当前位置的x坐标
            let move = this.data.Xstart - e.changedTouches[0].pageX;
            // 当从右往左位移大于0px的时候 调用方法创建动画
            if (move > 0) {
                this.createAnimationPX(-move)
            } else {
                // 当从左往右滑动的时候将让卡片复位
                this.createAnimationPX(0)
            }
        },
        touchend(e) {
            //  从右往左的移动距离 = 触摸初始位置x坐标 - 当前位置的x坐标
            let move = this.data.Xstart - e.changedTouches[0].pageX;
            // 当位移大于50px的时候认为展示删除按钮
            if (move > 50) {
                this.createAnimation(-160)
            } else {
                // 复位
                this.createAnimation(0)
            }
        },
        // 创建一个左滑动画基于 rpx单位
        createAnimation(changeX) {
            let list = this.properties.list;
            if (list.length != 0) {
                let ani = wx.createAnimation({
                    delay: 0,
                    timingFunction: 'ease',
                }).translateX(this.getPx(changeX)).step().export()
                list[this.data.index].aniMation = ani
                this.setData({
                    list,
                    isAnimation: true
                })
            }
        },
        // 创建一个左滑的动画 基于px单位
        createAnimationPX(changeX) {
            let list = this.properties.list;
            if (list.length != 0) {
                let ani = wx.createAnimation({
                    delay: 0,
                    timingFunction: 'linear',
                    duration: 45
                }).translateX(changeX).step().export()
                list[this.data.index].aniMation = ani
                this.setData({
                    list,
                    isAnimation: true
                })
            }
        },
        delete(e) {
            let itemIndex = e.currentTarget.dataset.index
            let arr = []
            let list = this.properties.list
            list.map((item, index) => {
                if (index != itemIndex) {
                    arr.push(item)
                }
            })
            this.setData({
                list: arr,
                isAnimation: true
            })
            wx.showToast({
                title: '已成功删除' + list[itemIndex].name,
            })
            this.createAnimation(0)
            this.triggerEvent('delete', {
                date: this.properties.list[itemIndex],
                index: itemIndex,
                list: arr
            })
        }
    }
})