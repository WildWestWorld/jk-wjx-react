// 格式化商户活动
//传入的参数是商户活动信息
export const formatMerchatActivity = (merchantActivityInfo) => {

    let start_price = merchantActivityInfo.start_price
    let price = merchantActivityInfo.price

    //满减 
    if (merchantActivityInfo.type == 1) {

        return `满${start_price}-${price}`
    }
    //每满减
    if (merchantActivityInfo.type == 2) {
        return `每满${start_price}-${price}`
    }
}



// 格式化商户类型
//传入的参数是 商户的类型数组
export const formatMerchantType = (merchantTypeArr) => {
    // console.log(merchantTypeArr)
    //使其变成完整商户的数组
    merchantTypeArr = merchantTypeArr.map((item) => {
        // console.log(item.path_name)
        return item.path_name
    })


    return merchantTypeArr
}
