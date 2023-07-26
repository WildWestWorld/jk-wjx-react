import React, { memo } from 'react';
import { useTitle } from 'ahooks';
import { Table, Typography, Tag, Space, Button } from 'antd';
import { useState } from 'react';
import QuestionCard from '@/components/question/questionCard/QuestionCard';
import { ManageTrashWrapper } from './ManageTrashStyle';

const ManageTrash = memo(() => {
  const { Title } = Typography;

  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (value) => {
        return value ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>;
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ];
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
  //   记录选中的id
  const [selectedIds, setSelectedIds] = useState([]);

  // Hook
  useTitle('问卷星 - 回收站');

  //   Component
  const TableEle = (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button>删除</Button>
        </Space>
      </div>

      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={(item) => item.id}
        //   改变表格的模式为多选模式
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            console.log('selectedRowKeys:' + selectedRowKeys);
            setSelectedIds(selectedRowKeys);
          },
        }}
      ></Table>
    </div>
  );

  return (
    <ManageTrashWrapper>
      <div style={{ marginTop: '16px' }}>
        <div className="header">
          <div className="left">
            <Title level={3}>回收站</Title>
          </div>
          <div className="right">(搜索)</div>
        </div>
        <div className="content">
          {/* 整合过的表格 */}
          {TableEle}
        </div>
        <div className="footer">分页</div>
      </div>
    </ManageTrashWrapper>
  );
});

export default ManageTrash;
