import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import { LayoutWrapper } from './MainStyle';
import JKLogo from '@/components/logo/JKLogo';
import JKUserInfo from '@/components/userInfo/JKUserInfo';

const MainLayout = memo(() => {
  return (
    <LayoutWrapper>
      <Layout>
        <Header className="header">
          <div className="left">
            <JKLogo></JKLogo>
          </div>
          <div className="right">
            <JKUserInfo></JKUserInfo>
          </div>
        </Header>
        {/* 不再包一层Layout 样式不生效 */}
        <Layout className="main">
          <Content>
            <Outlet></Outlet>
          </Content>
        </Layout>

        <Footer className="footer">
          问卷星 &copy;2023 - present. Created by JK
        </Footer>
      </Layout>
    </LayoutWrapper>
  );
});

export default MainLayout;
