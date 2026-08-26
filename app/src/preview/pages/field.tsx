import { Kid, Kids, Master, compound, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type {
  CheckboxProps, FieldImpl, InputProps, SelectProps, SwitchProps,
} from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Field = compound<FieldImpl>(system, "field");
  const Input = impl<InputProps>(system, "input");
  const Select = impl<SelectProps>(system, "select");
  const Checkbox = impl<CheckboxProps>(system, "checkbox");
  const Switch = impl<SwitchProps>(system, "switch");

  return (
    <>
      <Master note="이름·컨트롤·설명이 한 덩어리예요. 셋을 따로 두면 쓰는 자리마다 간격이 달라져요.">
        <div style={{ width: "20rem", maxWidth: "100%" }}>
          <Field label="이름" htmlFor="f-name" description="영수증과 메일에 이 이름이 나와요.">
            <Input id="f-name" placeholder="김하늘" />
          </Field>
        </div>
      </Master>

      <Kids axis="control" title="Parts" note="어떤 컨트롤이 들어오든 컨테이너는 같아요. 이름·설명·오류의 위치가 달라지지 않아요.">
        <Kid label="Input">
          <div style={{ width: "16rem" }}>
            <Field label="아이디" htmlFor="f-id" description="계정마다 하나뿐인 이름이에요.">
              <Input id="f-id" placeholder="hanul" />
            </Field>
          </div>
        </Kid>
        <Kid label="Textarea">
          <div style={{ width: "16rem" }}>
            <Field label="남길 말" htmlFor="f-memo" description="어떻게 느끼셨는지 알려 주세요.">
              <Input id="f-memo" multiline placeholder="자유롭게 적어 주세요" />
            </Field>
          </div>
        </Kid>
        <Kid label="Select">
          <div style={{ width: "16rem" }}>
            <Field label="부서" htmlFor="f-team" description="일하는 종류를 골라 주세요.">
              <Select items={{ design: "디자인", dev: "개발", sales: "영업" }} />
            </Field>
          </div>
        </Kid>
      </Kids>

      <Kids axis="error" title="State" note="오류는 설명 위치를 대신해요. 새 줄을 만들면 뜰 때마다 아래가 밀려요.">
        <Kid label="설명">
          <div style={{ width: "16rem" }}>
            <Field label="아이디" htmlFor="f-ok" description="계정마다 하나뿐인 이름이에요.">
              <Input id="f-ok" defaultValue="hanul" />
            </Field>
          </div>
        </Kid>
        <Kid label="오류">
          <div style={{ width: "16rem" }}>
            <Field
              label="아이디"
              htmlFor="f-err"
              description="계정마다 하나뿐인 이름이에요."
              error="이미 쓰고 있는 이름이에요."
            >
              <Input id="f-err" defaultValue="hanul" aria-invalid />
            </Field>
          </div>
        </Kid>
      </Kids>

      <Kids axis="orientation" title="Variants" note="responsive 는 좁으면 세로, 넓으면 가로로 저절로 바뀌어요. 화면 크기마다 손보지 않아도 돼요.">
        <Kid label="vertical" hint="기본">
          <div style={{ width: "15rem" }}>
            <Field label="알림 받기" htmlFor="f-v">
              <Switch id="f-v" />
            </Field>
          </div>
        </Kid>
        <Kid label="horizontal">
          <div style={{ width: "15rem" }}>
            <Field orientation="horizontal" label="알림 받기" htmlFor="f-h" description="새 글이 오면 알려드려요.">
              <Switch id="f-h" />
            </Field>
          </div>
        </Kid>
      </Kids>

      <Kids axis="set" title="Fieldset" note="한 뜻으로 묶이는 필드는 fieldset + legend 여야 보조기술에 그룹이 전달돼요. 그룹에도 설명을 달 수 있어요.">
        <Kid label="Set + Group">
          <div style={{ width: "18rem" }}>
            <Field.Set legend="주소" description="이 주소로 보내드려요.">
              <Field.Group>
                <Field label="도로명" htmlFor="f-street">
                  <Input id="f-street" placeholder="세종대로 110" />
                </Field>
                <Field label="우편번호" htmlFor="f-zip">
                  <Input id="f-zip" placeholder="04524" />
                </Field>
              </Field.Group>
            </Field.Set>
          </div>
        </Kid>
        <Kid label="+ Separator" hint="가운데 글자">
          <div style={{ width: "18rem" }}>
            <Field.Group>
              <Field label="메일" htmlFor="f-mail">
                <Input id="f-mail" placeholder="hn@example.com" />
              </Field>
              <Field.Separator>또는</Field.Separator>
              <Field label="전화" htmlFor="f-tel">
                <Input id="f-tel" placeholder="010-0000-0000" />
              </Field>
            </Field.Group>
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="choice"
        title="Choice Card"
        note={
          <>
            카드째 고르는 그룹은 <b>따로 있는 컴포넌트가 아니에요</b>, <b>Label</b> 안에{" "}
            <b>Field</b> 를 통째로 감싸면 돼요. 그래야 카드 어디를 눌러도 컨트롤이 잡혀요.
          </>
        }
      >
        <Kid label="Checkbox">
          <div style={{ width: "18rem", display: "grid", gap: ".5rem" }}>
            {[
              { id: "c-k8s", t: "쿠버네티스", d: "K8s 클러스터에서 GPU 작업을 돌려요." },
              { id: "c-vm", t: "가상 머신", d: "클러스터에 붙어 GPU 작업을 돌려요." },
            ].map((o) => (
              <Field.Label key={o.id} htmlFor={o.id}>
                <Field orientation="horizontal">
                  <Checkbox id={o.id} />
                  <Field.Content>
                    <Field.Title>{o.t}</Field.Title>
                    <Field.Description>{o.d}</Field.Description>
                  </Field.Content>
                </Field>
              </Field.Label>
            ))}
          </div>
        </Kid>
        <Kid label="Switch">
          <div style={{ width: "18rem" }}>
            <Field.Label htmlFor="c-mfa">
              <Field orientation="horizontal">
                <Field.Content>
                  <Field.Title>두 단계 인증</Field.Title>
                  <Field.Description>들어올 때 한 번 더 확인해요.</Field.Description>
                </Field.Content>
                <Switch id="c-mfa" />
              </Field>
            </Field.Label>
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "설명이 있을 때", then: <>가로 배치라면 <b>Content</b> 로 라벨·설명을 묶어요. 안 묶으면 셋이 나란히 늘어서요.</> },
  { when: "오류가 뜰 때", then: <>설명 <b>위치를 대신해요.</b> 새 줄을 만들면 아래가 밀려요.</> },
  { when: "카드째 고를 때", then: <><b>Label</b> 안에 <b>Field</b> 를 감싸요. 따로 그리면 라벨과 컨트롤 연결이 끊겨요.</> },
  { when: "한 뜻으로 묶일 때", then: <><b>Set</b> 이에요, <code>fieldset</code>+<code>legend</code> 여야 그룹이 전달돼요.</> },
];
