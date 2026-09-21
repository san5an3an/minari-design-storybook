// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/tag/TagGroup.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Avatar, Content, ContextualHelp, Heading, Item, Link, TagGroup, Text, View } from "@adobe/react-spectrum";
import News from '@spectrum-icons/workflow/News';
import Airplane from '@spectrum-icons/workflow/Airplane';
import Game from '@spectrum-icons/workflow/Game';
import ShoppingCart from '@spectrum-icons/workflow/ShoppingCart';

function Example1() {
  return (
    <>
    <TagGroup aria-label="Static TagGroup items example">
      <Item>News</Item>
      <Item>Travel</Item>
      <Item>Gaming</Item>
      <Item>Shopping</Item>
    </TagGroup>
    </>
  );
}

function Example2() {
  const items = [
    {id: 1, name: 'News'},
    {id: 2, name: 'Travel'},
    {id: 3, name: 'Gaming'},
    {id: 4, name: 'Shopping'}
  ];
  
  return (
    <>
    <TagGroup items={items} aria-label="Dynamic TagGroup items example">
      {item => <Item>{item.name}</Item>}
    </TagGroup>
    </>
  );
}

function Example3() {
  return (
    <>
    <TagGroup label="Categories">
      <Item>News</Item>
      <Item>Travel</Item>
      <Item>Gaming</Item>
      <Item>Shopping</Item>
    </TagGroup>
    </>
  );
}

function Example() {
  let defaultItems = [
    {id: 1, name: 'News'},
    {id: 2, name: 'Travel'},
    {id: 3, name: 'Gaming'},
    {id: 4, name: 'Shopping'}
  ];

  let [items, setItems] = React.useState(defaultItems);

  let onRemove = (keys) => {
    setItems(prevItems => prevItems.filter((item) => !keys.has(item.id)));
  };

  return (
    <TagGroup
      items={items}
      /*- begin highlight -*/
      onRemove={onRemove}
      /*- end highlight -*/
      aria-label="Removable TagGroup example">
      {item => <Item>{item.name}</Item>}
    </TagGroup>
  );
}

function Example5() {
  return (
    <>
    <TagGroup
      /*- begin highlight -*/
      actionLabel="Clear"
      onAction={() => alert('Clear action pressed.')}
      /*- end highlight -*/
      aria-label="TagGroup with action">
      <Item>News</Item>
      <Item>Travel</Item>
      <Item>Gaming</Item>
      <Item>Shopping</Item>
    </TagGroup>
    </>
  );
}

function Example6() {
  return (
    <>
    <TagGroup label="Links">
      <Item href="https://adobe.com/" target="_blank">Adobe</Item>
      <Item href="https://apple.com/" target="_blank">Apple</Item>
      <Item href="https://google.com/" target="_blank">Google</Item>
      <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
    </TagGroup>
    </>
  );
}

function Example7() {
  return (
    <>
    <TagGroup aria-label="TagGroup with icons example">
      <Item textValue="News">
        <News />
        <Text>News</Text>
      </Item>
      <Item textValue="Travel">
        <Airplane />
        <Text>Travel</Text>
      </Item>
      <Item textValue="Gaming">
        <Game />
        <Text>Gaming</Text>
      </Item>
      <Item textValue="Shopping">
        <ShoppingCart />
        <Text>Shopping</Text>
      </Item>
    </TagGroup>
    </>
  );
}

function Example8() {
  return (
    <>
    <TagGroup aria-label="TagGroup with avatars example">
      <Item textValue="Person 1">
        <Avatar src="https://i.imgur.com/kJOwAdv.png" />
        <Text>Person 1</Text>
      </Item>
      <Item textValue="Person 2">
        <Avatar src="https://i.imgur.com/kJOwAdv.png" />
        <Text>Person 2</Text>
      </Item>
      <Item textValue="Person 3">
        <Avatar src="https://i.imgur.com/kJOwAdv.png" />
        <Text>Person 3</Text>
      </Item>
      <Item textValue="Person 4">
        <Avatar src="https://i.imgur.com/kJOwAdv.png" />
        <Text>Person 4</Text>
      </Item>
    </TagGroup>
    </>
  );
}

function Example9() {
  return (
    <>
    <TagGroup label="Categories" labelPosition="side" labelAlign="end">
      <Item>News</Item>
      <Item>Travel</Item>
      <Item>Gaming</Item>
      <Item>Shopping</Item>
    </TagGroup>
    </>
  );
}

function Example_2() {
  let defaultItems = [
    {id: 1, name: 'News'},
    {id: 2, name: 'Travel'},
    {id: 3, name: 'Gaming'},
    {id: 4, name: 'Shopping'}
  ];

  let [items, setItems] = React.useState(defaultItems);

  let onRemove = (keys) => {
    setItems(prevItems => prevItems.filter((item) => !keys.has(item.id)));
  };

  let isValid = items.length <= 3;

  return (
    <TagGroup
      label="Categories"
      items={items}
      onRemove={onRemove}
      aria-label="TagGroup help text example"
      isInvalid={!isValid}
      description="Please include tags for related categories."
      errorMessage="Must contain no more than 3 tags. Please remove some."
      >
      {item => <Item>{item.name}</Item>}
    </TagGroup>
  );
}

function Example11() {
  return (
    <>
    <TagGroup
      label="Categories"
      contextualHelp={
        <ContextualHelp>
          <Heading>What are tags?</Heading>
          <Content>Tags allow users to categorize content.</Content>
        </ContextualHelp>
      }>
      <Item>News</Item>
      <Item>Travel</Item>
      <Item>Gaming</Item>
      <Item>Shopping</Item>
    </TagGroup>
    </>
  );
}

function Example12() {
  return (
    <>
    <View maxWidth="size-3400" minHeight="size-2000" padding="size-150" borderWidth="thin" borderColor="dark" borderRadius="medium">
      <TagGroup
        /*- begin highlight -*/
        maxRows={2}
        /*- end highlight -*/
        aria-label="Static TagGroup items example with maxRows set">
        <Item>News</Item>
        <Item>Travel</Item>
        <Item>Gaming</Item>
        <Item>Shopping</Item>
        <Item>Business</Item>
        <Item>Entertainment</Item>
        <Item>Food</Item>
        <Item>Technology</Item>
        <Item>Politics</Item>
        <Item>Health</Item>
        <Item>Science</Item>
      </TagGroup>
    </View>
    </>
  );
}

function renderEmptyState() {
  return (
    <span>
      No categories. <Link><a href="#">Click here</a></Link> to add some.
    </span>
  );
}

<TagGroup
  label="Categories"
  renderEmptyState={renderEmptyState}>
  {[]}
</TagGroup>

export const demos = {
  "example": Example1,
  "content": Example2,
  "labeling": Example3,
  "onremove": Example,
  "onaction": Example5,
  "links": Example6,
  "with-icons": Example7,
  "with-avatars": Example8,
  "label-position-and-alignment": Example9,
  "help-text": Example_2,
  "contextual-help": Example11,
  "limit-rows": Example12,
  "empty-state": renderEmptyState,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
