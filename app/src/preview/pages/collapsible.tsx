import * as React from "react";
import {
  ChevronDownIcon, ChevronRightIcon, ChevronsUpDown, FileIcon, FolderIcon,
  MaximizeIcon, MinimizeIcon,
} from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { CollapsibleImpl } from "../../systems/props";
import type { PageProps } from "./types";

import { Button as UiButton } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 공식이 rounded-md로 두는 부분, 형태 항목에서 확인
const BOX = { borderRadius: "var(--component-collapsible-radius)" } as const;

function OfficialDemo({ C }: { C: CollapsibleImpl }) {
  const [open, setOpen] = React.useState(false);

  return (
    <C open={open} onOpenChange={setOpen} className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">주문 #4189</h4>
        {/* render prop으로 교체. 감싸면 button 안에 button이 중첩되는 문제가 있음 */}
        <C.Trigger
          render={
            <UiButton variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">자세히 보기</span>
            </UiButton>
          }
        />
      </div>
      <div
        className="flex items-center justify-between border px-4 py-2 text-sm"
        style={BOX}
      >
        <span className="text-muted-foreground">상태</span>
        <span className="font-medium">배송 완료</span>
      </div>
      <C.Content className="flex flex-col gap-2">
        <div className="border px-4 py-2 text-sm" style={BOX}>
          <p className="font-medium">받는 곳</p>
          <p className="text-muted-foreground">서울 중구 세종대로 110</p>
        </div>
        <div className="border px-4 py-2 text-sm" style={BOX}>
          <p className="font-medium">품목</p>
          <p className="text-muted-foreground">스튜디오 헤드폰 2개</p>
        </div>
      </C.Content>
    </C>
  );
}

function OfficialBasic({ C }: { C: CollapsibleImpl }) {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <C className="transition-colors duration-200 ease-out data-open:bg-muted">
          <C.Trigger
            render={
              <UiButton variant="ghost" className="w-full">
                상품 정보
                <ChevronDownIcon className="ml-auto transition-transform duration-200 ease-out group-data-panel-open/button:rotate-180" />
              </UiButton>
            }
          />
          <C.Content>
            <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
              <div>접었다 펴면서 더 많은 내용을 보여 주는 자리예요.</div>
              <UiButton size="xs">더 알아보기</UiButton>
            </div>
          </C.Content>
        </C>
      </CardContent>
    </Card>
  );
}

function OfficialSettings({ C }: { C: CollapsibleImpl }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>모서리</CardTitle>
        <CardDescription>요소의 모서리를 얼마나 둥글게 할지 정해요.</CardDescription>
      </CardHeader>
      <CardContent>
        <C open={open} onOpenChange={setOpen} className="flex items-start gap-2">
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="ods-radius-x" className="sr-only">가로</FieldLabel>
              <Input id="ods-radius-x" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="ods-radius-y" className="sr-only">세로</FieldLabel>
              <Input id="ods-radius-y" placeholder="0" defaultValue={0} />
            </Field>
            <C.Content className="col-span-full grid grid-cols-subgrid gap-2 -m-1 p-1">
              <Field>
                <FieldLabel htmlFor="ods-radius-x2" className="sr-only">왼쪽 아래</FieldLabel>
                <Input id="ods-radius-x2" placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel htmlFor="ods-radius-y2" className="sr-only">오른쪽 아래</FieldLabel>
                <Input id="ods-radius-y2" placeholder="0" defaultValue={0} />
              </Field>
            </C.Content>
          </FieldGroup>
          <C.Trigger
            render={
              <UiButton variant="outline" size="icon">
                {open ? <MinimizeIcon /> : <MaximizeIcon />}
                <span className="sr-only">항목 더 보기</span>
              </UiButton>
            }
          />
        </C>
      </CardContent>
    </Card>
  );
}

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

const FILE_TREE: FileTreeItem[] = [
  {
    name: "components",
    items: [
      {
        name: "ui",
        items: [
          { name: "button.tsx" }, { name: "card.tsx" }, { name: "dialog.tsx" },
          { name: "input.tsx" }, { name: "select.tsx" }, { name: "table.tsx" },
        ],
      },
      { name: "login-form.tsx" },
      { name: "register-form.tsx" },
    ],
  },
  { name: "lib", items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }] },
  {
    name: "hooks",
    items: [
      { name: "use-media-query.ts" }, { name: "use-debounce.ts" },
      { name: "use-local-storage.ts" },
    ],
  },
  { name: "types", items: [{ name: "index.d.ts" }, { name: "api.d.ts" }] },
  {
    name: "public",
    items: [{ name: "favicon.ico" }, { name: "logo.svg" }, { name: "images" }],
  },
  { name: "app.tsx" }, { name: "layout.tsx" }, { name: "globals.css" },
  { name: "package.json" }, { name: "tsconfig.json" }, { name: "README.md" },
  { name: ".gitignore" },
];

function OfficialFileTree({ C }: { C: CollapsibleImpl }) {
  const renderItem = (item: FileTreeItem) => {
    if ("items" in item) {
      return (
        <C key={item.name}>
          <C.Trigger
            render={
              <UiButton
                variant="ghost"
                size="sm"
                className="w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronRightIcon className="transition-transform duration-200 ease-out group-data-panel-open/button:rotate-90" />
                <FolderIcon />
                {item.name}
              </UiButton>
            }
          />
          <C.Content className="mt-1 ml-5">
            <div className="flex flex-col gap-1">{item.items.map(renderItem)}</div>
          </C.Content>
        </C>
      );
    }
    return (
      <UiButton
        key={item.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2 text-foreground"
      >
        <FileIcon />
        <span>{item.name}</span>
      </UiButton>
    );
  };

  return (
    <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">탐색기</TabsTrigger>
            <TabsTrigger value="outline">개요</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">{FILE_TREE.map(renderItem)}</div>
      </CardContent>
    </Card>
  );
}

export function Page({ system }: PageProps) {
  const C = compound<CollapsibleImpl>(system, "collapsible");

  return (
    <>
      <Master
        note={
          <>
            종류가 <b>하나</b>다. 여러 종류를 다루고 어느 것을 펼지 정해야 하면{" "}
            <b>Accordion</b> 이에요. 여는 요소는 <b>버튼</b>이고 루트에는 테두리도 바탕도 없어요. 공식 등록본에 클래스가 한 글자도 없고, <b>모양은 조합이 만들어요.</b>
          </>
        }
      >
        <OfficialDemo C={C} />
      </Master>

      <Kids
        axis="open"
        title="Controlled State"
        note={
          <>
            <code>open</code> 과 <code>onOpenChange</code> 를 함께 주면 여닫는 것을 밖에서 쥔다.
            쥐지 않을 때는 <code>defaultOpen</code> 하나면 돼요. 둘을 같이 주지 않아요.
          </>
        }
      >
        <Kid label="접힘" hint="기본">
          <div className="w-[16rem]">
            <C className="flex flex-col gap-2">
              <C.Trigger render={<UiButton variant="outline">반품 규정 3가지</UiButton>} />
              {/* 테두리는 안쪽 div가 담당. Panel은 높이 측정 위치라 여백이나 테두리 얹을 수 없음 */}
              <C.Content>
                <div className="border px-4 py-2 text-sm" style={BOX}>
                  받은 날부터 7일 안에 신청해요.
                </div>
              </C.Content>
            </C>
          </div>
        </Kid>
        <Kid label="펴짐" hint="defaultOpen">
          <div className="w-[16rem]">
            <C defaultOpen className="flex flex-col gap-2">
              <C.Trigger render={<UiButton variant="outline">반품 규정 3가지</UiButton>} />
              <C.Content>
                <div className="border px-4 py-2 text-sm" style={BOX}>
                  받은 날부터 7일 안에 신청해요.
                </div>
              </C.Content>
            </C>
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="render"
        title="Basic · Settings Panel"
        note={
          <>
            여는 위치에 <b>무엇을 끼우느냐</b>가 이 컴포넌트의 전부예요. 전폭 버튼을 끼우면 목록의
            한 줄이 되고, 아이콘 버튼을 끼우면 셀 옆에 붙는 핸들이 돼요. 여닫는 배선은 같아요.
          </>
        }
      >
        <Kid label="Basic" hint="전폭 버튼">
          <OfficialBasic C={C} />
        </Kid>
        <Kid label="Settings Panel" hint="아이콘 버튼">
          <OfficialSettings C={C} />
        </Kid>
      </Kids>

      <Kids
        axis="nested"
        title="File Tree"
        note={
          <>
            <b>자기 안에 자기를 넣어요.</b> 여기가 Accordion 과 나뉘는 위치예요. 한 층에 종류가
            여럿이면 아코디언이지만, <b>층을 쌓는 것</b>은 이쪽이에요. 아코디언은 자기 안에
            자기를 못 넣어요.
          </>
        }
      >
        <Kid label="깊이 3" hint="폴더 안 폴더">
          <OfficialFileTree C={C} />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "종류가 여러 개일 때", then: <><b>Accordion</b> 이에요. 어느 걸 펼지 관리해야 하니까요.</> },
  {
    when: "여는 위치를 만들 때",
    then: <><code>render</code> 로 <b>버튼을 갈아 끼워요.</b> 감싸면 버튼 안에 버튼이 들어가요.</>,
  },
  {
    when: "아이콘만 있는 버튼일 때",
    then: <><code>sr-only</code> 글자를 함께 둬요. 없으면 이름 없는 버튼으로 읽혀요.</>,
  },
];
