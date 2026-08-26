import { ArrowRight } from "lucide-react";
import { Kid, Kids, Master, defaultOf, valuesOf } from "../Doc";
import type { Condition } from "../PropsTable";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Button = system.impl.button;
  const variants = valuesOf(system, "button", "variant");
  const tones = valuesOf(system, "button", "tone");
  const sizes = valuesOf(system, "button", "size");
  const d = {
    variant: defaultOf(system, "button", "variant") ?? variants[0],
    tone: defaultOf(system, "button", "tone") ?? tones[0],
    size: defaultOf(system, "button", "size") ?? sizes[0],
  };

  return (
    <>
      <Master
        note={
          <>
            아무 값도 안 주면 <code>{d.variant}</code> · <code>{d.tone}</code> ·{" "}
            <code>{d.size}</code> 예요.
          </>
        }
      >
        <Button>버튼</Button>
      </Master>

      <Kids
        axis="variant"
        note={
          <>
            이 시스템의 버튼은 <b>{variants.length}종</b>이에요. elevation 성격이 이 구성을
            정해요. 다른 시스템은 3~5종으로 달라요.
          </>
        }
      >
        {variants.map((v) => (
          <Kid key={v} label={v} hint={v === d.variant ? "기본" : undefined}>
            {tones.map((t) => (
              <Button key={t} variant={v} tone={t} size={d.size}>
                {t}
              </Button>
            ))}
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="size"
        note={
          <>
            측정 px 는 밀도 단계와 타이포 비율(<b>{system.typeRatio}</b>)이 정해요, 같은{" "}
            <code>lg</code> 라도 시스템마다 달라요.
          </>
        }
      >
        {sizes.map((s) => (
          <Kid key={s} label={s} hint={s === d.size ? "기본" : undefined}>
            {variants.map((v) => (
              <Button key={v} variant={v} tone="brand" size={s}>
                {v}
              </Button>
            ))}
          </Kid>
        ))}
      </Kids>

      <Kids axis="disabled" title="State">
        <Kid label="기본">
          {variants.map((v) => (
            <Button key={v} variant={v} tone="brand" size={d.size}>
              {v}
            </Button>
          ))}
        </Kid>
        <Kid label="disabled">
          {variants.map((v) => (
            <Button key={v} variant={v} tone="brand" size={d.size} disabled>
              {v}
            </Button>
          ))}
        </Kid>
      </Kids>

      <Kids axis="children" title="Icon">
        <Kid label="글자 + 아이콘">
          <Button variant={d.variant} tone="brand" size={d.size}>
            다음
            <ArrowRight />
          </Button>
        </Kid>
        <Kid label="아이콘만">
          <Button variant={d.variant} tone="brand" size={d.size} aria-label="다음">
            <ArrowRight />
          </Button>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "아이콘만 넣을 때",
    then: (
      <>
        <code>aria-label</code> 이 <b>필수</b>예요. 글자가 없으면 읽어 줄 것이 없어요.
      </>
    ),
  },
  {
    when: "누를 수 없게 할 때",
    then: (
      <>
        색만으로 알리지 않아요. <code>disabled</code> 속성을 함께 줘야 커서와 포커스도 막혀요.
      </>
    ),
  },
  {
    when: "위치를 옮기는 동작일 때",
    then: (
      <>
        버튼이 아니라 <b>Link</b> 예요. 뒤로 가기가 통하는지는 누르기 전에 알아야 해요.
      </>
    ),
  },
];
