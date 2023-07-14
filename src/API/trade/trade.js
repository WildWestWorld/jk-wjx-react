import request from "@/api/origin/request";

// 获取活动列表
export const getTradeListAPI = (data) => {
    return request({
        url: '/admin/trade_area/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加商品
export const addTradeAPI = (data) => {
    return request({
        url: '/admin/trade_area/store',
        method: 'POST',
        data
    })
}

//编辑商品
export const editTradeAPI = (data) => {
    return request({
        url: '/admin/trade_area/update',
        method: 'POST',
        data
    })
}

//删除活动 
export const deleteTradeAPI = (data) => {
    return request({
        url: '/admin/trade_area/destroy',
        method: 'POST',
        data
    })
}

