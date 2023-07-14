import { useState } from 'react';
import { message, Input, Cascader } from 'antd';
import chinaAreaOptions from '@/utils/china-area-state';
// react-amap

const JKMapCas = () => {
  const [searchLocal, setSearchLocal] = useState('');

  const selectSearchLocal = (value) => {
    console.log(value);
    setSearchLocal(value);
  };

  //设置JS Web 的key
  return (
    <Cascader
      placeholder="选择要搜索的的省/市/区"
      options={chinaAreaOptions}
      onChange={selectSearchLocal}
      value={searchLocal}
      changeOnSelect
      allowClear
    />
  );
};

export default JKMapCas;
