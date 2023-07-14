import styled from 'styled-components';
import { rem } from '@/utils/rem';

export const LayoutWrapper = styled.div`
  /* 切换侧边栏按钮的样式 */
  #components-layout-demo-custom-trigger {
    .trigger {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 ${rem(24)};
      font-size: ${rem(18)};
      line-height: ${rem(64)};
      cursor: pointer;
      transition: color 0.3s;
    }
    .trigger:hover {
      color: #1890ff;
    }

    /* 侧边栏顶部的图片按钮 */
    .logo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: ${rem(20)};
      margin-bottom: ${rem(20)};

      /* height: ${rem(32)};
      margin: ${rem(16)};
      background: rgba(255, 255, 255, 0.3); */
      .img-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        height: ${rem(60)};
        width: ${rem(60)};
        background-color: #1891ff;

        border-radius: ${rem(10)};

        img {
          /* display: block; */
          /* height: 100%; */
          width: 75%;
        }
      }
    }
    /* 顶部标题 */
    .title {
      color: white;
      font-size: ${rem(20)};
      text-align: center;
      font-weight: bold;
      margin-bottom: ${rem(20)};
      white-space: nowrap;
    }

    .ant-layout-sider {
      /* background: #fff; */
    }
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  ////设置侧边栏(上面的都是历史遗留问题，以后可以优化)
  //侧边栏最外层的部分
  .ant-layout-sider {
    background: rgba(51, 55, 68, 1);
    box-sizing: content-box;
    //侧边栏内的总的菜单栏，我们现在设置他的背景颜色
    .ant-menu {
      background: rgba(51, 55, 68, 1);
      border-right: ${rem(2)};
      //侧边栏的单个选项
      .ant-menu-item {
        box-sizing: border-box;

        position: relative;

        display: flex;
        align-items: center;

        height: ${rem(50)};
        font-weight: 400;
        font-style: normal;
        color: #cccccc;
        font-size: ${rem(14)};
        //侧边栏内部的icon 的大小
        .ant-menu-item-icon {
          font-size: ${rem(20)};
        }
      }
      //侧边栏 鼠标移动到上面时的样式
      .ant-menu-item:hover {
        background-color: rgba(0, 0, 0, 0.498039215686275);
      }

      //设置侧边栏被选中时的样式
      .ant-menu-item-selected {
        background-color: rgba(0, 0, 0, 0.498039215686275);
        width: 100%;
      }
    }
  }

  ////设置header的样式
  .ant-layout-header {
    position: relative;

    display: flex;
    justify-content: space-between;
    background-color: #1890ff;
    height: ${rem(50)};

    /* 用户信息栏 */
    .info-container {
      position: relative;
      display: flex;
      width: ${rem(120)};
      height: 100%;

      margin-right: ${rem(100)};

      .avatar-container {
        position: relative;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: ${rem(50)};

        justify-content: center;
        align-items: center;

        .ant-avatar-circle {
          /* height: ${rem(60)} !important; */
          height: ${rem(28)};
          width: ${rem(28)};
          font-size: ${rem(20)}!important;
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .name-container {
        position: relative;
        display: flex;
        height: 100%;

        justify-items: center;
        align-items: center;
        color: #999999;

        .name {
          position: relative;
          display: flex;
          align-items: center;
          white-space: nowrap;

          font-size: ${rem(12)} !important ;
        }
      }
      .name-container::after {
        content: '>';
        transform: rotate(90deg) scaleY(2);
        margin-left: ${rem(10)};
        font-size: ${rem(12)};
      }
    }
    //鼠标放到 用户状态栏盒子时的样式
    .info-container:hover {
      background-color: #f9f9f9;
    }
  }

  /* 头部 页面的放面包屑的容器 */
  .ant-page-header {
    position: relative;
    display: flex;

    align-items: center;

    height: ${rem(51)} !important;
    background-color: white !important;
    padding: 0;
    border-top: ${rem(1)} solid #e9e9e9;

    /* 装头部内容的容器 */
    .ant-page-header-content {
      position: relative;
      display: flex;
      flex-direction: row;

      align-items: center;

      padding-top: 0;
      margin-left: ${rem(20)};
      height: 100%;

      /* 回家图标 */
      .anticon {
        margin-right: ${rem(5)};
        color: #999999;
        font-size: ${rem(16)};
      }
    }
  }

  //内容区域
  //内容区域的主容器
  .content-container {
    border-radius: ${rem(20)};
    background-color: white;
    margin: ${rem(24)} ${rem(16)};

    position: relative;
    display: flex;
    flex-direction: column;

    /* 重要，让页面多出的部分可以滚动 */
    /* overflow: auto; */

    //内容区域头部的标题
    .header-container {
      position: relative;
      display: flex;

      flex-shrink: 0;

      align-items: center;
      height: ${rem(60)};
      width: 100%;
      border-top-left-radius: ${rem(20)};
      border-top-right-radius: ${rem(20)};
      background-color: #f9f9f9;

      .title-container {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: ${rem(17)};

        font-size: ${rem(16)};
        color: rgb(102, 102, 102);
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', 微软雅黑;

        font-weight: 700;
      }
    }
  }
`;
