import request from "@/api/origin/request";

// 获取活动列表
export const getActivityListAPI = (data) => {
    return request({
        url: '/admin/activity/list',//接口地址
        method: 'GET',//请求方法
        params: data
    })
}
//添加商品
export const addActivityAPI = (data)=>{
    return request({
        url:'/admin/activity/store',
        method:'POST',
        data
    })
}

//编辑商品
export const editActivityAPI = (data)=>{
    return request({
        url:'/admin/activity/update',
        method:'POST',
        data
    })
}

//删除活动 
export const deleteActivityAPI = (data)=>{
    return request({
        url:'/admin/activity/destroy',
        method:'POST',
        data
    })
}

//获得平台分组 选项，用于优惠券的 活动选择
export const getPlatformActivity= (data)=>{
    return request({
        url:'/admin/activity/options/platform_group',
        method:'GET',
        params:data
    })
}



export const testAPI = () => {
    return request({
        url: '/test',//接口地址
        method: 'GET',//请求方法
    })
}