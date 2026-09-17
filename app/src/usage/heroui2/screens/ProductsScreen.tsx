"use client";
import * as React from "react";
import { Breadcrumbs, Button, Card, Chip, Label, ListBox, Select, toast } from "@heroui/react";
import { PRODUCTS, type Product } from "../data";

function ProductDetail({ product, onBack }: { product: Product; onBack:  => void }) {
  return (
    <div className="flex flex-col gap-4">
      {/* secondary 사용. outline/ghost 글자색 흰색 고정, 밝은 배경서 안 보임 */}
      <Breadcrumbs>
        <Breadcrumbs.Item onPress={onBack}>상품</Breadcrumbs.Item>
        <Breadcrumbs.Item>{product.name}</Breadcrumbs.Item>
      </Breadcrumbs>
      <Button className="self-start" onPress={onBack} variant="secondary">← 목록으로</Button>
      <div
        className="h-40 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url("${product.image}")` }}
        aria-hidden
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">{product.name}</span>
          <Chip color="accent">{product.category}</Chip>
        </div>
        <span className="text-lg font-semibold">{product.price.toLocaleString}원</span>
        <span className="text-sm opacity-70">{product.description}</span>
      </div>
      <Button variant="primary" className="self-start" onPress={ => toast.success(`${product.name} 담았어요`)}>장바구니에 담기</Button>
    </div>
  );
}

export function ProductsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string>("all");
  const selected = PRODUCTS.find((p) => p.id === selectedId) ?? null;

  if (selected) {
    return <ProductDetail product={selected} onBack={ => setSelectedId(null)} />;
  }

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  const visible = category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="flex flex-col gap-3">
      <Select
        className="w-40 self-end"
        selectedKey={category}
        onSelectionChange={(key) => setCategory(String(key))}
      >
        <Label className="sr-only">카테고리</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="all" textValue="전체">
              전체
              <ListBox.ItemIndicator />
            </ListBox.Item>
            {categories.map((c) => (
              <ListBox.Item key={c} id={c} textValue={c}>
                {c}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {visible.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer gap-2 p-0 overflow-hidden"
            onClick={ => setSelectedId(product.id)}
          >
            <div
              className="h-24 bg-cover bg-center"
              style={{ backgroundImage: `url("${product.image}")` }}
              aria-hidden
            />
            <div className="flex flex-col gap-0.5 px-3 pb-3">
              <span className="text-sm font-medium">{product.name}</span>
              <span className="text-sm opacity-70">{product.price.toLocaleString}원</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
