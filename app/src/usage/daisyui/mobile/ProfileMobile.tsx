"use client";

import * as React from "react";
import { LogOut } from "lucide-react";
import { APPS, DEVICES, SUMMARY, type Device } from "../screens/ProfileScreen";
import { BRAND, SUCCESS, Sheet, opensSheet } from "./DaisyuiMobileShell";

const LOGOUT_SHEET = "d1-logout-sheet";

// 데스크탑 Tailwind 색 클래스 이름을 모바일 토큰으로 변환. text-primary, text-success 는 이 앱에서 앱 팔레트로 변환되어 daisyUI 색과 다름
const TONE: Record<(typeof SUMMARY)[number]["tone"], string> = {
  "text-primary": BRAND,
  "text-neutral": "var(--color-neutral)",
  "text-success": SUCCESS,
};

export function ProfileMobile() {
  const [on, setOn] = React.useState<Record<string, boolean>>(
    Object.fromEntries(APPS.map((a) => [a.id, a.defaultOn])),
  );
  const [devices, setDevices] = React.useState<Device[]>(DEVICES);
  const [logoutTarget, setLogoutTarget] = React.useState<Device | null>(null);
  const sheetRef = React.useRef<HTMLDialogElement>(null);

  const askLogout = (d: Device) => {
    setLogoutTarget(d);
    sheetRef.current?.showModal();
  };
  const confirmLogout = () => {
    if (logoutTarget) setDevices((prev) => prev.filter((d) => d.name !== logoutTarget.name));
    sheetRef.current?.close();
  };

  return (
    <div className="flex flex-col gap-4">
      <Sheet id={LOGOUT_SHEET} label="기기 로그아웃" ref={sheetRef}>
        <h3 className="text-lg font-bold">기기 로그아웃</h3>
        <p className="py-2 text-sm opacity-70">
          {logoutTarget ? <><b>{logoutTarget.name}</b>에서 로그아웃할까요? 그 기기는 다시 로그인해야 이용할 수 있어요.</> : null}
        </p>
        <div className="d-modal-action">
          <form method="dialog" className="flex w-full gap-2">
            <button type="button" className="d-btn flex-1" onClick={() => sheetRef.current?.close()}>취소</button>
            <button type="button" className="d-btn d-btn-error flex-1" onClick={confirmLogout}>로그아웃</button>
          </form>
        </div>
      </Sheet>

      {/* 계정 요약을 공식 d-stat-figure 자리 그대로 세로 배치 */}
      <div className="d-stats d-stats-vertical w-full bg-base-100 shadow">
        {SUMMARY.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-stat py-3">
              <div className="d-stat-figure" style={{ color: TONE[s.tone] }}><Icon size={24} aria-hidden /></div>
              <div className="d-stat-title">{s.label}</div>
              <div className="d-stat-value" style={{ fontSize: "1.25rem", color: TONE[s.tone] }}>{s.value}</div>
            </div>
          );
        })}
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body gap-3 p-4">
          <div className="flex items-center gap-4">
            <div className="d-avatar d-avatar-placeholder">
              <div className="w-14 rounded-full bg-neutral text-neutral-content">
                <span className="text-xl">한</span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold">한지우</span>
                <span className="d-badge d-badge-success d-badge-sm">활성</span>
              </div>
              <div className="truncate text-sm opacity-60">jiwoo@example.com</div>
            </div>
          </div>

          <label className="d-label" htmlFor="d1m-display-name">표시 이름</label>
          <input id="d1m-display-name" type="text" defaultValue="한지우" className="d-input w-full" />

          <span className="d-label">알림</span>
          <div className="flex flex-col">
            <label className="flex min-h-11 cursor-pointer items-center justify-between gap-3">
              <span>이메일 알림</span>
              <input type="checkbox" defaultChecked className="d-toggle d-toggle-primary" />
            </label>
            <label className="flex min-h-11 cursor-pointer items-center justify-between gap-3">
              <span>주간 리포트</span>
              <input type="checkbox" className="d-toggle d-toggle-primary" />
            </label>
          </div>

          <button type="button" className="d-btn d-btn-primary w-full">저장</button>
        </div>
      </div>

      <ul className="d-list rounded-box bg-base-100 shadow">
        <li className="px-4 pt-4 pb-2 text-sm">
          <span className="font-semibold">최근 로그인 기기</span>
          <span className="ms-2 opacity-60">{devices.length}대</span>
        </li>
        {devices.map((d) => {
          const Icon = d.icon;
          const body = (
            <>
              <Icon size={18} className="opacity-60" aria-hidden />
              <div className="d-list-col-grow min-w-0">
                <div className="truncate text-sm font-semibold">{d.name}</div>
                <div className="text-sm opacity-60">{d.location}</div>
              </div>
              {d.current ? (
                <span className="d-badge d-badge-success d-badge-sm">현재</span>
              ) : (
                <span className="flex items-center gap-1.5 text-sm opacity-60">
                  {d.time}
                  <LogOut size={14} aria-hidden />
                </span>
              )}
            </>
          );
          // 현재 기기 줄은 누르는 동작 없이 표시
          return d.current ? (
            <li key={d.name} className="d-list-row items-center py-3">{body}</li>
          ) : (
            <li key={d.name}>
              <button
                type="button"
                className="d-list-row w-full items-center py-3 text-left"
                aria-label={`${d.name} 로그아웃`}
                {...opensSheet(LOGOUT_SHEET)}
                onClick={() => askLogout(d)}
              >
                {body}
              </button>
            </li>
          );
        })}
        <li className="px-4 pt-1 pb-4 text-sm opacity-60">현재 기기가 아닌 줄을 누르면 그 기기에서 로그아웃할 수 있어요.</li>
      </ul>

      <ul className="d-list rounded-box bg-base-100 shadow">
        <li className="px-4 pt-4 pb-2 text-sm">
          <span className="font-semibold">연결된 앱</span>
          <span className="ms-2 opacity-60">{Object.values(on).filter(Boolean).length} / {APPS.length}개 켜짐</span>
        </li>
        {APPS.map((a) => {
          const Icon = a.icon;
          return (
            <li key={a.id}>
              <label className="d-list-row w-full cursor-pointer items-center py-3">
                <span
                  className="flex size-8 items-center justify-center"
                  style={{ borderRadius: "var(--radius-field, 0.5rem)", background: "var(--color-base-200)" }}
                >
                  <Icon size={16} className="opacity-70" aria-hidden />
                </span>
                <div className="d-list-col-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
                    {a.name}
                    {a.id === "cli" && <kbd className="d-kbd d-kbd-xs">cobalt deploy</kbd>}
                  </div>
                  <div className="text-sm opacity-60">{a.desc}</div>
                </div>
                <input
                  type="checkbox"
                  className="d-toggle d-toggle-primary"
                  checked={on[a.id] ?? false}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setOn((prev) => ({ ...prev, [a.id]: checked }));
                  }}
                  aria-label={`${a.name} 연동 ${on[a.id] ? "끄기" : "켜기"}`}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
