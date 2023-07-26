import styled from 'styled-components';

export const QuestionEditWrarpper = styled.div`
  .container {
    height: 100vh;
    background-color: #f0f2f5;
    display: flex;
    flex-direction: column;
  }
  .content-wrapper {
    flex: auto;
    padding: 12px 0;
  }
  .content {
    margin: 0 24px;
    display: flex;
    height: 100%;
    .left {
      width: 285px;
      background-color: #fff;
      padding: 0 12px;
    }
    .main {
      flex: 1;
      position: relative;
      .canvas-wrapper {
        position: absolute;
        width: 400px;
        height: 712px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: #fff;
        overflow: auto;
        box-shadow: 0 2px 10px #0000001f;
      }
    }

    .right {
      width: 300px;
      background-color: #fff;
      padding: 0 12px;
    }
  }
`;
