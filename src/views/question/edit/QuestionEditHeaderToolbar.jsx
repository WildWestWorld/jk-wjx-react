import useGetComponentInfo from '@/hook/useGetComponentInfo';
import {
  changeComponentHidden,
  copySelectedComponent,
  moveComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
  toggleComponentLocked,
} from '@/store/canvas/slice';
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  RedoOutlined,
  UndoOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { ActionCreators as UndoActionCreators } from 'redux-undo';

const QuestionEditHeaderToolbar = memo(() => {
  const dispatch = useDispatch();
  const { selectId, selectedComponent, copiedComponent, componentList } =
    useGetComponentInfo();
  const { isLocked } = selectedComponent || {};

  const length = componentList.length;
  const selectedIndex = componentList.findIndex(
    (item) => item.fe_id == selectId
  );
  const isFirst = selectedIndex <= 0; //第一个
  const isLast = selectedIndex + 1 >= length; //最后一个

  //   删除
  const handleDelete = () => {
    dispatch(removeSelectedComponent());
  };
  // 隐藏
  const handleHidden = () => {
    dispatch(changeComponentHidden({ fe_id: selectId, isHidden: true }));
  };
  //   锁定
  const handleClocked = () => {
    dispatch(toggleComponentLocked({ fe_id: selectId }));
  };
  //   复制
  const handleCopy = () => {
    dispatch(copySelectedComponent());
  };
  //   粘贴
  const handlePaste = () => {
    dispatch(pasteCopiedComponent());
  };
  //   上移
  const moveUp = () => {
    if (isFirst) {
      return;
    }
    dispatch(
      moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 })
    );
  };

  //   下移
  const moveDown = () => {
    if (isLast) {
      return;
    }
    dispatch(
      moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 })
    );
  };

  // 撤销
  const undo = () => {
    dispatch(UndoActionCreators.undo());
  };

  //   重做
  const redo = () => {
    dispatch(UndoActionCreators.redo());
  };

  return (
    <Space>
      <Tooltip title="删除">
        <Button
          shape="circle"
          icon={<DeleteOutlined></DeleteOutlined>}
          onClick={() => handleDelete()}
        ></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined></EyeInvisibleOutlined>}
          onClick={() => handleHidden()}
        ></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          shape="circle"
          icon={<LockOutlined></LockOutlined>}
          onClick={() => handleClocked()}
          type={isLocked ? 'primary' : 'default'}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button
          shape="circle"
          icon={<CopyOutlined></CopyOutlined>}
          onClick={() => handleCopy()}
        ></Button>
      </Tooltip>

      <Tooltip title="粘贴">
        <Button
          shape="circle"
          icon={<BlockOutlined></BlockOutlined>}
          onClick={() => handlePaste()}
          disabled={copiedComponent == null}
        ></Button>
      </Tooltip>

      <Tooltip title="上移">
        <Button
          shape="circle"
          icon={<UpOutlined></UpOutlined>}
          onClick={() => moveUp()}
          disabled={isFirst}
        ></Button>
      </Tooltip>

      <Tooltip title="下移">
        <Button
          shape="circle"
          icon={<DownOutlined></DownOutlined>}
          onClick={() => moveDown()}
          disabled={isLast}
        ></Button>
      </Tooltip>

      <Tooltip title="撤销">
        <Button
          shape="circle"
          icon={<UndoOutlined></UndoOutlined>}
          onClick={() => undo()}
          disabled={isLast}
        ></Button>
      </Tooltip>

      <Tooltip title="重做">
        <Button
          shape="circle"
          icon={<RedoOutlined></RedoOutlined>}
          onClick={() => redo()}
          disabled={isLast}
        ></Button>
      </Tooltip>
    </Space>
  );
});

export default QuestionEditHeaderToolbar;
