import request from "@/api/origin/request";

// 获取活动列表
export const getTicketListAPI = (data) => {
    return request({
        url: '/admin/coupon/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加商品
export const addTicketAPI = (data) => {
    return request({
        url: '/admin/coupon/store',
        method: 'POST',
        data
    })
}

//编辑商品
export const editTicketAPI = (data) => {
    return request({
        url: '/admin/coupon/update',
        method: 'POST',
        data
    })
}

//删除
export const deleteTicketAPI = (data) => {
    return request({
        url: '/admin/coupon/destroy',
        method: 'POST',
        data
    })
}


// 优惠券详情
export const getTicketDetailListAPI = (data) => {
    return request({
        url: '/admin/coupon_detail/detail_list',
        method: 'GET',
        params: data
    })
}


//添加优惠券 数量

export const addTicketNumAPI = (data) => {
    return request({
        url: '/admin/coupon/add_num',
        method: 'POST',
        data
    })
}