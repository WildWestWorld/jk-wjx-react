import request from "@/api/origin/request";

// 获取列表
export const getMerchantListAPI = (data) => {
    return request({
        url: '/admin/merchant/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加
export const addMerchantAPI = (data) => {
    return request({
        url: '/admin/merchant/store',
        method: 'POST',
        data
    })
}

//编辑
export const editMerchantAPI = (data) => {
    return request({
        url: '/admin/merchant/update',
        method: 'POST',
        data
    })
}

//删除
export const deleteMerchantAPI = (data) => {
    return request({
        url: '/admin/merchant/destroy',
        method: 'POST',
        data
    })
}

//获得商户 选项，用于公告的 商户选择

export const getMerchantSelectAPI = (data) => {
    return request({
        url: '/admin/merchant/options/search_page',
        method: 'GET',
        params: data
    })
}

////商户类型

// 获取商户类型列表
export const getMerchantTypeListAPI = (data) => {
    return request({
        url: '/admin/shop_cate/tree',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加
export const addMerchantTypeAPI = (data) => {
    return request({
        url: '/admin/shop_cate/store',
        method: 'POST',
        data
    })
}

//编辑
export const editMerchantTypeAPI = (data) => {
    return request({
        url: '/admin/shop_cate/update',
        method: 'POST',
        data
    })
}

//删除
export const deleteMerchantTypeAPI = (data) => {
    return request({
        url: '/admin/shop_cate/destroy',
        method: 'POST',
        data
    })
}


//商户上架下架

export const merchantGroundingAPI = (data) => {
    return request({
        url: '/admin/merchant/update/status',
        method: 'POST',
        data
    })
}

//商户账号可用/不可用

export const merchantAccountStateChangeAPI = (data) => {
    return request({
        url: '/admin/merchant/update/account_status',
        method: 'POST',
        data
    })
}

// 修改商户满减
export const editMerchantFillStateAPI = (data) => {
    return request({
        url: '/admin/merchant/update/promotion',
        method: 'POST',
        data
    })
}



// 修改商户满减
export const getMerchantTypeLevOneAPI = (data) => {
    return request({
        url: '/admin/shop_cate/options/l1',
        method: 'GET',
        params:data
    })
}

export const editMerchantTypeTreeSortAPI = (data) => {
    return request({
        url: '/admin/shop_cate/tree/sort',
        method: 'POST',
        data:data
    })
}