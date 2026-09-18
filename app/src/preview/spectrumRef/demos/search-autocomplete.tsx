// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/autocomplete/SearchAutocomplete.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Form, useAsyncList } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <SearchAutocomplete label="Search with Autocomplete">
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
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

  return (
    <SearchAutocomplete
      label="Search engineering majors"
      defaultItems={options}>
      {item => <Item>{item.name}</Item>}
    </SearchAutocomplete>
  );
}

function Example3() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" isRequired necessityIndicator="icon">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example4() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" isRequired necessityIndicator="label">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example5() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" necessityIndicator="label">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example6() {
  return (
    <>
    <SearchAutocomplete label="Tech company websites">
      <Item href="https://adobe.com/" target="_blank">Adobe</Item>
      <Item href="https://apple.com/" target="_blank">Apple</Item>
      <Item href="https://google.com/" target="_blank">Google</Item>
      <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example7() {
  return (
    <>
    <SearchAutocomplete label="Preferred fruit or vegetable">
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
    </SearchAutocomplete>
    </>
  );
}

function Example_2() {
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
    <SearchAutocomplete label="Preferred fruit or vegetable" defaultItems={options}>
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item key={item.name}>{item.name}</Item>}
        </Section>
      )}
    </SearchAutocomplete>
  );
}

function Example9() {
  return (
    <>
    <SearchAutocomplete label="Search apps">
      <Section title="Productivity">
        <Item textValue="Mail">
          <Email size="S" />
          <Text>Mail</Text>
          <Text slot="description">Send and receive emails</Text>
        </Item>
        <Item textValue="File Explorer">
          <Folder size="S" />
          <Text>File Explorer</Text>
          <Text slot="description">Navigate directories and open files</Text>
        </Item>
        <Item textValue="Document Editor">
          <Document size="S" />
          <Text>Document Editor</Text>
          <Text slot="description">Edit documents</Text>
        </Item>
      </Section>
      <Section title="Internet">
        <Item textValue="Web Browser">
          <WebPages size="S" />
          <Text>Web Browser</Text>
          <Text slot="description">Browse the internet</Text>
        </Item>
        <Item textValue="Social Media">
          <SocialNetwork size="S" />
          <Text>Social Media</Text>
          <Text slot="description">Connect with friends</Text>
        </Item>
        <Item textValue="Shopping">
          <ShoppingCart size="S" />
          <Text>Shopping</Text>
          <Text slot="description">Shop online</Text>
        </Item>
      </Section>
    </SearchAutocomplete>
    </>
  );
}

function Example10() {
  return (
    <>
    <SearchAutocomplete label="Search users">
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
    </SearchAutocomplete>
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
      // mirrors the SearchAutocomplete input text.
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
    <SearchAutocomplete
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </SearchAutocomplete>
  );
}

function Example12() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <SearchAutocomplete label="Favorite animal" name="animal" isRequired>
      {/*- end highlight -*/}
        <Item>Aardvark</Item>
        <Item>Cat</Item>
        <Item>Dog</Item>
        <Item>Kangaroo</Item>
        <Item>Panda</Item>
        <Item>Snake</Item>
      </SearchAutocomplete>
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example_3() {
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
    <SearchAutocomplete
      onOpenChange={(isOpen, menuTrigger) => {
        // Show all items if menu is opened manually
        // i.e. by the arrow keys or trigger button
        if (menuTrigger === 'manual' && isOpen) {
          setShowAll(true);
        }
      }}
      width="size-3000"
      label="Search Email Addresses"
      items={showAll ? options : filteredItems}
      inputValue={filterValue}
      onInputChange={(value) => {
        setShowAll(false);
        setFilterValue(value);
      }}>
      {item => <Item>{item.email}</Item>}
    </SearchAutocomplete>
  );
}

function Example14() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" menuTrigger="focus">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example15() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" menuTrigger="manual">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example16() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" labelPosition="side" labelAlign="end">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example17() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" isQuiet>
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example18() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" isDisabled>
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example19() {
  return (
    <>
    <SearchAutocomplete label="Search Animals" isReadOnly>
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example20() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" width="size-6000" maxWidth="100%">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

function Example21() {
  return (
    <>
    <SearchAutocomplete label="Favorite Animal" direction="top">
      <Item>Red Panda</Item>
      <Item>Cat</Item>
      <Item>Dog</Item>
      <Item>Aardvark</Item>
      <Item>Kangaroo</Item>
      <Item>Snake</Item>
    </SearchAutocomplete>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example,
  "labeling-1": Example3,
  "labeling-2": Example4,
  "labeling-3": Example5,
  "links-1": Example6,
  "sections-1": Example7,
  "sections-2": Example_2,
  "complex-items-1": Example9,
  "complex-items-2": Example10,
  "asynchronous-loading-1": AsyncLoadingExample,
  "validation-1": Example12,
  "custom-filtering-1": Example_3,
  "trigger-options-1": Example14,
  "trigger-options-2": Example15,
  "visual-options-1": Example16,
  "visual-options-2": Example17,
  "visual-options-3": Example18,
  "visual-options-4": Example19,
  "visual-options-5": Example20,
  "visual-options-6": Example21,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
