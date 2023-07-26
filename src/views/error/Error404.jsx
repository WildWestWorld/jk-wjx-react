import { Button, Result } from 'antd';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const error404 = memo(() => {
  // HOOK
  const nav = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，抱歉您访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => nav('/home')}>
          回到首页
        </Button>
      }
    ></Result>
  );
});

export default error404;
