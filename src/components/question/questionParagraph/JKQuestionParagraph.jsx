import Paragraph from 'antd/lib/typography/Paragraph';
import React, { memo } from 'react';

const JKQuestionParagraph = memo((props) => {
  let { text, isCenter } = props;
  if (!text) {
    text = '默认Paragraph';
  }
  //   const textFormat = text.replace(/\n/g, '<br>');
  const textList = text.split('\n');
  console.log('text', text);

  return (
    <Paragraph
      style={{
        textAlign: isCenter || false ? 'center' : 'start',
        marginBottom: '0px',
      }}
    >
      {textList.map((item, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        );
      })}

      {/* <span dangerouslySetInnerHTML={{ __html: textFormat }}></span> */}
    </Paragraph>
  );
});

export default JKQuestionParagraph;
