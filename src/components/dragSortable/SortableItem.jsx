import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { memo } from 'react';

const SortableItem = memo(({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    //   关键:根据id进行拖拽
  useSortable({ id });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
});

export default SortableItem;
