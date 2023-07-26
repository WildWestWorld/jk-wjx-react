import { Input, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { memo } from 'react';

const { Paragraph } = Typography;

const JKQuestionTextarea = memo((props) => {
  console.warn(props);
  const { text = '默认输入框标题', placeholder = '默认输入框placeHolader' } =
    props;
  return (
    <div>
      <Paragraph>{props.text || '默认输入框标题'}</Paragraph>
      <div>
        <TextArea
          placeholder={props.placeholder || '默认输入框TextArea'}
        ></TextArea>
      </div>
    </div>
  );
});

export default JKQuestionTextarea;
