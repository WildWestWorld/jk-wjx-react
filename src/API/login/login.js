import request from "@/api/origin/request";

export const loginAPI = (data) => {
    return request({
        url: '/admin/auth/login',//接口地址
        method: 'POST',//请求方法
        data
    })
}