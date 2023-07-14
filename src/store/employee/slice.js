// 新的redux使用方法
import { addEmployeeAPI, editEmployeeAPI, getEmployeeListAPI, deleteEmployeeAPI, getShopDetailByIDAPI, editEmployeeStatusAPI } from "@/API/employee/employee";
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

export const getEmployeeListRedux = createAsyncThunk("employee/employeeList", async (params, thunkAPI) => {

    const res = await getEmployeeListAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const addEmployeeRedux = createAsyncThunk("employee/addEmployee", async (params, thunkAPI) => {

    const res = await addEmployeeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const editEmployeeRedux = createAsyncThunk("employee/editEmployee", async (params, thunkAPI) => {
    const res = await editEmployeeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})

export const deleteEmployeeRedux = createAsyncThunk("employee/deleteEmployee", async (params, thunkAPI) => {
    const res = await deleteEmployeeAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})



export const getShopDetailByIDRedux = createAsyncThunk("employee/getShopDetailById", async (params, thunkAPI) => {

    const res = await getShopDetailByIDAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})


export const editEmployeeStatusRedux = createAsyncThunk("employee/editEmployeeStatus", async (params, thunkAPI) => {
    
    const res = await editEmployeeStatusAPI(params)
    // console.log(res)
    // thunkAPI.dispatch(changeLyricListState(lyricList))

    return res;
})




const employeeSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'employeeSlice',
    //默认值
    initialState: {
        employeeList: [],
        shopDetail: []
    },
    // 方法  
    reducers: {
        //改变路径信息
        changeEmployeeListState (state, action) {
            state.employeeList = action.payload
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


        [getEmployeeListRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.employeeList = payload.data
            }
        },
        // 失败
        [getEmployeeListRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getEmployeeListRedux.pending] (state) {
        },


        [editEmployeeRedux.fulfilled] (state, { payload }) {
            // console.log(payload)
        },
        // 失败
        [editEmployeeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editEmployeeRedux.pending] (state) {
        },

        //增加员工
        [addEmployeeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [addEmployeeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [addEmployeeRedux.pending] (state) {
        },


        [deleteEmployeeRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [deleteEmployeeRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [deleteEmployeeRedux.pending] (state) {
        },



        [getShopDetailByIDRedux.fulfilled] (state, { payload }) {
            console.log(payload)
            if (payload.code == 0) {
                state.shopDetail = payload.data
            }
        },
        // 失败
        [getShopDetailByIDRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [getShopDetailByIDRedux.pending] (state) {
        },


        [editEmployeeStatusRedux.fulfilled] (state, { payload }) {
            console.log(payload)
        },
        // 失败
        [editEmployeeStatusRedux.rejected] (state, err) {
            console.log('加载失败')

        },
        // 加载中
        [editEmployeeStatusRedux.pending] (state) {
        },


    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeEmployeeListState } = employeeSlice.actions

// 导出
export default employeeSlice.reducer