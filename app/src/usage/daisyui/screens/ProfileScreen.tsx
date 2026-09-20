import * as React from "react";
import { Calendar, Clock, CreditCard, Laptop, Mail, MessageSquare, Smartphone, Tablet, Terminal } from "lucide-react";

const SUMMARY = [
  { label: "요금제", value: "Pro", icon: CreditCard, tone: "text-primary" },
  { label: "가입일", value: "2026-03-12", icon: Calendar, tone: "text-neutral" },
  { label: "최근 로그인", value: "10분 전", icon: Clock, tone: "text-success" },
] as const;

interface Device {
  name: string;
  location: string;
  time: string;
  icon: typeof Laptop;
  current: boolean;
}

const DEVICES: Device[] = [
  { name: "MacBook Pro · Chrome", location: "서울, 대한민국", time: "지금", icon: Laptop, current: true },
  { name: "iPhone 16 · Safari", location: "서울, 대한민국", time: "10분 전", icon: Smartphone, current: false },
  { name: "iPad Air · Safari", location: "부산, 대한민국", time: "어제", icon: Tablet, current: false },
  { name: "Windows PC · Edge", location: "인천, 대한민국", time: "3일 전", icon: Laptop, current: false },
];

interface AppIntegration {
  id: string;
  name: string;
  desc: string;
  icon: typeof Terminal;
  defaultOn: boolean;
}

const APPS: AppIntegration[] = [
  { id: "cli", name: "Cobalt CLI", desc: "터미널에서 배포·로그 확인", icon: Terminal, defaultOn: true },
  { id: "chat", name: "팀 채팅 알림", desc: "빌드·배포 결과를 채팅방으로 전송", icon: MessageSquare, defaultOn: true },
  { id: "digest", name: "주간 이메일 다이제스트", desc: "매주 월요일 활동 요약 발송", icon: Mail, defaultOn: false },
];

export function ProfileScreen {
  const [on, setOn] = React.useState<Record<string, boolean>>(
    Object.fromEntries(APPS.map((a) => [a.id, a.defaultOn])),
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* 계정 요약. daisyUI 공식 d-stat-figure 클래스 그대로 사용 */}
      <div className="d-stats shadow">
        {SUMMARY.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-stat">
              <div className={`d-stat-figure ${s.tone}`}>
                <Icon size={28} aria-hidden />
              </div>
              <div className="d-stat-title">{s.label}</div>
              <div className={`d-stat-value ${s.tone}`} style={{ fontSize: "1.25rem" }}>
                {s.value}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_2fr]">
        <div className="d-card bg-base-100 shadow" style={{ position: "relative", overflow: "hidden" }}>
          {/* position:relative 지정. absolute 워터마크가 본문 위로 뜨는 문제임 */}
          <div className="d-card-body" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <div className="d-avatar d-avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                  <span className="text-xl">한</span>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontWeight: 600 }}>한지우</span>
                  <span className="d-badge d-badge-success d-badge-sm">활성</span>
                </div>
                <div className="text-sm opacity-60">jiwoo@example.com</div>
              </div>
            </div>

            <label className="d-label">표시 이름</label>
            <input type="text" defaultValue="한지우" className="d-input d-input-bordered w-full" />

            <label className="d-label mt-3">알림</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label className="d-label cursor-pointer justify-start gap-3">
                <input type="checkbox" defaultChecked className="d-toggle d-toggle-primary" />
                이메일 알림
              </label>
              <label className="d-label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="d-toggle d-toggle-primary" />
                주간 리포트
              </label>
            </div>

            <div className="d-card-actions justify-end mt-4">
              <button type="button" className="d-btn d-btn-primary">저장</button>
            </div>
          </div>

          {/* 카드 모서리 워터마크 표시 */}
          <CreditCard
            aria-hidden
            size={72}
            className="text-primary"
            style={{ position: "absolute", left: "1.25rem", bottom: "0.5rem", opacity: 0.06, zIndex: 0 }}
          />
        </div>

        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body" style={{ padding: 0 }}>
            <div style={{ padding: "1rem 1.25rem 0" }}>
              <span style={{ fontWeight: 600 }}>최근 로그인 기기</span>
              <span className="text-sm opacity-60" style={{ marginLeft: "0.5rem" }}>{DEVICES.length}대</span>
            </div>
            <ul>
              {DEVICES.map((d, i) => {
                const Icon = d.icon;
                return (
                  <li
                    key={d.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 1.25rem",
                      borderTop: i > 0 ? "1px solid var(--color-base-300, #eee)" : undefined,
                    }}
                  >
                    <Icon size={18} className="opacity-60" aria-hidden />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{d.name}</div>
                      <div className="text-sm opacity-60">{d.location}</div>
                    </div>
                    {d.current ? (
                      <span className="d-badge d-badge-success d-badge-sm">현재</span>
                    ) : (
                      <span className="text-sm opacity-50">{d.time}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body" style={{ padding: 0 }}>
          <div style={{ padding: "1rem 1.25rem 0" }}>
            <span style={{ fontWeight: 600 }}>연결된 앱</span>
            <span className="text-sm opacity-60" style={{ marginLeft: "0.5rem" }}>
              {Object.values(on).filter(Boolean).length} / {APPS.length}개 켜짐
            </span>
          </div>
          <ul>
            {APPS.map((a, i) => {
              const Icon = a.icon;
              return (
                <li
                  key={a.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1.25rem",
                    borderTop: i > 0 ? "1px solid var(--color-base-300, #eee)" : undefined,
                  }}
                >
                  <span
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: "2rem", height: "2rem", borderRadius: "var(--radius-field, 0.5rem)",
                      background: "var(--color-base-200, #f2f2f2)", flexShrink: 0,
                    }}
                  >
                    <Icon size={16} className="opacity-70" aria-hidden />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{a.name}</div>
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
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
