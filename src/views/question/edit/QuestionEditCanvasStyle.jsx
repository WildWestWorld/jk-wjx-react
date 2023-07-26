import styled from 'styled-components';

export const QuestionEditCanvasStyle = styled.div`
  .canvas {
    min-height: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  .component-wrapper {
    margin: 12px;
    border: 1px solid #fff;
    padding: 12px;
    border-radius: 3px;
    &:hover {
      border-color: #d9d9d9;
    }
  }

  .locked {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .selected {
    border-color: #1890ff !important;
  }
  .component {
    pointer-events: none; // 屏蔽鼠标行为，组件不让被点击到
  }
`;
