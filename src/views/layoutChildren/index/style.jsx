import styled from 'styled-components';
import { rem } from '@/utils/rem';
export const IndexWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};
    /* 工具栏 */
    .utils-container {
      position: relative;
      flex-shrink: 0;
      height: ${rem(150)};
      width: 100%;

      .button-container {
        position: absolute;
        bottom: ${rem(20)};
        width: fit-content;
      }
    }
    /* 表格 */
    /* 放置表格的容器 */
    .table-container {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;

      //设置table
      .ant-table-wrapper {
        position: relative;
        height: 100%;

        /* 设置表格外部的border */
        .ant-table {
          border: ${rem(1)} solid #e9e9e9;

          //设置表头
          //设置表头的背景颜色
          .ant-table-thead {
            background-color: rgb(102, 102, 102);

            //设置字体颜色
            .ant-table-cell {
              font-size: ${rem(14)};
              font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
              font-weight: bold !important;

              color: #666666;
              white-space: nowrap;
            }

            //消除掉table 每个表头里面的border
            //也就是让他变成隐形的
            .ant-table-cell::before {
              background-color: rgba(0, 0, 0, 0) !important;
            }
          }
          //设置表体
          .ant-table-tbody {
            //设置每个表体单元格样式
            .ant-table-cell {
              font-family: '微软雅黑';
              font-weight: 400;
              font-size: ${rem(14)};
              letter-spacing: normal;
              color: #666666;

              //设置表体里面status样式
              /* 设置status的样式 */
              .status-container {
                position: relative;
                display: flex;
                align-items: center;
                /* status左边的状态栏 */
                .status-light {
                  width: ${rem(6)};
                  height: ${rem(6)};
                  background-color: #409eff;
                  border-radius: 50%;
                  margin-right: ${rem(6)};
                }
              }

              //设置表体里面的 按钮样式
              /* 设置按钮的样式 */

              /* 设置活动详情按钮的样 */
              //活动按钮
              .activity-btn {
                color: #409eff;
                background-color: #f0f7ff;
                border: ${rem(1)} solid #7abbff !important;
                border-radius: ${rem(8)};

                white-space: nowrap;
              }
              //编辑按钮
              .edit-btn {
                color: #409eff;
                background-color: #f0f7ff;
                border: ${rem(1)} solid #7abbff !important;
                border-radius: ${rem(8)};
                white-space: nowrap;
              }
              //删除按钮
              .delete-btn {
                color: red !important;
                background-color: #fef3f3;
                border: ${rem(1)} solid red !important;
                border-radius: ${rem(8)};
                white-space: nowrap;
              }
            }
          }
        }
      }
      .zebra-black {
        background-color: #f5f5f5;
      }
    }
  }
`;
