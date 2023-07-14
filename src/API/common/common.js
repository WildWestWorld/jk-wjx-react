import request from "@/api/origin/request";

// 获取活动列表
export const getActivityListAPI = (data) => {
    return request({
        url: '/admin/common/upload/image',//接口地址
        method: 'POST',//请求方法
        data: data
    })
}
