import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Command } from "../../../bases/shadcn/Command";
import { Contextmenu } from "../../../bases/shadcn/Contextmenu";
import { Link } from "../../../bases/shadcn/Link";
import { Menu } from "../../../bases/shadcn/Menu";
import { Menubar } from "../../../bases/shadcn/Menubar";
import { Navigationmenu } from "../../../bases/shadcn/Navigationmenu";
import { Pageheader } from "../../../bases/shadcn/Pageheader";
import { Sidebar } from "../../../bases/shadcn/Sidebar";
import { Tabs } from "../../../bases/shadcn/Tabs";
import { Toolbar } from "../../../bases/shadcn/Toolbar";

const ACTIONS = [
  { label: "이름 바꾸기" },
  { label: "복제" },
  { separator: true },
  { label: "보관" },
  { label: "지우기", danger: true },
];

export function Navigation {
  return (
    <div className="flex flex-col gap-6">
      <Card title="제목 구역" description="화면이 무엇인지 먼저 알려주는 영역">
        <div className="mt-2">
          <Pageheader
            title="8월 매출 보고"
            lede="지역별 실적과 신규 계약을 함께 표시"
            meta={<Link href="#">마지막 갱신 2분 전</Link>}
            actions={
              <div className="flex gap-2">
                <Button variant="outline" size="sm">공유</Button>
                <Button variant="solid" tone="brand" size="sm">게시</Button>
              </div>
            }
          />
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 위치 이동 여부 */}
        <Card title="옮기는 것" description="고르면 페이지가 이동. 링크임">
          <div className="mt-2 flex flex-col gap-4">
            {/* indicator 사용 금지, Base UI 제약 위반으로 앱 멈출 수 있음 */}
            <Navigationmenu
              items={[
                { label: "개요", href: "#", current: true },
                { label: "분석", href: "#" },
                { label: "설정", href: "#" },
              ]}
            />
            <Sidebar
              items={[
                { label: "대시보드", active: true },
                { label: "보고서", badge: "3" },
                { label: "구성원" },
                { label: "설정", muted: true },
              ]}
            />
          </div>
        </Card>

        <Card title="시키는 것" description="고르면 동작이 발생. 동작임">
          <div className="mt-2 flex flex-col gap-4">
            <Menubar
              menus={[
                { label: "파일", items: [{ label: "새로 만들기" }, { label: "열기" }, { separator: true }, { label: "내보내기" }] },
                { label: "편집", items: [{ label: "실행 취소" }, { label: "다시 실행" }] },
                { label: "보기", items: [{ label: "확대" }, { label: "축소" }] },
              ]}
            />

            <div className="flex flex-wrap items-center gap-3">
              <Menu trigger={<Button variant="outline" size="sm">동작</Button>} items={ACTIONS} />

              <Contextmenu
                trigger={
                  <div
                    className="flex h-16 w-40 items-center justify-center"
                    style={{
                      background: "var(--semantic-bg-neutral-subtle)",
                      borderRadius: "var(--semantic-radius-container)",
                      color: "var(--semantic-fg-neutral-subtle)",
                      fontSize: "var(--semantic-text-caption)",
                    }}
                  >
                    오른쪽 눌러 보세요
                  </div>
                }
                items={ACTIONS}
              />
            </div>

            {/* 동작이 주인공인 막대 */}
            <Toolbar>
              <Button variant="plain" size="sm">굵게</Button>
              <Button variant="plain" size="sm">기울임</Button>
              <Toolbar.Separator />
              <Button variant="plain" size="sm">왼쪽</Button>
              <Button variant="plain" size="sm">가운데</Button>
              <Toolbar.Separator />
              <Toolbar.Text>자동 저장됨</Toolbar.Text>
            </Toolbar>
          </div>
        </Card>
      </div>

      {/* 같은 위치에서 내용만 교체 */}
      <Card title="같은 위치" description="위치를 옮기지 않고 내용만 변경">
        <div className="mt-2">
          <Tabs
            defaultValue="summary"
            items={[
              { value: "summary", label: "요약", content: <p>지역 4곳, 신규 458건, 순이익 +4.1%.</p> },
              { value: "detail", label: "상세", content: <p>서울이 전체의 40%를 차지합니다.</p> },
              { value: "log", label: "기록", content: <p>어제 02:14 에 자동 동기화가 돌았습니다.</p> },
            ]}
          />
        </div>
      </Card>

      {/* 입력해서 좁히고 선택 실행하는 위치 지정 */}
      <Card
        title="빠른 실행"
        description="이것만으로 기능을 제공하지 않음. 다른 길이 늘 함께 있어야 함"
      >
        <div className="mt-2">
          <Command
            placeholder="무엇을 할까요?"
            groups={[
              { heading: "이동", items: [{ label: "대시보드", hint: "G D" }, { label: "보고서", hint: "G R" }] },
              { heading: "만들기", items: [{ label: "새 보고서", hint: "N" }, { label: "구성원 초대" }] },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
