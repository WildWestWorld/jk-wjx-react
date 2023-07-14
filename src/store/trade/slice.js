// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addTradeAPI, editTradeAPI, getTradeListAPI, deleteTradeAPI } from "@/API/trade/trade";




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

export const getTradeListRedux = createAsyncThunk("trade/tradeList", async (params, thunkAPI) => {

    const res = await getTradeListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addTradeRedux = createAsyncThunk("trade/addTrade", async (params, thunkAPI) => {

    const res = await addTradeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editTradeRedux = createAsyncThunk("trade/editTrade", async (params, thunkAPI) => {
    const res = await editTradeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteTradeRedux = createAsyncThunk("trade/deleteTrade", async (params, thunkAPI) => {
    const res = await deleteTradeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


const tradeSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'tradeSlice',
    //默认值
    initialState: {
        tradeList: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.tradeList = action.payload
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


        [getTradeListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.tradeList = payload.data
            }
        },
        // 失败
        [getTradeListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getTradeListRedux.pending] (state) {
        },


        [editTradeRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editTradeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editTradeRedux.pending] (state) {
        },


        [deleteTradeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteTradeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteTradeRedux.pending] (state) {
        },

    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = tradeSlice.actions

// 导出
export default tradeSlice.reducer