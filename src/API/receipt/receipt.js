
import request from "@/api/origin/request";
export const getReceiptListAPI = (data) => {
    return request({
        url: '/admin/invoice/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}


export const editReceiptStatusAPI = (data) => {
    return request({
        url: '/admin/invoice/audit',//接口地址
        method: 'POST',//请求方法
        data: data
    })
}
