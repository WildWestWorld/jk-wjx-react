import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigateToPage } from '@/utils/routerUtils';
import { useEffect } from 'react';
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';
import { Button } from 'antd';
import { HomeWrapper } from './HomeStyle';

const Home = memo(() => {
  const JKNav = (path) => {
    navigate(path);
    // navigate({ pathname: path, search: 'b=21' });
  };

  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <div className="container">
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已积累创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => {
              JKNav('/manage/list');
            }}
          >
            开始使用
          </Button>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
