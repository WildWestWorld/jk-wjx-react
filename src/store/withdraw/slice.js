// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getOrderDetailAPI, getOrderListAPI, orderRefundAPI } from "@/API/order/order";
import { editWithdrawStatusAPI, getWithdrawListAPI } from "@/API/withdraw/withdraw";




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





export const getWithdrawListRedux = createAsyncThunk("withdraw/getWithdrawList", async (params, thunkAPI) => {

    const res = await getWithdrawListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editWithdrawStatusRedux = createAsyncThunk("withdraw/editWithdrawStatus", async (params, thunkAPI) => {

    const res = await editWithdrawStatusAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})



const withdrawSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'withdrawSlice',
    //默认值
    initialState: {
        withdrawList: [],
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


        [getWithdrawListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.withdrawList = payload.data
            }
        },
        // 失败
        [getWithdrawListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getWithdrawListRedux.pending] (state) {
        },


        [editWithdrawStatusRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [editWithdrawStatusRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editWithdrawStatusRedux.pending] (state) {
        },








    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = withdrawSlice.actions

// 导出
export default withdrawSlice.reducer