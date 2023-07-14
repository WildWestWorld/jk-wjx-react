import styled from 'styled-components';
import { rem } from '@/utils/rem';

export const JKTreeDialogWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;

  //act-modal-container
  .act-modal-container {
    background-color: #409eff;
  }

  /* 对话框 */
  /* 外面对话框的大容器 */
  .actModal {
    /* 对话框容器 */
    .ant-modal {
      /* 后面可以在这里改他的动画，可修改 */

      /* 对话框 */
      .ant-modal-content {
        /* 对话框的头部 */
        .ant-modal-header {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          height: ${rem(50)};
          border-radius: ${rem(10)} ${rem(10)} 0px 0px;
          font-size: ${rem(14)};

          background-color: #f5f5f5;
          //设置头部的标题
          .ant-modal-title {
            font-family: '微软雅黑 Bold', '微软雅黑 Regular', 微软雅黑;
            font-weight: bold;
          }
        }
        /* 对话框的内容 */
        .ant-modal-body {
          position: relative;
          padding: 0;
          /* height: ${rem(618)}; */
          height: fit-content;
          .tree-modal-container {
            position: relative;
            padding-top: ${rem(20)};
            height: ${rem(600)};
            width: 100%;
            .tree-modal-wrapper {
              position: relative;
              display: flex;
              flex-direction: row;
              align-items: center;
              height: 100%;
              width: 100%;

                
            }
          }
        }

        /* 对话框的x 按钮框 */
        .ant-modal-close {
          height: ${rem(50)};
          .ant-modal-close-x {
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
