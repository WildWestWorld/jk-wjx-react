import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  .header {
    padding: 0 24px;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
  .main {
    min-height: calc(100vh - 64px - 71px);
  }
  .footer {
    text-align: center;
    background-color: #f7f7f7;
    border-top: 1px solid #e8e8e8;
  }
`;
