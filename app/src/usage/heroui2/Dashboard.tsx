"use client";

import * as React from "react";
import { Avatar, Badge, Tooltip } from "@heroui/react";
import { herouiAdapter } from "../../preview/herouiRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { CART_ITEMS, type CartItem } from "./data";
import { SCREENS } from "./screens";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=70";

// container-type은 CSS 문자열로 지정. style 객체엔 csstype 미지원임
const SHELL_CSS = `
.hu2-scroll { container-type: inline-size; container-name: hu2; }
`;

export function HeroUiUsage2({ system, active }: UsageDashboardProps) {
  React.useEffect( => herouiAdapter.mountTheme?.(system, active, document), [system, active]);

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [cartItems, setCartItems] = React.useState<CartItem[]>( => [...CART_ITEMS]);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  const addToCart = (productId: string, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((it) => it.productId === productId);
      if (existing) {
        return prev.map((it) => (it.productId === productId ? { ...it, quantity: it.quantity + quantity } : it));
      }
      return [...prev, { productId, quantity }];
    });
  };
  const changeQty = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((it) => (it.productId === productId ? { ...it, quantity: Math.max(0, it.quantity + delta) } : it))
        .filter((it) => it.quantity > 0),
    );
  };
  const cartCount = cartItems.reduce((s, it) => s + it.quantity, 0);

  return (
    <herouiAdapter.Provider system={system} mode={active}>
      <div
        className="flex flex-col overflow-hidden"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <style>{SHELL_CSS}</style>
        <div
          className="flex shrink-0 items-center gap-3 px-4 py-3"
          style={{
            borderBottom:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <span
            aria-hidden
            className="inline-block size-5 rounded"
            style={{ background: "var(--semantic-bg-brand-default)" }}
          />
          <span style={{ fontWeight: 600 }}>마켓</span>
          <span
            className="ms-auto"
            style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.75rem" }}
          >
            {system.baseTitle}
          </span>
          <Avatar className="size-7">
            <Avatar.Fallback className="text-xs">하</Avatar.Fallback>
          </Avatar>
        </div>

        <div className="hu2-scroll min-h-0 flex-1 overflow-y-auto">
          {screen.key === "products" ? (
            <div
              className="relative flex shrink-0 flex-col justify-end p-4"
              style={{
                minBlockSize: "8rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "linear-gradient(180deg, transparent 0%, transparent 40%, " +
                  "color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), " +
                  `url("${HERO_IMAGE}")`,
              }}
            >
              {/* Tooltip 으로 호버 시 특가 기한 표시. 배지만으로는 특가 사유가 안 보임 */}
              <Tooltip delay={200}>
                <Tooltip.Trigger aria-label="특가 안내">
                  <Badge color="danger" size="sm" className="absolute right-4 top-4">
                    오늘만 특가
                  </Badge>
                </Tooltip.Trigger>
                <Tooltip.Content showArrow>
                  <Tooltip.Arrow />
                  <p>9월 21일 자정까지만 적용돼요.</p>
                </Tooltip.Content>
              </Tooltip>
              <span
                className="text-lg font-semibold"
                style={{ color: "var(--semantic-fg-on-brand-default)" }}
              >
                이번 주, 최대 30% 할인
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85 }}
              >
                가을 신상품이 도착했어요
              </span>
            </div>
          ) : null}
          <div className="p-4">
            <div className="flex flex-col gap-1 pb-3">
              <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label}</h2>
              <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
                {screen.lede}
              </p>
            </div>
            <Screen cartItems={cartItems} onAddToCart={addToCart} onChangeQty={changeQty} />
          </div>
        </div>

        {/* 하단 탭 바 적용 */}
        <nav
          className="flex shrink-0 items-stretch"
          aria-label="화면 고르기"
          style={{
            borderTop: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {SCREENS.map((s) => {
            const isActive = s.key === screenKey;
            return (
              <button
                key={s.key}
                type="button"
                onClick={ => setScreenKey(s.key)}
                className="relative flex flex-1 items-center justify-center gap-1 py-2.5 text-sm"
                style={{
                  color: isActive
                    ? "var(--semantic-fg-brand-default)"
                    : "var(--semantic-fg-neutral-subtle)",
                  fontWeight: isActive ? 600 : 400,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {s.label}
                {s.key === "cart" && cartCount > 0 ? (
                  <Badge color="danger" size="sm">{cartCount}</Badge>
                ) : null}
              </button>
            );
          })}
        </nav>
      </div>
    </herouiAdapter.Provider>
  );
}
