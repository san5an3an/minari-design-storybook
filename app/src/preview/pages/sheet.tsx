import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SheetProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Sheet = impl<SheetProps>(system, "sheet");
  const Button = system.impl.button;
  return (
    <>
      <Master note="한 변에 붙어 긴 쪽을 다 써요. 그래서 세로로 긴 게 들어가요.">
        <Sheet
          trigger={<Button variant="outline">자세히 보기</Button>}
          title="자세히 보기"
          description="고른 항목의 내용이에요."
          footer={<Button variant="outline">닫을게요</Button>}
        />
      </Master>

      <Kids axis="side" title="Variants" note="왼쪽은 길잡이, 오른쪽은 보조로 정해 둬요. 매번 다른 변에서 나오면 어디를 볼지 다시 찾아야 해요.">
        {(["left", "right", "top", "bottom"] as const).map((s) => (
          <Kid key={s} label={s} hint={s === "right" ? "기본" : undefined}>
            <Sheet
              side={s}
              trigger={<Button variant="outline">{s}</Button>}
              title={s === "left" ? "메뉴" : "필터"}
              description={s === "left" ? "어디로 갈지 골라요." : "조건을 좁혀요."}
            />
          </Kid>
        ))}
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "끌어서 여닫을 때", then: <><b>Drawer</b> 예요. 시트는 밀려 나올 뿐이에요.</> },
  { when: "한가운데 서야 할 때", then: <><b>Dialog</b> 예요. 시트는 변에 붙어요.</> },
  { when: "되돌릴 수 없는 결정", then: <><b>AlertDialog</b> 예요. 시트는 바깥을 누르면 닫혀요.</> },
];
