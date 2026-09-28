// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/picker/Picker.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Avatar, Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, Item, Picker, Section, Text, useAsyncList } from "@adobe/react-spectrum";
import Book from '@spectrum-icons/workflow/Book';
import BulkEditUsers from '@spectrum-icons/workflow/BulkEditUsers';
import Draw from '@spectrum-icons/workflow/Draw';
import type {Key} from '@adobe/react-spectrum';

function Example1() {
  return (
    <>
    <Picker label="Choose frequency">
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
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
      <Picker label="Pick an animal" items={options} onSelectionChange={setAnimalId}>
        {item => <Item>{item.name}</Item>}
      </Picker>
      <p>Animal id: {animalId}</p>
    </>
  );
}

function Example3() {
  return (
    <>
    <Picker label="Choose frequency" isRequired necessityIndicator="icon">
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
    </>
  );
}

function Example4() {
  return (
    <>
    <Picker label="Choose frequency" isRequired necessityIndicator="label">
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
    </>
  );
}

function Example5() {
  return (
    <>
    <Picker label="Choose frequency" necessityIndicator="label">
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
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
  let [animal, setAnimal] = React.useState<Key>("Bison");

  return (
    <Flex gap="size-150" wrap>
      <Picker
        label="Pick an animal (uncontrolled)"
        items={options}
        defaultSelectedKey="Bison">
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>

      <Picker
        label="Pick an animal (controlled)"
        items={options}
        selectedKey={animal}
        onSelectionChange={selected => setAnimal(selected)}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Picker>
    </Flex>
  );
}

function Example7() {
  return (
    <>
    <Picker
      label="Favorite Animal"
      ///- begin highlight -///
      name="favoriteAnimalId"
      ///- end highlight -///
    >
      <Item key="panda">Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
    </Picker>
    </>
  );
}

function Example8() {
  return (
    <>
    <Picker label="Project">
      <Item href="https://example.com/" target="_blank">Create new…</Item>
      <Item>Proposal</Item>
      <Item>Budget</Item>
      <Item>Onboarding</Item>
    </Picker>
    </>
  );
}

function Example9() {
  return (
    <>
    <Picker label="Pick your favorite">
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
    </Picker>
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

  return (
    <Picker label="Pick an animal" items={options} onSelectionChange={selected => alert(selected)}>
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </Picker>
  );
}

function StaticExample() {
  let [frequency, setFrequency] = React.useState(null);

  return (
    <>
      <Picker label="Choose frequency" onSelectionChange={selected => setFrequency(selected)}>
        <Item key="Rarely">Rarely</Item>
        <Item key="Sometimes">Sometimes</Item>
        <Item key="Always">Always</Item>
      </Picker>
      <p>You selected {frequency}</p>
    </>
  );
}

function DynamicExample() {
  let [animalId, setAnimalId] = React.useState(null);
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
      <Picker label="Pick an animal" items={options} onSelectionChange={selected => setAnimalId(selected)}>
        {item => <Item>{item.name}</Item>}
      </Picker>
      <p>Your favorite animal has id: {animalId}</p>
    </>
  );
}

function Example13() {
  return (
    <>
    <Picker label="Options">
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
    </Picker>
    </>
  );
}

function Example14() {
  return (
    <>
    <Picker label="Select a user">
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
    </Picker>
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
    <Picker
      label="Pick a Pokemon"
      items={list.items}
      isLoading={list.isLoading}
      onLoadMore={list.loadMore}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </Picker>
  );
}

function Example16() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <Picker label="Favorite animal" name="animal" isRequired>
      {/*- end highlight -*/}
        <Item>Aardvark</Item>
        <Item>Cat</Item>
        <Item>Dog</Item>
        <Item>Kangaroo</Item>
        <Item>Panda</Item>
        <Item>Snake</Item>
      </Picker>
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example17() {
  return (
    <>
    <Picker label="Choose frequency" labelPosition="side" labelAlign="end">
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
    </>
  );
}

function Example18() {
  return (
    <>
    <Picker label="Choose frequency" isQuiet>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
    </>
  );
}

function Example19() {
  return (
    <>
    <Picker label="Choose frequency" isDisabled>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
    </>
  );
}

function Example_4() {
    let [animalId, setAnimalId] = React.useState(null);
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
  let isValid = React.useMemo(() => animalId !== 2 && animalId !== 7, [animalId]);

  return (
    <Picker
      isInvalid={!isValid}
      label="Favorite animal"
      description="Pick your favorite animal, you will be judged."
      errorMessage={animalId === 2 ? 'The author of this example is a dog person.' : 'Oh no it\'s a snake! Choose anything else.'}
      items={options}
      selectedKey={animalId}
      onSelectionChange={selected => setAnimalId(selected)}>
      {item => <Item>{item.name}</Item>}
    </Picker>
  );
}

function Example21() {
  return (
    <>
    <Picker
      label="Engineering major"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Major changes</Heading>
          <Content>Once you have changed your major, you cannot change it back.</Content>
        </ContextualHelp>
      }>
      <Item>Aerospace</Item>
      <Item>Mechanical</Item>
      <Item>Civil</Item>
      <Item>Nuclear</Item>
      <Item>Industrial</Item>
      <Item>Chemical</Item>
      <Item>Agricultural</Item>
      <Item>Electrical</Item>
    </Picker>
    </>
  );
}

function Example22() {
  return (
    <>
    <Flex direction="column" rowGap="size-150">
      <Picker label="Choose frequency" width="size-3600" maxWidth="100%">
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Picker>
    
      <Picker label="Choose animal" menuWidth="size-6000">
        <Item key="Emu">Emu</Item>
        <Item key="Kangaroo">Kangaroo</Item>
        <Item key="Platypus">Platypus</Item>
      </Picker>
    </Flex>
    </>
  );
}

function Example23() {
  return (
    <>
    <Flex direction="column" gap="size-150">
      <Picker label="Choose frequency" align="end" menuWidth="size-3000">
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Picker>
    
      <Picker label="Choose animal" direction="top">
        <Item key="Emu">Emu</Item>
        <Item key="Kangaroo">Kangaroo</Item>
        <Item key="Platypus">Platypus</Item>
      </Picker>
    </Flex>
    </>
  );
}

function Example_5() {
  let [open, setOpen] = React.useState(false);

  return (
    <Picker
      label="Frequency"
      isOpen={open}
      onOpenChange={setOpen}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example,
  "labeling-1": Example3,
  "labeling-2": Example4,
  "labeling-3": Example5,
  "selection-1": Example_2,
  "selection-2": Example7,
  "links-1": Example8,
  "sections-1": Example9,
  "sections-2": Example_3,
  "events-1": StaticExample,
  "events-2": DynamicExample,
  "complex-items-1": Example13,
  "complex-items-2": Example14,
  "asynchronous-loading-1": AsyncLoadingExample,
  "validation-1": Example16,
  "visual-options-1": Example17,
  "visual-options-2": Example18,
  "visual-options-3": Example19,
  "visual-options-4": Example_4,
  "visual-options-5": Example21,
  "visual-options-6": Example22,
  "visual-options-7": Example23,
  "visual-options-8": Example_5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
