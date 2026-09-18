// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/breadcrumbs/Breadcrumbs.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Breadcrumbs, Item, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Breadcrumbs>
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
      <Item key="march 2020 assets">March 2020 Assets</Item>
    </Breadcrumbs>
    </>
  );
}

function Example() {
  let folders = [
    {id: 1, label: 'Home'},
    {id: 2, label: 'Trendy'},
    {id: 3, label: 'March 2020 Assets'}
  ];
  let [folderId, setFolderId] = React.useState(null);
  return (
    <div>
      <Breadcrumbs onAction={(a) => setFolderId(a)}>
        {folders.map(f => <Item key={f.id}>{f.label}</Item>)}
      </Breadcrumbs>
      <p>You pressed folder ID: {folderId}</p>
    </div>
  );
}

function Example3() {
  return (
    <>
    <Breadcrumbs>
      <Item href="#">Home</Item>
      <Item href="#">React Spectrum</Item>
      <Item>Breadcrumbs</Item>
    </Breadcrumbs>
    </>
  );
}

function Example4() {
  return (
    <>
    <Breadcrumbs size="S">
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
    </Breadcrumbs>
    </>
  );
}

function Example5() {
  return (
    <>
    <Breadcrumbs size="M">
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
    </Breadcrumbs>
    </>
  );
}

function Example6() {
  return (
    <>
    <Breadcrumbs size="L">
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
    </Breadcrumbs>
    </>
  );
}

function Example7() {
  return (
    <>
    <Breadcrumbs isMultiline>
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
      <Item key="march 2020 assets">March 2020 Assets</Item>
    </Breadcrumbs>
    </>
  );
}

function Example8() {
  return (
    <>
    <View overflow="hidden" width="200px">
      <Breadcrumbs showRoot>
        <Item key="home">Home</Item>
        <Item key="trendy">Trendy</Item>
        <Item key="2020 assets">March 2020 Assets</Item>
        <Item key="winter">Winter</Item>
        <Item key="holiday">Holiday</Item>
      </Breadcrumbs>
    </View>
    </>
  );
}

function Example9() {
  return (
    <>
    <Breadcrumbs isDisabled>
      <Item key="home">Home</Item>
      <Item key="trendy">Trendy</Item>
      <Item key="march 2020 assets">March 2020 Assets</Item>
    </Breadcrumbs>
    </>
  );
}

function Example10() {
  return (
    <>
    <Breadcrumbs>
      <Item key="shared">My Shared Documents</Item>
      <Item key="catalogue">North America Spring Catalogue</Item>
      <Item key="march 2020">March 2020</Item>
      <Item key="assets">Downloaded Screenshots and Assets (approval required)</Item>
      <Item key="streetwear">Streetwear</Item>
      <Item key="jackets">Jackets</Item>
    </Breadcrumbs>
    </>
  );
}

function Example11() {
  return (
    <>
    <Breadcrumbs showRoot>
      <Item key="shared">My Shared Documents</Item>
      <Item key="catalogue">North America Spring Catalogue</Item>
      <Item key="march 2020">March 2020</Item>
      <Item key="assets">Downloaded Screenshots and Assets (approval required)</Item>
    </Breadcrumbs>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "events-1": Example,
  "links-1": Example3,
  "visual-options-1": Example4,
  "visual-options-2": Example5,
  "visual-options-3": Example6,
  "visual-options-4": Example7,
  "visual-options-5": Example8,
  "visual-options-6": Example9,
  "visual-options-7": Example10,
  "visual-options-8": Example11,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
