import request from "@/api/origin/request";

// 获取
export const getOrderListAPI = (data) => {
    return request({
        url: '/admin/order/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


export const getOrderDetailAPI = (data) => {
    return request({
        url: '/admin/order/detail',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


export const orderRefundAPI = (data) => {
    return request({
        url: '/admin/order/refunding',//接口地址
        method: 'POST',//请求方法
        data: data
    })
}