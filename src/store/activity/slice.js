// 新的redux使用方法
import { addActivityAPI, editActivityAPI, getActivityListAPI, deleteActivityAPI, getPlatformActivity } from "@/API/activity/activity";
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

export const getActivityList = createAsyncThunk("activity/activityList", async (params, thunkAPI) => {

    const res = await getActivityListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addActivityRedux = createAsyncThunk("activity/addActivity", async (params, thunkAPI) => {

    const res = await addActivityAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editActivityRedux = createAsyncThunk("activity/editActivity", async (params, thunkAPI) => {
    const res = await editActivityAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteActivityRedux = createAsyncThunk("activity/deleteActivity", async (params, thunkAPI) => {
    const res = await deleteActivityAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const getPlatformActivityRedux = createAsyncThunk("activity/getPlatformActivity", async (params, thunkAPI) => {
    const res = await getPlatformActivity(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


const activitySlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'activitySlice',
    //默认值
    initialState: {
        activityList: [],
        platformActivityList:[]
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.activityList = action.payload
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


        [getActivityList.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.activityList = payload.data
            }
        },
        // 失败
        [getActivityList.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getActivityList.pending] (state) {
        },


        [editActivityRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editActivityRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editActivityRedux.pending] (state) {
        },


        [deleteActivityRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteActivityRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteActivityRedux.pending] (state) {
        },


        [getPlatformActivityRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.platformActivityList = payload.data
            }
        },
        // 失败
        [getPlatformActivityRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getPlatformActivityRedux.pending] (state) {
        },
    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = activitySlice.actions

// 导出
export default activitySlice.reducer