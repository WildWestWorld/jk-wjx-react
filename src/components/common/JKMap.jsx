import { useEffect, useState } from 'react';
import { message, Select, Cascader } from 'antd';
import { Markers, Map, Marker } from 'react-amap';
// react-amap

// https://blog.csdn.net/luohui2017/article/details/104856452?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166964379316800192222449%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166964379316800192222449&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-104856452-null-null.142^v67^control,201^v3^add_ask,213^v2^t3_esquery_v1&utm_term=react-amap

const JKMap = ({
  selectAddress,
  setSelectAddress,
  mapInputValue,
  setMapInputValue,
}) => {
  const [position, setPosition] = useState();

  const [pois, setPois] = useState(null);

  const [searchAddress, setSearchAddress] = useState('');

  //   const [selectAddress, setSelectAddress] = useState(null);

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

  const typeSearchAddress = (value, isFocus = false) => {
    // console.log(value);
    //查询的城市
    const city = '温州市';

    //如果有查询的结果 或者正在输入 就不再查询 变相的防抖
    if (isFocus && pois && pois.length) {
      return;
    }

    const place = new window.AMap.PlaceSearch({
      pageIndex: 1, // 页码
      pageSize: 10, // 单页显示结果条数
      city: city, // 兴趣点城市
      citylimit: true, // 是否强制限制在设置的城市内搜索

      //   panel: 'panel', // 结果列表将在此容器中进行展示。
      autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    });
    //这里的value就是你Input输入的值
    place.search(value, (status, result) => {
      const { info, poiList } = result;

      if (info !== 'OK') {
        return;
      } else {
        // console.warn(value, result);
        //如果查询的到了，而且是个数组
        if (poiList.pois && Array.isArray(poiList.pois)) {
          //   console.log(poiList.pois);
          let poisFormat = JSON.parse(JSON.stringify(poiList.pois));
          poisFormat.map((item) => {
            item.label = item.name;
            item.value = item.id;
            item.key = item.id;
            return item;
          });
          setPois(poisFormat);
          //   console.log(poisFormat);
          // setSearchAddress(poiList.pois);
        }
      }
    });
  };
  //选择了里面的option
  const selectAddressOption = (value) => {
    // console.log(value);
    // console.log('test');
  };

  //改变
  const handleChange = (value) => {
    // console.log(`selected ${value}`);

    // setSearchAddress(value);
    setMapInputValue(value);

    let selectAddressId = value;
    // console.log(selectAddressId);
    let positionList = pois;
    let selectIndex = positionList.findIndex((item) => {
      return item.id == selectAddressId;
    });
    if (selectIndex !== -1) {
      let selectAddressFind = positionList[selectIndex];
      //   console.log(selectAddressFind);
      setSelectAddress(selectAddressFind);
      //   console.log(selectAddress);
    }
  };

  //Hook区
  //   useEffect(() => {
  //     console.log('执行');
  //     if (mapInputValue && mapInputValue.length > 0) {
  //       // console.log(value);
  //       //查询的城市
  //       const city = '温州市';

  //       //如果有查询的结果 或者正在输入 就不再查询 变相的防抖
  //       if (pois && pois.length) {
  //         return;
  //       }

  //       const place = new window.AMap.PlaceSearch({
  //         pageIndex: 1, // 页码
  //         pageSize: 10, // 单页显示结果条数
  //         city: city, // 兴趣点城市
  //         citylimit: true, // 是否强制限制在设置的城市内搜索

  //         //   panel: 'panel', // 结果列表将在此容器中进行展示。
  //         autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
  //       });
  //       console.warn(mapInputValue);

  //       // //这里的value就是你Input输入的值
  //       setTimeout(() => {
  //         place.search(mapInputValue, (status, result) => {
  //           const { info, poiList } = result;
  //           console.log(result);
  //           if (info !== 'OK') {
  //             return;
  //           } else {
  //             // console.warn(value, result);
  //             //如果查询的到了，而且是个数组
  //             if (poiList.pois && Array.isArray(poiList.pois)) {
  //               //   console.log(poiList.pois);
  //               let poisFormat = JSON.parse(JSON.stringify(poiList.pois));
  //               poisFormat.map((item) => {
  //                 item.label = item.name;
  //                 item.value = item.id;
  //                 item.key = item.id;
  //                 return item;
  //               });
  //               setPois(poisFormat);
  //               //   console.log(poisFormat);
  //               // setSearchAddress(poiList.pois);
  //             }
  //           }
  //         });
  //       }, 1);
  //     }
  //   }, [mapInputValue]);

  //设置JS Web 的key
  return (
    <div style={{ height: 500 }}>
      <Select
        options={pois}
        style={{ width: '100%' }}
        showSearch
        placeholder="请输入地址"
        filterOption={false} //关键，不加会导致搜索内容无法实时显示
        onChange={handleChange}
        onSearch={typeSearchAddress}
        value={mapInputValue}
      ></Select>
      <Map
        amapkey={'d5eba06dc45e7d7b6fa5b981c61aa591'}
        events={mapEvents}
        plugins={['ToolBar', 'Scale']}
        zoom={15}
        center={
          selectAddress && [
            selectAddress.location.lng,
            selectAddress.location.lat,
          ]
        }
      >
        {selectAddress && (
          <Marker
            position={[selectAddress.location.lng, selectAddress.location.lat]}
          />
        )}

        {/* {position && <Marker position={[position]} />} */}
      </Map>
    </div>
  );
};

export default JKMap;
