import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutWrapper } from './ManageStyle';
const ManageLayout = memo(() => {
  return (
    <LayoutWrapper>
      <div className="container">
        <div className="left">
          <p>ManageLayout left</p>
          <button>创建问卷</button>
          <br />
          <a>我的问卷</a>
          <br />
          <a>星标问卷</a>
          <br />
          <a>回收站</a>
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
