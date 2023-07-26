// 新的redux使用方法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { getNextSelectedId, insertNewComponent } from "./utils";
import { nanoid } from "nanoid";
import { arrayMove } from "react-sortable-hoc";





// // 请求歌曲数据
// // export const getLyricDetail = createAsyncThunk("playBar/lyricDetail", async (params, thunkAPI) => {

// //     const res = await getLyricDetailAPI(params)
// //     // console.log(res.lrc.lyric)
// //     const lyric = res.lrc.lyric
// //     const lyricList = parseLyric(lyric)

// //     console.log(lyricList)
// //     thunkAPI.dispatch(changeLyricListState(lyricList))

// //     return res;
// // })

// export const getUserListRedux = createAsyncThunk("user/userList", async (params, thunkAPI) => {

//     const res = await getUserListAPI(params)
//     // console.log(res)
//     // thunkAPI.dispatch(changeLyricListState(lyricList))

//     return res;
// })

// export const getUserDetailRedux = createAsyncThunk("user/getUserDetail", async (params, thunkAPI) => {

//     const res = await getUserDetailAPI(params)
//     // console.log(res)
//     // thunkAPI.dispatch(changeLyricListState(lyricList))

//     return res;
// })


// export const getUserTicketListlRedux = createAsyncThunk("user/getUserTicketListl", async (params, thunkAPI) => {
//     const res = await getUserTicketListlAPI(params)
//     // console.log(res)
//     // thunkAPI.dispatch(changeLyricListState(lyricList))

//     return res;
// })


const canvasSlice = createSlice({
    // 类似于命名空间，name值会作为action.type的前缀
    name: 'canvasSlice',
    //默认值
    initialState: {
        userList: [],
        userDetail: [],
        userTicketList: [],

        componentList: [],
        selectId: '',
        copiedComponent: null
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
        resetComponents: (state, action) => {
            return action.payload
        },
        addComponents: produce(
            (value, action) => {
                console.log(value);
                console.warn(action.payload);
                // 接收传入进来的参数
                const newComponent = action.payload;
                const { selectId, componentList } = value
                let componentListCopy = JSON.parse(JSON.stringify(componentList))
                let selectIdCopy = JSON.parse(JSON.stringify(selectId))
                const index = componentListCopy.findIndex(item => {
                    return item.fe_id == selectIdCopy;
                })
                console.log(index)
                // 如果未选中任何组件 放到最下面
                if (index < 0) {
                    value.componentList.push(newComponent)
                } else {
                    // 如果 选择了组件就放到他后面
                    value.componentList.splice(index + 1, 0, newComponent)
                }

                value.selectId = newComponent.fe_id;

            }
        ),


        changeComponentListState (state, action) {
            state.componentList = action.payload
            console.log(action)
        },
        changeSelectIdState (state, action) {
            console.log(action)

            state.selectId = action.payload
            console.log(state.selectId)

        },
        changeComponentPropState: (state, action) => {
            // console.log(action);
            const { fe_id, value } = action.payload;
            // 修改当前组件
            const currentComponent = state.componentList.find(item => item.fe_id == fe_id);


            //  如果当前组件存在
            // let newPropsCopy = JSON.parse(JSON.stringify(value));
            // console.log(...newPropsCopy)

            if (currentComponent) {
                currentComponent.props = {
                    ...currentComponent.props,
                    ...value
                }
            }

        },
        removeSelectedComponent: (state) => {
            const { componentList = [], selectId } = state;

            // 重新计算selectid
            const newSelectedId = getNextSelectedId(selectId, componentList)
            state.selectId = newSelectedId;

            const index = componentList.findIndex((item) => {
                return item.fe_id == selectId;
            })
            console.log(index)
            componentList.splice(index, 1)
        },
        // 隐藏/显示 组件
        changeComponentHidden: (state, action) => {
            const { componentList = [], selectId } = state;
            const { fe_id, isHidden } = action.payload;

            let newSelectedId = ''
            // 如果要隐藏 就计算隐藏后的id逻辑 需要重新计算
            if (isHidden) {
                // 重新计算selectId
                newSelectedId = getNextSelectedId(selectId, componentList)
            } else {
                // 要显示就让selectId 设置为当前组件
                newSelectedId = fe_id
            }

            state.selectId = newSelectedId;

            const currentComponent = componentList.find(item => item.fe_id == fe_id);
            if (currentComponent) {
                currentComponent.isHidden = isHidden;
            }
        },
        // 锁定/解锁组件
        toggleComponentLocked: (state, action) => {
            const { fe_id } = action.payload;
            const currentComponent = state.componentList.find(item => item.fe_id == fe_id);
            // 如果查找到对应的组件 就切换 Locked状态
            if (currentComponent) {
                currentComponent.isLocked = !currentComponent.isLocked;
            }
        },
        // 拷贝当前选择的组件
        copySelectedComponent: (state, action) => {
            const { componentList = [], selectId } = state;
            // 找到当前选择的组件
            const selectedComponent = componentList.find((item) => {
                return item.fe_id == selectId;
            })
            if (selectedComponent == null) {
                return
            }
            state.copiedComponent = JSON.parse(JSON.stringify(selectedComponent))
        },
        pasteCopiedComponent: (state) => {
            const { copiedComponent } = state;


            if (!copiedComponent) return

            // 需要修改对应的fe_id 不然就会有重复id出现 
            // copiedComponent.fe_id = nanoid;

            // 插入 copiedComponent
            insertNewComponent(state, copiedComponent)
        },
        // 选择上一个组件
        selectPrevComponent: (state) => {
            const { selectId, componentList } = state
            const selectedIndex = componentList.findIndex(item => item.fe_id === selectId)
            if (selectedIndex < 0) return //未选中组件
            if (selectedIndex == 0) return //选中了第一个组件 就无法再往上选中了

            state.selectId = componentList[selectedIndex - 1].fe_id

        },
        // 选择下一个组件
        selectNextComponent: (state) => {
            const { selectId, componentList } = state
            const selectedIndex = componentList.findIndex(item => item.fe_id === selectId)
            if (selectedIndex < 0) return //未选中组件
            if (selectedIndex == componentList.length - 1) return //选中了第一个组件 就无法再往上选中了

            state.selectId = componentList[selectedIndex + 1].fe_id

        },

        //改变组件标题
        changeComponentTitle: (state, action) => {
            const { title, fe_id } = action.payload;
            const currentComponent = state.componentList.find(item => item.fe_id === fe_id);
            if (currentComponent) {
                currentComponent.title = title
            }

        },
        // 移动组件位置
        moveComponent: (state, action) => {
            const { componentList } = state

            const { oldIndex, newIndex } = action.payload;

            // arrayMove 方法来自于dnd 
            // 用于列表移动
            state.componentList = arrayMove(componentList, oldIndex, newIndex)
        }


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


        // [getUserListRedux.fulfilled] (state, { payload }) {
        //     console.log(payload)
        //     if (payload.code == 0) {
        //         state.userList = payload.data
        //     }
        // },
        // // 失败
        // [getUserListRedux.rejected] (state, err) {
        //     console.log('加载失败')

        // },
        // // 加载中
        // [getUserListRedux.pending] (state) {
        // },


        // [getUserDetailRedux.fulfilled] (state, { payload }) {
        //     console.log(payload)
        //     if (payload.code == 0) {
        //         state.userDetail = payload.data
        //     }
        // },
        // // 失败
        // [getUserDetailRedux.rejected] (state, err) {
        //     console.log('加载失败')

        // },
        // // 加载中
        // [getUserDetailRedux.pending] (state) {
        // },


        // [getUserTicketListlRedux.fulfilled] (state, { payload }) {
        //     console.log(payload)
        //     if (payload.code == 0) {
        //         state.userTicketList = payload.data
        //     }
        // },
        // // 失败
        // [getUserTicketListlRedux.rejected] (state, err) {
        //     console.log('加载失败')

        // },
        // // 加载中
        // [getUserTicketListlRedux.pending] (state) {
        // },




    }


})



//同步函数必须导出，异步函数可以不用
// 导出同步action函数
export const { changeActivityListState, changeComponentListState, changeSelectIdState, resetComponents, addComponents, changeComponentPropState, removeSelectedComponent, changeComponentHidden, toggleComponentLocked, copySelectedComponent, pasteCopiedComponent, selectPrevComponent, selectNextComponent, changeComponentTitle, moveComponent } = canvasSlice.actions

// 导出
export default canvasSlice.reducer