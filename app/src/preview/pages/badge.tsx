import { Check } from "lucide-react";
import { Kid, Kids, Master, defaultOf, impl, valuesOf } from "../Doc";
import type { Condition } from "../PropsTable";
import type { BadgeProps } from "../../systems/props";
import type { PageProps } from "./types";

const ICON = {
  width: "var(--component-badge-icon-size)",
  height: "var(--component-badge-icon-size)",
} as const;

export function Page({ system }: PageProps) {
  const Badge = impl<BadgeProps>(system, "badge");
  const variants = valuesOf(system, "badge", "variant");
  const tones = valuesOf(system, "badge", "tone");
  const dv = defaultOf(system, "badge", "variant") ?? variants[0];
  const dt = defaultOf(system, "badge", "tone") ?? tones[0];

  return (
    <>
      <Master note={<>기본은 <code>{dv}</code> · <code>{dt}</code> 예요.</>}>
        <Badge>대기</Badge>
      </Master>

      <Kids axis="variant">
        {variants.map((v) => (
          <Kid key={v} label={v} hint={v === dv ? "기본" : undefined}>
            {tones.map((t) => (
              <Badge key={t} variant={v} tone={t}>
                {t}
              </Badge>
            ))}
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="tone"
        note={
          <>
            tone 은 이 시스템의 팔레트 구성과 <b>1:1</b> 이에요. 팔레트가 3종인 시스템은 여기도
            3종이에요.
          </>
        }
      >
        {tones.map((t) => (
          <Kid key={t} label={t} hint={t === dt ? "기본" : undefined}>
            {variants.map((v) => (
              <Badge key={v} variant={v} tone={t}>
                {v}
              </Badge>
            ))}
          </Kid>
        ))}
      </Kids>
      <Kids
        axis="icon"
        title="Indicator"
        note={
          <>
            표시는 <b>덧붙이는 것</b>이지 글자를 대신하지 않아요. 그림만 있는 배지는 읽을 수 없어요.
            위치는 <b>순서를 뒤집어서</b> 정해요: 마크업 순서를 바꾸면 스크린리더가 읽는 순서까지
            바뀌거든요.
          </>
        }
      >
        <Kid label="없음" hint="기본">
          <Badge tone="success">완료</Badge>
        </Kid>
        <Kid label="앞">
          <Badge tone="success" icon={<Check style={ICON} />}>
            완료
          </Badge>
        </Kid>
        <Kid label="뒤" hint="글자가 먼저일 때">
          <Badge tone="success" icon={<Check style={ICON} />} iconPosition="inline-end">
            완료
          </Badge>
        </Kid>
      </Kids>

    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "누를 수 있게 만들고 싶을 때",
    then: (
      <>
        배지가 아니라 <b>Button</b> 이나 <b>Chip</b> 이에요. 배지는 <b>읽는 것</b>이지 누르는 게
        아니에요.
      </>
    ),
  },
  {
    when: "색으로만 상태를 나눌 때",
    then: <>글자를 함께 넣어요. 색만으로는 색을 구별하기 어려운 사람에게 아무 말도 안 해요.</>,
  },
];
