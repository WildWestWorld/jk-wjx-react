import styled from 'styled-components';
import { rem } from '@/utils/rem';

export const LayoutWrapper = styled.div`
    .container{
        position: relative;
        display: flex;
        width: 1200px;

        padding: 24px 0;
        margin:0 auto;
    }
    .left{
        width: 120px;
    }
    .right{
        flex: 1;
        margin-left: 60px;
    }
`;
