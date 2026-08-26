import * as React from "react";
import * as antd from "antd";
import type { AntdVariant } from "./antdRef/loader";

const EXPORTS = antd as unknown as Record<string, unknown>;

// 컴포넌트 아닌 명령형 API. <Message/>로 렌더링할 수 없음
const IMPERATIVE = new Set(["message", "notification"]);

// antd 본체 미포함, 별도 패키지 컴포넌트
const EXTERNAL: Record<string, string> = { icon: "@ant-design/icons" };

const NOTHING_TO_SHOW: Record<string, string> = {
  modal:      "`open` 이 참일 때만 떠요. 홑으로 세우면 닫힌 상태라 아무것도 안 보여요.",
  drawer:     "`open` 이 참일 때만 열려요. 홑으로 세우면 닫힌 상태예요.",
  tour:       "`open` 과 가리킬 대상(`target`)이 있어야 떠요.",
  tooltip:    "감쌀 자식과 마우스(또는 `open`)가 있어야 떠요. 홑으로는 띄울 것이 없어요.",
  popover:    "감쌀 자식과 마우스(또는 `open`)가 있어야 떠요.",
  popconfirm: "감쌀 자식을 눌러야 물어봐요.",
  carousel:   "넘길 자식 슬라이드가 있어야 해요.",
  collapse:   "펼칠 `items` 가 있어야 해요.",
  watermark:  "덮을 자식이 있어야 워터마크가 보여요.",
  affix:      "붙일 자식이 있어야 해요. 자식이 없으면 붙일 것이 없어요.",
  "qr-code":  "무엇을 담을지 `value` 가 있어야 그려요.",
  "config-provider":
              "화면에 무엇을 그리는 컴포넌트가 아니에요. 아래 컴포넌트들에게 토큰·언어를 내려 주는 설정 공급자이고, 이 시스템 20종 색이 antd 로 들어가는 통로가 바로 이것이에요.",
  "border-beam":
              "테두리를 따라 도는 효과라서 감쌀 자식이 있어야 해요.",
  grid:       "antd 의 `Grid` 는 컴포넌트가 아니라 `useBreakpoint` 를 담은 훅 그룹이에요. 실제로 세우는 것은 `Row` · `Col` 이고, 그 둘은 각자 export 예요.",
};

function EmptyGuard({ slug, children }: { slug: string; children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [empty, setEmpty] = React.useState(false);
  React.useEffect( => {
    const id = requestAnimationFrame( => {
      const el = ref.current;
      setEmpty(!!el && el.querySelectorAll('[class*="ant-"]').length === 0);
    });
    return  => cancelAnimationFrame(id);
  }, [slug]);
  return (
    <>
      {/* display: contents 지정, 측정 요소가 위치 차지 시 여백 오차 있음 */}
      <div ref={ref} style={{ display: "contents" }}>{children}</div>
      {empty ? (
        <p className="doc-note">
          여기에 antd 요소가 <b>하나도 안 그려졌어요.</b> 왜인지 이 프로젝트도 아직 몰라요.
          지어내지 않고 그대로 알립니다. (<code>antdLive.tsx</code> 의{" "}
          <code>NOTHING_TO_SHOW</code> 에 까닭을 적어 주세요.)
        </p>
      ) : null}
    </>
  );
}

// 슬러그를 이름 규칙 셋 순서로 시도해 export와 연결
export function antdComponent(slug: string, title: string): React.ComponentType<never> | null {
  const tries = [
    title,
    title.replace(/\s+/g, ""),
    slug.split("-").map((w) => w[0].toUpperCase + w.slice(1)).join(""),
  ];
  for (const name of tries) {
    const v = EXPORTS[name];
    if (typeof v === "function" || (v && typeof v === "object" && "render" in (v as object))) {
      return v as React.ComponentType<never>;
    }
  }
  return null;
}

// 셀 오류 시 렌더링 유지. antd 필수 prop 차이로 오류 날 수 있음
class Cell extends React.Component<
  { children: React.ReactNode; label: string },
  { err: string | null }
> {
  state = { err: null as string | null };
  static getDerivedStateFromError(e: unknown) {
    return { err: e instanceof Error ? e.message : String(e) };
  }
  render {
    if (this.state.err) {
      return (
        <span className="doc-note" title={this.state.err}>
          홑으로는 못 세워요. 필수 prop 이 있어요
        </span>
      );
    }
    return this.props.children;
  }
}

// 자식 받는 컴포넌트에만 텍스트 삽입. 안 받으면 오류 나는 문제가 있음
const NO_CHILDREN = new Set([
  "Input", "InputNumber", "Select", "Switch", "Slider", "Rate", "DatePicker",
  "TimePicker", "Progress", "Spin", "Skeleton", "Divider", "Avatar", "QRCode",
  "ColorPicker", "AutoComplete", "Cascader", "TreeSelect", "Mentions", "Upload",
  "Calendar", "Empty", "Image", "Segmented", "Pagination", "Transfer", "Tree",
]);

export function AntdLive({ slug, title, variants }: {
  slug: string; title: string; variants: AntdVariant[];
}) {
  if (IMPERATIVE.has(slug)) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <b>{title}</b> 는 컴포넌트가 아니라 <b>명령형 API</b> 예요.
        <code> {slug}.success(…)</code> 처럼 불러서 씁니다. 세워 둘 수 있는 것이 아니에요.
      </p>
    );
  }
  if (EXTERNAL[slug]) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <b>{title}</b> 는 antd 본체가 아니라 <code>{EXTERNAL[slug]}</code> 패키지에 있어요.
      </p>
    );
  }

  const why = NOTHING_TO_SHOW[slug];
  if (why) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <b>{title}</b> 는 홑으로 세우면 안 보여요, {why}
        {" "}<b>결함이 아니라 그쪽의 정상 동작</b>이에요.
      </p>
    );
  }

  const C = antdComponent(slug, title);
  if (!C) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        antd 의 export 에서 <code>{title}</code> 를 못 찾았어요. 이름이 바뀌었을 수 있어요.
        지어내지 않고 그대로 알립니다.
      </p>
    );
  }

  const Comp = C as React.ComponentType<Record<string, unknown>>;
  const kids = NO_CHILDREN.has(title.replace(/\s+/g, "")) ? undefined : title;
  const axes = variants.filter((v) => !v.deprecated && v.values.length <= 8);

  return (
    <EmptyGuard slug={slug}>
      <p className="doc-note" style={{ marginTop: 0 }}>
        아래는 <b>antd 컴포넌트 그 자체</b>예요. 이 프로젝트가 그린 게 아니라
        <code> import {"{"} {title} {"}"} from &quot;antd&quot;</code> 를 그대로 세운 거고,
        색·모서리·크기는 <b>ConfigProvider 토큰</b>으로만 이 시스템이 들어가요.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginBottom: "1rem" }}>
        <Cell label="기본"><Comp>{kids}</Comp></Cell>
      </div>

      {axes.map((v, i) => (
        <div key={`${v.prop}-${i}`} style={{ marginBottom: "1rem" }}>
          <h3 style={{ margin: "0 0 .35rem" }}>
            {v.prop}
            {v.owner ? <span className="doc-axis">{v.owner}</span> : null}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", alignItems: "center" }}>
            {v.values.map((val) => (
              <div key={val} style={{ display: "grid", gap: ".25rem", justifyItems: "start" }}>
                <Cell label={val}>
                  <Comp {...{ [v.prop]: val }}>{kids ? val : undefined}</Comp>
                </Cell>
                <span className="doc-note" style={{ fontSize: ".75rem" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </EmptyGuard>
  );
}
