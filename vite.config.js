import { defineConfig } from "vite";
import path from "path";

import react from "@vitejs/plugin-react";

import postcsspxtoviewport from 'postcss-px-to-viewport'


//用于处理vite无法使用require的BUG
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({

    transpileDependencies: true,
    lintOnSave: false,　　//关闭语法检查
    // 打包路径
    // publicPath: "/admin/",
    // base: '/admin/',
    publicPath: "./",
    base: './',


    //配置
    plugins: [react(),],

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },


    server: {                //记住，别写错了devServer//设置本地默认端口  选填
        host: '0.0.0.0',
        port: 8080,
        proxy: {                 //设置代理，必须填
            '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'http://test2.wzplay.com/',     //代理的目标地址
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '^/api': ''                     //选择忽略拦截器里面的内容// 也就说是在这里配置我们的名字api就会看不见
                }

            }
        },

        // 开启https
        // https: true
    },


    // css: {
    //     postcss: {
    //         plugins: [
    //             postcsspxtoviewport({
    //                 unitToConvert: 'px', // 要转化的单位
    //                 viewportWidth: 1920, // UI设计稿的宽度
    //                 unitPrecision: 6, // 转换后的精度，即小数点位数
    //                 propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    //                 viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
    //                 fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
    //                 selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
    //                 minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    //                 mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    //                 replace: true, // 是否转换后直接更换属性值
    //                 // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    //                 exclude: [],
    //                 landscape: false // 是否处理横屏情况
    //             })
    //         ]
    //     }
    // }



});
