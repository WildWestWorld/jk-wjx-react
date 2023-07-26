import styled from 'styled-components';

export const QuestEditHeaderStyle = styled.div`
  .header-wrapper {
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
    padding: 12px 0;
  }
  .header {
    display: flex;
    margin: 0 24px;
    height: 100%;

    h1 {
      font-size: 18px;
      margin-bottom: 0;
      line-height: 1;
    }

    .left {
      flex: 1;
    }
    .main1 {
      flex: 1;
      text-align: center;
    }
    .right {
      flex: 1;
      text-align: right;
    }
  }
`;
