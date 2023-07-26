import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import RightPanelProp from './RightPanelProp';
import RightPageSetting from './RightPageSetting';
import useGetComponentInfo from '@/hook/useGetComponentInfo';

const RightPanel = memo(() => {
  const [activeKey, setActiveKey] = useState('prop');
  const { selectId } = useGetComponentInfo();

  useEffect(() => {
    // 如果
    if (selectId) {
      setActiveKey('prop');
    } else {
      setActiveKey('setting');
    }
  }, [selectId]);

  const tabItems = [
    {
      key: 'prop',
      label: (
        <span>
          <FileTextOutlined></FileTextOutlined>
          属性
        </span>
      ),
      children: <RightPanelProp></RightPanelProp>,
    },
    {
      key: 'setting',
      label: (
        <span>
          <SettingOutlined></SettingOutlined>
          页面设置
        </span>
      ),
      children: <RightPageSetting></RightPageSetting>,
    },
  ];

  return <Tabs defaultActiveKey={activeKey} items={tabItems}></Tabs>;
});

export default RightPanel;
