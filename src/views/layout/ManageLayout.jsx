import React, { memo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { LayoutWrapper } from './ManageStyle';
import { Button, Divider, Space } from 'antd';
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined,
} from '@ant-design/icons';
const ManageLayout = memo(() => {
  // HOOK
  const nav = useNavigate();
  //   获取路由
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <LayoutWrapper>
      <div className="container">
        <div className="left">
          <Space direction="vertical">
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined></PlusOutlined>}
            >
              创建问卷
            </Button>
            <Divider style={{ borderTop: 'transparent' }}></Divider>

            <Button
              type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
              size="large"
              icon={<BarsOutlined></BarsOutlined>}
              onClick={() => nav('/manage/list')}
            >
              我的问卷
            </Button>

            <Button
              type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
              size="large"
              icon={<StarOutlined></StarOutlined>}
              onClick={() => nav('/manage/star')}
            >
              星标问卷
            </Button>

            <Button
              type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
              size="large"
              icon={<DeleteOutlined></DeleteOutlined>}
              onClick={() => nav('/manage/trash')}
            >
              回收站
            </Button>
          </Space>
        </div>

        <div className="right">
          {/* Outlet 重要 与router中的children配合，和vue中的viewRouter一样*/}
          <Outlet></Outlet>
        </div>
      </div>
    </LayoutWrapper>
  );
});

export default ManageLayout;
