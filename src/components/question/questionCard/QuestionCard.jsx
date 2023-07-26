import React, { memo } from 'react';
import { CardWrapper } from './CardStyle';
import { Button, Divider, Space, Tag, Popconfirm, Modal, message } from 'antd';
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
const QuestionCard = memo((props) => {
  // Hook
  const nav = useNavigate();

  // 方法区
  const duplicate = () => {
    message.info('执行复制');
  };

  const openDeleteDialog = () => {
    Modal.confirm({
      title: '确定删除该问卷?',
      icon: <ExclamationCircleOutlined></ExclamationCircleOutlined>,
      onOk: () => message.success('删除成功'),
    });
  };

  return (
    // <div key={props.item.id} className="list-item">
    //   <strong>{props.item.title}</strong>
    //   {/* &nbsp;  换行符*/}
    //   &nbsp;
    //   {/* 条件判断 */}
    //   {props.item.isPublished ? (
    //     <span style={{ color: 'green' }}>已发布</span>
    //   ) : (
    //     <span>未发布</span>
    //   )}
    //   &nbsp;
    //   <button
    //     onClick={() => {
    //       props.publishQuestion(props.item.id);
    //     }}
    //   >
    //     发布问卷
    //   </button>
    //   &nbsp;
    //   <button
    //     onClick={() => {
    //       props.deleteQuestion(props.item.id);
    //     }}
    //   >
    //     删除问卷
    //   </button>
    // </div>
    <CardWrapper>
      <div className="container">
        <div className="title">
          <div className="left">
            {/* 如果发布了点击标题就去的是统计页面，没发布就去编辑页面 */}
            <Link
              to={
                props.item.isPublished
                  ? `/question/statistic/${props.item.id}`
                  : `/question/edit/${props.item.id}`
              }
            >
              <Space>
                {props.item.isStar && (
                  <StarOutlined style={{ color: 'red' }}></StarOutlined>
                )}
                {props.item.title}
              </Space>
            </Link>
          </div>
          <div className="right">
            {props.item.isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            &nbsp;
            <span>答卷:{props.item.answerCount}</span>
            &nbsp;
            <span>{props.item.createAt}</span>
          </div>
        </div>

        <Divider style={{ margin: '12px 0' }}></Divider>

        <div className="button-container">
          <div className="left">
            <Space>
              <Button
                icon={<EditOutlined></EditOutlined>}
                type="text"
                size="small"
                onClick={() => {
                  nav(`/question/edit/${props.item.id}`);
                }}
              >
                编辑问卷
              </Button>
              <Button
                icon={<LineChartOutlined></LineChartOutlined>}
                type="text"
                size="small"
                onClick={() => {
                  nav(`/question/statistic/${props.item.id}`);
                }}
                disabled={!props.item.isPublished}
              >
                问卷统计
              </Button>
            </Space>
          </div>
          <div className="right">
            {/* <button>标星</button>
            <button>复制</button>
            <button>删除</button> */}

            <Space>
              <Button
                type="text"
                size="small"
                icon={<StarOutlined></StarOutlined>}
              >
                {props.item.isStar ? '取消标星' : '标星'}
              </Button>
              <Popconfirm
                title="是否复制该问卷"
                okText="确定"
                cancelText="取消"
                onConfirm={duplicate}
              >
                <Button
                  type="text"
                  size="small"
                  icon={<CopyOutlined></CopyOutlined>}
                >
                  复制
                </Button>
              </Popconfirm>
              <Button
                type="text"
                size="small"
                icon={<DeleteOutlined></DeleteOutlined>}
                onClick={() => {
                  openDeleteDialog();
                }}
              >
                删除
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
});

export default QuestionCard;
