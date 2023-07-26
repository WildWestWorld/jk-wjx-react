import styled from 'styled-components';

export const LayersStyle = styled.div`
  .wrapper {
    padding: 6px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;

    .title {
      flex: auto;
      line-height: 2;
    }

    .selected {
      color: #1890ff;
    }

    .handler {
      width: 50px;
      text-align: end;

      .btn {
        opacity: 0.2;
      }
    }

    &:hover {
      .handler {
        .btn {
          opacity: 1;
        }
      }
    }
  }
`;
