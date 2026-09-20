"use client";
import * as React from "react";
import { Accordion, Alert, Button, Card, Meter, toast } from "@heroui/react";
import type { ScreenProps } from "../screens";
import { PRODUCTS } from "../data";

const FREE_SHIPPING_THRESHOLD = 50000;

function thumbStyle(colorToken: string, image: string): React.CSSProperties {
  return { backgroundColor: colorToken, backgroundImage: `url("${image}")` };
}

export function CartScreen({ cartItems, onChangeQty }: ScreenProps) {
  const rows = cartItems
    .map((item) => ({ item, product: PRODUCTS.find((p) => p.id === item.productId) }))
    .filter((r): r is { item: (typeof cartItems)[number]; product: NonNullable<(typeof r)["product"]> } => !!r.product);

  const total = rows.reduce((sum, r) => sum + r.product.price * r.item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - total);

  if (rows.length === 0) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm opacity-70">장바구니가 비어 있습니다.</p>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">이런 상품은 어때요?</span>
          <Card className="gap-0 divide-y p-0">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="flex items-center gap-3 px-4 py-3">
                <div
                  className="size-10 shrink-0 rounded-md bg-cover bg-center"
                  style={thumbStyle(product.colorToken, product.image)}
                  aria-hidden
                />
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">{product.name}</span>
                  <span className="text-sm opacity-70">{product.category}</span>
                </div>
                <span className="text-sm font-medium">{product.price.toLocaleString}원</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {remainingForFreeShipping > 0 ? (
        <Alert status="accent">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>무료배송까지 {remainingForFreeShipping.toLocaleString}원 남았어요</Alert.Title>
            <Alert.Description>
              <Meter aria-label="무료배송 진행률" className="mt-1 w-full" value={total} maxValue={FREE_SHIPPING_THRESHOLD}>
                <Meter.Track>
                  <Meter.Fill />
                </Meter.Track>
              </Meter>
            </Alert.Description>
          </Alert.Content>
        </Alert>
      ) : (
        <Alert status="success">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>무료배송 조건을 채웠어요!</Alert.Title>
          </Alert.Content>
        </Alert>
      )}

      <Card className="gap-0 divide-y p-0">
        {rows.map(({ item, product }) => (
          <div key={product.id} className="flex items-center gap-3 px-4 py-3">
            <div
              className="size-12 shrink-0 rounded-md bg-cover bg-center"
              style={thumbStyle(product.colorToken, product.image)}
              aria-hidden
            />
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">{product.name}</span>
              <span className="text-sm opacity-70">{product.price.toLocaleString}원</span>
            </div>
            <div className="flex items-center gap-2">
              {/* 밝은 배경에서 outline 흰 글자가 안 보이는 문제 있음 */}
              <Button variant="secondary" size="sm" isIconOnly aria-label="수량 줄이기" onPress={ => onChangeQty(product.id, -1)}>−</Button>
              <span className="w-4 text-center text-sm">{item.quantity}</span>
              <Button variant="secondary" size="sm" isIconOnly aria-label="수량 늘리기" onPress={ => onChangeQty(product.id, 1)}>+</Button>
            </div>
          </div>
        ))}
      </Card>
      <Card className="flex-row items-center justify-between">
        <span className="text-sm opacity-70">합계</span>
        <span className="text-lg font-semibold">{total.toLocaleString}원</span>
      </Card>
      <Button variant="primary" fullWidth onPress={ => toast.success("주문이 완료됐어요")}>결제하기</Button>

      <Accordion className="w-full">
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger>
              배송 정보
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="flex flex-col gap-1 text-sm opacity-80">
              <p>5만원 이상 구매 시 무료 배송, 미만이면 배송비 3,000원.</p>
              <p>평일 오후 2시 이전 결제 건은 당일 출고.</p>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      {/* 함께 구매하면 좋은 상품, 여백 채우기용 */}
      {( => {
        const inCart = new Set(rows.map((r) => r.product.id));
        const recs = PRODUCTS.filter((p) => !inCart.has(p.id)).slice(0, 3);
        if (recs.length === 0) return null;
        return (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">함께 구매하면 좋아요</span>
            <Card className="gap-0 divide-y p-0">
              {recs.map((product) => (
                <div key={product.id} className="flex items-center gap-3 px-4 py-3">
                  <div
                    className="size-10 shrink-0 rounded-md bg-cover bg-center"
                    style={thumbStyle(product.colorToken, product.image)}
                    aria-hidden
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium">{product.name}</span>
                    <span className="text-sm opacity-70">{product.category}</span>
                  </div>
                  <span className="text-sm font-medium">{product.price.toLocaleString}원</span>
                </div>
              ))}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
