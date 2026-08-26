/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tag.json 의 examples[7] ("Draggable Tag")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Flex, Tag } from 'antd';

interface Item {
  id: number;
  text: string;
}

interface DraggableTagProps {
  tag: Item;
}

const commonStyle: React.CSSProperties = {
  cursor: 'move',
  transition: 'unset', // Prevent element from shaking after drag
};

const DraggableTag: React.FC<DraggableTagProps> = (props) => {
  const { tag } = props;
  const { listeners, transform, transition, isDragging, setNodeRef } = useSortable({ id: tag.id });

  const style = transform
    ? {
        ...commonStyle,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isDragging ? 'unset' : transition, // Improve performance/visual effect when dragging
      }
    : commonStyle;

  return (
    <Tag style={style} ref={setNodeRef} {...listeners}>
      {tag.text}
    </Tag>
  );
};

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: '태그 1' },
    { id: 2, text: '태그 2' },
    { id: 3, text: '태그 3' },
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      setItems((data) => {
        const oldIndex = data.findIndex((item) => item.id === active.id);
        const newIndex = data.findIndex((item) => item.id === over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <Flex gap="small" align="center" wrap>
          {items.map<React.ReactNode>((item) => (
            <DraggableTag tag={item} key={item.id} />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
};

export default App;