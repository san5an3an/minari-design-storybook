// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[16] ("Drag sorting")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useContext, useMemo } from 'react';
import { HolderOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import type { DragEndEvent, DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, Form, Input, Space } from 'antd';

const onFinish = (values: any) => {
  console.log('폼에서 받은 값:', values);
};

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: DraggableSyntheticListeners;
  attributes?: DraggableAttributes;
}

const RowContext = React.createContext<RowContextProps>({});

const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners, attributes } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: 'move' }}
      ref={setActivatorNodeRef}
      {...attributes}
      {...listeners}
    />
  );
};

interface SortableItemProps {
  id: number;
  children?: React.ReactNode;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const {
    setNodeRef,
    setActivatorNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners, attributes }),
    [setActivatorNodeRef, listeners, attributes],
  );

  return (
    <RowContext.Provider value={contextValue}>
      <div ref={setNodeRef} style={style}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

const App: React.FC = () => {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 1 } }));

  return (
    <Form
      name="dynamic_form_draggable_item"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.List name="users">
        {(fields, { add, remove, move }) => {
          const onDragEnd = ({ active, over }: DragEndEvent) => {
            if (over && active.id !== over.id) {
              const activeIndex = fields.findIndex((field) => field.key === active.id);
              const overIndex = fields.findIndex((field) => field.key === over.id);
              if (activeIndex !== -1 && overIndex !== -1) {
                move(activeIndex, overIndex);
              }
            }
          };

          return (
            <DndContext
              sensors={sensors}
              modifiers={[restrictToVerticalAxis]}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={fields.map((field) => field.key)}
                strategy={verticalListSortingStrategy}
              >
                {fields.map(({ key, name, ...restField }) => (
                  <SortableItem key={key} id={key}>
                    <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <DragHandle />
                      <Form.Item
                        {...restField}
                        name={[name, '첫째']}
                        rules={[{ required: true, message: '이름이 없어요' }]}
                      >
                        <Input placeholder="이름(성 빼고)" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'last']}
                        rules={[{ required: true, message: '성이 없어요' }]}
                      >
                        <Input placeholder="성" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  </SortableItem>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    항목 추가
                  </Button>
                </Form.Item>
              </SortableContext>
            </DndContext>
          );
        }}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          보내기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;