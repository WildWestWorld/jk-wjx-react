// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addTicketAPI, editTicketAPI, getTicketListAPI, deleteTicketAPI, getTicketDetailListAPI, addTicketNumAPI } from "@/API/ticket/ticket";




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

export const getTicketListRedux = createAsyncThunk("ticket/ticketList", async (params, thunkAPI) => {

    const res = await getTicketListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addTicketRedux = createAsyncThunk("ticket/addTicket", async (params, thunkAPI) => {

    const res = await addTicketAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editTicketRedux = createAsyncThunk("ticket/editTicket", async (params, thunkAPI) => {
    const res = await editTicketAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteTicketRedux = createAsyncThunk("ticket/deleteTicket", async (params, thunkAPI) => {
    const res = await deleteTicketAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const getTicketDetailListRedux = createAsyncThunk("ticket/ticketDetailList", async (params, thunkAPI) => {
    const res = await getTicketDetailListAPI(params)

    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

//添加优惠券数量
export const addTicketNumRedux = createAsyncThunk("ticket/addTicketNum", async (params, thunkAPI) => {
    const res = await addTicketNumAPI(params)

    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})



const ticketSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'ticketSlice',
    //默认值
    initialState: {
        ticketList: [],
        currentTicketId: '',
        ticketDetailList: []

    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.ticketList = action.payload
            console.log(action)
        },
        changeCurrentTicketIdState (state, action) {
            state.currentTicketId = action.payload
        }
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


        [getTicketListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.ticketList = payload.data
            }
        },
        // 失败
        [getTicketListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getTicketListRedux.pending] (state) {
        },


        [editTicketRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editTicketRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editTicketRedux.pending] (state) {
        },


        [deleteTicketRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteTicketRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteTicketRedux.pending] (state) {
        },



        [getTicketDetailListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.ticketDetailList = payload.data
            }
        },
        // 失败
        [getTicketDetailListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getTicketDetailListRedux.pending] (state) {
        },


        [addTicketNumRedux.fulfilled] (state, { payload }) {
            console.log(payload)

        },
        // 失败
        [addTicketNumRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [addTicketNumRedux.pending] (state) {
        },


    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState, changeCurrentTicketIdState } = ticketSlice.actions

// 导出
export default ticketSlice.reducer