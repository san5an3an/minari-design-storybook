import { MODES, MODE_LABEL, type ColorToken, type Mode } from "./tokens";

export function Swatch({ hex }: { hex: string | undefined }) {
  if (!hex) return <span className="doc-swatch doc-swatch--none" aria-hidden />;
  return <span className="doc-swatch" style={{ background: hex }} aria-hidden />;
}

// 토큰 한 행 구성: 왼쪽 변수명, 오른쪽 모드별 색상과 hex 값
function TokenRow({ token, active }: { token: ColorToken; active: Mode }) {
  return (
    <tr>
      <th scope="row"><code>{token.name}</code></th>
      {MODES.map((m) => (
        <td key={m} className={m === active ? "on" : undefined}>
          <Swatch hex={token.values[m]} />
          <code>{token.values[m] ?? "—"}</code>
        </td>
      ))}
    </tr>
  );
}

export function TokenTable({ tokens, active }: { tokens: ColorToken[]; active: Mode }) {
  if (tokens.length === 0) {
    return <p className="doc-note">색 토큰이 없어요.</p>;
  }
  return (
    <table className="doc-tokens">
      <thead>
        <tr>
          <th scope="col">변수명</th>
          {MODES.map((m) => (
            <th key={m} scope="col" className={m === active ? "on" : undefined}>
              {MODE_LABEL[m]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tokens.map((t) => <TokenRow key={t.name} token={t} active={active} />)}
      </tbody>
    </table>
  );
}
