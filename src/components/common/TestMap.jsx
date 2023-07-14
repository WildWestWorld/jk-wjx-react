/*
 * @Author: hwf - 1798274010@qq.com
 * @Date: 2020-06-04 08:23:13
 * @Last Modified by: hwf
 * @Last Modified time: 2020-06-05 15:43:38
 */

import React, { Component } from 'react';
import { Row, Col, Select } from 'antd';
import { Map, Marker } from 'react-amap';

const mapKey = 'd5eba06dc45e7d7b6fa5b981c61aa591';
const { Option } = Select;

class AddressMap extends Component {
  constructor() {
    super();
    this.state = {
      // polygonActive: true,
      pois: [],
      signAddrList: {
        address: '',
        distance: NaN,
        id: 'B0FFLAFX5T',
        location: { P: 25.082074, Q: 102.73076000000003, lng: '', lat: '' },
        name: '',
        shopinfo: '0',
        tel: '',
        type: '',
      },
    };
    window._AMapSecurityConfig = {
      securityJsCode: '333ad319ed4294afb55b781ba1dfa80d',
    };

    // 围栏样式
    this.polygonStyle = {
      isOutpoint: true,
      borderWeight: 3,
      strokeColor: '#FF33FF',
      strokeWeight: 6,
      strokeOpacity: 0.2,
      fillOpacity: 0.4,
      fillColor: '#1791fc',
      zIndex: 50,
    };

    this.selectAddress = {
      // created必须要拥有,用来初始化创建相应对象
      created: () => {
        let auto;
        let placeSearch;
        window.AMap.plugin('AMap.AutoComplete', () => {
          auto = new window.AMap.Autocomplete({
            input: 'tipinput',
            pageSize: 10,
            pageIndex: 1,
            citylimit: true, // 仅搜索本城市的地名
            city: '昆明', // 限制为只能搜索当前地区的位置
            outPutDirAuto: true,
            // type: '汽车服务|汽车销售|汽车维修|摩托车服务|餐饮服务|购物服务|生活服务|体育休闲服务|医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|交通设施服务|金融保险服务|公司企业|道路附属设施|地名地址信息|公共设施'
          });
        });
        // 创建搜索实例
        window.AMap.plugin('AMap.PlaceSearch', () => {
          placeSearch = new window.AMap.PlaceSearch({
            input: 'tipinput',
            pageSize: 10,
            pageIndex: 1,
            citylimit: true, // 仅搜索本城市的地名
          });
        });

        window.AMap.event.addListener(auto, 'select', (e) => {
          placeSearch.search(e.poi.name);
        });
      },
    };
  }

  // 选中某条数据，并返回给子组件
  onChange = (id) => {
    console.log(id);
    // 匹配出当前选中得一行数据
    const signAddrList = this.state.pois.find((item) => item.id === id) || null;
    if (signAddrList) {
      this.setState({
        signAddrList,
      });
      // 传到选择地址模态框
      //   this.props.mapData(signAddrList);
    }
  };

  // 加载当前选择的地址坐标,并进行定位
  componentWillMount = () => {
    this.setState({
      signAddrList: {
        location: {
          P: 25.082074,
          Q: 102.73076000000003,
          lng: this.props.areaSelectData.longitude,
          lat: this.props.areaSelectData.latitude,
        },
      },
    });
  };

  // 进行select框动态输入焦点事件监听，并实现搜索
  onSearch = (val, isFocus = false) => {
    // 获取到当前得位置进行搜索区域限制
    const city = this.props.areaSelectData.id;

    const { pois } = this.state;
    if (isFocus && pois && pois.length) {
      return;
    }

    const place = new window.AMap.PlaceSearch({
      pageSize: 10,
      pageIndex: 1,
      citylimit: true, // 仅搜索本城市的地名
      city, // 限制为只能搜索当前地区的位置
    });
    // 进行搜索
    place.search(val, (status, result) => {
      const { info, poiList } = result;
      if (result.length) {
        return;
      }
      if (info !== 'OK') {
        return;
      }
      if (poiList.pois && Array.isArray(poiList.pois)) {
        this.setState({
          pois: poiList.pois,
        });
      }
    });
  };

  render() {
    // console.log('this.props.areaSelectData',this.props.areaSelectData);
    // const path = this.props.polygonPath;
    // // 获取已经存到库里面的电子围栏区域，例如：昆明市
    // if (path && path.length) {
    //     path.map(item => {
    //         return {
    //             longitude: item.longitude,
    //             latitude: item.latitude
    //         }
    //     });
    // }

    const { signAddrList } = this.state;

    return (
      <div style={{ width: '100%', height: '400px' }}>
        <Row gutter={24}>
          <Col span={8}>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="请输入地址"
              optionFilterProp="children"
              value={this.state.value}
              onSearch={this.onSearch}
              onFocus={(e) => this.onSearch(e.target.value, true)}
              onChange={this.onChange}
            >
              {this.state.pois.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <br />
        {!this.props.isHideMap ? (
          <Map
            amapkey={mapKey}
            plugins={['ToolBar', 'Scale']}
            events={this.selectAddress}
            center={[signAddrList.location.lng, signAddrList.location.lat]}
            zoom={15}
          >
            <Marker
              position={[signAddrList.location.lng, signAddrList.location.lat]}
            />
          </Map>
        ) : null}
      </div>
    );
  }
}

export default AddressMap;
