import request from "@/api/origin/request";

// 获取列表
export const getShopListAPI = (data) => {
    return request({
        url: '/admin/shop/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加
export const addShopAPI = (data) => {
    return request({
        url: '/admin/shop/store',
        method: 'POST',
        data
    })
}

//编辑
export const editShopAPI = (data) => {
    return request({
        url: '/admin/shop/update',
        method: 'POST',
        data
    })
}

//删除
export const deleteShopAPI = (data) => {
    return request({
        url: '/admin/shop/destroy',
        method: 'POST',
        data
    })
}




//获得商户 选项，用于公告的 商户选择

export const getShopSelectAPI = (data) => {
    return request({
        url: '/admin/shop/options/search_page',
        method: 'GET',
        params: data
    })
}

////商户类型

// 获取商户类型列表
export const getShopTypeListAPI = (data) => {
    return request({
        url: '/admin/shop_cate/tree',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


//添加
export const addShopTypeAPI = (data) => {
    return request({
        url: '/admin/shop_cate/store',
        method: 'POST',
        data
    })
}

//编辑
export const editShopTypeAPI = (data) => {
    return request({
        url: '/admin/shop_cate/update',
        method: 'POST',
        data
    })
}

//删除
export const deleteShopTypeAPI = (data) => {
    return request({
        url: '/admin/shop_cate/destroy',
        method: 'POST',
        data
    })
}


//商户上架下架

export const shopGroundingAPI = (data) => {
    return request({
        url: '/admin/shop/update/status',
        method: 'POST',
        data
    })
}

//商户账号可用/不可用

export const shopAccountStateChangeAPI = (data) => {
    return request({
        url: '/admin/shop/update/account_status',
        method: 'POST',
        data
    })
}

// 修改商户满减
export const editShopFillStateAPI = (data) => {
    return request({
        url: '/admin/shop/update/promotion',
        method: 'POST',
        data
    })
}




// 获取商圈信息 用于做 新建 的 树形选项
export const getTradeAreaOptionAPI = (data) => {
    return request({
        url: '/admin/trade_area/options/group',
        method: 'GET',
        data
    })
}



// 获取分类 用于做 商户 的 树形选项

export const getShopCateOptionAPI = (data) => {
    return request({
        url: '/admin/shop_cate/options/tree',
        method: 'GET',
        data
    })
}

//改变商户审核状态
export const editShopAuditStatusAPI = (data) => {
    return request({
        url: '/admin/shop/audit/status',
        method: 'POST',
        data
    })
}

//获取门店详情内容
export const getShopDetailAPI = (data) => {
    return request({
        url: '/admin/shop/detail',
        method: 'GET',
        params: data
    })
}

