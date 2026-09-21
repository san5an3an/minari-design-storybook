// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/combobox/ComboBox.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Avatar, Button, ButtonGroup, ComboBox, Content, ContextualHelp, Flex, Form, Heading, Item, Section, Text, useAsyncList, useFilter, useTreeData } from "@adobe/react-spectrum";
import Add from '@spectrum-icons/workflow/Add';
import Alert from '@spectrum-icons/workflow/Alert';
import Bell from '@spectrum-icons/workflow/Bell';
import Draw from '@spectrum-icons/workflow/Draw';
import type {Key} from '@adobe/react-spectrum';

function Example1() {
  return (
    <>
    <ComboBox label="Favorite Animal">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];
  let [majorId, setMajorId] = React.useState(null);

  return (
    <>
      <p>Topic id: {majorId}</p>
      <ComboBox
        label="Pick an engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
  );
}

function Example_2() {
  let options = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  let [value, setValue] = React.useState('Adobe XD');

  return (
    <Flex gap="size-150" wrap>
      <ComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultInputValue="Adobe XD">
        {item => <Item>{item.name}</Item>}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        inputValue={value}
        onInputChange={setValue}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
}

function Example_3() {
  let options = [
    {name: 'Apple'},
    {name: 'Banana'},
    {name: 'Orange'},
    {name: 'Honeydew'},
    {name: 'Grapes'},
    {name: 'Watermelon'},
    {name: 'Cantaloupe'},
    {name: 'Pear'}
  ];

  return (
    <>
      <p>
        Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list
        feel free to write your own selection.
      </p>
      <ComboBox
        label="Preferred fruit"
        defaultItems={options}
        allowsCustomValue>
        {item => <Item key={item.name}>{item.name}</Item>}
      </ComboBox>
    </>
  );
}

function Example5() {
  return (
    <>
    <Flex gap="size-200" wrap>
      <ComboBox
        label="Ice cream flavor"
        ///- begin highlight -///
        name="iceCream"
        allowsCustomValue
        ///- end highlight -///
      >
        <Item>Chocolate</Item>
        <Item>Mint</Item>
        <Item>Strawberry</Item>
        <Item>Vanilla</Item>
      </ComboBox>
      <ComboBox
        label="Favorite Animal"
        ///- begin highlight -///
        name="favoriteAnimalId"
        formValue="key"
        ///- end highlight -///
      >
        <Item key="panda">Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
      </ComboBox>
    </Flex>
    </>
  );
}

function Example6() {
  return (
    <>
    <ComboBox label="Favorite Animal" isRequired necessityIndicator="icon">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example7() {
  return (
    <>
    <ComboBox label="Favorite Animal" isRequired necessityIndicator="label">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example8() {
  return (
    <>
    <ComboBox label="Favorite Animal" necessityIndicator="label">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example_4() {
  let options = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  let [productId, setProductId] = React.useState<Key>(9);

  return (
    <Flex gap="size-150" wrap>
      <ComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>

      <ComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={selected => setProductId(selected)}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
}

function Example10() {
  return (
    <>
    <ComboBox label="Tech company websites">
      <Item href="https://adobe.com/" target="_blank">Adobe</Item>
      <Item href="https://apple.com/" target="_blank">Apple</Item>
      <Item href="https://google.com/" target="_blank">Google</Item>
      <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
    </ComboBox>
    </>
  );
}

function Example11() {
  return (
    <>
    <ComboBox label="Preferred fruit or vegetable">
      <Section title="Fruit">
        <Item key="Apple">Apple</Item>
        <Item key="Banana">Banana</Item>
        <Item key="Orange">Orange</Item>
        <Item key="Honeydew">Honeydew</Item>
        <Item key="Grapes">Grapes</Item>
        <Item key="Watermelon">Watermelon</Item>
        <Item key="Cantaloupe">Cantaloupe</Item>
        <Item key="Pear">Pear</Item>
      </Section>
      <Section title="Vegetable">
        <Item key="Cabbage">Cabbage</Item>
        <Item key="Broccoli">Broccoli</Item>
        <Item key="Carrots">Carrots</Item>
        <Item key="Lettuce">Lettuce</Item>
        <Item key="Spinach">Spinach</Item>
        <Item key="Bok Choy">Bok Choy</Item>
        <Item key="Cauliflower">Cauliflower</Item>
        <Item key="Potatoes">Potatoes</Item>
      </Section>
    </ComboBox>
    </>
  );
}

function Example_5() {
  let options = [
    {name: 'Fruit', children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Orange'},
      {name: 'Honeydew'},
      {name: 'Grapes'},
      {name: 'Watermelon'},
      {name: 'Cantaloupe'},
      {name: 'Pear'}
    ]},
    {name: 'Vegetable', children: [
      {name: 'Cabbage'},
      {name: 'Broccoli'},
      {name: 'Carrots'},
      {name: 'Lettuce'},
      {name: 'Spinach'},
      {name: 'Bok Choy'},
      {name: 'Cauliflower'},
      {name: 'Potatoes'}
    ]}
  ];

  return (
    <ComboBox label="Preferred fruit or vegetable" defaultItems={options}>
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item key={item.name}>{item.name}</Item>}
        </Section>
      )}
    </ComboBox>
  );
}

function Example_6() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];

  let [value, setValue] = React.useState('');
  let [majorId, setMajorId] = React.useState('');

  let onSelectionChange = (id) => {
    setMajorId(id);
  };

  let onInputChange = (value) => {
    setValue(value)
  };

  return (
    <>
      <p>Current selected major id: {majorId}</p>
      <p>Current input text: {value}</p>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}>
        {item => <Item>{item.name}</Item>}
      </ComboBox>
    </>
  );
}

function Example_7() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];

  let [fieldState, setFieldState] = React.useState({
    selectedKey: '',
    inputValue: ''
  });

  let list = useTreeData({
    initialItems: options
  });

  let onSelectionChange = (key) => {
    setFieldState({
      inputValue: list.getItem(key)?.value.name ?? '',
      selectedKey: key
    });
  };

  let onInputChange = (value) => {
    setFieldState(prevState => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey
    }));
  };

  return (
     <>
      <p>Current selected major id: {fieldState.selectedKey}</p>
      <p>Current input text: {fieldState.inputValue}</p>
       <ComboBox
        label="Pick a engineering major"
        defaultItems={list.items}
        selectedKey={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}>
        {item => <Item>{item.value.name}</Item>}
      </ComboBox>
     </>
  );
}

function Example15() {
  return (
    <>
    <ComboBox label="Select action">
      <Item textValue="Add to queue">
        <Add />
        <Text>Add to queue</Text>
        <Text slot="description">Add to current watch queue.</Text>
      </Item>
      <Item textValue="Add review">
        <Draw />
        <Text>Add review</Text>
        <Text slot="description">Post a review for the episode.</Text>
      </Item>
        <Item textValue="Subscribe to series">
        <Bell />
        <Text>Subscribe to series</Text>
        <Text slot="description">Add series to your subscription list and be notified when a new episode airs.</Text>
      </Item>
      <Item textValue="Report">
        <Alert />
        <Text>Report</Text>
        <Text slot="description">Report an issue/violation.</Text>
      </Item>
    </ComboBox>
    </>
  );
}

function Example16() {
  return (
    <>
    <ComboBox label="Select a user">
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
    </ComboBox>
    </>
  );
}

interface Character {
  name: string
}

function AsyncLoadingExample() {
  let list = useAsyncList<Character>({
    async load({signal, cursor, filterText}) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      // If no cursor is available, then we're loading the first page,
      // filtering the results returned via a query string that
      // mirrors the ComboBox input text.
      // Otherwise, the cursor is the next URL to load,
      // as returned from the previous page.
      let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`, {signal});
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}

interface Character {
  name: string
}

function AsyncLoadingExample_2() {
  let isFocused = React.useRef(false);
  let list = useAsyncList<Character>({
    async load({signal, cursor, filterText, selectedKeys}) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      // If no cursor is available, then we're loading the first page,
      // filtering the results returned via a query string that
      // mirrors the ComboBox input text.
      // Otherwise, the cursor is the next URL to load,
      // as returned from the previous page.
      let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`, {signal});
      let json = await res.json();

      let selectedText;
      let selectedKey = selectedKeys !== 'all' && selectedKeys.values().next().value;

      // If selectedKey exists and combobox is not focused, update the input value with the selected key text
      // This allows the input value to be up to date when items load for the first time or the selected key text is updated server side.
      if (!isFocused.current && selectedKey) {
        let selectedItemName = json.results.find(item => item.name === selectedKey)?.name;
        if (selectedItemName != null && selectedItemName !== filterText) {
          selectedText = selectedItemName;
        }
      }

      return {
        items: json.results,
        cursor: json.next,
        filterText: selectedText ?? filterText
      };
    },
    initialSelectedKeys: ['Luke Skywalker'],
    getKey: (item) => item.name
  });

  let onSelectionChange = (key) => {
    let itemText = list.getItem(key)?.name;
    list.setSelectedKeys(new Set([key]));
    list.setFilterText(itemText);
  };

  let onInputChange = (value) => {
    // Clear key if user deletes all text in the field
    if (value === '') {
      list.setSelectedKeys(new Set([null]));
    }
    list.setFilterText(value);
  };

  let selectedKey = list.selectedKeys !== 'all' && list.selectedKeys.values().next().value;
  return (
    <ComboBox
      label="Star Wars Character Lookup"
      onFocusChange={(focus) => isFocused.current = focus}
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={onInputChange}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}

function Example19() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <ComboBox label="Favorite animal" name="animal" isRequired>
      {/*- end highlight -*/}
        <Item>Aardvark</Item>
        <Item>Cat</Item>
        <Item>Dog</Item>
        <Item>Kangaroo</Item>
        <Item>Panda</Item>
        <Item>Snake</Item>
      </ComboBox>
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example_8() {
  let options = [
    {id: 1, email: 'fake@email.com'},
    {id: 2, email: 'anotherfake@email.com'},
    {id: 3, email: 'bob@email.com'},
    {id: 4, email: 'joe@email.com'},
    {id: 5, email: 'yourEmail@email.com'},
    {id: 6, email: 'valid@email.com'},
    {id: 7, email: 'spam@email.com'},
    {id: 8, email: 'newsletter@email.com'},
    {id: 9, email: 'subscribe@email.com'}
  ];

  let [showAll, setShowAll] = React.useState(false);
  let [filterValue, setFilterValue] = React.useState('');
  let {startsWith} = useFilter({sensitivity: 'base'});
  let filteredItems = React.useMemo(() => options.filter(item => startsWith(item.email, filterValue)), [options, filterValue]);

  return (
    <ComboBox
      onOpenChange={(isOpen, menuTrigger) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (menuTrigger === 'manual' && isOpen) {
          setShowAll(true);
        }
      }}
      width="size-3000"
      label="To:"
      items={showAll ? options : filteredItems}
      inputValue={filterValue}
      onInputChange={(value) => {
        setShowAll(false);
        setFilterValue(value);
      }}
      allowsCustomValue>
      {item => <Item>{item.email}</Item>}
    </ComboBox>
  );
}

function Example21() {
  return (
    <>
    <ComboBox label="Select action" menuTrigger="focus">
      <Item textValue="Add to queue">
        <Add />
        <Text>Add to queue</Text>
        <Text slot="description">Add to current watch queue.</Text>
      </Item>
      <Item textValue="Add review">
        <Draw />
        <Text>Add review</Text>
        <Text slot="description">Post a review for the episode.</Text>
      </Item>
        <Item textValue="Subscribe to series">
        <Bell />
        <Text>Subscribe to series</Text>
        <Text slot="description">Add series to your subscription list and be notified when a new episode airs.</Text>
      </Item>
      <Item textValue="Report">
        <Alert />
        <Text>Report</Text>
        <Text slot="description">Report an issue/violation.</Text>
      </Item>
    </ComboBox>
    </>
  );
}

function Example22() {
  return (
    <>
    <ComboBox label="Select action" menuTrigger="manual">
      <Item textValue="Add to queue">
        <Add />
        <Text>Add to queue</Text>
        <Text slot="description">Add to current watch queue.</Text>
      </Item>
      <Item textValue="Add review">
        <Draw />
        <Text>Add review</Text>
        <Text slot="description">Post a review for the episode.</Text>
      </Item>
        <Item textValue="Subscribe to series">
        <Bell />
        <Text>Subscribe to series</Text>
        <Text slot="description">Add series to your subscription list and be notified when a new episode airs.</Text>
      </Item>
      <Item textValue="Report">
        <Alert />
        <Text>Report</Text>
        <Text slot="description">Report an issue/violation.</Text>
      </Item>
    </ComboBox>
    </>
  );
}

function Example23() {
  return (
    <>
    <ComboBox label="Favorite Animal" labelPosition="side" labelAlign="end">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example24() {
  return (
    <>
    <ComboBox label="Favorite Animal" isQuiet>
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example25() {
  return (
    <>
    <ComboBox label="Favorite Animal" isDisabled>
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example26() {
  return (
    <>
    <ComboBox label="Favorite Animal" isReadOnly selectedKey="red panda">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example_9() {
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
    <ComboBox
      validationState={!animalId ? undefined : isValid ? 'valid' : 'invalid'}
      label="Favorite animal"
      description="Pick your favorite animal, you will be judged."
      errorMessage={animalId === 2 ? 'The author of this example is a dog person.' : 'Oh no it\'s a snake! Choose anything else.'}
      items={options}
      selectedKey={animalId}
      onSelectionChange={selected => setAnimalId(selected)}>
      {item => <Item>{item.name}</Item>}
    </ComboBox>
  );
}

function Example28() {
  return (
    <>
    <ComboBox
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
    </ComboBox>
    </>
  );
}

function Example29() {
  return (
    <>
    <ComboBox label="Favorite Animal" width="size-6000" maxWidth="100%">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

function Example30() {
  return (
    <>
    <ComboBox label="Favorite Animal" direction="top">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example,
  "value-1": Example_2,
  "value-2": Example_3,
  "value-3": Example5,
  "labeling-1": Example6,
  "labeling-2": Example7,
  "labeling-3": Example8,
  "selection-1": Example_4,
  "links-1": Example10,
  "sections-1": Example11,
  "sections-2": Example_5,
  "events-1": Example_6,
  "events-2": Example_7,
  "complex-items-1": Example15,
  "complex-items-2": Example16,
  "asynchronous-loading-1": AsyncLoadingExample,
  "asynchronous-loading-2": AsyncLoadingExample_2,
  "validation-1": Example19,
  "custom-filtering-1": Example_8,
  "trigger-options-1": Example21,
  "trigger-options-2": Example22,
  "visual-options-1": Example23,
  "visual-options-2": Example24,
  "visual-options-3": Example25,
  "visual-options-4": Example26,
  "visual-options-5": Example_9,
  "visual-options-6": Example28,
  "visual-options-7": Example29,
  "visual-options-8": Example30,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
