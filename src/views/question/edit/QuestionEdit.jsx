import React, { memo } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QuestionEditWrarpper } from './QuestionEditStyle';
import QuestionEditCanvas from './QuestionEditCanvas';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import QuestionEditHeader from './QuestionEditHeader';

const QuestionEdit = memo(() => {
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    console.log(search.get('id'));
  }, []);

  return (
    <QuestionEditWrarpper>
      <QuestionEditHeader></QuestionEditHeader>

      <div className="container">
        <div className="content-wrapper">
          <div className="content">
            <div className="left">
              <LeftPanel></LeftPanel>
            </div>
            <div className="main">
              <div className="canvas-wrapper">
                <QuestionEditCanvas></QuestionEditCanvas>
              </div>
            </div>
            <div className="right">
              <RightPanel></RightPanel>
            </div>
          </div>
        </div>
      </div>
    </QuestionEditWrarpper>
  );
});

export default QuestionEdit;
