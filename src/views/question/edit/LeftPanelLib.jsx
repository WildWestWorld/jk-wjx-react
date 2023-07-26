import Title from 'antd/lib/typography/Title';
import { nanoid } from 'nanoid';
import React, { memo } from 'react';
import { LeftPanelLibStyle } from './LeftPanelLibStyle';
import { addComponents } from '@/store/canvas/slice';
import { useDispatch } from 'react-redux';

const LeftPanelLib = memo((props) => {
  const { componentLibList } = props;
  console.log(componentLibList);

  const dispatch = useDispatch();

  const genComponents = (item) => {
    const { Component, title, type, defaultProps } = item;
    // console.error(Component);

    const handleClick = () => {
      // 在这里调用 nanoid() 生成唯一的 ID
      const id = nanoid();

      dispatch(
        addComponents({
          fe_id: id,
          title: title,
          type: type,
          props: defaultProps,
        })
      );
    };

    return (
      <LeftPanelLibStyle>
        <div className="wrapper" onClick={() => handleClick()}>
          <div className="component">
            <Component></Component>
          </div>
        </div>
      </LeftPanelLibStyle>
    );
  };

  return (
    <div>
      {componentLibList.map((item, index) => {
        const { components } = item;
        return (
          <div key={item.groupId}>
            <Title
              level={3}
              style={{
                fontSize: '16px',
                marginTop: index > 0 ? '20px' : '0px',
              }}
            >
              {item.groupName}
            </Title>

            <div>
              {components.map((itema, indexa) => (
                <div key={indexa}> {genComponents(itema)}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default LeftPanelLib;
