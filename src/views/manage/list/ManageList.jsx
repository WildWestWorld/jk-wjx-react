import React, { memo } from 'react';
import { ManageListWrapper } from './ManageListStyle';
import JKList from '@/components/list/JKList';
const ManageList = memo(() => {
  return (
    <ManageListWrapper>
      <JKList></JKList>
    </ManageListWrapper>
  );
});

export default ManageList;
