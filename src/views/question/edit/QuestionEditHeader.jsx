import React, { memo, useEffect, useState } from 'react';
import { QuestEditHeaderStyle } from './QuestEditHeaderStyle';
import { Button, Input, Space, Typography } from 'antd';
import { EditOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionEditHeaderToolbar from './QuestionEditHeaderToolbar';
import useGetComponentInfo from '@/hook/useGetComponentInfo';
import { useDispatch } from 'react-redux';
import { changePageTitle } from '@/store/pageInfo/slice';
import useGetPageInfo from '@/hook/useGetPageInfo';
import { useDebounceEffect, useKeyPress } from 'ahooks';

const { Title } = Typography;

// 显示与修改标题
const TitleElem = () => {
  const { title } = useGetPageInfo();
  const dispatch = useDispatch();

  const [editState, setEditState] = useState(false);

  const handleChange = (e) => {
    const newTitle = e.target.value.trim();
    if (!newTitle) {
      return;
    }
    dispatch(changePageTitle(newTitle));
  };

  if (editState) {
    return (
      <Input
        value={title}
        onPressEnter={() => setEditState(false)}
        onBlur={() => setEditState(false)}
        onChange={(e) => handleChange(e)}
      ></Input>
    );
  }

  return (
    <Space>
      <Title>{title}</Title>
      <Button
        icon={<EditOutlined></EditOutlined>}
        type="text"
        onClick={() => {
          setEditState(true);
        }}
      ></Button>
    </Space>
  );
};

// 保存按钮
const SaveButton = () => {
  const { id } = useParams();
  const { componentList = [] } = useGetComponentInfo();
  const pageInfo = useGetPageInfo();

  const handleSave = () => {
    // 如果没有id
    if (!id) {
      return;
    }
    console.log('保存信息', id, pageInfo);
  };

  //   快捷键(ctrl+s)
  useKeyPress(['ctrl.s', 'meta.s'], (event) => {
    handleSave();
  });

  // 自定保存
  useDebounceEffect(
    () => {
      handleSave();
    },
    [componentList, pageInfo],
    { wait: 1000 }
  );

  return <Button onClick={() => handleSave()}>保存</Button>;
};

const PublishButton = () => {
  const { id } = useParams();
  const { componentList = [] } = useGetComponentInfo();
  const pageInfo = useGetPageInfo();

  const handlePub = () => {
    if (!id) return;
    let isPublished = true;
    console.log(id, { ...pageInfo, componentList, isPublished: isPublished });
  };

  return (
    <Button type="primary" onClick={() => handlePub()}>
      发布
    </Button>
  );
};

const QuestionEditHeader = memo(() => {
  const nav = useNavigate();

  return (
    <QuestEditHeaderStyle>
      <div className="header-wrapper">
        <div className="header">
          <div className="left">
            <Space>
              <Button
                type="link"
                icon={<LeftOutlined></LeftOutlined>}
                onClick={() => {
                  nav(-1);
                }}
              >
                返回
              </Button>
              <TitleElem></TitleElem>
            </Space>
          </div>
          <div className="main1">
            <QuestionEditHeaderToolbar></QuestionEditHeaderToolbar>
          </div>
          <div className="right">
            <Space>
              <SaveButton></SaveButton>
              <PublishButton></PublishButton>
            </Space>
          </div>
        </div>
      </div>
    </QuestEditHeaderStyle>
  );
});

export default QuestionEditHeader;
