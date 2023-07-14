import request from "@/api/origin/request";

// 获取活动列表
export const getNoticeListAPI = (data) => {
    return request({
        url: '/admin/notice/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加商品
export const addNoticeAPI = (data) => {
    return request({
        url: '/admin/notice/store',
        method: 'POST',
        data
    })
}

//编辑商品
export const editNoticeAPI = (data) => {
    return request({
        url: '/admin/notice/update',
        method: 'POST',
        data
    })
}

//删除活动 
export const deleteNoticeAPI = (data) => {
    return request({
        url: '/admin/notice/destroy',
        method: 'POST',
        data
    })
}



// 获取活动列表
export const getNoticeDetailAPI = (data) => {
    return request({
        url: '/admin/notice_shop/detail_list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}

//获取页面中的通知列表
export const getNoticeDetailPageAPI = (data) => {
    return request({
        url: '/admin/notice/detail',
        method: 'GET',//请求方法
        params: data
    })
}


export const editNoticePublishAPI = (data) => {
    return request({
        url: '/admin/notice/publishing',
        method: 'POST',
        data
    })
}


export const editNoticeCloseAPI = (data) => {
    return request({
        url: '/admin/notice/closing',
        method: 'POST',
        data
    })
}



// 获取活动列表
export const getNoticeDetailListAPI = (data) => {
    return request({
        url: '/admin/notice_shop/detail_list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}