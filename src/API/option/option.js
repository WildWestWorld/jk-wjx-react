import request from "@/api/origin/request";



//获取商户类型
export const getMerchantCateOptionAPI = (data) => {
    return request({
        url: '/admin/shop_cate/options/tree',
        method: 'GET',
        params: data
    })
}


//获取商户类型
export const getMerchantOptionAPI = (data) => {
    return request({
        url: '/admin/merchant/options/search_shop_cate',
        method: 'GET',
        params: data
    })
}


//获取账号角色
export const getRoleOptionAPI = (data) => {
    return request({
        url: '/admin/admin_role/options',
        method: 'GET',
        params: data
    })
}
