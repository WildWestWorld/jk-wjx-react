import { Input, Space } from 'antd';

import React, { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
const { Search } = Input;

const JKListSearch = memo(() => {
  //   HOOK
  const nav = useNavigate();
  const { pathname } = useLocation();
  //   获取url设置到input value
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // 每当 searchParams变化都会执行这个函数
    // 获取关键词
    const curVal = searchParams.get('keyword');
    setValue(curVal);
  }, [searchParams]);

  const [value, setValue] = useState('');
  const handleSearch = (value) => {
    console.log(value);
    nav({ pathname, search: `keyword=${value}` });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <Search
      placeholder="请输入关键字"
      allowClear
      value={value}
      onSearch={handleSearch}
      onChange={handleChange}
      style={{ width: '200px' }}
    ></Search>
  );
});

export default JKListSearch;
