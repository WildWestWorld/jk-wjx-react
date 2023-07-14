// 新的redux使用方法
import { addActivityAPI, editActivityAPI, getActivityListAPI, deleteActivityAPI, getPlatformActivity } from "@/API/activity/activity";
import { getMerchantCateOptionAPI, getMerchantOptionAPI, getRoleOptionAPI } from "@/API/option/option";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




// 请求歌曲数据
// export const getLyricDetail = createAsyncThunk("playBar/lyricDetail", async (params, thunkAPI) => {

//     const res = await getLyricDetailAPI(params)
//     // console.log(res.lrc.lyric)
//     const lyric = res.lrc.lyric
//     const lyricList = parseLyric(lyric)

//     console.log(lyricList)
//     thunkAPI.dispatch(changeLyricListState(lyricList))

//     return res;
// })




export const getMerchantCateOptionRedux = createAsyncThunk("options/getMerchantCateOption", async (params, thunkAPI) => {



    const res = await getMerchantCateOptionAPI(params)

    //可修改 

    // for (let i = 0; i < res.data.length; i++) {
    //     for (let j = 0; j < res.data[i].children.length; j++) {
    //         // console.log(res.data[i].children[j].id)
    //         // const res = await getMerchantCateOptionAPI()
    //         let payload = { cate_id: res.data[i].children[j].id }
    //         const merchantRes = await getMerchantOptionAPI(payload)
    //         console.log(merchantRes.data.options)
    //         res.data[i].children[j].children = merchantRes.data.options
    //         console.log(res.data[i].children[j].children)
    //     }
    //     console.error(res)

    // }


    // console.log(res)

    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
},


)


export const getMerchantOptionRedex = createAsyncThunk("options/getMerchantOption", async (params, thunkAPI) => {

    const res = await getMerchantOptionAPI(params)
    // console.log(res)

    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const getRoleOptionRedux = createAsyncThunk("options/getRoleOption", async (params, thunkAPI) => {

    const res = await getRoleOptionAPI(params)
    // console.log(res)

    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})



const optionSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'optionSlice',
    //默认值
    initialState: {
        merchantCateList: [],
        merchantCateListFormat: [],
        merchantOptionList: [],
        roleOptionList: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeMerchantCateListState (state, action) {
            console.log('执行')
            console.log(action.payload)
            state.merchantCateList = action.payload
        },

        changeMerchantOptionListState (state, action) {
            state.merchantOptionList = action.payload
        },

        changeMerchantOptionListFormatState (state, action) {

            state.merchantCateListFormat = action.payload
        },


        // changeCurrentSongIndexState(state, action) {
        //     state.currentSongIndex = action.payload
        // },


    },
    // 当函数在其他地方被调用时，我们这里的函数里面的内容也会被触发
    //  我们也会在这里定义异步方法
    // extraReducers:{
    //     [函数名](state,payload){
    //         state.list.push(1)
    //     }
    // }

    //新版redux-toolkit的使用方法
    // extraReducers: (builder) => {
    //     builder.addCase(fetchUserById.fulfilled, (state, action) => {})
    //   },


    // 定义异步函数
    extraReducers: {
        // 异步函数成功=fulfilled



        [getMerchantCateOptionRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            const renderTreeSelect = (data) => {
                // console.log(data);
                //传入循环得到父节点
                data.map((item) => {
                    //如果父节点有children这个属性，就把父节点的Item的Disabled属性变为true
                    if (item.children && item.children.length > 0) {
                        // item.disabled = true;
                        // renderTreeSelect(item);

                        item.label = item.name;
                        item.value = item.name;
                        item.isLeaf = false

                        return renderTreeSelect(item.children);
                    } else {
                        //如果没有子节点，就正常渲染就好了
                        item.label = item.name;
                        item.value = item.id;
                        item.isLeaf = false

                        // item.children = [{ label: 'test', value: 123 }]

                        // console.log(item.value);
                        return item;
                    }
                });
                // console.log(data);
                return data;
            };


            if (payload.code == 0) {
                // state.merchantCateList = payload.data

                state.merchantCateList = renderTreeSelect(payload.data)

                // state.merchantCateList.map(item => {
                //     console.warn(item.children)

                // })
                // for(let i =0;i<state.merchantCateList.length;i++){

                // }
            }
        },
        // 失败
        [getMerchantCateOptionRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getMerchantCateOptionRedux.pending] (state) {
        },




        [getMerchantOptionRedex.fulfilled] (state, { payload }) {
            if (payload.code == 0) {
                state.merchantOptionList = payload.data
            }


        },
        // 失败
        [getMerchantOptionRedex.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getMerchantOptionRedex.pending] (state) {
        },


        [getRoleOptionRedux.fulfilled] (state, { payload }) {
            if (payload.code == 0) {
                state.roleOptionList = payload.data
                let options = payload.data.options
                options.map(item => {
                    item.value = item.id
                    item.label = item.name
                    return item
                })
                payload.data.options = options
            }
        },
        // 失败
        [getRoleOptionRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getRoleOptionRedux.pending] (state) {
        },



    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeMerchantCateListState, changeMerchantOptionListState, changeMerchantOptionListFormatState } = optionSlice.actions

// 导出
export default optionSlice.reducer