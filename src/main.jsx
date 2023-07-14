import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

import App from './App';

// antd18+语言
import { ConfigProvider } from 'antd';
//引入中文主题
import zhCN from 'antd/es/locale/zh_CN';

//处理antd 时间组件 中文化
import 'moment/dist/locale/zh-cn';

// antd紧凑主题
import 'antd/dist/antd.compact.css';

//重置样式
import './assets/css/reset.css';
// 引入rem依赖  1rem = 80px  为什么是80，该文件里面有解释
// import './utils/flexible.js';

// 配置路由,我们用的是hash路由
import { HashRouter, Route, Routes } from 'react-router-dom';

import { AliveScope } from 'react-activation';
import Login from '@/views/login/Login';

import router from './router';

import store, { persistor } from './store';

import { Provider } from 'react-redux';

//配置 Persist 数据持久化
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
  // 配置Hash路由模式
  <HashRouter>
    <Provider store={store}>
      {/* 多语言 */}
      <ConfigProvider locale={zhCN}>
        {/* KeepAlive 主要容器 */}
        <AliveScope>
          {/* 数据持久化Persist */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
          {/* <Routes>
            <Route path='' element={<Login></Login>}></Route>
            <Route path='/admin/*' element={<App></App>}></Route>
          </Routes> */}
        </AliveScope>
      </ConfigProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
