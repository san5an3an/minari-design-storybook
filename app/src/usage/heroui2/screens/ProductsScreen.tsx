"use client";
import * as React from "react";
import {
  Breadcrumbs, Button, Card, Chip, Label, ListBox, NumberField, SearchField, Select, toast,
} from "@heroui/react";
import type { ScreenProps } from "../screens";
import { PRODUCTS, type Product } from "../data";

const GRID_CSS = `
.hu2-products-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
@container hu2 (min-width: 26rem) {
  .hu2-products-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
`;

function ProductDetail({
  product,
  cartQty,
  onBack,
  onAddToCart,
}: {
  product: Product;
  cartQty: number;
  onBack:  => void;
  onAddToCart: (productId: string, quantity?: number) => void;
}) {
  const [quantity, setQuantity] = React.useState<number>(1);

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
          {cartQty > 0 ? <Chip color="success" size="sm">장바구니에 {cartQty}개 있어요</Chip> : null}
        </div>
        <span className="text-lg font-semibold">{product.price.toLocaleString}원</span>
        <span className="text-sm opacity-70">{product.description}</span>
      </div>

      <NumberField minValue={1} maxValue={9} value={quantity} onChange={(v) => setQuantity(v ?? 1)}>
        <Label>수량</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input className="w-12 text-center" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>

      <Button
        variant="primary"
        className="self-start"
        onPress={ => {
          onAddToCart(product.id, quantity);
          toast.success(`${product.name} ${quantity}개 담았어요`);
        }}
      >
        장바구니에 담기
      </Button>
    </div>
  );
}

export function ProductsScreen({ cartItems, onAddToCart }: ScreenProps) {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string>("all");
  const [query, setQuery] = React.useState("");
  const selected = PRODUCTS.find((p) => p.id === selectedId) ?? null;

  const cartQtyOf = (productId: string) => cartItems.find((it) => it.productId === productId)?.quantity ?? 0;

  if (selected) {
    return (
      <ProductDetail
        product={selected}
        cartQty={cartQtyOf(selected.id)}
        onBack={ => setSelectedId(null)}
        onAddToCart={onAddToCart}
      />
    );
  }

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  const visible = PRODUCTS.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesQuery = query.trim === "" || p.name.toLowerCase.includes(query.trim.toLowerCase);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col gap-3">
      <style>{GRID_CSS}</style>
      <div className="flex flex-wrap items-center gap-2">
        <SearchField className="flex-1" value={query} onChange={setQuery} aria-label="상품 검색" style={{ minWidth: "10rem" }}>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="상품 이름으로 검색…" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
        <Select
          className="w-36"
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
      </div>

      {visible.length === 0 ? (
        <Card className="items-center gap-1 p-6 text-center">
          <span className="text-sm opacity-70">조건에 맞는 상품이 없어요.</span>
        </Card>
      ) : (
        <div className="hu2-products-grid">
          {visible.map((product) => {
            const qty = cartQtyOf(product.id);
            return (
              <Card
                key={product.id}
                className="cursor-pointer gap-2 p-0 overflow-hidden"
                onClick={ => setSelectedId(product.id)}
              >
                <div
                  className="relative h-24 bg-cover bg-center"
                  style={{ backgroundImage: `url("${product.image}")` }}
                  aria-hidden
                >
                  {qty > 0 ? (
                    <Chip color="success" size="sm" className="absolute right-1.5 top-1.5">{qty}개 담음</Chip>
                  ) : null}
                </div>
                <div className="flex flex-col gap-0.5 px-3 pb-3">
                  <span className="text-sm font-medium">{product.name}</span>
                  <span className="text-sm opacity-70">{product.price.toLocaleString}원</span>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
