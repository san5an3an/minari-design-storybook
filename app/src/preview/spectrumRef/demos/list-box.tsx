// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/listbox/ListBox.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Avatar, Flex, Item, ListBox, Section, Text, useAsyncList } from "@adobe/react-spectrum";
import Book from '@spectrum-icons/workflow/Book';
import BulkEditUsers from '@spectrum-icons/workflow/BulkEditUsers';
import Draw from '@spectrum-icons/workflow/Draw';
import type {Selection} from '@adobe/react-spectrum';

function Example1() {
  return (
    <>
    <ListBox width="size-2400" aria-label="Alignment">
      <Item>Left</Item>
      <Item>Middle</Item>
      <Item>Right</Item>
    </ListBox>
    </>
  );
}

function Example() {
  let options = [
    {id: 1, name: 'Aardvark'},
    {id: 2, name: 'Cat'},
    {id: 3, name: 'Dog'},
    {id: 4, name: 'Kangaroo'},
    {id: 5, name: 'Koala'},
    {id: 6, name: 'Penguin'},
    {id: 7, name: 'Snake'},
    {id: 8, name: 'Turtle'},
    {id: 9, name: 'Wombat'}
  ];
  let [animalId, setAnimalId] = React.useState(null);

  return (
    <>
      <ListBox width="size-2400" aria-label="Animals" items={options} selectionMode="single" onSelectionChange={setAnimalId}>
        {item => <Item>{item.name}</Item>}
      </ListBox>
      <p>Animal id: {animalId}</p>
    </>
  );
}

function Example_2() {
  let options = [
    {name: 'Koala'},
    {name: 'Kangaroo'},
    {name: 'Platypus'},
    {name: 'Bald Eagle'},
    {name: 'Bison'},
    {name: 'Skunk'}
  ];
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['Bison']));

  return (
    <Flex direction="row" gap="size-350">
      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        defaultSelectedKeys={['Bison', 'Koala']}
        width="size-2400">
        {item => <Item key={item.name}>{item.name}</Item>}
      </ListBox>

      <ListBox
        selectionMode="multiple"
        aria-label="Pick an animal"
        items={options}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        width="size-2400">
        {item => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
    </Flex>
  );
}

function Example4() {
  return (
    <>
    <ListBox aria-label="Links">
      <Item href="https://adobe.com/" target="_blank">Adobe</Item>
      <Item href="https://apple.com/" target="_blank">Apple</Item>
      <Item href="https://google.com/" target="_blank">Google</Item>
      <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
    </ListBox>
    </>
  );
}

function Example5() {
  return (
    <>
    <ListBox width="size-2400" aria-label="Pick your favorite" selectionMode="single">
      <Section title="Animals">
        <Item key="Aardvark">Aardvark</Item>
        <Item key="Kangaroo">Kangaroo</Item>
        <Item key="Snake">Snake</Item>
      </Section>
      <Section title="People">
        <Item key="Danni">Danni</Item>
        <Item key="Devon">Devon</Item>
        <Item key="Ross">Ross</Item>
      </Section>
    </ListBox>
    </>
  );
}

function Example_3() {
  let options = [
    {name: 'Australian', children: [
      {id: 2, name: 'Koala'},
      {id: 3, name: 'Kangaroo'},
      {id: 4, name: 'Platypus'}
    ]},
    {name: 'American', children: [
      {id: 6, name: 'Bald Eagle'},
      {id: 7, name: 'Bison'},
      {id: 8, name: 'Skunk'}
    ]}
  ];
  let [selected, setSelected] = React.useState<Selection>(new Set());

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
      width="size-2400">
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
  );
}

function StaticExample() {
  let [frequency, setFrequency] = React.useState<Selection>(new Set());

  return (
    <>
      <ListBox
        aria-label="Choose frequency"
        selectionMode="single"
        onSelectionChange={selected => setFrequency(selected)}
        width="size-2400">
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </ListBox>
      <p>You selected: {[...frequency][0]}</p>
    </>
  );
}

function DynamicExample() {
  let [animalId, setAnimalId] = React.useState<Selection>(new Set());
  let options = [
    {id: 1, name: 'Aardvark'},
    {id: 2, name: 'Cat'},
    {id: 3, name: 'Dog'},
    {id: 4, name: 'Kangaroo'},
    {id: 5, name: 'Koala'},
    {id: 6, name: 'Penguin'},
    {id: 7, name: 'Snake'},
    {id: 8, name: 'Turtle'},
    {id: 9, name: 'Wombat'}
  ];

  return (
    <>
      <ListBox
        selectionMode="single"
        aria-label="Pick an animal"
        items={options}
        onSelectionChange={selected => setAnimalId(selected)}
        width="size-2400">
        {item => <Item>{item.name}</Item>}
      </ListBox>
      <p>Your favorite animal has id: {[...animalId][0]}</p>
    </>
  );
}

function Example9() {
  return (
    <>
    <ListBox width="size-2400" aria-label="Options" selectionMode="single">
      <Section title="Permission">
        <Item textValue="Read">
          <Book size="S" />
          <Text>Read</Text>
          <Text slot="description">Read Only</Text>
        </Item>
        <Item textValue="Write">
          <Draw size="S" />
          <Text>Write</Text>
          <Text slot="description">Read and Write Only</Text>
        </Item>
        <Item textValue="Admin">
          <BulkEditUsers size="S" />
          <Text>Admin</Text>
          <Text slot="description">Full access</Text>
        </Item>
      </Section>
    </ListBox>
    </>
  );
}

function Example10() {
  return (
    <>
    <ListBox width="size-2400" aria-label="Options" selectionMode="single">
      <Section title="Users">
        <Item textValue="User 1">
          <Avatar src="https://i.imgur.com/kJOwAdv.png" />
          <Text>User 1</Text>
        </Item>
        <Item textValue="User 2">
          <Avatar src="https://i.imgur.com/kJOwAdv.png" />
          <Text>User 2</Text>
        </Item>
        <Item textValue="User 3">
          <Avatar src="https://i.imgur.com/kJOwAdv.png" />
          <Text>User 3</Text>
        </Item>
        <Item textValue="User 4">
          <Avatar src="https://i.imgur.com/kJOwAdv.png" />
          <Text>User 4</Text>
        </Item>
      </Section>
    </ListBox>
    </>
  );
}

interface Pokemon {
  name: string
}

function AsyncLoadingExample() {
  let list = useAsyncList<Pokemon>({
    async load({signal, cursor}) {
      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      let res = await fetch(cursor || 'https://pokeapi.co/api/v2/pokemon', {signal});
      let json = await res.json();
      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <Flex maxHeight="size-2400">
      <ListBox
        aria-label="Pick a Pokemon"
        items={list.items}
        isLoading={list.isLoading}
        onLoadMore={list.loadMore}
        width="size-2400">
        {item => <Item key={item.name}>{item.name}</Item>}
      </ListBox>
    </Flex>
  );
}

function Example12() {
  return (
    <>
    <ListBox
      isLoading
      aria-label="Choose frequency"
      selectionMode="single"
      width="size-1200">
      {[]}
    </ListBox>
    </>
  );
}

function Example13() {
  return (
    <>
    <ListBox width="size-2400" aria-label="Pick your favorite" disabledKeys={["Snake", "Ross"]} selectionMode="single">
      <Section title="Animals">
        <Item key="Aardvark">Aardvark</Item>
        <Item key="Kangaroo">Kangaroo</Item>
        <Item key="Snake">Snake</Item>
      </Section>
      <Section title="People">
        <Item key="Danni">Danni</Item>
        <Item key="Devon">Devon</Item>
        <Item key="Ross">Ross</Item>
      </Section>
    </ListBox>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example,
  "selection-1": Example_2,
  "links-1": Example4,
  "sections-1": Example5,
  "sections-2": Example_3,
  "events-1": StaticExample,
  "events-2": DynamicExample,
  "complex-items-1": Example9,
  "complex-items-2": Example10,
  "asynchronous-loading-1": AsyncLoadingExample,
  "visual-options-1": Example12,
  "visual-options-2": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
