// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUserDetailAPI, getUserListAPI, getUserTicketListlAPI } from "@/API/user/user";




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

export const getUserListRedux = createAsyncThunk("user/userList", async (params, thunkAPI) => {

    const res = await getUserListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const getUserDetailRedux = createAsyncThunk("user/getUserDetail", async (params, thunkAPI) => {

    const res = await getUserDetailAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const getUserTicketListlRedux = createAsyncThunk("user/getUserTicketListl", async (params, thunkAPI) => {
    const res = await getUserTicketListlAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


const userSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'userSlice',
    //默认值
    initialState: {
        userList: [],
        userDetail: [],
        userTicketList: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.userList = action.payload
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


        [getUserListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.userList = payload.data
            }
        },
        // 失败
        [getUserListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getUserListRedux.pending] (state) {
        },


        [getUserDetailRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.userDetail = payload.data
            }
        },
        // 失败
        [getUserDetailRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getUserDetailRedux.pending] (state) {
        },


        [getUserTicketListlRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.userTicketList = payload.data
            }
        },
        // 失败
        [getUserTicketListlRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getUserTicketListlRedux.pending] (state) {
        },




    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = userSlice.actions

// 导出
export default userSlice.reducer