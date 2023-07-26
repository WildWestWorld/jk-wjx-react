import Title from 'antd/lib/typography/Title';
import { nanoid } from 'nanoid';
import React, { memo, useState } from 'react';
import { LeftPanelLibStyle } from './LeftPanelLibStyle';
import {
  addComponents,
  changeSelectIdState,
  changeComponentTitle,
  toggleComponentLocked,
  changeComponentHidden,
  moveComponent,
} from '@/store/canvas/slice';
import { useDispatch } from 'react-redux';
import useGetComponentInfo from '@/hook/useGetComponentInfo';
import { Button, Input, Space, message } from 'antd';
import { LayersStyle } from './LayersStyle';
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';
import SortableContainer from '@/components/dragSortable/SortableContainer';
import SortableItem from '@/components/dragSortable/SortableItem';

const Layers = memo((props) => {
  const { componentList, selectId } = useGetComponentInfo();
  const dispatch = useDispatch();
  //   记录当前正在修改标题的组件
  const [changingTitleId, setChangingTitleId] = useState('');
  function handleTitleClick(e, fe_id) {
    console.error(e);

    let componentListFormat = JSON.parse(JSON.stringify(componentList));

    const currentComponent = componentListFormat.find((item) => {
      return (item.fe_id = fe_id);
    });

    if (currentComponent && currentComponent.isHidden) {
      message.info('不能选择隐藏的组件');
      return;
    }
    if (fe_id !== selectId) {
      // 执行选中
      dispatch(changeSelectIdState(fe_id));
      setChangingTitleId('');
      return;
    }
    // 点击修改标题
    setChangingTitleId(fe_id);
  }

  //   改变标签
  const changeTitle = (event) => {
    const newTitle = event.target.value.trim();
    console.log(event);
    if (!newTitle) return;
    if (!selectId) return;
    // 改变组件标题名
    dispatch(changeComponentTitle({ fe_id: selectId, title: newTitle }));
  };
  //   切换隐藏/显示
  const changeHidden = (fe_id, isHidden) => {
    dispatch(changeComponentHidden({ fe_id, isHidden }));
  };

  // 切换 锁定/解锁
  const changeLocked = (fe_id) => {
    dispatch(toggleComponentLocked({ fe_id }));
  };

  //   items属性需要每个item有id，而我们的item 的id 字段名叫fe_id
  const componentListWithId = componentList.map((item) => {
    return { ...item, id: item.fe_id };
  });

  const handleDragEnd = (oldIndex, newIndex) => {
    console.log('handleDragEnd', oldIndex, newIndex);
    dispatch(moveComponent({ oldIndex, newIndex }));
  };

  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
      <LayersStyle>
        {componentList.map((item) => {
          const { fe_id, title, isHidden, isLocked } = item;
          return (
            // 一定要添加 id 不然无法进行拖拽
            <SortableItem key={fe_id} id={fe_id}>
              <div className="wrapper">
                <div
                  className={`title ${selectId === fe_id ? 'selected' : ''} `}
                  onClick={(e) => handleTitleClick(e, fe_id)}
                >
                  {/* fe_id 等于改变中的标题id 那么就显示输入框让他输入 */}
                  {fe_id == changingTitleId && (
                    <Input
                      value={title}
                      onChange={(event) => changeTitle(event)}
                      onPressEnter={() => {
                        setChangingTitleId('');
                      }}
                      onBlur={() => {
                        setChangingTitleId('');
                      }}
                    ></Input>
                  )}
                  {/* fe_id不等于改变中的标题的id  就让自然显示标题*/}
                  {fe_id !== changingTitleId && title}
                  {/* {title} */}
                </div>
                <div className="handle">
                  <Space>
                    <Button
                      size="small"
                      className={!isHidden ? 'btn' : ''}
                      icon={<EyeInvisibleOutlined></EyeInvisibleOutlined>}
                      type={isHidden ? 'primary' : 'text'}
                      onClick={() => {
                        changeHidden(fe_id, !isHidden);
                      }}
                    ></Button>
                    <Button
                      size="small"
                      shape="circle"
                      className={!isLocked ? 'btn' : ''}
                      icon={<LockOutlined></LockOutlined>}
                      type={isLocked ? 'primary' : 'text'}
                      onClick={() => {
                        changeLocked(fe_id);
                      }}
                    ></Button>
                  </Space>
                </div>
              </div>
            </SortableItem>
          );
        })}
      </LayersStyle>
    </SortableContainer>
  );
});

export default Layers;
