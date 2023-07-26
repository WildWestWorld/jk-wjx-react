import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const QuestionLayout = memo(() => {
  return (
    <div>
      {/* <p>QuestionLayout</p> */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
});

export default QuestionLayout;
