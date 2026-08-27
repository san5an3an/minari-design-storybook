import * as React from "react";
import { Alert } from "../../../bases/shadcn/Alert";
import { Alertdialog } from "../../../bases/shadcn/Alertdialog";
import { Banner } from "../../../bases/shadcn/Banner";
import { Bubble } from "../../../bases/shadcn/Bubble";
import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Dialog } from "../../../bases/shadcn/Dialog";
import { Drawer } from "../../../bases/shadcn/Drawer";
import { Hovercard } from "../../../bases/shadcn/Hovercard";
import { Message } from "../../../bases/shadcn/Message";
import { Messagescroller } from "../../../bases/shadcn/Messagescroller";
import { Popover } from "../../../bases/shadcn/Popover";
import { Sheet } from "../../../bases/shadcn/Sheet";
import { Stages } from "../../../bases/shadcn/Stages";
import { Toast } from "../../../bases/shadcn/Toast";
import { Tooltip } from "../../../bases/shadcn/Tooltip";

const CHAT = [
  { who: "상대", text: "이번 분기 보고서 초안 올려 두었습니다." },
  { who: "나", text: "고맙습니다. 지역별 표만 한 번 더 볼게요." },
  { who: "상대", text: "네, 인천 수치가 어제 갱신됐어요." },
  { who: "나", text: "확인했습니다. 그대로 올리겠습니다." },
] as const;

export function Feedback {
  const [dialog, setDialog] = React.useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* 화면 상단에서 한 번 안내하는 문구 */}
      <Banner
        soft
        title="8월 30일 02:00~04:00 점검이 있습니다"
        actions={<Button variant="plain" size="sm">일정 보기</Button>}
      >
        그 시간에는 내보내기가 잠시 멈춥니다.
      </Banner>

      {/* 문서 흐름 안에 머무는 알림, 네 가지 종류 */}
      <Card title="알림" description="흐름을 멈추지 않고 곁에서 말함">
        <div className="mt-2 flex flex-col gap-3">
          <Alert tone="info" icon title="자동 저장이 켜져 있습니다">
            마지막 저장은 2분 전입니다.
          </Alert>
          <Alert tone="success" icon title="내보내기가 끝났습니다">
            그룹 파일이 다운로드 폴더에 있습니다.
          </Alert>
          <Alert tone="warning" icon title="좌석이 두 자리 남았습니다">
            더 필요하면 요금제를 올려야 합니다.
          </Alert>
          <Alert
            tone="danger"
            icon
            title="지난 결제가 실패했습니다"
            action={<Button variant="outline" size="sm">카드 바꾸기</Button>}
          >
            8월 24일 시도가 거절됐습니다.
          </Alert>
        </div>
      </Card>

      {/* 정지된 대상 표시 */}
      <Card title="무엇이 멈추는가" description="같은 '떠 있는 것'이라도 멈추는 정도가 다름">
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Tooltip content="설명 한 줄이면 이것">
            <Button variant="outline" size="sm">Tooltip</Button>
          </Tooltip>

          <Popover
            trigger={<Button variant="outline" size="sm">Popover</Button>}
            title="뒤쪽이 계속 동작함"
            description="흐름을 멈추지 않음. 바깥을 눌러 닫음."
          />

          <Hovercard trigger={<Button variant="outline" size="sm">HoverCard</Button>}>
            <p style={{ fontSize: "var(--semantic-text-body-sm)" }}>
              올리면 표시. <strong>터치 환경에서는 표시되지 않음.</strong> 보조 정보만 사용.
            </p>
          </Hovercard>

          <Button variant="outline" size="sm" onClick={ => setDialog(true)}>
            Dialog
          </Button>
          <Dialog
            open={dialog}
            onClose={ => setDialog(false)}
            title="보고서를 올릴까요?"
            actions={
              <>
                <Button variant="outline" onClick={ => setDialog(false)}>취소</Button>
                <Button variant="solid" tone="brand" onClick={ => setDialog(false)}>올리기</Button>
              </>
            }
          >
            올리면 팀 전체가 볼 수 있습니다. 나중에 내릴 수 있습니다.
          </Dialog>

          <Alertdialog
            trigger={<Button variant="outline" tone="danger" size="sm">AlertDialog</Button>}
            variant="destructive"
            title="이 보고서를 지울까요?"
            description="지우면 되돌릴 수 없습니다. 바깥을 눌러도 닫히지 않습니다."
          />

          <Drawer
            trigger={<Button variant="outline" size="sm">Drawer</Button>}
            title="끌어서 여닫는 패널"
            description="끄는 동작이 조작 그 자체임. 잡을 위치가 보여야 함."
          />

          <Sheet
            trigger={<Button variant="outline" size="sm">Sheet</Button>}
            side="right"
            title="변에 붙는 패널"
            description="옆에서 밀려 들어오는 구조. 끌기가 조작이면 Drawer 임."
          />

          <Button
            variant="outline"
            size="sm"
            onClick={ =>
              Toast.show({ title: "저장했습니다", description: "2분 뒤 자동으로 사라집니다" })
            }
          >
            Toast 띄우기
          </Button>
        </div>
        <Toast.Region />
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 진행 단계 */}
        <Card title="진행" description="지금 어디까지 왔는지">
          <div className="mt-2">
            <Stages
              current={1}
              items={[{ label: "자료 올리기" }, { label: "검토" }, { label: "승인" }, { label: "게시" }]}
            />
          </div>
        </Card>

        {/* 대화. 내용만 담으면 Bubble, 발신자와 시각까지 담으면 Message */}
        <Card title="대화" description="말만 담으면 Bubble, 누가 언제까지면 Message">
          <div className="mt-2">
            <Messagescroller.Provider>
              {/* 요소는 className, children인 Common만 받고 style 없음. 높이는 배치라 Tailwind로 처리 */}
              <Messagescroller.Viewport className="h-48">
                <Messagescroller.Content>
                  {CHAT.map((c, i) => (
                    <Messagescroller.Item key={i}>
                      <Message align={c.who === "나" ? "end" : "start"}>
                        <Message.Content>
                          <Bubble align={c.who === "나" ? "end" : "start"}>{c.text}</Bubble>
                        </Message.Content>
                      </Message>
                    </Messagescroller.Item>
                  ))}
                </Messagescroller.Content>
              </Messagescroller.Viewport>
            </Messagescroller.Provider>
          </div>
        </Card>
      </div>
    </div>
  );
}
