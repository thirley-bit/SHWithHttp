Component({
    lifetimes: {
        detached() {
            wx.removeStorage({
                key: 'mySearchList',
                success(res) {
                    console.log(res, '已删除search数组缓存')
                }
            })
        }
    },
    properties: {
        placeholder: {
            type: String,
            value: '请输入',
        },
        hideicon: {
            type: Boolean,
            value: false
        },
        height: {
            type: String,
            value: '88'
        },
        width: {
            type: String,
            value: '702'
        },
        backoundColor: {
            type: String,
            value: '#f7f9fd'
        },
        // 查找的数组
        list: {
            type: Array,
            value: []
        },
        // 指定查找的关键词对应对象内的key值
        name: {
            type: String,
            value: ''
        },
        newlist: {
            type: Array,
            value: []
        }
    },
    data: {
        inputValue: '',
        chengeNumber: 0,
    },
    methods: {
        // 用户输入触发
        handleInput: function (e) {
            // console.log("logggggg",e)
            this.setData({
                inputValue: e.detail.value
            })
            this.handelChange()
        },
        // 用户输入触发返回值给父组件
        handelChange() {
            if (this.data.chengeNumber == 0) {
                wx.setStorageSync('mySearchList', this.properties.list)
                this.setData({
                    chengeNumber: 1
                })
            }
            this.triggerEvent('change', {
                value: this.data.inputValue
            })
            this.triggerEvent('searchList', {
                list: this.changeList(this.properties.name)
            })
        },
        // 模糊搜索功能 传递一个数组返回一个数组 会模糊搜索里面的每一项
        /**
         * @param {Object} lists 所有数据
         * @param {Object} keyWord 查询的关键词
         */
        changeList(name) {
            let keyWord = this.data.inputValue
            let lists = wx.getStorageSync('mySearchList')
            let reg = new RegExp(keyWord);
            // 传递了name那么就模糊指定搜索对应的键值对
            if (name != '') {
                if (keyWord.length > 0) {
                    let resArr = [];
                    lists.filter(item => {
                        for (let i in item) {
                            if (name == i && reg.test(item[i])) {
                                resArr.push(item);
                            }
                        }
                    })
                    return resArr;
                } else {
                    return lists
                }
            }
            // 这里没有传递name那么就对象的每一项都会搜索有一项匹配那么就返回这项
            else {
                if (keyWord.length > 0) {
                    let resArr = [];
                    lists.filter(item => {
                        for (let i in item) {
                            if (reg.test(item[i])) {
                                resArr.push(item);
                                return
                            }
                        }
                    })
                    return resArr;
                } else {
                    return lists
                }
            }
        },
        // 返回一个高亮显示关键词的富文本字段
        stringifyObj(obj, keyword) {
            if (!obj) return '';
            const str = JSON.stringify(obj); // 将object转为字符串    
            let richStr = '';
            const b = str.split(keyword); // 将字符串以关键词分开    
            b.map((item, index) => {
                if (index === b.length - 1) { // 最后一个无需再拼接        
                    richStr += item;
                } else {
                    richStr += item + `<span style="color:#4C74E7;">${keyword}</span>`;
                }
            });
            return richStr.slice(1, -1);
        },
        // 点击清空输入框icon
        handleDeleteClick: function () {
            this.setData({
                inputValue: ''
            })
            this.handelChange()
        },
        // 点击取消触发
        handleTextbtnClick() {
            // 触发父组件中的方法
            this.setData({
                inputValue: ''
            })
        },
        // 用户点击确定触发
        handleConfirm() {
            this.triggerEvent('handleSearch', {
                value: this.data.inputValue
            })
        }
    }
})