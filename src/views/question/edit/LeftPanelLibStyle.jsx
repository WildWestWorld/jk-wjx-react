import styled from 'styled-components';

export const LeftPanelLibStyle = styled.div`
  .wrapper {
    margin-bottom: 12px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #fff;
    padding: 12px;
    border-radius: 3px;
    &:hover {
      border-color: #d9d9d9;
    }
  }
  .component{
    pointer-events: none;
  }
`;
