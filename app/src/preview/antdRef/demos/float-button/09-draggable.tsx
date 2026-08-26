/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/float-button.json 의 examples[9] ("draggable")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useDraggable, useSensor, useSensors } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { FloatButton } from 'antd';

interface Position {
  x: number;
  y: number;
}

interface DraggableButtonProps {
  position: Position;
}

const DraggableButton: React.FC<DraggableButtonProps> = (props) => {
  const { position } = props;

  const { attributes, isDragging, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable-float-button',
  });

  const mergedTransform = CSS.Translate.toString({
    x: position.x + (transform?.x ?? 0),
    y: position.y + (transform?.y ?? 0),
    scaleX: transform?.scaleX ?? 1,
    scaleY: transform?.scaleY ?? 1,
  });

  return (
    <FloatButton
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: mergedTransform,
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : undefined,
        touchAction: 'none',
      }}
    />
  );
};

const Demo: React.FC = () => {
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });

  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(sensor);

  const onDragEnd = (event: DragEndEvent) => {
    const { delta } = event;
    setPosition(({ x, y }) => ({ x: x + delta.x, y: y + delta.y }));
  };

  return (
    <DndContext sensors={sensors} onDragEnd={onDragEnd} id="float-button-draggable">
      <DraggableButton position={position} />
    </DndContext>
  );
};

export default Demo;