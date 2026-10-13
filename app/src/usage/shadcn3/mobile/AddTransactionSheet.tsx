"use client";
import * as React from "react";
import { Button } from "../../../bases/shadcn/Button";
import { Drawer } from "../../../bases/shadcn/Drawer";
import { Input } from "../../../bases/shadcn/Input";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Select } from "../../../bases/shadcn/Select";
import type { Transaction } from "../data";
import { CATEGORY_OPTIONS, KIND_ITEMS } from "../screens/OverviewScreen";

export function AddTransactionSheet({ trigger, onAdd, methods }: {
  trigger: React.ReactElement;
  onAdd: (t: Transaction) => void;
  methods: string[];
}) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState(CATEGORY_OPTIONS[2]);
  const [kind, setKind] = React.useState<"수입" | "지출">("지출");
  const [amount, setAmount] = React.useState("");
  const [method, setMethod] = React.useState(methods[0] ?? "체크카드");

  const reset = () => { setTitle(""); setAmount(""); setKind("지출"); setCategory(CATEGORY_OPTIONS[2]); };
  const valid = title.trim().length > 0 && Number(amount) > 0;

  const submit = () => {
    if (!valid) return;
    const now = new Date();
    const date = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    onAdd({
      id: `t${Date.now()}`,
      title: title.trim(),
      category,
      amount: Math.round(Number(amount)),
      kind,
      date,
      method,
      memo: "",
    });
    reset();
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} trigger={trigger} title="거래 추가" description="제목과 금액을 적으면 추가할 수 있어요.">
      <div
        className="flex min-h-0 flex-col gap-(--semantic-space-md) overflow-y-auto px-(--component-drawer-padding) pt-(--semantic-space-md)"
        style={{ paddingBottom: "calc(var(--ods-safe-bottom, 0px) + var(--semantic-space-md))" }}
      >
        <Input label="제목" id="new-tx-title-m" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="예: 저녁 약속" />
        <Segmented
          className="w-full"
          value={[kind]}
          onValueChange={(v) => { if (v[0]) setKind(v[0] as "수입" | "지출"); }}
          size="sm"
        >
          {KIND_ITEMS.map((k) => <Segmented.Item key={k.value} value={k.value} className="flex-1">{k.label}</Segmented.Item>)}
        </Segmented>
        <Input label="금액" id="new-tx-amount-m" type="number" inputMode="numeric" min={0} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" />
        {/* 감싸는 div 에서 Select 트리거 폭을 가득 채움 지정. 어댑터 Select 에 className 이 없음 */}
        <div className="flex flex-col [&_[data-slot=select-trigger]]:w-full">
          <Select
            label="카테고리"
            value={category}
            onValueChange={setCategory}
            items={Object.fromEntries(CATEGORY_OPTIONS.map((c) => [c, c]))}
            alignItemWithTrigger={false}
          />
        </div>
        <div className="flex flex-col [&_[data-slot=select-trigger]]:w-full">
          <Select
            label="결제 수단"
            value={method}
            onValueChange={setMethod}
            items={Object.fromEntries(methods.map((m) => [m, m]))}
            alignItemWithTrigger={false}
          />
        </div>
        <div className="flex items-center gap-(--semantic-space-sm)">
          <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>취소</Button>
          <Button variant="solid" tone="brand" className="flex-1" onClick={submit} disabled={!valid}>추가</Button>
        </div>
      </div>
    </Drawer>
  );
}
