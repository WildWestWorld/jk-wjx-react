// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getOrderDetailAPI, getOrderListAPI, orderRefundAPI } from "@/API/order/order";




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

export const getOrderListRedux = createAsyncThunk("order/orderList", async (params, thunkAPI) => {

    const res = await getOrderListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const getOrderDetailRedux = createAsyncThunk("order/getOrderDetail", async (params, thunkAPI) => {

    const res = await getOrderDetailAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const orderRefundRedux = createAsyncThunk("order/orderRefund", async (params, thunkAPI) => {

    const res = await orderRefundAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

const orderSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'orderSlice',
    //默认值
    initialState: {
        orderList: [],
        orderDetail: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.orderList = action.payload
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


        [getOrderListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.orderList = payload.data
            }
        },
        // 失败
        [getOrderListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getOrderListRedux.pending] (state) {
        },


        [getOrderDetailRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.orderDetail = payload.data
            }
        },
        // 失败
        [getOrderDetailRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getOrderDetailRedux.pending] (state) {
        },


        
        [orderRefundRedux.fulfilled] (state, { payload }) {
            console.log(payload)
    
        },
        // 失败
        [orderRefundRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [orderRefundRedux.pending] (state) {
        },

    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = orderSlice.actions

// 导出
export default orderSlice.reducer