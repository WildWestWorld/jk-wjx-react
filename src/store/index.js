
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commonSlice from '@/store/common/slice'
import activitySlice from '@/store/activity/slice'
import ticketSlice from '@/store/ticket/slice'
import merchantSlice from '@/store/merchant/slice'
import noticeSlice from '@/store/notice/slice'
import tradeSlice from '@/store/trade/slice'
import userSlice from '@/store/user/slice'
import orderSlice from '@/store/order/slice'
import accountSlice from '@/store/account/slice'
import shopSlice from '@/store/shop/slice'
import employeeSlice from '@/store/employee/slice'
import optionSlice from '@/store/option/slice'

import withdrawSlice from '@/store/withdraw/slice'
import receiptSlice from '@/store/receipt/slice'

import canvasSlice from '@/store/canvas/slice'
import pageInfoSlice from '@/store/pageInfo/slice'









// persistReducer 为内置的切片管理；
import { persistStore, persistReducer } from 'redux-persist';

// storage redux-persist的思想是将要存储的数据通过storage存储在本地localstorage中；
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// 添加redux-undo 依赖用于返回和恢复
import undoable, { excludeAction } from 'redux-undo'

// 配置要存储的Slice；
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};


const commonSlicePersist = persistReducer(persistConfig, commonSlice)


// 创建Store
export const reduxStore = configureStore({
    reducer: {
        commonSlicePersist: commonSlicePersist,//该Reduce是持久化保存的 //来源是commonSlice
        commonSlice,
        activitySlice,
        ticketSlice,
        merchantSlice,
        noticeSlice,
        tradeSlice,
        userSlice,
        orderSlice,
        accountSlice,
        shopSlice,
        employeeSlice,
        optionSlice,
        withdrawSlice,
        receiptSlice,
        pageInfoSlice,

        // 添加undo依赖
        canvasSlice: undoable(canvasSlice, {
            limit: 20, //限制undo 20步
            // 排除一些初始化和选取的方法
            filter: excludeAction([
                'canvasSlice/resetComponents',
                'canvasSlice/changeSelectIdState',
                'canvasSlice/selectPrevComponent',
                'canvasSlice/selectNextComponent',
            ])
        }),


    },
    //关闭序列化检查
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export default reduxStore;

export const persistor = persistStore(reduxStore)
