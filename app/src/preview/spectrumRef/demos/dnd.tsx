// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/dnd/dnd.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { DIRECTORY_DRAG_TYPE } from "@adobe/react-spectrum";
import type {FileDropItem, DirectoryDropItem} from '@react-spectrum/dnd';

function DroppableListLowLevelAPI() {
  let list = useListData({
    initialItems: [
      {id: 1, name: 'Images', contains: 0, accept: ['image/png', 'image/jpeg']},
      {id: 2, name: 'Videos', contains: 0, accept: ['video/mp4']},
      {id: 3, name: 'Documents', contains: 0, accept: ['text/plain', 'application/pdf']}
    ]
  });

  let {dragAndDropHooks} = useDragAndDrop({
    onDrop: async (e) => {
      let items = await Promise.all(
        e.items
          .filter((item) => {
            // Check if dropped item is accepted.
            if (item.kind === 'file' && e.target.type === 'item' && e.target.dropPosition === 'on') {
              let folder = list.getItem(e.target.key);
              return folder.accept.includes(item.type);
            }

            return item.kind === 'directory';
          })
          .map(async (item: FileDropItem | DirectoryDropItem) => {
            // Collect child count from dropped directories.
            let contains = 0;
            let accept;
            if (item.kind === 'directory') {
              for await (let _ of item.getEntries()) {
                contains++;
                accept = [];
              }
            }

            return {
              id: Math.random(),
              name: item.name,
              contains,
              accept
            };
          })
      );

      // Update item count if dropping on an item, otherwise insert the new items in the list.
      if (e.target.type === 'item') {
        if (e.target.dropPosition === 'on') {
          let item = list.getItem(e.target.key);
          list.update(e.target.key, {
            ...item,
            contains: item.contains + items.length
          });
        } else if (e.target.dropPosition === 'before') {
          list.insertBefore(e.target.key, ...items);
        } else if (e.target.dropPosition === 'after') {
          list.insertAfter(e.target.key, ...items);
        }
      } else {
        // If dropping on the root, append the directory to the bottom of the list
        list.append(...items);
      }
    },
    getDropOperation: (target, types, allowedOperations) => {
      // When dropping on an item, check whether the item accepts the drag types and cancel if not.
      if (target.type === 'item' && target.dropPosition === 'on') {
        let item = list.getItem(target.key);
        return item.accept && item.accept.some((type) => types.has(type))
          ? allowedOperations[0]
          : 'cancel';
      }

      // If dropping a directory between items, support a copy operation.
      return types.has(DIRECTORY_DRAG_TYPE) ? 'copy' : 'cancel';
    }
  });

  return (
    <ListView
      aria-label="Low-level api droppable list view example"
      width="size-3600"
      height="size-3600"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}>
      {item => (
        <Item textValue={item.name} hasChildItems>
          <Folder />
          <Text>{item.name}</Text>
          <Text slot="description">{`contains ${item.contains} item(s)`}</Text>
        </Item>
      )}
    </ListView>
  );
}

export const demos = {
  "low-level-api": DroppableListLowLevelAPI,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "creating-the-draggable-list": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "creating-the-droppable-list": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
};
