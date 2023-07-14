// 新的redux使用方法
import { loginAPI } from "@/API/login/login";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import router from "@/router";



// 请求歌曲数据
export const getLyricDetail = createAsyncThunk("playBar/lyricDetail", async (params, thunkAPI) => {

    const res = await getLyricDetailAPI(params)
    // console.log(res.lrc.lyric)
    const lyric = res.lrc.lyric
    const lyricList = parseLyric(lyric)

    console.log(lyricList)
    thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


// 请求歌曲数据
export const JKLogin = createAsyncThunk("common/login", async (params, thunkAPI) => {

    const res = await loginAPI(params)
    // console.log(res)
    // console.log(router)
    // debugger
    return res;
})


const commonSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'commonSlice',
    //默认值
    initialState: {
        pathInfo: '',
        userInfo: [],
        token: '',
        isInit: false
    },
    // 方法  
    reducers: {
        //改变路径信息
        changePathInfoState (state, action) {
            state.pathInfo = action.payload
            // console.log(action)
        },
        clearInfoState (state, action) {
            state.pathInfo = ''
            state.userInfo = []
            state.token = ''
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


        [JKLogin.fulfilled] (state, { payload }) {
            // state.songDetail = payload.songs
            // console.log(payload)
            let res = payload
            if (res.code == 0) {
                state.userInfo = res.data.user_info
                state.token = res.data.token
                Cookies.set('token', res.data.token)

            }
        },
        // 失败
        [JKLogin.rejected] (state, err) {
            // console.log('banners加载失败')

        },
        // 加载中
        [JKLogin.pending] (state) {
        },


    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changePathInfoState,clearInfoState } = commonSlice.actions

// 导出
export default commonSlice.reducer
