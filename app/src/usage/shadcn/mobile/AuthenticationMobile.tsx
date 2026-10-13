"use client";
import * as React from "react";
import { Button } from "../../../bases/shadcn/Button";
import { Divider } from "../../../bases/shadcn/Divider";
import { Field } from "../../../bases/shadcn/Field";
import { Input } from "../../../bases/shadcn/Input";
import { Link } from "../../../bases/shadcn/Link";
import type { ScreenProps } from "../screens";
import { Brand, FALLBACK_BRAND } from "../screens/AuthenticationScreen";
import { TOUCH } from "./MobileShell";

export function AuthenticationMobile({ onNavigate, brand }: ScreenProps) {
  const brandName = brand ?? FALLBACK_BRAND;
  const [sending, setSending] = React.useState(false);

  // 잠깐 뒤 대시보드로 이동 처리. sending 으로 잠가 누른 상태를 화면에 남기기 위함
  const enter = () => {
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      onNavigate?.("dashboard");
    }, 700);
  };

  return (
    <div className="flex min-h-full flex-col gap-(--semantic-space-lg) px-(--semantic-space-lg) pb-(--semantic-space-lg)">
      {/* 위 줄 로그인 Button 배치. 계정이 있는 사람이 주소 이동 없이 화면만 바꾸기 위함 */}
      <div className="flex shrink-0 items-center justify-end">
        <Button variant="plain" onClick={enter} disabled={sending}>
          로그인
        </Button>
      </div>

      {/* 본문을 세로 가운데로 모아 배치 */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-(--semantic-space-lg)">
        <div className="flex flex-col items-center gap-(--semantic-space-md) text-center">
          <Brand name={brandName} size={32} />
          <div className="flex flex-col gap-(--semantic-space-sm)">
            <h3
              style={{
                margin: 0,
                color: "var(--semantic-fg-neutral-default)",
                fontSize: "var(--semantic-text-heading)",
                letterSpacing: "var(--semantic-tracking-heading)",
                lineHeight: "var(--semantic-line-height-tight)",
              }}
            >
              계정 만들기
            </h3>
            <p style={{ margin: 0, color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)", wordBreak: "keep-all" }}>
              아래에 이메일을 넣으면 계정이 만들어집니다
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            enter();
          }}
        >
          <Field.Group>
            <Field>
              {/* 이메일 Label 은 화면 읽기 도구 전용으로 표시. 자리표가 이미 칸의 용도를 알려 줌 */}
              <Field.Label htmlFor="auth-email-m" className="sr-only">
                이메일
              </Field.Label>
              <Input
                id="auth-email-m"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={sending}
              />
            </Field>
            <Field>
              <Button variant="solid" tone="brand" type="submit" disabled={sending} style={{ minHeight: TOUCH }}>
                {sending ? "보내는 중…" : "이메일로 계속하기"}
              </Button>
            </Field>
          </Field.Group>
        </form>

        <Divider label="또는 이걸로" />

        <Button variant="outline" type="button" disabled={sending} onClick={enter} style={{ minHeight: TOUCH }}>
          GitHub 로 계속하기
        </Button>
      </div>

      {/* 약관 문장과 링크 두 개를 따로 배치. 링크마다 누름 영역을 확보하기 위함 */}
      <div className="flex shrink-0 flex-col items-center gap-(--semantic-space-xs) text-center">
        <p
          style={{
            margin: 0,
            color: "var(--semantic-fg-neutral-subtle)",
            fontSize: "var(--semantic-text-caption)",
            lineHeight: "var(--semantic-line-height-relaxed)",
            wordBreak: "keep-all",
          }}
        >
          계속을 누르면 아래 약관에 동의하는 것으로 봅니다.
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-x-(--semantic-space-lg)"
          style={{ fontSize: "var(--semantic-text-caption)" }}
        >
          <Link href="#">이용약관</Link>
          <Link href="#">개인정보 처리방침</Link>
        </div>
      </div>
    </div>
  );
}
