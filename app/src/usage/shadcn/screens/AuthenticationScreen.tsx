import * as React from "react";
import { Button } from "../../../bases/shadcn/Button";
import { Divider } from "../../../bases/shadcn/Divider";
import { Field } from "../../../bases/shadcn/Field";
import { Input } from "../../../bases/shadcn/Input";
import { Link } from "../../../bases/shadcn/Link";
import type { ScreenProps } from "../screens";

function Brand({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span
      className="flex items-center gap-2"
      style={{
        color: "var(--semantic-fg-brand-strong)",
        fontSize: "var(--semantic-text-body-lg)",
      }}
    >
      <span
        aria-hidden
        className="inline-block shrink-0"
        style={{
          background: "var(--semantic-bg-brand-default)",
          borderRadius: "var(--semantic-radius-selection)",
          height: size,
          width: size,
        }}
      />
      {name}
    </span>
  );
}

// brand 못 받는 단독 화면 기본값. 저장소 기본 이름이라 목업과 어긋나지 않음
const FALLBACK_BRAND = "Cobalt";

export function AuthenticationScreen({ onNavigate, brand }: ScreenProps) {
  const brandName = brand ?? FALLBACK_BRAND;
  const [sending, setSending] = React.useState(false);

  const enter =  => {
    setSending(true);
    window.setTimeout( => {
      setSending(false);
      onNavigate?.("dashboard");
    }, 700);
  };

  return (
    <div className="relative grid min-h-[32rem] flex-1 lg:grid-cols-2">
      {/* 오른쪽 위 로그인 링크, 계정 있는 사용자의 이동 경로. 크기는 상위 요소에서 지정 */}
      <div className="absolute end-4 top-4 z-10">
        {/* Link 대신 Button variant=plain 사용. 화면 전환이라 탭 불명확 문제임 */}
        <Button variant="plain" onClick={enter} disabled={sending}>
          로그인
        </Button>
      </div>

      {/* 브랜드 영역. 넓으면 왼쪽 배치, 좁으면 위쪽 한 행 배치 */}
      <div
        className="relative hidden flex-col justify-between p-10 lg:flex"
        style={{
          background: "var(--semantic-bg-brand-subtlest)",
          borderInlineEnd:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        }}
      >
        <Brand name={brandName} />
        <blockquote
          style={{
            color: "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-body)",
            lineHeight: "var(--semantic-line-height-relaxed)",
          }}
        >
          “이 라이브러리 덕에 셀 수 없이 많은 시간을 아꼈고, 고객에게 훨씬 빨리 좋은 화면을
          내놓을 수 있었습니다.”
          <footer
            className="mt-2"
            style={{
              color: "var(--semantic-fg-neutral-subtle)",
              fontSize: "var(--semantic-text-body-sm)",
            }}
          >
, Sofia Davis
          </footer>
        </blockquote>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="flex w-full max-w-[21.875rem] flex-col gap-6">
          {/* 좁은 화면 전용 브랜드 표시 위치 */}
          <div className="flex justify-center lg:hidden">
            <Brand name={brandName} size={20} />
          </div>

          <div className="flex flex-col gap-2 text-center">
            <h3
              style={{
                color: "var(--semantic-fg-neutral-default)",
                fontSize: "var(--semantic-text-heading)",
                letterSpacing: "var(--semantic-tracking-heading)",
                lineHeight: "var(--semantic-line-height-tight)",
              }}
            >
              계정 만들기
            </h3>
            <p
              style={{
                color: "var(--semantic-fg-neutral-subtle)",
                fontSize: "var(--semantic-text-body-sm)",
              }}
            >
              아래에 이메일을 넣으면 계정이 만들어집니다
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault;
              enter;
            }}
          >
            <Field.Group>
              <Field>
                {/* 라벨을 스크린리더 전용으로 지정. placeholder가 필드 정보를 담고 있음 */}
                <Field.Label htmlFor="auth-email" className="sr-only">
                  이메일
                </Field.Label>
                <Input
                  id="auth-email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={sending}
                />
              </Field>
              <Field>
                <Button variant="solid" tone="brand" type="submit" disabled={sending}>
                  {sending ? "보내는 중…" : "이메일로 계속하기"}
                </Button>
              </Field>
            </Field.Group>
          </form>

          <Divider label="또는 이걸로" />

          <Button variant="outline" type="button" disabled={sending} onClick={enter}>
            GitHub 로 계속하기
          </Button>

          <p
            className="text-center"
            style={{
              color: "var(--semantic-fg-neutral-subtle)",
              fontSize: "var(--semantic-text-caption)",
              lineHeight: "var(--semantic-line-height-relaxed)",
            }}
          >
            계속을 누르면 <Link href="#">이용약관</Link>과 <Link href="#">개인정보 처리방침</Link>에
            동의하는 것으로 봅니다.
          </p>
        </div>
      </div>
    </div>
  );
}
