// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addShopAPI, editShopAPI, getShopListAPI, deleteShopAPI, addShopTypeAPI, editShopTypeAPI, getShopTypeListAPI, deleteShopTypeAPI, shopGroundingAPI, shopAccountStateChangeAPI, editShopFillStateAPI, getTradeAreaOptionAPI, getShopCateOptionAPI, editShopAuditStatusAPI, getShopDetailAPI } from "@/API/shop/shop";




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

export const getShopListRedux = createAsyncThunk("shop/shopList", async (params, thunkAPI) => {

    const res = await getShopListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addShopRedux = createAsyncThunk("shop/addShop", async (params, thunkAPI) => {

    const res = await addShopAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editShopRedux = createAsyncThunk("shop/editShop", async (params, thunkAPI) => {
    const res = await editShopAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteShopRedux = createAsyncThunk("shop/deleteShop", async (params, thunkAPI) => {
    const res = await deleteShopAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


////商户类型


export const getShopTypeListRedux = createAsyncThunk("shop/shopTypeList", async (params, thunkAPI) => {

    const res = await getShopTypeListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addShopTypeRedux = createAsyncThunk("shop/addShopType", async (params, thunkAPI) => {

    const res = await addShopTypeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editShopTypeRedux = createAsyncThunk("shop/editShopType", async (params, thunkAPI) => {
    const res = await editShopTypeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteShopTypeRedux = createAsyncThunk("shop/deleteShopType", async (params, thunkAPI) => {
    const res = await deleteShopTypeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//控制商户上架下架
export const shopGroudingRedux = createAsyncThunk("shop/mechantGrounding", async (params, thunkAPI) => {
    const res = await shopGroundingAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


//控制商户账号 可以用不可用


export const shopAccountStateChangeRedux = createAsyncThunk("shop/shopAccountStateChange", async (params, thunkAPI) => {

    const res = await shopAccountStateChangeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//更改商户 满减
export const editShopFillStateRedux = createAsyncThunk("shop/editShopFillState", async (params, thunkAPI) => {

    const res = await editShopFillStateAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


//更改商户 满减
export const getTradeAreaOptionRedux = createAsyncThunk("shop/getTradeAreaOption", async (params, thunkAPI) => {

    const res = await getTradeAreaOptionAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


//更改商户 满减
export const getShopCateOptionRedux = createAsyncThunk("shop/getShopCateOption", async (params, thunkAPI) => {
    const res = await getShopCateOptionAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


//改变商户的审核状态
export const editShopAuditStatusRedux = createAsyncThunk("shop/editShopAuditStatusRedux", async (params, thunkAPI) => {
    const res = await editShopAuditStatusAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//改变商户的审核状态
export const getShopDetailRedux = createAsyncThunk("shop/getShopDetailRedux", async (params, thunkAPI) => {
    const res = await getShopDetailAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


const shopSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'shopSlice',
    //默认值
    initialState: {
        shopList: [],
        shopTypeList: [],
        tradeAreaOption: [],
        shopCateOption: [],
        shopDetail: []

    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.shopList = action.payload
            console.log(action)
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

    // 定义异步函数
    extraReducers: {
        // 异步函数成功=fulfilled


        [getShopListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.shopList = payload.data
            }
        },
        // 失败
        [getShopListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getShopListRedux.pending] (state) {
        },


        [editShopRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editShopRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editShopRedux.pending] (state) {
        },


        [deleteShopRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteShopRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteShopRedux.pending] (state) {
        },

        ////商户类型

        [getShopTypeListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.shopTypeList = payload.data
            }
        },
        // 失败
        [getShopTypeListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getShopTypeListRedux.pending] (state) {
        },


        [editShopTypeRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editShopTypeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editShopTypeRedux.pending] (state) {
        },


        [deleteShopTypeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteShopTypeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteShopTypeRedux.pending] (state) {
        },

        //商户上架下架
        [shopGroudingRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [shopGroudingRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [shopGroudingRedux.pending] (state) {
        },

        //商户上架下架
        [shopAccountStateChangeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [shopAccountStateChangeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [shopAccountStateChangeRedux.pending] (state) {
        },

        //商户优惠满减
        //商户上架下架
        [editShopFillStateRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [editShopFillStateRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editShopFillStateRedux.pending] (state) {
        },


        [getTradeAreaOptionRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.tradeAreaOption = payload.data
            }
        },
        // 失败
        [getTradeAreaOptionRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getTradeAreaOptionRedux.pending] (state) {
        },

        [getShopCateOptionRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.shopCateOption = payload.data
            }
        },
        // 失败
        [getShopCateOptionRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getShopCateOptionRedux.pending] (state) {
        },


        //编辑商户的审核状态
        [editShopAuditStatusRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [editShopAuditStatusRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editShopAuditStatusRedux.pending] (state) {
        },


        //编辑商户的审核状态
        [getShopDetailRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
            if (payload.code == 0) {
                state.shopDetail = payload.data
            }
        },
        // 失败
        [getShopDetailRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getShopDetailRedux.pending] (state) {
        },

    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = shopSlice.actions

// 导出
export default shopSlice.reducer