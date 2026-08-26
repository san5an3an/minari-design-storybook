import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { QuestionnaireImpl } from "../../systems/props";
import type { PageProps } from "./types";

const ITEMS = [
  {
    name: "usage",
    required: true,
    prompt: "이 도구를 어떻게 쓰시나요?",
    description: "하나만 골라 주세요.",
    choices: [
      { value: "solo", label: "주로 혼자 써요", description: "내 자료만 봐요" },
      { value: "team", label: "팀과 함께 써요", description: "두 명 이상이 같은 자료를 봐요" },
      { value: "unsure", label: "아직 정하지 않았어요" },
    ],
  },
  {
    name: "detail",
    required: false,
    prompt: "얼마나 자세히 보고 싶으세요?",
    description: "아직 모르겠다면 건너뛰어도 돼요.",
    choices: [
      { value: "focused", label: "요점만" },
      { value: "full", label: "전체 흐름" },
    ],
  },
] as const;

const SPEC = ITEMS.map((q) => ({
  name: q.name,
  required: q.required,
  choices: q.choices.map((c) => ({ value: c.value })),
}));

export function Page({ system }: PageProps) {
  const Q = compound<QuestionnaireImpl>(system, "questionnaire");

  const body = (shortcuts?: "letters" | "numbers") => (
    <Q items={SPEC} shortcuts={shortcuts}>
      <Q.Progress />
      {ITEMS.map((q) => (
        <Q.Item key={q.name} name={q.name} required={q.required}>
          <Q.Title>{q.prompt}</Q.Title>
          <Q.Description>{q.description}</Q.Description>
          <Q.Choices>
            {q.choices.map((c) => (
              <Q.Choice key={c.value} value={c.value}>
                <span>{c.label}</span>
                {"description" in c ? (
                  <Q.ChoiceDescription>{c.description}</Q.ChoiceDescription>
                ) : null}
              </Q.Choice>
            ))}
          </Q.Choices>
          <Q.Error />
        </Q.Item>
      ))}
      <Q.Actions>
        <Q.Previous />
        <Q.Skip />
        <Q.Next />
        <Q.Submit />
      </Q.Actions>
    </Q>
  );

  return (
    <>
      <Master note="긴 폼과의 갈림은 모양이 아니라 되돌아갈 수 있는가예요. 진행도를 꼭 보여요. 몇 개 남았는지 모르면 도중에 그만둬요.">
        {body}
      </Master>

      <Kids
        axis="shortcuts"
        note="답에 글자나 숫자를 붙여 키보드로 바로 고르게 해요. 물음이 많고 되풀이되는 설문일수록 값을 해요."
      >
        <Kid label="letters">{body("letters")}</Kid>
        <Kid label="numbers">{body("numbers")}</Kid>
      </Kids>

      <Kids
        axis="parts"
        title="Input"
        note="정해진 답 말고 직접 적게 할 때 써요. name 은 감싼 Item 이 정해요."
      >
        <Kid label="Input" hint="자유롭게 적는 답">
          <Q items={[{ name: "other" }]}>
            <Q.Progress />
            <Q.Item name="other">
              <Q.Title>더 하고 싶은 말이 있나요?</Q.Title>
              <Q.Choices>
                <Q.Input aria-label="자유 응답" placeholder="여기에 적어 주세요" />
              </Q.Choices>
              <Q.Error />
            </Q.Item>
            <Q.Actions>
              <Q.Previous />
              <Q.Skip />
              <Q.Next />
              <Q.Submit />
            </Q.Actions>
          </Q>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "진행도", then: <>반드시 보여요. 몇 개 남았는지 모르면 도중에 그만둬요.</> },
  { when: "넘길 수 있는 물음", then: <><b>Skip</b> 이 있고 없고가 신호예요. 눌러 보고 알게 하지 마세요.</> },
  { when: "이동 버튼", then: <>늘 붙여 둬요. 조건부로 그리면 초점이 사라진 위치를 잃어요.</> },
  { when: "잘못을 알릴 때", then: <>답을 고친 그 위치에서 사라져야 해요.</> },
  { when: "물음이 둘 이하", then: <>이게 아니라 <b>Field</b> 그룹이에요.</> },
];
