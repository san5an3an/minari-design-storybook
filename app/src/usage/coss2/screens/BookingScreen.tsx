import * as React from "react";
import { CalendarDays, TriangleAlert, Users } from "lucide-react";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "../../../bases/coss-ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../../../bases/coss-ui/alert";
import {
  AlertDialog, AlertDialogClose, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPopup,
  AlertDialogTitle, AlertDialogTrigger,
} from "../../../bases/coss-ui/alert-dialog";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../../bases/coss-ui/breadcrumb";
import { Button } from "../../../bases/coss-ui/button";
import { Calendar } from "../../../bases/coss-ui/calendar";
import { Card } from "../../../bases/coss-ui/card";
import { Checkbox } from "../../../bases/coss-ui/checkbox";
import { CheckboxGroup } from "../../../bases/coss-ui/checkbox-group";
import {
  Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogPanel, DialogPopup, DialogTitle,
  DialogTrigger,
} from "../../../bases/coss-ui/dialog";
import { Field, FieldDescription, FieldLabel } from "../../../bases/coss-ui/field";
import { Fieldset, FieldsetLegend } from "../../../bases/coss-ui/fieldset";
import { Input } from "../../../bases/coss-ui/input";
import { Label } from "../../../bases/coss-ui/label";
import { Meter, MeterIndicator, MeterTrack } from "../../../bases/coss-ui/meter";
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "../../../bases/coss-ui/number-field";
import { Popover, PopoverPopup, PopoverTrigger } from "../../../bases/coss-ui/popover";
import { Radio, RadioGroup } from "../../../bases/coss-ui/radio-group";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Separator } from "../../../bases/coss-ui/separator";
import { Switch } from "../../../bases/coss-ui/switch";
import { Textarea } from "../../../bases/coss-ui/textarea";
import { toastManager } from "../../../bases/coss-ui/toast";
import {
  DATES, EQUIPMENT_OPTIONS, HOUR_MARKS, ROOMS, ROOM_MAP, dateToIso, findConflict, formatHour, isKnownDate, isoToDate,
  type Booking, type BookingStatus, type Equipment, type Recurrence,
} from "../data";
import { StatusBadge, type Tone } from "../StatusBadge";
import type { BookingSelection, ScreenProps } from "../screens";

const BOOKING_TONE: Record<BookingStatus, Tone> = { 예정: "brand", 진행중: "success", 완료: "neutral", 취소: "danger" };
const RECURRENCE_OPTIONS: readonly Recurrence[] = ["1회", "매주 반복", "매월 반복"];

function NewBookingForm({
  initialRoomId, bookings, onCreateBooking, onNavigate,
}: {
  initialRoomId: string | undefined;
  bookings: Booking[];
  onCreateBooking: ScreenProps["onCreateBooking"];
  onNavigate: ScreenProps["onNavigate"];
}) {
  const [roomId, setRoomId] = React.useState(initialRoomId ?? ROOMS[0].id);
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState<string>(DATES[0].iso);
  const [dateOpen, setDateOpen] = React.useState(false);
  const [start, setStart] = React.useState("09:00");
  const [end, setEnd] = React.useState("10:00");
  const [attendeeCount, setAttendeeCount] = React.useState(4);
  const [recurrence, setRecurrence] = React.useState<Recurrence>("1회");
  const [equipmentRequested, setEquipmentRequested] = React.useState<Equipment[]>([]);
  const [notify, setNotify] = React.useState(true);
  const [note, setNote] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);

  const room = ROOM_MAP.get(roomId) ?? ROOMS[0];

  React.useEffect( => {
    setAttendeeCount((prevCount) => (prevCount > room.capacity ? room.capacity : prevCount));
  }, [room.capacity]);

  React.useEffect( => {
    const startHour = Number(start.split(":")[0]);
    setEnd((prevEnd) => {
      const endHour = Number(prevEnd.split(":")[0]);
      if (endHour > startHour) return prevEnd;
      const next = HOUR_MARKS.find((h) => h > startHour);
      return next ? formatHour(next) : prevEnd;
    });
  }, [start]);

  const conflict = findConflict(bookings, roomId, date, start, end);
  const dateInfo = DATES.find((d) => d.iso === date) ?? DATES[0];
  const canSubmit = title.trim !== "" && room.status !== "점검중" && !conflict;
  const startOptions = HOUR_MARKS.slice(0, -1);
  const endOptions = HOUR_MARKS.filter((h) => h > Number(start.split(":")[0]));

  const submit =  => {
    if (!canSubmit) return;
    setSubmitting(true);
    window.setTimeout( => {
      onCreateBooking({ roomId, title, date, start, end, attendeeCount, recurrence, equipmentRequested, notifyAttendees: notify, note });
      setSubmitting(false);
      toastManager.add({ title: "예약이 완료됐어요", description: `${room.name} · ${dateInfo.label} ${start}–${end}`, type: "success" });
      onNavigate("mine");
    }, 300);
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="font-semibold" style={{ fontSize: "var(--semantic-text-heading-sm)" }}>새 예약 만들기</span>

      <Fieldset className="flex flex-col gap-3">
        <FieldsetLegend>기본 정보</FieldsetLegend>
        <Field>
          <FieldLabel>제목</FieldLabel>
          <Input placeholder="예: 주간 스프린트 플래닝" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <Field>
          <FieldLabel>회의실</FieldLabel>
          <Select value={roomId} onValueChange={(v) => setRoomId(v as string)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectPopup>
              {ROOMS.map((r) => (
                <SelectItem key={r.id} value={r.id} disabled={r.status === "점검중"}>
                  {r.name} · {r.floor} · {r.capacity}인{r.status === "점검중" ? " (점검중)" : ""}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
          <FieldDescription>{room.equipment.length > 0 ? `보유 장비: ${room.equipment.join(", ")}` : "등록된 장비가 없어요."}</FieldDescription>
        </Field>
      </Fieldset>

      <Fieldset className="flex flex-col gap-3">
        <FieldsetLegend>일정</FieldsetLegend>
        <div className="flex flex-wrap gap-3">
          <Field style={{ width: "10rem" }}>
            <FieldLabel>날짜</FieldLabel>
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger
                className="inline-flex h-8.5 items-center gap-1.5 rounded-lg border border-input px-3 text-sm hover:bg-accent"
                style={{ background: "var(--background)" }}
              >
                <CalendarDays size={14} aria-hidden />
                {dateInfo.label}
              </PopoverTrigger>
              <PopoverPopup align="start">
                <Calendar
                  mode="single"
                  selected={isoToDate(date)}
                  onSelect={(day) => { if (!day) return; setDate(dateToIso(day)); setDateOpen(false); }}
                  disabled={(day) => !isKnownDate(dateToIso(day))}
                />
              </PopoverPopup>
            </Popover>
          </Field>
          <Field style={{ width: "7.5rem" }}>
            <FieldLabel>시작</FieldLabel>
            <Select value={start} onValueChange={(v) => setStart(v as string)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectPopup>{startOptions.map((h) => <SelectItem key={h} value={formatHour(h)}>{formatHour(h)}</SelectItem>)}</SelectPopup>
            </Select>
          </Field>
          <Field style={{ width: "7.5rem" }}>
            <FieldLabel>종료</FieldLabel>
            <Select value={end} onValueChange={(v) => setEnd(v as string)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectPopup>{endOptions.map((h) => <SelectItem key={h} value={formatHour(h)}>{formatHour(h)}</SelectItem>)}</SelectPopup>
            </Select>
          </Field>
          <Field style={{ width: "9rem" }}>
            <FieldLabel>참석 인원</FieldLabel>
            <NumberField value={attendeeCount} onValueChange={(v) => setAttendeeCount(v ?? 1)} min={1} max={room.capacity}>
              <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldGroup>
            </NumberField>
            <FieldDescription>최대 {room.capacity}명</FieldDescription>
          </Field>
        </div>

        {conflict ? (
          <Alert variant="error">
            <TriangleAlert size={16} aria-hidden />
            <AlertTitle>이 시간에 이미 다른 예약이 있어요</AlertTitle>
            <AlertDescription>
              {conflict.title} ({conflict.start}–{conflict.end} · {conflict.organizer})와 겹쳐요. 다른 시간이나 회의실을 선택해주세요.
            </AlertDescription>
          </Alert>
        ) : null}
      </Fieldset>

      <Fieldset className="flex flex-col gap-3">
        <FieldsetLegend>옵션</FieldsetLegend>
        <Field>
          <FieldLabel>반복</FieldLabel>
          <RadioGroup value={recurrence} onValueChange={(v) => setRecurrence(v as Recurrence)}>
            <div className="flex flex-wrap gap-4">
              {RECURRENCE_OPTIONS.map((r) => (
                <label key={r} className="flex items-center gap-2" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
                  <Radio value={r} />{r}
                </label>
              ))}
            </div>
          </RadioGroup>
        </Field>
        <Field>
          <FieldLabel>요청 장비</FieldLabel>
          <CheckboxGroup value={equipmentRequested} onValueChange={(v) => setEquipmentRequested(v as Equipment[])}>
            <div className="flex flex-wrap gap-4">
              {EQUIPMENT_OPTIONS.map((eq) => (
                <label key={eq} className="flex items-center gap-2" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
                  <Checkbox value={eq} />{eq}
                </label>
              ))}
            </div>
          </CheckboxGroup>
        </Field>
        <Label className="flex items-center gap-2">
          <Switch checked={notify} onCheckedChange={setNotify} />
          참석자에게 알림 보내기
        </Label>
        <Field>
          <FieldLabel>메모</FieldLabel>
          <Textarea placeholder="회의 안건이나 준비물을 적어주세요" value={note} onChange={(e) => setNote(e.target.value)} />
        </Field>
      </Fieldset>

      <Accordion>
        <AccordionItem value="policy">
          <AccordionTrigger>취소·변경 안내</AccordionTrigger>
          <AccordionPanel>예약은 상세 화면에서 언제든 취소할 수 있어요. 반복 예약은 전체가 같이 잡히고, 회차 하나만 바꾸려면 상세의 &ldquo;수정&rdquo;을 써주세요.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="conflict">
          <AccordionTrigger>겹침 안내</AccordionTrigger>
          <AccordionPanel>같은 회의실·같은 날짜에 시간이 겹치는 예약이 있으면 저장할 수 없어요. 다른 회의실이나 시간을 골라주세요.</AccordionPanel>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={ => onNavigate("rooms")}>취소</Button>
        <Button onClick={submit} loading={submitting} disabled={!canSubmit}>예약하기</Button>
      </div>
    </div>
  );
}

function EditBookingDialog({
  booking, disabled, onSave,
}: { booking: Booking; disabled: boolean; onSave: (patch: { title?: string; attendeeCount?: number; note?: string }) => void }) {
  const room = ROOM_MAP.get(booking.roomId) ?? ROOMS[0];
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(booking.title);
  const [attendeeCount, setAttendeeCount] = React.useState(booking.attendeeCount);
  const [note, setNote] = React.useState(booking.note);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" size="sm" disabled={disabled}>수정</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>예약 수정</DialogTitle>
          <DialogDescription>{room.name} · {booking.date} {booking.start}–{booking.end}은 그대로 두고 아래만 바꿀 수 있어요.</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <div className="flex flex-col gap-3">
            <Field>
              <FieldLabel>제목</FieldLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </Field>
            <Field>
              <FieldLabel>참석 인원</FieldLabel>
              <NumberField value={attendeeCount} onValueChange={(v) => setAttendeeCount(v ?? 1)} min={1} max={room.capacity}>
                <NumberFieldGroup>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldGroup>
              </NumberField>
            </Field>
            <Field>
              <FieldLabel>메모</FieldLabel>
              <Textarea value={note} onChange={(e) => setNote(e.target.value)} />
            </Field>
          </div>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">취소</Button>} />
          <Button
            onClick={ => {
              onSave({ title, attendeeCount, note });
              setOpen(false);
            }}
          >
            저장
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

function BookingDetail({
  booking, bookings, onCancelBooking, onUpdateBooking, onOpenDetail, onNavigate,
}: {
  booking: Booking;
  bookings: Booking[];
  onCancelBooking: ScreenProps["onCancelBooking"];
  onUpdateBooking: ScreenProps["onUpdateBooking"];
  onOpenDetail: ScreenProps["onOpenDetail"];
  onNavigate: ScreenProps["onNavigate"];
}) {
  const room = ROOM_MAP.get(booking.roomId) ?? ROOMS[0];
  const dateInfo = DATES.find((d) => d.iso === booking.date) ?? DATES[0];
  const tone = BOOKING_TONE[booking.status];
  const locked = booking.status === "취소" || booking.status === "완료";
  const fillPct = Math.min(100, Math.round((booking.attendeeCount / room.capacity) * 100));

  const related = bookings
    .filter((b) => b.roomId === booking.roomId && b.date === booking.date && b.id !== booking.id && b.status !== "취소")
    .slice
    .sort((a, b) => a.start.localeCompare(b.start));

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault; onNavigate("rooms"); }}>회의실</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>{room.name} 예약 상세</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="truncate font-semibold" style={{ fontSize: "var(--semantic-text-heading-sm)" }}>{booking.title}</span>
            <StatusBadge tone={tone}>{booking.status}</StatusBadge>
            <Badge variant="secondary">{booking.recurrence}</Badge>
          </div>
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
            {room.name}({room.floor}) · {dateInfo.label} {booking.start}–{booking.end}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <EditBookingDialog
            key={booking.id}
            booking={booking}
            disabled={locked}
            onSave={(patch) => {
              onUpdateBooking(booking.id, patch);
              toastManager.add({ title: "예약을 수정했어요", type: "success" });
            }}
          />
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive-outline" size="sm" disabled={locked}>취소</Button>} />
            <AlertDialogPopup>
              <AlertDialogHeader>
                <AlertDialogTitle>이 예약을 취소할까요?</AlertDialogTitle>
                <AlertDialogDescription>
                  {booking.title} · {dateInfo.label} {booking.start}–{booking.end} 예약이 취소돼요. 되돌릴 수 없어요.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogClose render={<Button variant="outline">닫기</Button>} />
                <AlertDialogClose
                  render={
                    <Button
                      variant="destructive"
                      onClick={ => {
                        onCancelBooking(booking.id);
                        toastManager.add({ title: "예약이 취소됐어요", type: "success" });
                      }}
                    >
                      취소하기
                    </Button>
                  }
                />
              </AlertDialogFooter>
            </AlertDialogPopup>
          </AlertDialog>
        </div>
      </div>

      <div className="mr2-split">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <Card className="grid grid-cols-2 gap-4 p-3">
            <div className="flex items-center gap-2">
              <Avatar><AvatarFallback>{booking.organizer[0]}</AvatarFallback></Avatar>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-medium" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{booking.organizer}</span>
                <span className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{booking.department}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1 text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
                <Users size={12} aria-hidden />참석 인원 대비 정원
              </span>
              <Meter value={fillPct}>
                <div className="flex items-center gap-2">
                  <MeterTrack style={{ flex: 1 }}><MeterIndicator /></MeterTrack>
                  <span style={{ fontSize: "var(--semantic-text-caption)" }}>{booking.attendeeCount}/{room.capacity}명</span>
                </div>
              </Meter>
            </div>
          </Card>

          <Card className="flex flex-col gap-2 p-3">
            <span className="font-semibold" style={{ fontSize: "var(--semantic-text-body)" }}>요청 장비</span>
            <div className="flex flex-wrap gap-1.5">
              {booking.equipmentRequested.length === 0 ? (
                <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>요청한 장비가 없어요.</span>
              ) : booking.equipmentRequested.map((eq) => <Badge key={eq} variant="secondary">{eq}</Badge>)}
            </div>
          </Card>

          <Card className="flex flex-col gap-2 p-3">
            <span className="font-semibold" style={{ fontSize: "var(--semantic-text-body)" }}>메모</span>
            <p className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{booking.note || "등록된 메모가 없어요."}</p>
          </Card>
        </div>

        <div className="mr2-rail flex flex-col gap-4">
          <Card className="flex flex-col gap-2 p-3">
            <span className="font-semibold" style={{ fontSize: "var(--semantic-text-body)" }}>{room.name}의 그 날 다른 예약</span>
            <Separator />
            {related.length === 0 ? (
              <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>이 날 다른 예약이 없어요.</span>
            ) : (
              <div className="flex flex-col gap-1.5">
                {related.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={ => onOpenDetail(r.id)}
                    className="flex items-center justify-between gap-2 rounded-md p-1.5 text-start hover:bg-accent"
                  >
                    <span className="truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{r.title}</span>
                    <span className="shrink-0 text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{r.start}–{r.end}</span>
                  </button>
                ))}
              </div>
            )}
          </Card>

          <Card className="flex flex-col gap-1.5 p-3">
            <span className="font-semibold" style={{ fontSize: "var(--semantic-text-body)" }}>회의실 정보</span>
            <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{room.note}</span>
            <Button variant="outline" size="sm" className="mt-1" onClick={ => onNavigate("rooms")}>회의실 목록으로</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function BookingScreen({ selection, bookings, onCreateBooking, onCancelBooking, onUpdateBooking, onOpenDetail, onNavigate }: ScreenProps) {
  const active: BookingSelection = selection ?? { mode: "new" };

  if (active.mode === "detail") {
    const booking = bookings.find((b) => b.id === active.bookingId) ?? bookings[0];
    return (
      <BookingDetail
        booking={booking}
        bookings={bookings}
        onCancelBooking={onCancelBooking}
        onUpdateBooking={onUpdateBooking}
        onOpenDetail={onOpenDetail}
        onNavigate={onNavigate}
      />
    );
  }

  return <NewBookingForm initialRoomId={active.roomId} bookings={bookings} onCreateBooking={onCreateBooking} onNavigate={onNavigate} />;
}
