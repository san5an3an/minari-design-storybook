"use client";

import * as React from "react";
import {
  Accordion, AlertDialog, Avatar, Button, Card, Description, Input, Label, Slider, Switch, TextField,
} from "@heroui/react";

export function SettingsScreen {
  const [push, setPush] = React.useState(true);
  const [emailDigest, setEmailDigest] = React.useState(false);
  const [weekendQuiet, setWeekendQuiet] = React.useState(true);
  const [time, setTime] = React.useState("21:00");
  const [volume, setVolume] = React.useState(60);
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex-row items-center gap-3">
        <Avatar>
          <Avatar.Fallback>하</Avatar.Fallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">김하늘</span>
          <span className="text-xs opacity-60">가입 128일째 · 이어온 습관 3개</span>
        </div>
      </Card>

      <Card className="gap-4">
        <Switch isSelected={push} onChange={setPush}>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            푸시 알림
          </Switch.Content>
          <Description>완료 안 한 습관이 있으면 저녁에 알림</Description>
        </Switch>

        <Switch isSelected={emailDigest} onChange={setEmailDigest}>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            주간 이메일 요약
          </Switch.Content>
          <Description>월요일 아침, 지난주 기록을 정리해 전송</Description>
        </Switch>

        <Switch isSelected={weekendQuiet} onChange={setWeekendQuiet}>
          <Switch.Content>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            주말은 조용히
          </Switch.Content>
          <Description>토·일에는 알림 미발송</Description>
        </Switch>
      </Card>

      <Card className="gap-3">
        <TextField className="max-w-40" name="reminder-time" value={time} onChange={setTime}>
          <Label>알림 시간</Label>
          <Input type="time" />
        </TextField>
        <Button className="self-start">저장</Button>
      </Card>

      <Card className="gap-3">
        <Slider
          className="w-full"
          value={volume}
          onChange={(v) => setVolume(Array.isArray(v) ? v[0] : v)}
        >
          <div className="flex items-center justify-between">
            <Label>알림 소리 크기</Label>
            <Slider.Output />
          </div>
          <Slider.Track>
            <Slider.Fill />
            <Slider.Thumb />
          </Slider.Track>
        </Slider>
      </Card>

      <Accordion className="w-full">
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger>
              고급 설정
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="flex flex-col gap-2 text-sm opacity-80">
              <p>연속 기록이 끊기기 하루 전 저녁에 한 번 더 알림</p>
              <p>공휴일에는 알림 시간을 오전 10시로 조정</p>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      {/* 계정 관리 화면 여백 채우기용 */}
      <Card className="gap-3">
        <span className="text-sm font-medium">계정</span>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">로그아웃</Button>
          <Button variant="secondary" size="sm" onPress={ => setConfirmDelete(true)}>계정 삭제</Button>
        </div>
      </Card>

      <AlertDialog.Backdrop isOpen={confirmDelete} onOpenChange={setConfirmDelete}>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>계정을 삭제할까요?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>이어온 습관 3개와 128일치 기록이 모두 사라져요. 되돌릴 수 없어요.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">취소</Button>
              <Button slot="close" variant="secondary">삭제</Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </div>
  );
}
