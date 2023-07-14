// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addMerchantAPI, editMerchantAPI, getMerchantListAPI, deleteMerchantAPI, addMerchantTypeAPI, editMerchantTypeAPI, getMerchantTypeListAPI, deleteMerchantTypeAPI, merchantGroundingAPI, merchantAccountStateChangeAPI, editMerchantFillStateAPI, getMerchantTypeLevOneAPI, editMerchantTypeTreeSortAPI } from "@/API/merchant/merchant";




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

export const getMerchantListRedux = createAsyncThunk("merchant/merchantList", async (params, thunkAPI) => {

    const res = await getMerchantListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))



    return res;
})

export const addMerchantRedux = createAsyncThunk("merchant/addMerchant", async (params, thunkAPI) => {

    const res = await addMerchantAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editMerchantRedux = createAsyncThunk("merchant/editMerchant", async (params, thunkAPI) => {
    const res = await editMerchantAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteMerchantRedux = createAsyncThunk("merchant/deleteMerchant", async (params, thunkAPI) => {
    const res = await deleteMerchantAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))


    return res;
})


////商户类型


export const getMerchantTypeListRedux = createAsyncThunk("merchant/merchantTypeList", async (params, thunkAPI) => {

    const res = await getMerchantTypeListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addMerchantTypeRedux = createAsyncThunk("merchant/addMerchantType", async (params, thunkAPI) => {

    const res = await addMerchantTypeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editMerchantTypeRedux = createAsyncThunk("merchant/editMerchantType", async (params, thunkAPI) => {
    const res = await editMerchantTypeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteMerchantTypeRedux = createAsyncThunk("merchant/deleteMerchantType", async (params, thunkAPI) => {
    const res = await deleteMerchantTypeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//控制商户上架下架
export const merchantGroudingRedux = createAsyncThunk("merchant/mechantGrounding", async (params, thunkAPI) => {
    const res = await merchantGroundingAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


//控制商户账号 可以用不可用


export const merchantAccountStateChangeRedux = createAsyncThunk("merchant/merchantAccountStateChange", async (params, thunkAPI) => {

    const res = await merchantAccountStateChangeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//更改商户 满减
export const editMerchantFillStateRedux = createAsyncThunk("merchant/editMerchantFillState", async (params, thunkAPI) => {

    const res = await editMerchantFillStateAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//获取商户类型 一级节点

export const getMerchantTypeLevOneRedux = createAsyncThunk("merchant/getMerchantTypeLevOne", async (params, thunkAPI) => {

    const res = await getMerchantTypeLevOneAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const editMerchantTypeTreeSortRedux = createAsyncThunk("merchant/editMerchantTypeTreeSort", async (params, thunkAPI) => {

    const res = await editMerchantTypeTreeSortAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})



const merchantSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'merchantSlice',
    //默认值
    initialState: {
        merchantList: [],
        merchantTypeList: [],
        merchantOneLevList: [],
        merchantTypeSortList: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.merchantList = action.payload
            console.log(action)
        },
        // changeCurrentSongIndexState(state, action) {
        //     state.currentSongIndex = action.payload
        // },

        changeMerchantTypeListState (state, action) {

            state.merchantTypeList = action.payload
            // console.log(action)
        },


        changeMerchantTypeSortState (state, action) {

            state.merchantTypeSortList = action.payload
            // console.log(action)
        },


    },
    // 当函数在其他地方被调用时，我们这里的函数里面的内容也会被触发
    //  我们也会在这里定义异步方法
    // extraReducers:{
    //     [函数名](state,payload){
    //         state.list.push(1)
    //     }
    // }

    // 定义异步函数
    extraReducers: {
        // 异步函数成功=fulfilled


        [getMerchantListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.merchantList = payload.data
            }
        },
        // 失败
        [getMerchantListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getMerchantListRedux.pending] (state) {
        },


        [editMerchantRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editMerchantRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editMerchantRedux.pending] (state) {
        },


        [deleteMerchantRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteMerchantRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteMerchantRedux.pending] (state) {
        },

        ////商户类型

        [getMerchantTypeListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {

                const formatTreeList = (data) => {
                    data.map(item => {
                        if (item.children && item.children.length > 0) {
                            item.type = "group"
                            item.parentId = item.pid
                            formatTreeList(item.children)
                            return item
                        } else {
                            item.children = null
                            item.type = "child"
                            item.parentId = item.pid
                            return item
                        }
                    })
                    return data
                }

                let merchantTypeListArr = formatTreeList(payload.data)
                console.log(merchantTypeListArr)

                state.merchantTypeList = merchantTypeListArr
            }
        },
        // 失败
        [getMerchantTypeListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getMerchantTypeListRedux.pending] (state) {
        },


        [editMerchantTypeRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editMerchantTypeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editMerchantTypeRedux.pending] (state) {
        },


        [deleteMerchantTypeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteMerchantTypeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteMerchantTypeRedux.pending] (state) {
        },

        //商户上架下架
        [merchantGroudingRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [merchantGroudingRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [merchantGroudingRedux.pending] (state) {
        },

        //商户上架下架
        [merchantAccountStateChangeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [merchantAccountStateChangeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [merchantAccountStateChangeRedux.pending] (state) {
        },

        //商户优惠满减
        //商户上架下架
        [editMerchantFillStateRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [editMerchantFillStateRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editMerchantFillStateRedux.pending] (state) {
        },

        [getMerchantTypeLevOneRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                payload.data = payload.data.map((item) => {
                    item.label = item.name
                    item.value = item.id
                    return item
                })
                console.log(payload.data)
                state.merchantOneLevList = payload.data
            }
        },
        // 失败
        [getMerchantTypeLevOneRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getMerchantTypeLevOneRedux.pending] (state) {
        },


        [editMerchantTypeTreeSortRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editMerchantTypeTreeSortRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editMerchantTypeTreeSortRedux.pending] (state) {
        },


    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState, changeMerchantTypeListState, changeMerchantTypeSortState } = merchantSlice.actions

// 导出
export default merchantSlice.reducer