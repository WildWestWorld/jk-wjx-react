import { Typography } from 'antd';
import React, { memo } from 'react';

const { Title } = Typography;

const JKQuestionTitle = memo((props) => {
  const {
    level = 3,
    isCenter = false,
    marginBottom = 0,
    text = '默认标题',
  } = props;

  console.log(props);
  const genFontSize = (level) => {
    if (level === 1) return '24px';
    if (level === 2) return '20px';
    if (level === 3) return '16px';
    return '16px';
  };

  return (
    <div>
      <Title
        level={props.level || 3}
        style={{
          textAlign: props.isCenter ? 'center' : 'start',
          marginBottom: '0',
          fontSize: genFontSize(props.level),
        }}
      >
        {props.text || '默认标题'}
      </Title>
    </div>
  );
});

export default JKQuestionTitle;
