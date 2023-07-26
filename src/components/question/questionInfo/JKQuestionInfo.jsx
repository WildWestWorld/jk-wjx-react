import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import React, { memo } from 'react';

const JKQuestionInfo = memo((props) => {
  let { title, desc, isCenter } = props;
  if (!desc) {
    desc = '默认desc';
  }
  const descTextList = desc.split('\n');

  console.log('desc', descTextList);

  return (
    <div>
      <Title style={{ fontSize: '24px', textAlign: 'center' }}>
        {title || '默认标题'}
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        {descTextList.map((item, index) => {
          return (
            <span key={index}>
              {index > 0 && <br></br>}
              {item}
            </span>
          );
        })}
      </Paragraph>
    </div>
  );
});

export default JKQuestionInfo;
