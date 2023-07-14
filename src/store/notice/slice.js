// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addNoticeAPI, editNoticeAPI, getNoticeListAPI, deleteNoticeAPI, getNoticeDetailAPI, editNoticePublishAPI, editNoticeCloseAPI, getNoticeDetailPageAPI } from "@/API/notice/notice";
import { getMerchantSelectAPI } from "@/API/merchant/merchant";




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

export const getNoticeListRedux = createAsyncThunk("notice/noticeList", async (params, thunkAPI) => {

    const res = await getNoticeListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addNoticeRedux = createAsyncThunk("notice/addNotice", async (params, thunkAPI) => {

    const res = await addNoticeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editNoticeRedux = createAsyncThunk("notice/editNotice", async (params, thunkAPI) => {
    const res = await editNoticeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteNoticeRedux = createAsyncThunk("notice/deleteNotice", async (params, thunkAPI) => {
    const res = await deleteNoticeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


//获取商户的选项
export const getMerchantSelectRedux = createAsyncThunk("notice/getMerchantSelect", async (params, thunkAPI) => {


    const res = await getMerchantSelectAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const getNoticeDetailEditRedux = createAsyncThunk("notice/getNoticeDetailEditRedux", async (params, thunkAPI) => {
    const res = await getNoticeDetailPageAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})




export const getNoticeDetailRedux = createAsyncThunk("notice/getNoticeDetail", async (params, thunkAPI) => {
    const res = await getNoticeDetailAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})



export const editNoticePublishRedux = createAsyncThunk("notice/editNoticePublish", async (params, thunkAPI) => {
    const res = await editNoticePublishAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const editNoticeCloseRedux = createAsyncThunk("notice/editNoticeClose", async (params, thunkAPI) => {
    const res = await editNoticeCloseAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})





const noticeSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'noticeSlice',
    //默认值
    initialState: {
        noticeList: [],
        merchantListSelect: [],
        noticeDetail: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeActivityListState (state, action) {
            state.noticeList = action.payload
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


        [getNoticeListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.noticeList = payload.data
            }
        },
        // 失败
        [getNoticeListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getNoticeListRedux.pending] (state) {
        },


        [editNoticeRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editNoticeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editNoticeRedux.pending] (state) {
        },


        [deleteNoticeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteNoticeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteNoticeRedux.pending] (state) {
        },


        [getMerchantSelectRedux.fulfilled] (state, { payload }) {
            if (payload.code == 0) {

                payload.data.data.map((item) => {
                    item.value = item.id
                    item.label = item.name
                })
                state.merchantListSelect = payload.data
                // console.log(payload.data)

            }
        },
        // 失败
        [getMerchantSelectRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getMerchantSelectRedux.pending] (state) {
        },


        [getNoticeDetailRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.noticeDetail = payload.data
            }
        },
        [getNoticeDetailRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getNoticeDetailRedux.pending] (state) {
        },



        [editNoticePublishRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editNoticePublishRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editNoticePublishRedux.pending] (state) {
        },


        [editNoticeCloseRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editNoticeCloseRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editNoticeCloseRedux.pending] (state) {
        },


    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState } = noticeSlice.actions

// 导出
export default noticeSlice.reducer