
import request from "@/api/origin/request";
export const getWithdrawListAPI = (data) => {
    return request({
        url: '/admin/withdrawal/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


export const editWithdrawStatusAPI = (data) => {
    return request({
        url: 'admin/withdrawal/audit',//接口地址
        method: 'POST',//请求方法
        data: data
    })
}
