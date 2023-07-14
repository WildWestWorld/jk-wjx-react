export const getImageUtils = (imageUrl) => {
    if (!imageUrl) {
        return
    }

    const server = 'http://test2.wzplay.com/'

    // const server = 'http://192.168.3.74:8092/'

    let image = server + imageUrl
    return image
}