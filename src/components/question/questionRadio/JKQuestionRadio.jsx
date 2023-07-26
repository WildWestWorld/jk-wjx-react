import { Radio, Space } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { memo } from 'react';

const JKQuestionRadio = memo((props) => {
  let { text, isVertical, options, value } = props;
  if (!text) {
    text = 'Radio标题';
  }
  if (!options) {
    options = [
      { value: 'item1', text: '选项1' },
      { value: 'item2', text: '选项2' },
      { value: 'item3', text: '选项3' },
    ];
  }
  if (!value) {
    value = '';
  }

  if (!isVertical) {
    isVertical = false;
  }

  //   const textFormat = text.replace(/\n/g, '<br>');
  const textList = text.split('\n');
  console.log('text', text);

  return (
    <div>
      <Paragraph strong>{text}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map((item) => {
            const { value, text } = item;
            return (
              <Radio key={value} value={value}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
});

export default JKQuestionRadio;
