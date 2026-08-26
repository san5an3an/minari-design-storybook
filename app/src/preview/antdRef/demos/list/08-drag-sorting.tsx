import React, { useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { List } from 'antd';
import type { GetProps } from 'antd';

const SortableListItem: React.FC<GetProps<typeof List.Item> & { itemKey: number }> = (props) => {
  const { itemKey, style, children, ...rest } = props;

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: itemKey,
  });

  const listStyle: React.CSSProperties = {
    ...style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'move',
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <List.Item {...rest} ref={setNodeRef} style={listStyle}>
      <div {...attributes} {...listeners}>
        {children}
      </div>
    </List.Item>
  );
};

const App: React.FC = () => {
  const [data, setData] = useState([
    { key: 1, content: '경주차가 불붙은 연료를 관중에게 뿌렸어요.' },
    { key: 2, content: '일본 공주가 평민과 결혼해요.' },
    { key: 3, content: '호주에서 사고 뒤 100km 를 걸어 나왔어요.' },
    { key: 4, content: '결혼식에서 사라진 아이 사건으로 남성이 기소됐어요.' },
    { key: 5, content: '로스앤젤레스가 큰 산불과 싸워요.' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
        distance: 1,
      },
    }),
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!active || !over) {
      return;
    }
    if (active.id !== over.id) {
      setData((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={onDragEnd}
      id="list-drag-sorting"
    >
      <SortableContext items={data.map((item) => item.key)} strategy={verticalListSortingStrategy}>
        <List
          dataSource={data}
          renderItem={(item) => (
            <SortableListItem key={item.key} itemKey={item.key}>
              {item.key} {item.content}
            </SortableListItem>
          )}
        />
      </SortableContext>
    </DndContext>
  );
};

export default App;