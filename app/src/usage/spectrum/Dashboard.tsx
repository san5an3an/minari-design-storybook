import { Provider, defaultTheme, Link, View } from "@adobe/react-spectrum";
import type { UsageDashboardProps } from "../registry";

export function SpectrumUsage({ system }: UsageDashboardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "max(20rem, calc(100dvh - 9rem))",
        overflow: "auto",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        padding: "1.25rem",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: "1.1rem" }}>{system.name}. Spectrum CSS 측정판</h2>
        <p style={{ margin: "0.25rem 0 0", color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.9rem" }}>
          실제 @adobe/react-spectrum Link 예제 하나. 다른 베이스 페이지로 이동해도 스타일이 안
          새는지 확인하는 임시판.
        </p>
      </div>

      <Provider theme={defaultTheme} colorScheme="light">
        <View backgroundColor="gray-50" padding="size-300" borderRadius="medium" UNSAFE_style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link href="https://www.imdb.com/title/tt6348138/" target="_blank">
            The missing link.
          </Link>
          <Link href="https://adobe.com" target="_blank">
            Adobe.com
          </Link>
          <p>
            Would you like to <Link variant="primary">learn more</Link> about this fine component?
          </p>
          <View backgroundColor="positive" padding="size-300">
            <Link variant="overBackground">Learn more here!</Link>
          </View>
        </View>
      </Provider>
    </div>
  );
}
