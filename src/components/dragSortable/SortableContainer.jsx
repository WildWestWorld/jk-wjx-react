import React, { memo } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const SortableContainer = memo((props) => {
  const { children, items, onDragEnd } = props;
  //   sensors 用于鼠标检测，移动8px就会触发拖拽
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8, // 8px
      },
    })
  );

  //   处理拖拽结束
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over == null) return

    if (active.id !== over.id) {
      const oldIndex = items.findIndex(c => c.fe_id === active.id)
      const newIndex = items.findIndex(c => c.fe_id === over.id)
      onDragEnd(oldIndex, newIndex)
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
});

export default SortableContainer;
