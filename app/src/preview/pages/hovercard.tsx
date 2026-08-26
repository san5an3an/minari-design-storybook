import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { HovercardProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Hovercard = impl<HovercardProps>(system, "hovercard");
  return (
    <>
      <Master note="마우스를 올리면 떠요. 손가락에는 뜨지 않으니 없어도 일이 되는 것만 담아요.">
        <p style={{ margin: 0 }}>
          글쓴이는{" "}
          <Hovercard
            trigger={<a href="#" style={{ textDecoration: "underline dotted", textUnderlineOffset: ".2em" }}>김하늘</a>}
          >
            <div style={{ display: "grid", gap: ".25rem" }}>
              <b>김하늘</b>
              <span style={{ opacity: .8 }}>디자인시스템을 만들어요. 서울.</span>
            </div>
          </Hovercard>{" "}
          이에요.
        </p>
      </Master>

      <Kids axis="side" title="Variants">
        {(["top", "bottom"] as const).map((s) => (
          <Kid key={s} label={s} hint={s === "bottom" ? "기본" : undefined}>
            <Hovercard side={s} trigger={<a href="#" style={{ textDecoration: "underline dotted" }}>{s}</a>}>
              <span>여기에 미리보기가 떠요.</span>
            </Hovercard>
          </Kid>
        ))}
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "꼭 봐야 하는 정보", then: <>여기 두지 마세요. <b>터치에서는 뜨지 않아요.</b></> },
  { when: "글 한 줄일 때", then: <><b>Tooltip</b> 이에요. 이건 카드예요.</> },
  { when: "눌러서 열 때", then: <><b>Popover</b> 예요. 그건 터치에서도 떠요.</> },
];
