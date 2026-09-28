// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/tabs/Tabs.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionGroup, Button, Flex, Item, TabList, TabPanels, Tabs, Text } from "@adobe/react-spectrum";
import Bookmark from '@spectrum-icons/workflow/Bookmark';
import Calendar from '@spectrum-icons/workflow/Calendar';
import Dashboard from '@spectrum-icons/workflow/Dashboard';
import type {Key} from '@adobe/react-spectrum';

function Example1() {
  return (
    <>
    <Tabs aria-label="History of Ancient Rome">
      <TabList>
        <Item key="FoR">Founding of Rome</Item>
        <Item key="MaR">Monarchy and Republic</Item>
        <Item key="Emp">Empire</Item>
      </TabList>
      <TabPanels>
        <Item key="FoR">
          Arma virumque cano, Troiae qui primus ab oris.
        </Item>
        <Item key="MaR">
          Senatus Populusque Romanus.
        </Item>
        <Item key="Emp">
          Alea jacta est.
        </Item>
      </TabPanels>
    </Tabs>
    </>
  );
}

function Example() {
  let tabs = [
    {id: 1, name: 'Founding of Rome', children: 'Arma virumque cano, Troiae qui primus ab oris.'},
    {id: 2, name: 'Monarchy and Republic', children: 'Senatus Populusque Romanus.'},
    {id: 3, name: 'Empire', children: 'Alea jacta est.'}
  ];
  type Tab = typeof tabs[0];
  let [tabId, setTabId] = React.useState<Key>(1);

  return (
    <>
      <p>Current tab id: {tabId}</p>
      <Tabs aria-label="History of Ancient Rome" items={tabs} onSelectionChange={setTabId}>
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}

function Example3() {
  return (
    <>
    <Tabs aria-label="History of Ancient Rome">
      <TabList>
        <Item key="FoR" textValue="FoR"><Bookmark /><Text>Founding of Rome</Text></Item>
        <Item key="MaR" textValue="MaR"><Calendar /><Text>Monarchy and Republic</Text></Item>
        <Item key="Emp" textValue="Emp"><Dashboard /><Text>Empire</Text></Item>
      </TabList>
      <TabPanels>
        <Item key="FoR">
          Arma virumque cano, Troiae qui primus ab oris.
        </Item>
        <Item key="MaR">
          Senatus Populusque Romanus.
        </Item>
        <Item key="Emp">
          Alea jacta est.
        </Item>
      </TabPanels>
    </Tabs>
    </>
  );
}

function Example_2 () {
  let [tabs, setTabs] = React.useState([
    {name: 'Tab 1', children: 'Tab Body 1'},
    {name: 'Tab 2', children: 'Tab Body 2'},
    {name: 'Tab 3', children: 'Tab Body 3'}
  ]);
  type Tab = typeof tabs[0];

  let addTab = () => {
    let newTabs = [...tabs];
    newTabs.push({
      name: `Tab ${tabs.length + 1}`,
      children: `Tab Body ${tabs.length + 1}`
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      let newTabs = [...tabs];
      newTabs.pop();
      setTabs(newTabs);
    }
  };

  return (
    <Tabs aria-label="Tab example" items={tabs}>
      <Flex>
        <TabList flex="1 1 auto" minWidth="0px">
          {(item: Tab) => (
            <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <div style={{display: 'flex', flex: '0 0 auto', borderBottom: 'var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-300)'}}>
          <ActionGroup disabledKeys={tabs.length === 1 ? ['remove'] : undefined} onAction={val => val === 'add' ? addTab() : removeTab()}>
            <Item key="add">
              Add Tab
            </Item>
            <Item key="remove">
              Remove Tab
            </Item>
          </ActionGroup>
        </div>
      </Flex>
      <TabPanels>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}

function Example_3() {
  let tabs = [
    {id: 1, name: 'Keyboard Settings', children: 'No keyboard detected.'},
    {id: 2, name: 'Mouse Settings', children: 'No mouse detected.'},
    {id: 3, name: 'Gamepad Settings', children: 'No gamepad detected'}
  ];
  type Tab = typeof tabs[0];
  let [tab, setTab] = React.useState<Key>(2);

  return (
    <Flex gap="size-150" wrap>
      <span id="label-2">Settings (uncontrolled)</span>
      <Tabs aria-labelledby="label-2" items={tabs} defaultSelectedKey={2} marginBottom="size-400">
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
      <span id="label-3">Settings (controlled)</span>
      <Tabs aria-labelledby="label-3" items={tabs} selectedKey={tab} onSelectionChange={setTab}>
        <TabList>
          {(item: Tab) => (
            <Item>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

function Example_4() {
  let tabs = [
    {name: 'Triassic', children: 'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'},
    {name: 'Jurassic', children: 'The Jurassic ranges from 200 million years to 145 million years ago.'},
    {name: 'Cretaceous', children: 'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'}
  ];
  type Tab = typeof tabs[0];
  let [timePeriod, setTimePeriod] = React.useState<Key>('Triassic');

  return (
    <>
      <p>Selected time period: {timePeriod}</p>
      <Tabs aria-label="Mesozoic time periods" items={tabs} selectedKey={timePeriod} onSelectionChange={setTimePeriod}>
        <TabList>
          {(item: Tab) => (
            <Item key={item.name}>
              {item.name}
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: Tab) => (
            <Item key={item.name}>
              {item.children}
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}

function Example_5() {
  let tabs = [
    {name: 'Triassic', children: 'The Triassic ranges roughly from 252 million to 201 million years ago, preceding the Jurassic Period.'},
    {name: 'Jurassic', children: 'The Jurassic ranges from 200 million years to 145 million years ago.'},
    {name: 'Cretaceous', children: 'The Cretaceous is the longest period of the Mesozoic, spanning from 145 million to 66 million years ago.'}
  ];
  type Tab = typeof tabs[0];

  return (
    <Tabs aria-label="Mesozoic time periods" items={tabs} keyboardActivation="manual">
      <TabList>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.name}
          </Item>
        )}
      </TabList>
      <TabPanels>
        {(item: Tab) => (
          <Item key={item.name}>
            {item.children}
          </Item>
        )}
      </TabPanels>
    </Tabs>
  );
}

function Example8() {
  return (
    <>
    <Tabs aria-label="Chat log density example" density="compact">
      <TabList>
        <Item key="item1">
          John Doe
        </Item>
        <Item key="item2">
          Jane Doe
        </Item>
        <Item key="item3">
          Joe Bloggs
        </Item>
      </TabList>
      <TabPanels>
        <Item key="item1">
          There is no prior chat history with John Doe.
        </Item>
        <Item key="item2">
          There is no prior chat history with Jane Doe.
        </Item>
        <Item key="item3">
          There is no prior chat history with Joe Bloggs.
        </Item>
      </TabPanels>
    </Tabs>
    </>
  );
}

function Example9() {
  return (
    <>
    <Tabs aria-label="Chat log quiet example" isQuiet>
      <TabList>
        <Item key="item1">
          John Doe
        </Item>
        <Item key="item2">
          Jane Doe
        </Item>
        <Item key="item3">
          Joe Bloggs
        </Item>
      </TabList>
      <TabPanels>
        <Item key="item1">
          There is no prior chat history with John Doe.
        </Item>
        <Item key="item2">
          There is no prior chat history with Jane Doe.
        </Item>
        <Item key="item3">
          There is no prior chat history with Joe Bloggs.
        </Item>
      </TabPanels>
    </Tabs>
    </>
  );
}

function Example10() {
  return (
    <>
    <Flex direction="column" rowGap="size-150">
      <Tabs aria-label="Chat log single tab disabled example" disabledKeys={['item2']}>
        <TabList>
          <Item key="item1">
            John Doe
          </Item>
          <Item key="item2">
            Jane Doe
          </Item>
          <Item key="item3">
            Joe Bloggs
          </Item>
        </TabList>
        <TabPanels>
          <Item key="item1">
            There is no prior chat history with John Doe.
          </Item>
          <Item key="item2">
            There is no prior chat history with Jane Doe.
          </Item>
          <Item key="item3">
            There is no prior chat history with Joe Bloggs.
          </Item>
        </TabPanels>
      </Tabs>
      <Tabs aria-label="Chat log all tabs disabled example" isDisabled>
        <TabList>
          <Item key="item1">
            John Doe
          </Item>
          <Item key="item2">
            Jane Doe
          </Item>
          <Item key="item3">
            Joe Bloggs
          </Item>
        </TabList>
        <TabPanels>
          <Item key="item1">
            There is no prior chat history with John Doe.
          </Item>
          <Item key="item2">
            There is no prior chat history with Jane Doe.
          </Item>
          <Item key="item3">
            There is no prior chat history with Joe Bloggs.
          </Item>
        </TabPanels>
      </Tabs>
    </Flex>
    </>
  );
}

function Example11() {
  return (
    <>
    <Tabs aria-label="Chat log orientation example" orientation="vertical">
      <TabList>
        <Item key="item1">
          John Doe
        </Item>
        <Item key="item2">
          Jane Doe
        </Item>
        <Item key="item3">
          Joe Bloggs
        </Item>
      </TabList>
      <TabPanels>
        <Item key="item1">
          There is no prior chat history with John Doe.
        </Item>
        <Item key="item2">
          There is no prior chat history with Jane Doe.
        </Item>
        <Item key="item3">
          There is no prior chat history with Joe Bloggs.
        </Item>
      </TabPanels>
    </Tabs>
    </>
  );
}

function Example_6() {
  let [collapse, setCollapse] = React.useState(false)

  return (
    <>
      <div style={{width: collapse ? '150px' : '300px', marginBottom: '50px', height: '150px', maxWidth: '100%'}}>
        <Tabs aria-label="Chat log collapse example">
          <TabList>
            <Item key="item1">
              John Doe
            </Item>
            <Item key="item2">
              Jane Doe
            </Item>
            <Item key="item3">
              Joe Bloggs
            </Item>
          </TabList>
          <TabPanels>
            <Item key="item1">
              There is no prior chat history with John Doe.
            </Item>
            <Item key="item2">
              There is no prior chat history with Jane Doe.
            </Item>
            <Item key="item3">
              There is no prior chat history with Joe Bloggs.
            </Item>
          </TabPanels>
        </Tabs>
      </div>
      <Button variant="primary" onPress={() => setCollapse((collapse) => !collapse)}>
        Toggle tab container size.
      </Button>
    </>
  );
}

function Example13() {
  return (
    <>
    <Tabs aria-label="Chat log emphasized example" isEmphasized>
      <TabList>
        <Item key="item1">
          John Doe
        </Item>
        <Item key="item2">
          Jane Doe
        </Item>
        <Item key="item3">
          Joe Bloggs
        </Item>
      </TabList>
      <TabPanels>
        <Item key="item1">
          There is no prior chat history with John Doe.
        </Item>
        <Item key="item2">
          There is no prior chat history with Jane Doe.
        </Item>
        <Item key="item3">
          There is no prior chat history with Joe Bloggs.
        </Item>
      </TabPanels>
    </Tabs>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example,
  "icons-in-tabs": Example3,
  "customizing-layout": Example_2,
  "selection": Example_3,
  "events": Example_4,
  "keyboard-activation": Example_5,
  "density": Example8,
  "quiet": Example9,
  "disabled": Example10,
  "orientation": Example11,
  "collapse-overflow-behavior": Example_6,
  "emphasized": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
