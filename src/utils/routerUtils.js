import { useNavigate } from "react-router-dom";



//用于路由跳转
export const navigateToPage = (path) => {
    const navigate = useNavigate()
    navigate(path)
};


// 实现路由守卫
// 递归查询路由
export const searchRouterPath = (path, router) => {

    // console.log(router)
    // 先获取当前层路由
    for (let item of router) {
        // 如果找到了path就返回对应的item
        if (item.path == path) {
            return item

        }
        // 如果没找到，但是有子路由，就用searchRouterPath也查询对应层的路由，看看是否有对应的
        if (item.children) {
            //格式化path否则找不到子路由
            let pathFormat = path.split('/')
            pathFormat = pathFormat[pathFormat.length - 1]
            return searchRouterPath(pathFormat, item.children)

        }

    }
    // 如果当前层路由没有，且没有任何子路由，那么就返回null，就是没找到path

    return null;
}


export const routerNameEmun = {
    'index': '系统首页',
    'layout': '系统首页',
    'activity': '活动管理',
    'ticket': '优惠券管理',
    'ticketDetail': '优惠券详情',
    'merchant': '商户管理',

    'shop': '门店管理',
    'employee': '员工管理',
    'notice': '公告管理',
    'noticeDetail': '公告详情',
    'tradingArea': '商圈管理',
    'merchantType': '类型管理',
    'user': '用户管理',
    'userDetail': '用户详情',
    'order': '订单管理',
    'orderDetail': '订单详情',
    'withdraw': '提现管理',
    'receipt': '发票管理',
    'carousel': '轮播图管理',
    'account': '账号管理'
}


