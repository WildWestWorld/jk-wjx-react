import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .container {
    height: calc(100vh - 64px - 65px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); */
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  }
  .info {
    text-align: center;
    button {
      height: 60px;
      font-size: 24px;
    }
  }
`;
