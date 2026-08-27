import * as React from "react";
import { Calendar } from "../../../bases/shadcn/Calendar";
import { Card } from "../../../bases/shadcn/Card";
import { Checkbox } from "../../../bases/shadcn/Checkbox";
import { Combobox } from "../../../bases/shadcn/Combobox";
import { Datepicker } from "../../../bases/shadcn/Datepicker";
import { Field } from "../../../bases/shadcn/Field";
import { Input } from "../../../bases/shadcn/Input";
import { Inputgroup } from "../../../bases/shadcn/Inputgroup";
import { Inputotp } from "../../../bases/shadcn/Inputotp";
import { Label } from "../../../bases/shadcn/Label";
import { Nativeselect } from "../../../bases/shadcn/Nativeselect";
import { Radio } from "../../../bases/shadcn/Radio";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Select } from "../../../bases/shadcn/Select";
import { Slider } from "../../../bases/shadcn/Slider";
import { Stepper } from "../../../bases/shadcn/Stepper";
import { Switch } from "../../../bases/shadcn/Switch";
import { Toggle } from "../../../bases/shadcn/Toggle";

const PLANS = { starter: "스타터", team: "팀", scale: "스케일" };
const CITIES = ["서울", "부산", "대구", "인천", "광주", "대전", "울산"];

export function Form {
  const [plan, setPlan] = React.useState<string[]>(["team"]);
  const [seats, setSeats] = React.useState(12);
  const [budget, setBudget] = React.useState(60);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [bold, setBold] = React.useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* 값 입력 기본 그룹, 라벨/설명/오류가 필드에 붙는 방식 */}
      <Card title="작업공간" description="라벨과 설명이 필드에 어떻게 붙는지">
        <div className="mt-2 grid gap-5 lg:grid-cols-2">
          <Field label="작업공간 이름" htmlFor="ws-name" description="나중에 바꿀 수 있어요.">
            <Input id="ws-name" defaultValue="Acme 본부" />
          </Field>

          <Field label="주소" htmlFor="ws-slug" description="영문 소문자와 하이픈만">
            {/* InputGroup 자체가 입력 필드, Input 제외. void 오류로 트리 소실 문제임 */}
            <Inputgroup
              id="ws-slug"
              defaultValue="hq"
              prefix={<Inputgroup.Text>acme.co.kr/</Inputgroup.Text>}
            />
          </Field>

          <Field label="요금제" htmlFor="ws-plan">
            <Select items={PLANS} />
          </Field>

          <Field label="지역" htmlFor="ws-region" description="브라우저가 그리는 고르개">
            <Nativeselect id="ws-region" defaultValue="seoul">
              <Nativeselect.OptGroup label="수도권">
                <Nativeselect.Option value="seoul">서울</Nativeselect.Option>
                <Nativeselect.Option value="incheon">인천</Nativeselect.Option>
              </Nativeselect.OptGroup>
              <Nativeselect.OptGroup label="영남">
                <Nativeselect.Option value="busan">부산</Nativeselect.Option>
                <Nativeselect.Option value="daegu">대구</Nativeselect.Option>
              </Nativeselect.OptGroup>
            </Nativeselect>
          </Field>

          <Field label="배송 도시" htmlFor="ws-city" description="입력으로 필터링, 항목이 많을 때">
            <Combobox items={CITIES} placeholder="도시를 고르세요" />
          </Field>

          <Field label="시작일" htmlFor="ws-date">
            <Datepicker value={date} onValueChange={setDate} placeholder="날짜 고르기" />
          </Field>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 켜고 끄는 항목 목록 */}
        <Card title="알림" description="켜짐은 핸들이 오른쪽임">
          <div className="mt-2 flex flex-col gap-4">
            {[
              { id: "n-email", label: "이메일 알림", on: true },
              { id: "n-push", label: "푸시 알림", on: false },
              { id: "n-digest", label: "주간 요약", on: true },
            ].map((n) => (
              <div key={n.id} className="flex items-center justify-between gap-4">
                <Label htmlFor={n.id}>{n.label}</Label>
                <Switch id={n.id} defaultChecked={n.on} />
              </div>
            ))}
          </div>
        </Card>

        <Card title="권한" description="여럿을 고르면 Checkbox, 하나면 Radio">
          <div className="mt-2 grid gap-5 sm:grid-cols-2">
            <Field label="할 수 있는 일">
              <Checkbox.Group>
                <Field label="읽기" htmlFor="p-read" orientation="horizontal">
                  <Checkbox id="p-read" defaultChecked />
                </Field>
                <Field label="쓰기" htmlFor="p-write" orientation="horizontal">
                  <Checkbox id="p-write" defaultChecked />
                </Field>
                <Field label="지우기" htmlFor="p-delete" orientation="horizontal">
                  <Checkbox id="p-delete" />
                </Field>
              </Checkbox.Group>
            </Field>

            <Field label="기본 보기">
              <Radio.Group defaultValue="table">
                <Radio value="table" id="v-table" description="열끼리 견줄 때" />
                <Radio value="list" id="v-list" description="줄이 대상일 때" />
                <Radio value="board" id="v-board" description="상태로 나눌 때" />
              </Radio.Group>
            </Field>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="한도" description="값을 눈금과 수로 함께 입력">
          <div className="mt-2 flex flex-col gap-5">
            <Field label="요금제" description="한 무리에서 하나를 선택">
              <Segmented value={plan} onValueChange={setPlan}>
                <Segmented.Item value="starter">스타터</Segmented.Item>
                <Segmented.Item value="team">팀</Segmented.Item>
                <Segmented.Item value="scale">스케일</Segmented.Item>
              </Segmented>
            </Field>

            <Field label={`좌석 ${seats}석`} description="수는 눌러서도 변경">
              <Stepper value={seats} min={1} max={99} onValueChange={setSeats}
                aria-label="좌석 수" />
            </Field>

            <Field label={`월 예산 ${budget}%`} description="대략을 잡을 때는 눈금이 나음">
              <Slider
                value={budget}
                onValueChange={(v) => setBudget(Array.isArray(v) ? v[0] : v)}
              />
            </Field>

            <Field label="서식" description="눌린 상태가 곧 값임">
              <div className="flex gap-2">
                <Toggle pressed={bold} onPressedChange={setBold}>굵게</Toggle>
                <Toggle defaultPressed={false}>기울임</Toggle>
                <Toggle defaultPressed={false}>밑줄</Toggle>
              </div>
            </Field>
          </div>
        </Card>

        {/* 달력과 인증번호 */}
        <Card title="확인" description="날짜를 펼쳐 고르고, 번호를 나눠 입력">
          <div className="mt-2 flex flex-col gap-5">
            <Calendar mode="single" selected={date} onSelect={setDate as never} />
            <Field label="인증번호" description="보이는 필드는 표시이고 입력은 하나임">
              <Inputotp length={6} groupSize={3} />
            </Field>
          </div>
        </Card>
      </div>
    </div>
  );
}
