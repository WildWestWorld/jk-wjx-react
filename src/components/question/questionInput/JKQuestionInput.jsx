import { Input, Typography } from 'antd';
import React, { memo } from 'react';

const { Paragraph } = Typography;

const JKQuestionInput = memo((props) => {
  console.warn(props);
  const {text='默认输入框标题',placeholder="默认输入框placeHolader"}  = props
  return (
    <div>
      <Paragraph>{props.text || '默认输入框标题'}</Paragraph>
      <div>
        <Input
          placeholder={props.placeholder || '默认输入框placeholder'}
        ></Input>
      </div>
    </div>
  );
});

export default JKQuestionInput;
