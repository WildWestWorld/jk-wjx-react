import { Input, Modal, Form } from 'antd';
import React, { memo, useRef, useState } from 'react';
import { JKTreeDialogWrapper } from './style';
const JKTreeDiaglog = memo(() => {
  const [isShowTreeDiaglog, setIsShowTreeDiaglog] = useState(false);

  // 方法区
  const forceTreeInput = () => {
    console.log('force');
    setIsShowTreeDiaglog(true);
  };

  const clickCancel = () => {
    setIsShowTreeDiaglog(false);
  };

  //Hook区
  const treeSelectRef = useRef();

  return (
    <JKTreeDialogWrapper>
      <div className="tree-select-container" ref={treeSelectRef}>
        <Input onClick={forceTreeInput}></Input>
        {/* 用于新建活动的对话框 */}
        <div className="act-modal-container">
          {/* 新建活动的对话框 */}
          <Modal
            title={'选择商户'}
            //   okText={modalTitle}
            open={isShowTreeDiaglog}
            //确定时触发的事件
            //   onOk={currentID.length == 0 ? clickAddConfirm : clickEditConfirm}
            onCancel={clickCancel}
            wrapClassName={'actModal'}
            //设置默认挂载的Dom 否则他会在根dom下进行渲染
            getContainer={treeSelectRef.current}
          >
            <div className="tree-modal-container">
              <div className="tree-modal-wrapper">
                <div className="left-type-container">1</div>
                <div className="right-select-container">1</div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </JKTreeDialogWrapper>
  );
});

export default JKTreeDiaglog;
