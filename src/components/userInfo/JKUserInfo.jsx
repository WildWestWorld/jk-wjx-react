import React, { memo } from 'react';
import { Link } from 'react-router-dom';
const JKUserInfo = memo(() => {
  return (
    <div>
      <Link to="/login" style={{ color: '#1890ff' }}>
        登录
      </Link>
    </div>
  );
});

export default JKUserInfo;
