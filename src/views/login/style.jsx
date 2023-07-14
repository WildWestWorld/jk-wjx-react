import { rem } from '@/utils/rem';
import styled from 'styled-components';

export const LoginWrarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* 标题 */
  h1 {
    margin-bottom: ${rem(20)};
  }

  //设置表单Form的容器
  .ant-form {
    position: relative;

    //设置表单里面每个容器的样式
    .ant-form-item {
      margin-bottom: ${rem(30)} !important;
    }
  }
`;
