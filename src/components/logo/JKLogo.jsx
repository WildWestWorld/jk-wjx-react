import { FormOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { memo } from 'react';
import { JKLogoStyle } from './LogoStyle';
import { Link } from 'react-router-dom';
const JKLogo = memo(() => {
  return (
    <JKLogoStyle>
      <div className="container">
        <Link to="/">
          <Space>
            <Title>
              <FormOutlined></FormOutlined>
            </Title>
            <Title>问卷星</Title>
          </Space>
        </Link>
      </div>
    </JKLogoStyle>
  );
});

export default JKLogo;
