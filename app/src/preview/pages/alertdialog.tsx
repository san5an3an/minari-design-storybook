import type { ReactNode } from "react";
import { Bluetooth, CircleFadingPlus, Trash2 } from "lucide-react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AlertdialogProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Alertdialog = impl<AlertdialogProps>(system, "alertdialog");
  const Button = system.impl.button;

  // 두 색 나란히 배치. form은 그 선의 모양을 지정하는 값
  const pair = (
    form: string,
    size: AlertdialogProps["size"],
    media: { on: ReactNode; off: ReactNode } | null,
    d: { trigger: string; title: string; desc: string; cancel: string; action: string },
    x: { trigger: string; title: string; desc: string; cancel: string; action: string },
  ) => (
    <>
      <Kid label="default" hint={`${form} · 기본값`}>
        <Alertdialog
          size={size}
          media={media?.off}
          trigger={<Button variant="outline">{d.trigger}</Button>}
          title={d.title}
          description={d.desc}
          cancelLabel={d.cancel}
          actionLabel={d.action}
        />
      </Kid>
      {/* 공식 트리거도 variant=destructive. 색상은 옅은 분홍 바탕에 붉은 글자임 */}
      <Kid label="destructive" hint={`${form} · danger 색`}>
        <Alertdialog
          variant="destructive"
          size={size}
          media={media?.on}
          trigger={<Button variant="subtle" tone="danger">{x.trigger}</Button>}
          title={x.title}
          description={x.desc}
          cancelLabel={x.cancel}
          actionLabel={x.action}
        />
      </Kid>
    </>
  );

  return (
    <>
      {/* 공식 Basic 데모, 표시 없음, 크기 기본값 */}
      <Master note="바깥을 눌러도 닫히지 않아요. 실수로 지나가는 걸 막는 게 이 창의 존재 이유예요.">
        <Alertdialog
          trigger={<Button variant="outline">문서 지우기</Button>}
          variant="destructive"
          title="이 문서를 지울까요?"
          description="지우면 되돌릴 수 없어요. 함께 일하는 사람도 볼 수 없게 돼요."
          cancelLabel="그대로 둘게요"
          actionLabel="지울게요"
        />
      </Master>

      <Kids
        axis="variant"
        title="Basic. size=default · 표시 없음"
        note="표시도 없고 크기도 기본이에요. 가장 흔한 꼴이에요. 갈리는 건 되돌릴 수 없는 쪽 버튼의 색 하나뿐이에요."
      >
        {pair("basic", "default", null,
          { trigger: "판 올리기", title: "이 판을 올릴까요?",
            desc: "올리면 이전 판으로 되돌릴 수 없어요. 함께 일하는 사람에게 바로 보여요.",
            cancel: "나중에 할게요", action: "올릴게요" },
          { trigger: "계정 없애기", title: "계정을 없앨까요?",
            desc: "글과 댓글이 함께 사라져요. 되돌릴 수 없어요.",
            cancel: "그대로 둘게요", action: "없앨게요" })}
      </Kids>

      <Kids
        axis="variant"
        title="Small. size=sm · 표시 없음"
        note="한 가지만 묻는 짧은 창이라 좁게 렌더링돼요. 글자 크기는 그대로예요. 좁아진 창에서 글까지 줄이면 읽어야 할 문장이 더 작아져요."
      >
        {pair("small", "sm", null,
          { trigger: "마이크 권한", title: "마이크를 쓰도록 허용할까요?",
            desc: "이 사이트가 마이크로 소리를 들을 수 있게 돼요.",
            cancel: "허용하지 않을게요", action: "허용할게요" },
          { trigger: "기기 연결 끊기", title: "이 기기의 연결을 끊을까요?",
            desc: "다시 연결하려면 케이블을 뽑았다 꽂아야 해요.",
            cancel: "그대로 둘게요", action: "끊을게요" })}
      </Kids>

      <Kids
        axis="variant"
        title="Media. size=default · 표시 있음"
        note="표시가 붙어요. 넓을 때는 표시가 왼쪽에서 제목과 설명 두 줄을 걸쳐요. destructive 는 표시 위치도 함께 물들어요."
      >
        {pair("media", "default", { off: <CircleFadingPlus />, on: <Trash2 /> },
          { trigger: "프로젝트 공유", title: "이 프로젝트를 공유할까요?",
            // 길이도 공식 데모와 동일하게 맞추기
            desc: "링크를 가진 사람은 누구나 이 프로젝트를 열어 보고 고칠 수 있어요.",
            cancel: "그만둘게요", action: "공유할게요" },
          { trigger: "프로젝트 지우기", title: "이 프로젝트를 지울까요?",
            desc: "파일과 기록이 함께 사라져요. 되돌릴 수 없어요.",
            cancel: "그대로 둘게요", action: "지울게요" })}
      </Kids>

      <Kids
        axis="variant"
        title="Small with Media. size=sm · 표시 있음"
        note="좁은 창이라 표시가 늘 글 위에 렌더링되고 전부 가운데로 모여요. 오른쪽이 공식 Destructive 데모와 같은 조합이에요."
      >
        {pair("small + media", "sm", { off: <Bluetooth />, on: <Trash2 /> },
          { trigger: "기기 연결 허용", title: "이 기기를 연결할까요?",
            desc: "USB 기기가 이 컴퓨터에 연결되도록 허용할까요?",
            cancel: "허용하지 않을게요", action: "허용할게요" },
          { trigger: "대화 지우기", title: "이 대화를 지울까요?",
            desc: "이 대화가 영영 사라져요. 대화 중에 저장된 기억도 함께 지워져요.",
            cancel: "그대로 둘게요", action: "지울게요" })}
      </Kids>

      <Kids axis="label" title="Usage" note="버튼 글자가 동작을 말해야 해요. '확인'으로 두면 무엇이 확인인지 제목을 되읽어야 알아요.">
        <Kid label="동작을 적음" hint="권장">
          <Alertdialog
            variant="destructive"
            trigger={<Button variant="outline">계정 없애기</Button>}
            title="계정을 없앨까요?"
            description="글과 댓글이 함께 사라져요."
            cancelLabel="그대로 둘게요"
            actionLabel="없앨게요"
          />
        </Kid>
        <Kid label="내보내기">
          <Alertdialog
            trigger={<Button variant="outline">기기에서 로그아웃</Button>}
            title="모든 기기에서 나갈까요?"
            description="다시 들어오려면 비밀번호가 필요해요."
            cancelLabel="여기 있을게요"
            actionLabel="전부 나갈게요"
          />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "되돌릴 수 있을 때", then: <>이 창을 쓰지 마세요. 그냥 하고 <b>되돌리기</b>를 주세요.</> },
  { when: "바깥을 눌렀을 때", then: <>닫히지 않아요. 이게 <b>Dialog</b> 와 갈리는 지점이에요.</> },
  { when: "버튼 글자", then: <>동작을 그대로 적어요. <b>지울게요</b>·<b>그대로 둘게요</b>.</> },
  { when: "지우거나 되돌릴 수 없을 때", then: <><code>variant="destructive"</code> 를 줘요. 확인 버튼과 표시가 danger 색이 돼요.</> },
  { when: "색만으로 알릴 때", then: <>안 돼요. 색은 <b>글자와 모양을 거들 뿐</b>이에요.</> },
  { when: "한 가지만 물을 때", then: <><code>size="sm"</code> 예요. 넓은 창에 한 줄만 있으면 글이 떠 보여요.</> },
];
