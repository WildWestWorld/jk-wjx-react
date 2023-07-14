import request from "@/api/origin/request";

// 获取
export const getUserListAPI = (data) => {
    return request({
        url: '/admin/user/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


export const getUserDetailAPI = (data) => {
    return request({
        url: '/admin/user/detail',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}

export const getUserTicketListlAPI = (data) => {
    return request({
        url: '/admin/user/coupon/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}



