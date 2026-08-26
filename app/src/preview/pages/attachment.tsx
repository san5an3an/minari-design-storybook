import type { ReactNode } from "react";
import {
  Check, Clock, Copy, FileSearch, FileText, FileWarning, Image as ImageIcon,
  RefreshCw, X,
} from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AttachmentImpl } from "../../systems/props";
import type { PageProps } from "./types";

// 데모에서 카드를 담는 컨테이너. mx-auto flex w-full max-w-sm flex-col gap-N
function Column({ children, gap = "gap-3" }: { children: ReactNode; gap?: string }) {
  return <div className={`mx-auto flex w-full max-w-sm flex-col ${gap}`}>{children}</div>;
}

// 공식 States 데모 렌더링
const STATES = [
  { state: "idle", title: "선택한-파일.pdf", desc: "올릴 준비가 됐어요", icon: <Clock /> },
  { state: "uploading", title: "디자인시스템.zip", desc: "올리는 중 · 64%", icon: null,
    remove: "올리기 취소" },
  { state: "processing", title: "시장조사.pdf", desc: "문서를 살펴보는 중",
    icon: <FileText /> },
  // 실패 시 재시도 버튼 함께 표시. 지우기만 두면 되돌릴 방법이 없음
  { state: "error", title: "재무-모델.xlsx", desc: "올리지 못했어요. 다시 시도해주세요.",
    icon: <FileWarning />, retry: true },
  { state: "done", title: "올린-보고서.pdf", desc: "올렸어요 · 1.8MB", icon: <Check /> },
] as const;

export function Page({ system }: PageProps) {
  const Attachment = compound<AttachmentImpl>(system, "attachment");
  const Spinner = system.impl.spinner;

  return (
    <>
      {/* 공식 첫 데모 세로 카드 그룹, 가로 카드 두 개 모두 w-full */}
      <Master note="폭은 카드가 정하지 않고 쓰는 위치가 줘요. 가로는 w-full, 가로로 늘어놓을 땐 w-64, 세로는 그쪽 고정폭에 맡겨요.">
        <Column>
          <Attachment.Group>
            {["봄-표지.png", "여름-표지.png"].map((n) => (
              <Attachment key={n} orientation="vertical">
                <Attachment.Media variant="image">
                  <span className="flex size-full items-center justify-center">
                    <ImageIcon />
                  </span>
                </Attachment.Media>
                <Attachment.Content>
                  <Attachment.Title>{n}</Attachment.Title>
                  <Attachment.Description>PNG · 410KB</Attachment.Description>
                </Attachment.Content>
              </Attachment>
            ))}
          </Attachment.Group>
          <Attachment state="uploading" className="w-full">
            <Attachment.Media><Spinner /></Attachment.Media>
            <Attachment.Content>
              <Attachment.Title>매출-대시보드.pdf</Attachment.Title>
              <Attachment.Description>올리는 중 · 64%</Attachment.Description>
            </Attachment.Content>
            <Attachment.Actions>
              <Attachment.Action aria-label="올리기 취소"><X /></Attachment.Action>
            </Attachment.Actions>
          </Attachment>
          <Attachment className="w-full">
            <Attachment.Media><FileText /></Attachment.Media>
            <Attachment.Content>
              <Attachment.Title>메시지-렌더러.tsx</Attachment.Title>
              <Attachment.Description>TypeScript · 12KB</Attachment.Description>
            </Attachment.Content>
            <Attachment.Actions>
              <Attachment.Action aria-label="메시지-렌더러.tsx 지우기"><X /></Attachment.Action>
            </Attachment.Actions>
          </Attachment>
        </Column>
      </Master>

      {/* 공식 States 데모, 전부 w-full */}
      <Kids
        axis="state"
        note="다섯은 지금 무엇을 할 수 있는지로 갈려요. 올리는 중·처리 중에는 열 수 없고, 실패에는 다시 시도할 수단이 있어야 해요."
      >
        {STATES.map((s) => (
          <Kid key={s.state} label={s.state}>
            <Column gap="gap-2">
              <Attachment state={s.state} className="w-full">
                {/* 업로드 중 배지 대신 Spinner 로딩 표시 */}
                <Attachment.Media>{s.icon ?? <Spinner />}</Attachment.Media>
                <Attachment.Content>
                  <Attachment.Title>{s.title}</Attachment.Title>
                  <Attachment.Description>{s.desc}</Attachment.Description>
                </Attachment.Content>
                <Attachment.Actions>
                  {"retry" in s && s.retry ? (
                    <Attachment.Action aria-label="다시 올리기"><RefreshCw /></Attachment.Action>
                  ) : null}
                  <Attachment.Action
                    aria-label={"remove" in s && s.remove ? s.remove : `${s.title} 지우기`}
                  >
                    <X />
                  </Attachment.Action>
                </Attachment.Actions>
              </Attachment>
            </Column>
          </Kid>
        ))}
      </Kids>

      {/* 공식 Sizes 데모, 전부 w-full, xs는 설명 없음 */}
      <Kids axis="size" note="크기는 카드가 대화 안에서 얼마나 위치를 차지할지를 정해요.">
        {(["default", "sm", "xs"] as const).map((sz) => (
          <Kid key={sz} label={sz}>
            <Column gap="gap-3">
              <Attachment size={sz} className="w-full">
                <Attachment.Media><FileText /></Attachment.Media>
                <Attachment.Content>
                  <Attachment.Title>{sz} 크기 첨부</Attachment.Title>
                  {sz === "xs" ? null : (
                    <Attachment.Description>PDF · 2.4MB</Attachment.Description>
                  )}
                </Attachment.Content>
              </Attachment>
            </Column>
          </Kid>
        ))}
      </Kids>

      {/* 공식 Group 데모, 가로 스크롤에 카드 w-64 */}
      <Kids
        axis="parts"
        title="Group"
        note="여럿이 붙으면 가로로 늘어놓고 넘겨요. 이때는 카드마다 w-64 를 줘서 줄이 맞아요."
      >
        <Kid label="AttachmentGroup" hint="카드는 w-64">
          <div className="mx-auto w-full max-w-sm">
            <Attachment.Group className="w-full">
              {["표.xlsx", "메모.txt", "지도.png"].map((n) => (
                <Attachment key={n} className="w-64">
                  <Attachment.Media><FileText /></Attachment.Media>
                  <Attachment.Content>
                    <Attachment.Title>{n}</Attachment.Title>
                    <Attachment.Description>88KB</Attachment.Description>
                  </Attachment.Content>
                  <Attachment.Actions>
                    <Attachment.Action aria-label={`${n} 지우기`}><X /></Attachment.Action>
                  </Attachment.Actions>
                </Attachment>
              ))}
            </Attachment.Group>
          </div>
        </Kid>
      </Kids>

      {/* 공식 Trigger 데모, w-full, 동작 버튼은 트리거 위에 별도 표시 */}
      <Kids
        axis="parts"
        title="Trigger"
        note="카드 전체를 덮어요. 파일을 여는 게 가장 흔한 일이라 이름만 누를 수 있게 두지 않아요. 동작 버튼은 그 위에서 따로 눌려요."
      >
        <Kid label="AttachmentTrigger" hint="카드 전체">
          <Column>
            <Attachment className="w-full">
              <Attachment.Media><FileSearch /></Attachment.Media>
              <Attachment.Content>
                <Attachment.Title>연구-요약.pdf</Attachment.Title>
                <Attachment.Description>눌러서 미리보기</Attachment.Description>
              </Attachment.Content>
              <Attachment.Actions>
                <Attachment.Action aria-label="링크 복사"><Copy /></Attachment.Action>
                <Attachment.Action aria-label="연구-요약.pdf 지우기"><X /></Attachment.Action>
              </Attachment.Actions>
              <Attachment.Trigger aria-label="연구-요약.pdf 미리보기" />
            </Attachment>
          </Column>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "폭을 정할 때", then: <>카드가 아니라 <b>쓰는 위치</b>가 줘요. 가로는 <code>w-full</code>, 가로 그룹 안은 <code>w-64</code>, 세로는 안 줘요.</> },
  { when: "상태를 알릴 때", then: <>색만으로 하지 마세요. 설명 줄에 <b>글로</b> 적어요.</> },
  { when: "올리는 중일 때", then: <>열 수 없게 해요. 아직 그 위치에 파일이 없어요.</> },
  { when: "실패했을 때", then: <><b>다시 시도</b>할 수단을 함께 주세요.</> },
  { when: "표시만 있는 버튼", then: <>무엇을 하는지 든 <code>aria-label</code> 이 필요해요.</> },
  { when: "상태가 없는 목록", then: <>이게 아니라 <b>Listrow</b> 예요.</> },
];
