import JKLayout from './views/layout/Layout';

import KeepAlive from 'react-activation';

import { useEffect, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import router from './router';
import { searchRouterPath } from '@/utils/routerUtils';

//引入redux
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changePathInfoState } from '@/store/common/slice';
import JKMap from './components/common/JKMap';

function App() {
  //Hook区
  const elementRouter = useRoutes(router);

  const location = useLocation();
  //   console.warn(location);
  let path = location.pathname;
  let routerdetail = searchRouterPath(path, router);
  //   console.log(routerdetail);

  //redux 区
  //引入redux
  const dispatch = useDispatch();

  //改变redux中的值
  useEffect(() => {
    dispatch(changePathInfoState(path));
  }, [path]);

  useEffect(() => {
    //配置安全密匙
    window._AMapSecurityConfig = {
      securityJsCode: '333ad319ed4294afb55b781ba1dfa80d',
    };

    //高德地图js
    const mapEvents = {
      //mapInstance 就是地图的实例 ，这里的create 是高德地图自带的生命周期
      created: (mapInstance) => {
        console.log(mapInstance, '地图实例');

        window.AMap.service('AMap.PlaceSearch', function () {
          console.log('函数执行了');
          //回调函数
          //实例化PlaceSearch
          let placeSearch = new AMap.PlaceSearch({
            pageIndex: 1, // 页码
            pageSize: 10, // 单页显示结果条数
            city: '温州市', // 兴趣点城市
            citylimit: true, // 是否强制限制在设置的城市内搜索
            map: mapInstance, // 展现结果的地图实例
            //   panel: 'panel', // 结果列表将在此容器中进行展示。
            autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          });

          //TODO: 使用placeSearch对象调用关键字搜索的功能
          // placeSearch.search('肯德基', (status, result) => {
          //   console.log(result, '结果');
          //   let info = result.info;
          //   if (info !== 'OK') {
          //     message.error('查询结果错误');
          //     return;
          //   }
          //   let poiList = result.poiList;
          //   if (poiList.pois && Array.isArray(poiList.pois)) {
          //     console.log('设置查询成功');
          //     setPois(poiList.pois);
          //   }

          //   console.log(status, '状态');
          // });
        });
      },
      // click: (event) => {
      //   const position = [event.lnglat.getLng(), event.lnglat.getLat()];
      //   message.success(`获取的坐标点位置为${position}`);
      //   setPosition(position);
      // },
    };
  }, []);

  //变量区
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShow((show) => !show)}>Toggle</button> */}
      {show && (
        // KeepAlive
        <KeepAlive>
          {/* <JKLayout/> */}
          {elementRouter}
        </KeepAlive>
      )}
    </div>
  );
}

export default App;
