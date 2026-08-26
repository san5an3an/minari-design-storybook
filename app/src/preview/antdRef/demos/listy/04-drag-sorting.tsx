/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/listy.json 의 examples[4] ("Drag sorting")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { HolderOutlined } from '../_icons';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, Flex, Listy } from 'antd';

interface Item {
  id: number;
  content: string;
}

const items = Array.from<any, Item>({ length: 20 }, (_, index) => ({
  id: index,
  content: `항목 ${index}`,
}));

const SortableItem: React.FC<Readonly<Item>> = (props) => {
  const { id, content } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 1 } : {}),
  };

  return (
    <Flex ref={setNodeRef} style={style} align="center" gap="small">
      <Button
        type="text"
        size="small"
        icon={<HolderOutlined />}
        style={{ cursor: 'move' }}
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
      />
      {content}
    </Flex>
  );
};

const Demo: React.FC = () => {
  const [data, setData] = useState<Item[]>(items);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 1 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) {
      return;
    }
    setData((prev) => {
      const activeIndex = prev.findIndex((item) => item.id === active.id);
      const overIndex = prev.findIndex((item) => item.id === over.id);
      return arrayMove(prev, activeIndex, overIndex);
    });
  };

  return (
    <DndContext
      id="listy-drag-sorting"
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={data.map((item) => item.id)} strategy={verticalListSortingStrategy}>
        <Listy<Item>
          items={data}
          height={400}
          rowKey="id"
          itemRender={(item) => <SortableItem {...item} />}
        />
      </SortableContext>
    </DndContext>
  );
};

export default Demo;