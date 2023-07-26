import { Checkbox, Radio, Space } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import React, { memo } from 'react';

const JKQuestionCheckbox = memo((props) => {
  let { text, isVertical, list, value } = props;
  if (!text) {
    text = 'Checked标题';
  }
  if (!list) {
    list = [
      { value: 'item1', text: '选项1', checked: false },
      { value: 'item2', text: '选项2', checked: false },
      { value: 'item3', text: '选项3', checked: false },
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
          {list.map((item) => {
            const { value, text, checked } = item;
            return (
              <Checkbox key={value} value={value} checked={checked}>
                {text}
              </Checkbox>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
});

export default JKQuestionCheckbox;
