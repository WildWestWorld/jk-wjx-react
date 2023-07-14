import request from "@/api/origin/request";


// 获取活动列表
export const getAccountListAPI = (data) => {
    return request({
        url: '/admin/admin_user/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}



//添加商品
export const addAccountAPI = (data) => {
    return request({
        url: '/admin/admin_user/store',
        method: 'POST',
        data
    })
}

//编辑商品
export const editAccountAPI = (data) => {
    return request({
        url: '/admin/admin_user/update',
        method: 'POST',
        data
    })
}

//删除活动 
export const deleteAccountAPI = (data) => {
    return request({
        url: '/admin/admin_user/destroy',
        method: 'POST',
        data
    })
}

