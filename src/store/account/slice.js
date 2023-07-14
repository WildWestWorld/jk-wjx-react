// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addAccountAPI, editAccountAPI, getAccountListAPI, deleteAccountAPI } from "@/API/account/account";




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

export const getAccountListRedux = createAsyncThunk("account/accountList", async (params, thunkAPI) => {

    const res = await getAccountListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addAccountRedux = createAsyncThunk("account/addAccount", async (params, thunkAPI) => {

    const res = await addAccountAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editAccountRedux = createAsyncThunk("account/editAccount", async (params, thunkAPI) => {
    const res = await editAccountAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteAccountRedux = createAsyncThunk("account/deleteAccount", async (params, thunkAPI) => {
    const res = await deleteAccountAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


const accountSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'accountSlice',
    //默认值
    initialState: {
        accountList: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.accountList = action.payload
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


        [getAccountListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.accountList = payload.data
            }
        },
        // 失败
        [getAccountListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getAccountListRedux.pending] (state) {
        },


        [editAccountRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editAccountRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editAccountRedux.pending] (state) {
        },


        [deleteAccountRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteAccountRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteAccountRedux.pending] (state) {
        },

    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = accountSlice.actions

// 导出
export default accountSlice.reducer