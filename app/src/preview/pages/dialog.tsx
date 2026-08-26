import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { DialogProps } from "../../systems/types";
import type { PageProps } from "./types";

import { Button as UiButton } from "@/components/ui/button";
import {
  Dialog as UiDialog, DialogClose, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 스크롤되는 본문. 두 섹션이 같은 마크업 사용
function LongBody {
  return (
    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <p key={i} className="mb-4 leading-normal">
          긴 글이 들어가는 영역이에요. 창은 화면 높이를 넘지 않고, 넘치는 만큼은 이 안에서만
          움직여요. 뒤에 있는 문서가 함께 밀리지 않아야 어디를 보고 있었는지 잃지 않아요.
          읽다가 창을 닫으면 원래 있던 위치로 초점이 돌아와요.
        </p>
      ))}
    </div>
  );
}

// dialog-demo, 프로필 편집 폼 공식 기본 형태
function OfficialUsage {
  return (
    <UiDialog>
      {/* <form>이 Dialog 전체를 감쌈. 하나의 폼이어야 submit에 의미 있음 */}
      <form onSubmit={(e) => e.preventDefault}>
        <DialogTrigger render={<UiButton variant="outline" />}>창 열기</DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>프로필 수정</DialogTitle>
            <DialogDescription>
              여기서 프로필을 바꿔요. 다 끝나면 저장을 눌러요.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="ods-dialog-name">이름</Label>
              <Input id="ods-dialog-name" name="name" defaultValue="강유신" />
            </Field>
            <Field>
              <Label htmlFor="ods-dialog-username">아이디</Label>
              <Input id="ods-dialog-username" name="username" defaultValue="@yushin" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose data-cancel="true" render={<UiButton variant="outline" />}>
              취소
            </DialogClose>
            <UiButton type="submit" data-confirm="true">저장</UiButton>
          </DialogFooter>
        </DialogContent>
      </form>
    </UiDialog>
  );
}

// dialog-close-button, 오른쪽 위 X 대신 푸터에 닫기 버튼 배치
function OfficialCustomClose {
  return (
    <UiDialog>
      <DialogTrigger render={<UiButton variant="outline" />}>공유</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>링크 공유</DialogTitle>
          <DialogDescription>이 링크를 가진 사람은 누구나 볼 수 있어요.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="ods-dialog-link" className="sr-only">링크</Label>
            <Input
              id="ods-dialog-link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        {/* 표시 부착 금지. 이 그룹은 닫기 버튼만 있어 확인 우측 정렬 규칙 예외임 */}
        <DialogFooter className="sm:justify-start">
          <DialogClose render={<UiButton type="button" />}>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </UiDialog>
  );
}

// dialog-no-close-button, 오른쪽 위 X 숨김 처리
function OfficialNoClose {
  return (
    <UiDialog>
      <DialogTrigger render={<UiButton variant="outline" />}>X 없는 창</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>닫기 버튼이 없어요</DialogTitle>
          <DialogDescription>
            오른쪽 위 X 가 없어요. ESC 나 바깥을 눌러서 닫아요.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </UiDialog>
  );
}

// dialog-sticky-footer, 본문만 스크롤되고 푸터 고정
function OfficialStickyFooter {
  return (
    <UiDialog>
      <DialogTrigger render={<UiButton variant="outline" />}>붙는 푸터</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>푸터가 붙어 있어요</DialogTitle>
          <DialogDescription>
            본문이 흐르는 동안에도 아래 버튼은 고정돼 있어요.
          </DialogDescription>
        </DialogHeader>
        <LongBody />
        <DialogFooter>
          <DialogClose render={<UiButton variant="outline" />}>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </UiDialog>
  );
}

// dialog-scrollable-content, 스크롤되는 본문만 있고 푸터 없음
function OfficialScrollable {
  return (
    <UiDialog>
      <DialogTrigger render={<UiButton variant="outline" />}>흐르는 본문</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>본문이 흘러요</DialogTitle>
          <DialogDescription>창이 아니라 본문이 움직여요.</DialogDescription>
        </DialogHeader>
        <LongBody />
      </DialogContent>
    </UiDialog>
  );
}

function OfficialPage {
  return (
    <>
      <Master
        note={
          <>
            공식 <b>shadcn/ui</b> Dialog 의 기본 꼴이에요. 프로필을 고치는 폼 창이에요.
            ESC 로 닫아 보세요. 탭 키가 창 밖으로 나가지 않는 것도 확인할 수 있어요.
            <br />
            <b>색·모서리·크기는 고른 시스템의 토큰</b>이 정해요. 마크업은 공식 그대로예요.
          </>
        }
      >
        <OfficialUsage />
      </Master>

      <Kids
        axis="showCloseButton"
        title="Custom Close Button · No Close Button"
        note={
          <>
            창은 기본으로 <b>오른쪽 위에 X</b> 를 달아요(<code>showCloseButton</code> 기본값 참).
            푸터에 닫기를 따로 두거나, X 를 아예 끌 수 있어요.
          </>
        }
      >
        <Kid label="푸터에 닫기" hint="X 는 그대로 있어요">
          <OfficialCustomClose />
        </Kid>
        <Kid label="showCloseButton={false}" hint="X 를 끈 꼴">
          <OfficialNoClose />
        </Kid>
      </Kids>

      <Kids
        axis="content"
        title="Sticky Footer · Scrollable Content"
        note={
          <>
            본문이 길면 <b>창이 아니라 본문이</b> 흘러요. 푸터가 있으면 하단에 고정돼 있어서
            버튼을 찾으러 끝까지 내려가지 않아도 돼요.
          </>
        }
      >
        <Kid label="붙는 푸터" hint="본문만 흐름">
          <OfficialStickyFooter />
        </Kid>
        <Kid label="흐르는 본문" hint="푸터 없음">
          <OfficialScrollable />
        </Kid>
      </Kids>

    </>
  );
}

const SAY = {
  title: "변경 사항을 저장할까요?",
  body: "저장하지 않으면 지금까지 편집한 내용이 사라져요.",
  confirm: "저장",
};

function ContractPage({ system, active }: PageProps) {
  void active; // 활성 값에 반응하지 않는 표본
  const Button = system.impl.button;
  const Dialog = impl<DialogProps>(system, "dialog");
  // 열린 항목은 하나로 관리. 둘이 동시에 열리면 포커스 가둠이 겹치는 문제 있음
  const [open, setOpen] = React.useState<string | null>(null);
  const close =  => setOpen(null);

  const say = SAY;
  const stacked = open === "stacked";

  return (
    <>
      <Master
        note={
          <>
            ESC 로 닫아 보세요. 탭 키가 창 밖으로 나가지 않는 것도 확인할 수 있어요, 이 프로젝트가 짠
            것이 아니라 <b>{system.baseTitle}</b> 가 하는 일이에요.
          </>
        }
      >
        <Button variant="solid" tone="brand" onClick={ => setOpen("plain")}>
          열기
        </Button>
      </Master>

      <Kids
        axis="stacked"
        title="Actions"
        note={
          <>
            버튼이 3개가 되면 세로로 쌓여요. 그때 <b>확인이 맨 위, 취소가 맨 아래</b>인데 마크업
            순서는 바뀌지 않아요, <code>column-reverse</code> 하나로 두 규칙을 함께 지켜요.
          </>
        }
      >
        <Kid label="2개" hint="가로">
          <Button variant="subtle" tone="neutral" onClick={ => setOpen("plain")}>
            열어 보기
          </Button>
        </Kid>
        <Kid label="3개" hint="세로로 쌓임">
          <Button variant="subtle" tone="neutral" onClick={ => setOpen("stacked")}>
            열어 보기
          </Button>
        </Kid>
      </Kids>

      <Dialog
        open={open !== null}
        onClose={close}
        title={say.title}
        stacked={stacked}
        actions={
          <>
            <Button variant="subtle" tone="neutral" onClick={close} data-cancel="true">
              취소
            </Button>
            {stacked && (
              <Button variant="subtle" tone="danger" onClick={close} data-destructive="true">
                저장 안 함
              </Button>
            )}
            {/* 표시가 danger여도 확인 버튼은 자동 적용 안 됨. 파괴적 동작은 버튼에 별도 지정 */}
            <Button variant="solid" tone="brand" onClick={close} data-confirm="true">
              {say.confirm}
            </Button>
          </>
        }
      >
        {say.body}
      </Dialog>
    </>
  );
}

export function Page(props: PageProps) {
  // 베이스 구분 지점
  return props.system.baseKey === "shadcn"
    ? <OfficialPage />
    : <ContractPage {...props} />;
}

export const conditions: readonly Condition[] = [
  {
    when: "되돌릴 수 없는 일을 물을 때",
    then: (
      <>
        이 컴포넌트가 아니라 <b>AlertDialog</b> 예요. 성격 표시와{" "}
        <code>destructive</code> 는 저쪽 것이에요. 여기엔 성격이 없어요.
      </>
    ),
  },
  {
    when: "경고만 하면 될 때",
    then: (
      <>
        창으로 멈춰 세우지 않아요. <b>Alert</b> 나 <b>Banner</b> 예요, 멈출 만큼이 아니면
        멈추지 않는 게 맞아요.
      </>
    ),
  },
  {
    when: "버튼을 세로로 쌓을 때",
    then: (
      <>
        마크업은 그대로 <code>[취소 … 확인]</code> 이에요. 순서를 뒤집지 말고{" "}
        <code>column-reverse</code> 로 그려요. 읽는 순서와 보는 순서가 따로 놀면 안 돼요.
      </>
    ),
  },
  {
    when: "되돌릴 수 있는 동작일 때",
    then: <>창으로 막지 않아요. 그냥 실행하고 되돌리기를 줘요. 확인창을 남발하면 안 읽고 눌러요.</>,
  },
  {
    when: "그냥 내용을 묶고 싶을 때",
    then: (
      <>
        Dialog 가 아니라 <b>Card</b> 예요. 흐름을 멈추고 결정을 받는 곳에만 써요.
      </>
    ),
  },
];
