import React, { useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, List } from 'antd';
import type { GetProps } from 'antd';

const SortableListItem: React.FC<GetProps<typeof List.Item> & { itemKey: number }> = (props) => {
  const { itemKey, style, ...rest } = props;

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

  return <List.Item {...rest} ref={setNodeRef} style={listStyle} {...attributes} {...listeners} />;
};

const App: React.FC = () => {
  const [data, setData] = useState([
    { key: 1, title: '제목 1' },
    { key: 2, title: '제목 2' },
    { key: 3, title: '제목 3' },
    { key: 4, title: '제목 4' },
    { key: 5, title: '제목 5' },
    { key: 6, title: '제목 6' },
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
    <DndContext sensors={sensors} onDragEnd={onDragEnd} id="list-grid-drag-sorting">
      <SortableContext items={data.map((item) => item.key)}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <SortableListItem key={item.key} itemKey={item.key}>
              <Card title={item.title}>카드 내용</Card>
            </SortableListItem>
          )}
        />
      </SortableContext>
    </DndContext>
  );
};

export default App;