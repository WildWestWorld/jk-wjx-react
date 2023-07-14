import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = memo(() => {
  return (
    <div>
      <div>MainLayout Header</div>
        <div>
            <Outlet></Outlet>
        </div>
      <div>MainLayout Footer</div>
    </div>
  );
});

export default MainLayout;
