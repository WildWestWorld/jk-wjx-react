import React, { memo } from 'react';
import QuestionCard from '../question/questionCard/QuestionCard';
import { useState } from 'react';
import produce from 'immer';
import useMouse from '@/hook/useMouse';
import { JKListWrapper } from './ListStyle';
import { useTitle } from 'ahooks';
import { Empty, Typography } from 'antd';
import JKListSearch from '../listSearch/JKListSearch';

const JKList = memo(() => {
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
      isStar: false,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: false,
      isStar: false,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
    {
      id: 'q4',
      title: '问卷4',
      isPublished: false,
      isStar: false,
      answerCount: 5,
      createAt: '3月10日 13:23',
    },
  ]);

  //   const edit = (id) => {
  //     console.log(id);
  //   };

  //   const add = () => {
  //     const randomNum = Math.random().toString().slice(-3);
  //     setQuestionList(
  //       questionList.concat({
  //         id: 'q' + randomNum,
  //         title: '问卷' + randomNum,
  //         isPublished: false,
  //       })
  //     );
  //   };
  const add = () => {
    const randomNum = Math.random().toString().slice(-3);
    setQuestionList(
      produce((value) => {
        value.push({
          id: 'q' + randomNum,
          title: '问卷' + randomNum,
          isPublished: false,
        });
      })
    );
  };

  //   const deleteQuestion = (id) => {
  //     // 不可变数据
  //     setQuestionList(
  //       questionList.filter((item) => {
  //         if (item.id === id) return false;
  //         else return true;
  //       })
  //     );
  //   };
  const deleteQuestion = (id) => {
    // 不可变数据
    setQuestionList(
      produce((value) => {
        const index = value.findIndex((item) => item.id === id);
        value.splice(index, 1);
      })
    );
  };

  const publishQuestion = (id) => {
    setQuestionList(
      produce((value) => {
        const item = value.find((item) => {
          return item.id == id;
        });
        if (item) {
          item.isPublished = true;
        }
      })
    );
  };

  //   HOOK
  const { x, y } = useMouse();
  useTitle('问卷星 - 我的问卷');

  return (
    <div>
      {/* <h1>
        问卷列表页{x},{y}
      </h1>
      <div>
        {questionList.map((item) => {
          //   const { id, title, isPublished } = item;
          return (
            <QuestionCard
              key={item.id}
              item={item}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            ></QuestionCard>
          );
        })}
      </div>

  
      <div>
        <button onClick={() => add()}>新增问卷</button>
      </div> */}
      <JKListWrapper>
        <div className="header">
          <div className="left">
            <Title level={3}>我的问卷</Title>
          </div>
          <div className="right">
            <JKListSearch></JKListSearch>
          </div>
        </div>
        <div className="content" style={{ background: '#f1f1f1' }}>
          {questionList.length === 0 && <Empty description="暂无数据"></Empty>}

          {questionList.map((item) => {
            return <QuestionCard item={item} key={item.id}></QuestionCard>;
          })}
        </div>
        <div className="footer">Loading</div>
      </JKListWrapper>
    </div>
  );
});

export default JKList;
