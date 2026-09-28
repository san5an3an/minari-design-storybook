import * as React from "react";
import { CheckCircle2, Clock, Info, Search, Star, Wrench } from "lucide-react";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Combobox, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxPopup } from "../../../bases/coss-ui/combobox";
import { Label } from "../../../bases/coss-ui/label";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import {
  Sheet, SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetPanel, SheetPopup, SheetTitle, SheetTrigger,
} from "../../../bases/coss-ui/sheet";
import { Switch } from "../../../bases/coss-ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../bases/coss-ui/table";
import { Toggle } from "../../../bases/coss-ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "../../../bases/coss-ui/toggle-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../../../bases/coss-ui/tooltip";
import { DATES, EQUIPMENT_OPTIONS, ROOMS, type Equipment, type Room, type RoomStatus } from "../data";
import { StatTile } from "../StatTile";
import { StatusBadge, type Tone } from "../StatusBadge";
import type { ScreenProps } from "../screens";

const ROOM_STATUS_TONE: Record<RoomStatus, Tone> = { 사용가능: "success", 사용중: "brand", 점검중: "danger" };

type CapacityBucket = "all" | "le4" | "mid" | "ge11";
const CAPACITY_OPTIONS: readonly { value: CapacityBucket; label: string }[] = [
  { value: "all", label: "전체 인원" },
  { value: "le4", label: "4인 이하" },
  { value: "mid", label: "5~10인" },
  { value: "ge11", label: "11인 이상" },
];

function matchesCapacity(bucket: CapacityBucket, capacity: number): boolean {
  if (bucket === "le4") return capacity <= 4;
  if (bucket === "mid") return capacity >= 5 && capacity <= 10;
  if (bucket === "ge11") return capacity >= 11;
  return true;
}

function RoomDetailSheet({ room, todayCount }: { room: Room; todayCount: number }) {
  return (
    <SheetPopup>
      <SheetHeader>
        <SheetTitle>{room.name} 회의실</SheetTitle>
        <SheetDescription>{room.floor} · 최대 {room.capacity}인</SheetDescription>
      </SheetHeader>
      <SheetPanel>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>현재 상태</span>
            <StatusBadge tone={ROOM_STATUS_TONE[room.status]}>{room.status}</StatusBadge>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>보유 장비</span>
            <div className="flex flex-wrap gap-1.5">
              {room.equipment.length === 0 ? (
                <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>등록된 장비가 없어요.</span>
              ) : room.equipment.map((eq) => <Badge key={eq} variant="secondary">{eq}</Badge>)}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>메모</span>
            <p style={{ fontSize: "var(--semantic-text-body-sm)" }}>{room.note}</p>
          </div>
          <p className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
            {DATES[0].label}({DATES[0].weekday}) 예약 {todayCount}건이 잡혀 있어요. 자세한 시간은 &ldquo;오늘&rdquo; 탭에서 볼 수 있어요.
          </p>
        </div>
      </SheetPanel>
      <SheetFooter>
        <SheetClose render={<Button variant="outline">닫기</Button>} />
      </SheetFooter>
    </SheetPopup>
  );
}

export function RoomsScreen({ bookings, onStartNew }: ScreenProps) {
  const [nameQuery, setNameQuery] = React.useState<string>("");
  const [capacityBucket, setCapacityBucket] = React.useState<CapacityBucket>("all");
  const [equipmentFilter, setEquipmentFilter] = React.useState<Equipment[]>([]);
  const [favoritesOnly, setFavoritesOnly] = React.useState(false);
  const [favorites, setFavorites] = React.useState<ReadonlySet<string>>( => new Set(["r1"]));

  const toggleFavorite = (roomId: string) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(roomId)) next.delete(roomId);
      else next.add(roomId);
      return next;
    });

  const filteredRooms = ROOMS.filter((r) => {
    if (nameQuery && r.name !== nameQuery) return false;
    if (!matchesCapacity(capacityBucket, r.capacity)) return false;
    if (equipmentFilter.length > 0 && !equipmentFilter.every((eq) => r.equipment.includes(eq))) return false;
    if (favoritesOnly && !favorites.has(r.id)) return false;
    return true;
  });

  const available = ROOMS.filter((r) => r.status === "사용가능").length;
  const inUse = ROOMS.filter((r) => r.status === "사용중").length;
  const maintenance = ROOMS.filter((r) => r.status === "점검중").length;

  const todayCountByRoom = (roomId: string) => bookings.filter((b) => b.roomId === roomId && b.date === DATES[0].iso && b.status !== "취소").length;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="font-semibold" style={{ fontSize: "var(--semantic-text-heading-sm)" }}>회의실 찾기</span>
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>수용 인원·보유 장비로 딱 맞는 방을 골라요.</span>
        </div>
        <Button size="sm" onClick={ => onStartNew}>+ 새 예약</Button>
      </div>

      <div className="mr2-stats">
        <StatTile icon={CheckCircle2} tone="success" label="사용 가능" value={`${available}실`} />
        <StatTile icon={Clock} tone="brand" label="사용 중" value={`${inUse}실`} />
        <StatTile icon={Wrench} tone="danger" label="점검 중" value={`${maintenance}실`} />
        <StatTile icon={Star} tone="warning" label="즐겨찾기" value={`${favorites.size}실`} />
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <div className="flex min-w-0 flex-col gap-1.5" style={{ width: "13rem" }}>
          <Label htmlFor="mr2-room-search">이름으로 찾기</Label>
          <Combobox items={ROOMS.map((r) => r.name)} onValueChange={(v) => setNameQuery((v as string | null) ?? "")}>
            <ComboboxInput id="mr2-room-search" placeholder="예: 하늘" startAddon={<Search size={14} aria-hidden />} showClear />
            <ComboboxPopup>
              <ComboboxEmpty>일치하는 회의실이 없어요.</ComboboxEmpty>
              <ComboboxList>{(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}</ComboboxList>
            </ComboboxPopup>
          </Combobox>
        </div>

        <div className="flex min-w-0 flex-col gap-1.5" style={{ width: "9rem" }}>
          <Label>수용 인원</Label>
          <Select value={capacityBucket} onValueChange={(v) => setCapacityBucket(v as CapacityBucket)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectPopup>
              {CAPACITY_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectPopup>
          </Select>
        </div>

        <div className="flex min-w-0 flex-col gap-1.5">
          <Label>보유 장비(중복 선택)</Label>
          <ToggleGroup
            variant="outline"
            size="sm"
            multiple
            value={equipmentFilter}
            onValueChange={(v) => setEquipmentFilter(v as Equipment[])}
          >
            {EQUIPMENT_OPTIONS.map((eq) => <ToggleGroupItem key={eq} value={eq}>{eq}</ToggleGroupItem>)}
          </ToggleGroup>
        </div>

        <Label className="ms-auto flex items-center gap-2">
          <Switch checked={favoritesOnly} onCheckedChange={setFavoritesOnly} />
          즐겨찾기만 보기
        </Label>
      </div>

      {filteredRooms.length === 0 ? (
        // 빈 결과일 때 헤더만 있는 표 대신 표를 접고 안내문 표시
        <p className="text-muted-foreground text-center" style={{ fontSize: "var(--semantic-text-body-sm)", padding: "2rem 0" }}>
          조건에 맞는 회의실이 없어요. 필터를 조정해보세요.
        </p>
      ) : (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8" />
              <TableHead>회의실</TableHead>
              <TableHead>수용 인원</TableHead>
              <TableHead>보유 장비</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">액션</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Toggle
                          size="sm"
                          pressed={favorites.has(room.id)}
                          onPressedChange={ => toggleFavorite(room.id)}
                          aria-label={`${room.name} 즐겨찾기`}
                        >
                          <Star size={14} fill={favorites.has(room.id) ? "currentColor" : "none"} />
                        </Toggle>
                      }
                    />
                    <TooltipPopup>즐겨찾기 {favorites.has(room.id) ? "해제" : "추가"}</TooltipPopup>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{room.name}</span>
                    <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{room.floor}</span>
                  </div>
                </TableCell>
                <TableCell>{room.capacity}인</TableCell>
                <TableCell>
                  <div className="flex max-w-56 flex-wrap gap-1">
                    {room.equipment.length === 0 ? (
                      <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>없음</span>
                    ) : room.equipment.map((eq) => <Badge key={eq} variant="secondary" size="sm">{eq}</Badge>)}
                  </div>
                </TableCell>
                <TableCell><StatusBadge tone={ROOM_STATUS_TONE[room.status]}>{room.status}</StatusBadge></TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <Sheet>
                      <SheetTrigger render={<Button variant="ghost" size="icon-sm" aria-label={`${room.name} 상세보기`}><Info size={14} /></Button>} />
                      <RoomDetailSheet room={room} todayCount={todayCountByRoom(room.id)} />
                    </Sheet>
                    {room.status === "점검중" ? (
                      // disabled 버튼은 hover 이벤트 못 받아 Tooltip 안 뜸. 사유 텍스트 대체
                      <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }} title="점검 중이라 예약할 수 없어요">
                        예약 불가
                      </span>
                    ) : (
                      <Button size="sm" onClick={ => onStartNew(room.id)}>예약</Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)", marginTop: "0.5rem" }}>
          전체 {ROOMS.length}실 중 {filteredRooms.length}실 표시
        </p>
      </div>
      )}
    </div>
  );
}
