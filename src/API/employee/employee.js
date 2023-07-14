import request from "@/api/origin/request";

// 获取活动列表
export const getEmployeeListAPI = (data) => {
    return request({
        url: '/admin/shop/employee/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}
//添加商品
export const addEmployeeAPI = (data) => {
    return request({
        url: '/admin/shop/employee/store',
        method: 'POST',
        data
    })
}

//编辑商品
export const editEmployeeAPI = (data) => {
    return request({
        url: '/admin/shop/employee/update',
        method: 'POST',
        data
    })
}

//删除活动 
export const deleteEmployeeAPI = (data) => {
    return request({
        url: '/admin/shop/employee/destroy',
        method: 'POST',
        data
    })
}

//根据id获取门店名称
export const getShopDetailByIDAPI = (data) => {
    return request({
        url: '/admin/shop/detail',
        method: 'GET',
        params: data
    })
}


//根据id获取门店名称
export const editEmployeeStatusAPI = (data) => {
    return request({
        url: '/admin/shop/employee/update/status',
        method: 'POST',
        data: data
    })
}