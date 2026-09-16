"use client";

import * as React from "react";
import {
  Avatar, Button, Card, Description, Input, Label, Switch, TextField,
} from "@heroui/react";

export function SettingsScreen {
  const [push, setPush] = React.useState(true);
  const [emailDigest, setEmailDigest] = React.useState(false);
  const [weekendQuiet, setWeekendQuiet] = React.useState(true);
  const [time, setTime] = React.useState("21:00");

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
    </div>
  );
}
