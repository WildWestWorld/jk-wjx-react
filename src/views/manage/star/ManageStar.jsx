import React, { memo } from 'react';
import { useTitle } from 'ahooks';
import { Typography } from 'antd';
import { useState } from 'react';
import QuestionCard from '@/components/question/questionCard/QuestionCard';
import { ManageStarWrapper } from './ManageStarStyle';

const ManageStar = memo(() => {
  const { Title } = Typography;
  const [questionList, setQuestionList] = useState([
    {
      id: 'q1',
      title: '问卷1',
      isPublished: true,
      isStar: true,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
    {
      id: 'q2',
      title: '问卷2',
      isPublished: false,
      isStar: true,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: false,
      isStar: true,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
    {
      id: 'q4',
      title: '问卷4',
      isPublished: false,
      isStar: true,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
  ]);

  // Hook
  useTitle('问卷星 - 星标问卷');

  return (
    <ManageStarWrapper>
      <div className="header">
        <div className="left">
          <Title level={3}>星标问卷</Title>
        </div>
        <div className="right">(搜索)</div>
      </div>

      <div className="content">
        {questionList.length === 0 && <Empty description="暂无数据"></Empty>}
        {questionList.map((item) => {
          return <QuestionCard item={item} key={item.id}></QuestionCard>;
        })}
      </div>
      <div className="footer">分页</div>
    </ManageStarWrapper>
  );
});

export default ManageStar;
