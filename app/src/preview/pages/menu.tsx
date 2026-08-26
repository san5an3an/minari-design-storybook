import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { MenuProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Menu = impl<MenuProps>(system, "menu");
  const Button = impl<{ variant?: string; tone?: string; children?: React.ReactNode }>(
    system, "button",
  );

  return (
    <>
      <Master note="눌러서 열고 ESC 로 닫아 보세요. ↑ ↓ 로도 옮길 수 있어요.">
        <Menu
          trigger={<Button variant="surface" tone="neutral">더 보기</Button>}
          items={[
            { label: "이름 바꾸기" },
            { label: "복제하기", hint: "⌘D" },
            { separator: true },
            { label: "삭제하기", danger: true },
          ]}
        />
      </Master>

      <Kids axis="items" title="Item Kind">
        <Kid label="보통">
          <Menu
            trigger={<Button variant="surface" tone="neutral">보통만</Button>}
            items={[{ label: "이름 바꾸기" }, { label: "복제하기" }]}
          />
        </Kid>
        <Kid label="heading">
          <Menu
            trigger={<Button variant="surface" tone="neutral">그룹 이름</Button>}
            items={[
              { heading: "이 항목" },
              { label: "이름 바꾸기" },
              { heading: "전체" },
              { label: "모두 선택" },
            ]}
          />
        </Kid>
        <Kid label="separator">
          <Menu
            trigger={<Button variant="surface" tone="neutral">구분선</Button>}
            items={[{ label: "복제하기" }, { separator: true }, { label: "내보내기" }]}
          />
        </Kid>
        <Kid label="danger">
          <Menu
            trigger={<Button variant="surface" tone="neutral">되돌릴 수 없음</Button>}
            items={[{ label: "삭제하기", danger: true }]}
          />
        </Kid>
      </Kids>

      <Kids axis="hint" title="Shortcut">
        <Kid label="hint">
          <Menu
            trigger={<Button variant="surface" tone="neutral">단축키 표시</Button>}
            items={[
              { label: "복제하기", hint: "⌘D" },
              { label: "저장하기", hint: "⌘S" },
            ]}
          />
        </Kid>
      </Kids>
      <Kids axis="kind" title="Item Kind" note="하위 메뉴·켜고 끄기·여럿 중 하나는 공식 해부도에 있는 자리예요. 2026-08-20 이전엔 평평한 목록만 그릴 수 있었어요.">
        <Kid label="하위 메뉴" hint="Sub">
          <Menu
            trigger={<Button variant="outline">보내기</Button>}
            items={[
              { label: "복사" },
              { label: "공유", items: [{ label: "링크로" }, { label: "메일로" }] },
            ]}
          />
        </Kid>
        <Kid label="켜고 끄기" hint="Checkbox">
          <Menu
            trigger={<Button variant="outline">보기</Button>}
            items={[
              { label: "줄 번호", checked: true },
              { label: "여백 표시", checked: false },
            ]}
          />
        </Kid>
        <Kid label="여럿 중 하나" hint="Radio">
          <Menu
            trigger={<Button variant="outline">정렬</Button>}
            items={[
              { heading: "기준" },
              { radio: { value: "name", items: [
                { value: "name", label: "이름순" },
                { value: "date", label: "날짜순" },
              ] } },
            ]}
          />
        </Kid>
      </Kids>

    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "고른 것이 입력란에 남아야 할 때",
    then: (
      <>
        <b>Select</b> 예요. 메뉴에서 고른 것은 실행되고 <b>남지 않아요</b>.
      </>
    ),
  },
  {
    when: "되돌릴 수 없는 항목일 때",
    then: <>색만으로 알리지 않아요. 글자로도 무슨 일이 일어나는지 적어요.</>,
  },
  {
    when: "항목이 두세 개뿐일 때",
    then: <>버튼을 그냥 늘어놓는 쪽이 나아요. 여는 손짓 한 번이 통째로 사라져요.</>,
  },
];
