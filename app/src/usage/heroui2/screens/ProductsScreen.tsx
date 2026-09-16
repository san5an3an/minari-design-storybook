"use client";
import * as React from "react";
import { Button, Card, Chip } from "@heroui/react";
import { PRODUCTS, type Product } from "../data";

function ProductDetail({ product, onBack }: { product: Product; onBack:  => void }) {
  return (
    <div className="flex flex-col gap-4">
      {/* secondary 사용. outline/ghost 글자색 흰색 고정, 밝은 배경서 안 보임 */}
      <Button className="self-start" onPress={onBack} variant="secondary">← 목록으로</Button>
      <div className="h-40 rounded-lg" style={{ background: product.colorToken }} aria-hidden />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">{product.name}</span>
          <Chip color="accent">{product.category}</Chip>
        </div>
        <span className="text-lg font-semibold">{product.price.toLocaleString}원</span>
        <span className="text-sm opacity-70">{product.description}</span>
      </div>
      <Button variant="primary" className="self-start">장바구니에 담기</Button>
    </div>
  );
}

export function ProductsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = PRODUCTS.find((p) => p.id === selectedId) ?? null;

  if (selected) {
    return <ProductDetail product={selected} onBack={ => setSelectedId(null)} />;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {PRODUCTS.map((product) => (
        <Card
          key={product.id}
          className="cursor-pointer gap-2 p-0 overflow-hidden"
          onClick={ => setSelectedId(product.id)}
        >
          <div className="h-20" style={{ background: product.colorToken }} aria-hidden />
          <div className="flex flex-col gap-0.5 px-3 pb-3">
            <span className="text-sm font-medium">{product.name}</span>
            <span className="text-sm opacity-70">{product.price.toLocaleString}원</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
