import * as React from "react";
import {
  Activity, Bell, Building2, ChevronsUpDown, FileText, Folder, LogOut, Plus, Search, UserCog, Users2,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../bases/coss-ui/avatar";
import { Badge } from "../../bases/coss-ui/badge";
import { Button } from "../../bases/coss-ui/button";
import { Card } from "../../bases/coss-ui/card";
import { Combobox, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxPopup } from "../../bases/coss-ui/combobox";
import { Dialog, DialogHeader, DialogPanel, DialogPopup, DialogTitle } from "../../bases/coss-ui/dialog";
import { Kbd } from "../../bases/coss-ui/kbd";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "../../bases/coss-ui/menu";
import { Popover, PopoverPopup, PopoverTitle, PopoverTrigger } from "../../bases/coss-ui/popover";
import { Progress } from "../../bases/coss-ui/progress";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarInset, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarSeparator,
  SidebarTrigger, useSidebar,
} from "../../bases/coss-ui/sidebar";
import { ToastProvider } from "../../bases/coss-ui/toast";
import { TooltipProvider } from "../../bases/coss-ui/tooltip";
import type { CommentItem, DocItem, DocSpace, DocStatus, Member, NotificationItem, Role } from "./data";
import {
  ACTIVITY, CURRENT_USER_ID, DOCS, INITIAL_COMMENTS, MEMBERS, NOTIFICATIONS, SPACE_LIST, WORKSPACE,
} from "./data";
import type { UsageDashboardProps } from "../registry";
import type { ScreenProps } from "./screens";
import { SCREENS } from "./screens";

const NAV_SCREENS = SCREENS.filter((s) => s.key !== "detail");
const NAV_ICON: Record<string, React.ReactNode> = {
  activity: <Activity size={16} />,
  documents: <FileText size={16} />,
  members: <Users2 size={16} />,
};

const SHELL = "ods-usage-coss1-shell";
const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";
const SHELL_CSS = `
.${SHELL} .coss-scope { container-type: inline-size; container-name: coss1; }
.${SHELL} .coss-stat-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.625rem; }
.${SHELL} .coss-split { display: flex; flex-direction: column; gap: 1rem; }
.${SHELL} .coss-rail { width: 100%; }
@container coss1 (min-width: 36rem) {
  .${SHELL} .coss-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
@container coss1 (min-width: 40rem) {
  .${SHELL} .coss-split { flex-direction: row; }
  .${SHELL} .coss-rail { width: 15rem; flex: 0 0 auto; }
}
`;

interface ShellChromeProps {
  systemName: string;
  screenKey: string;
  setScreenKey: (key: string) => void;
  screenProps: ScreenProps;
  currentUser: Member;
  docs: DocItem[];
  members: Member[];
  notifications: NotificationItem[];
  onMarkNotificationsRead:  => void;
}

function ShellChrome({
  systemName, screenKey, setScreenKey, screenProps, currentUser, docs, members, notifications, onMarkNotificationsRead,
}: ShellChromeProps) {
  const { open } = useSidebar;
  const [commandOpen, setCommandOpen] = React.useState(false);

  React.useEffect( => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase === "k") {
        e.preventDefault;
        setCommandOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return  => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeScreen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = activeScreen.Screen;
  const unreadCount = notifications.filter((n) => !n.read).length;
  const invitedCount = members.filter((m) => m.status === "초대됨").length;
  const paletteLabels = [...docs.map((d) => d.title), ...members.map((m) => m.name)];

  function jumpTo(label: string | null) {
    if (!label) return;
    const doc = docs.find((d) => d.title === label);
    if (doc) {
      screenProps.onSelect?.(doc.id);
      setScreenKey("detail");
      setCommandOpen(false);
      return;
    }
    if (members.some((m) => m.name === label)) {
      setScreenKey("members");
      setCommandOpen(false);
    }
  }

  return (
    <div style={{ display: "flex", flex: 1, minHeight: 0, width: "100%", overflow: "hidden" }}>
      <Sidebar collapsible="none" style={{ width: open ? "13rem" : "3.5rem", flexShrink: 0, transition: "width .15s ease", height: "100%" }}>
        <SidebarHeader>
          <Menu>
            <MenuTrigger
              render={(
                <SidebarMenuButton size="lg">
                  <span
                    aria-hidden
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", flexShrink: 0,
                      borderRadius: "var(--semantic-radius-control)", background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)",
                      fontWeight: 700, fontSize: "0.8125rem",
                    }}
                  >
                    {WORKSPACE.name.charAt(0)}
                  </span>
                  {open && (
                    <>
                      <span style={{ fontWeight: 600, fontSize: "var(--semantic-text-body-sm)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{WORKSPACE.name}</span>
                      <ChevronsUpDown size={14} style={{ marginInlineStart: "auto", opacity: 0.7, flexShrink: 0 }} />
                    </>
                  )}
                </SidebarMenuButton>
              )}
            />
            <MenuPopup align="start" style={{ width: "12rem" }}>
              <MenuItem><Building2 size={14} />{WORKSPACE.name}</MenuItem>
              <MenuItem disabled><Building2 size={14} />그린필드 스튜디오</MenuItem>
              <MenuSeparator />
              <MenuItem><Plus size={14} />새 워크스페이스 만들기</MenuItem>
            </MenuPopup>
          </Menu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            {open && <SidebarGroupLabel>메뉴</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV_SCREENS.map((s) => {
                  const badge = s.key === "documents"
                    ? docs.filter((d) => d.status !== "보관").length
                    : s.key === "members" ? (invitedCount || undefined) : undefined;
                  return (
                    <SidebarMenuItem key={s.key}>
                      <SidebarMenuButton isActive={screenKey === s.key} tooltip={!open ? s.label : undefined} onClick={ => setScreenKey(s.key)}>
                        {NAV_ICON[s.key]}
                        {open && <span>{s.label}</span>}
                        {open && badge !== undefined && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            {open && <SidebarGroupLabel>스페이스</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {SPACE_LIST.map((space) => (
                  <SidebarMenuItem key={space}>
                    <SidebarMenuButton tooltip={!open ? space : undefined} onClick={ => setScreenKey("documents")}>
                      <Folder size={16} />
                      {open && <span>{space}</span>}
                      {open && <SidebarMenuBadge>{docs.filter((d) => d.space === space).length}</SidebarMenuBadge>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          {open && (
            <Card style={{ padding: "0.75rem", background: "var(--semantic-bg-brand-subtle)" }}>
              <div style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-on-brand-subtle)", marginBottom: "0.375rem" }}>
                저장공간 {WORKSPACE.storageUsedGB}GB / {WORKSPACE.storageTotalGB}GB
              </div>
              <Progress value={(WORKSPACE.storageUsedGB / WORKSPACE.storageTotalGB) * 100} />
            </Card>
          )}
          <SidebarSeparator />
          <SidebarMenu>
            <SidebarMenuItem>
              <Menu>
                <MenuTrigger
                  render={(
                    <SidebarMenuButton size="lg">
                      <Avatar style={{ width: "1.5rem", height: "1.5rem", flexShrink: 0 }}><AvatarFallback style={{ fontSize: "0.625rem" }}>{currentUser.initial}</AvatarFallback></Avatar>
                      {open && (
                        <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", minWidth: 0 }}>
                          <span style={{ fontSize: "var(--semantic-text-body-sm)", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{currentUser.name}</span>
                          <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{currentUser.role}</span>
                        </span>
                      )}
                    </SidebarMenuButton>
                  )}
                />
                <MenuPopup align="start" style={{ width: "11rem" }}>
                  <MenuItem onClick={ => setScreenKey("members")}><UserCog size={14} />프로필 설정</MenuItem>
                  <MenuSeparator />
                  <MenuItem variant="destructive"><LogOut size={14} />로그아웃</MenuItem>
                </MenuPopup>
              </Menu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset style={{ height: "100%", minWidth: 0 }}>
        <div
          style={{
            display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.625rem 0.875rem", flexShrink: 0,
            borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <SidebarTrigger />
          <span style={{ fontWeight: 700, fontSize: "var(--semantic-text-body-sm)", whiteSpace: "nowrap" }}>{systemName} 노트</span>
          <button
            type="button"
            onClick={ => setCommandOpen(true)}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem", flex: 1, minWidth: "6rem", maxWidth: "16rem", marginInlineStart: "0.5rem",
              background: "var(--semantic-bg-neutral-subtle)", border: "none", borderRadius: "var(--semantic-radius-control)",
              padding: "0.375rem 0.625rem", color: "var(--semantic-fg-neutral-subtle)", cursor: "pointer", fontSize: "var(--semantic-text-body-sm)",
            }}
          >
            <Search size={13} />빠른 이동
            <Kbd style={{ marginInlineStart: "auto" }}>⌘K</Kbd>
          </button>
          <div style={{ marginInlineStart: "auto", display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <Popover>
              <PopoverTrigger
                render={(
                  <Button variant="ghost" size="icon-sm" aria-label={`알림 ${unreadCount}건`}>
                    <Bell size={15} />
                    {unreadCount > 0 && (
                      <Badge size="sm" variant="destructive" style={{ position: "absolute", top: "-0.125rem", insetInlineEnd: "-0.125rem" }}>{unreadCount}</Badge>
                    )}
                  </Button>
                )}
              />
              <PopoverPopup align="end" style={{ width: "16rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <PopoverTitle>알림</PopoverTitle>
                  <button type="button" onClick={onMarkNotificationsRead} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--semantic-fg-brand-default)", fontSize: "var(--semantic-text-caption)" }}>
                    모두 읽음
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginTop: "0.625rem" }}>
                  {notifications.map((n) => (
                    <div key={n.id} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                      <span aria-hidden style={{ width: "0.4375rem", height: "0.4375rem", borderRadius: "50%", background: n.read ? "transparent" : "var(--semantic-bg-danger-default)", marginTop: "0.375rem", flexShrink: 0 }} />
                      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                        <span style={{ fontSize: "var(--semantic-text-body-sm)", fontWeight: n.read ? 400 : 600 }}>{n.title}</span>
                        <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{n.body}</span>
                        <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtlest)" }}>{n.timeLabel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPopup>
            </Popover>
            <Avatar style={{ width: "1.75rem", height: "1.75rem" }}><AvatarFallback style={{ fontSize: "0.625rem" }}>{currentUser.initial}</AvatarFallback></Avatar>
          </div>
        </div>

        <div className="coss-scope" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "1rem" }}>
          <Screen {...screenProps} />
        </div>
      </SidebarInset>

      <Dialog open={commandOpen} onOpenChange={setCommandOpen}>
        <DialogPopup style={{ maxWidth: "26rem" }}>
          <DialogHeader><DialogTitle>빠른 이동</DialogTitle></DialogHeader>
          <DialogPanel>
            <Combobox items={paletteLabels} onValueChange={(v: unknown) => jumpTo(v as string | null)}>
              <ComboboxInput placeholder="문서·구성원 검색" autoFocus />
              <ComboboxPopup>
                <ComboboxEmpty>결과가 없어요.</ComboboxEmpty>
                <ComboboxList>
                  {(label: string) => {
                    const isDoc = docs.some((d) => d.title === label);
                    return (
                      <ComboboxItem key={label} value={label}>
                        {isDoc ? <FileText size={14} /> : <Users2 size={14} />}
                        {label}
                      </ComboboxItem>
                    );
                  }}
                </ComboboxList>
              </ComboboxPopup>
            </Combobox>
          </DialogPanel>
        </DialogPopup>
      </Dialog>
    </div>
  );
}

export function CossUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState<string>(SCREENS[0].key);
  const [docs, setDocs] = React.useState<DocItem[]>(DOCS);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(DOCS[0].id);
  const [members, setMembers] = React.useState<Member[]>(MEMBERS);
  const [comments, setComments] = React.useState<CommentItem[]>(INITIAL_COMMENTS);
  const [notifications, setNotifications] = React.useState<NotificationItem[]>(NOTIFICATIONS);

  const nextDocIdRef = React.useRef(1000);
  const nextCommentIdRef = React.useRef(1000);
  const nextMemberIdRef = React.useRef(1000);

  const currentUser = members.find((m) => m.id === CURRENT_USER_ID) ?? members[0];

  function handleCreateDoc(input: { title: string; space: DocSpace; description: string }) {
    const id = `d-new-${nextDocIdRef.current++}`;
    const newDoc: DocItem = {
      id,
      title: input.title,
      space: input.space,
      status: "초안",
      ownerName: currentUser.name,
      ownerInitial: currentUser.initial,
      tags: [],
      updatedLabel: "방금 전",
      updatedRank: 0,
      views: 0,
      favorite: false,
      summary: input.description || "아직 요약이 없어요.",
      bodyParagraphs: input.description ? [input.description] : ["아직 작성된 본문이 없어요. 편집을 시작해보세요."],
      checklist: [{ id: "c1", label: "본문 초안 작성", done: false }],
      relatedIds: [],
      history: [{ label: "문서를 만들었어요", who: currentUser.name, when: "방금 전" }],
      reviewApproved: 0,
      reviewTotal: 1,
    };
    setDocs((prev) => [newDoc, ...prev]);
    setSelectedId(id);
  }
  function handleDeleteDoc(id: string) {
    setDocs((prev) => prev.filter((d) => d.id !== id));
    if (selectedId === id) setSelectedId(undefined);
  }
  function handleToggleFavorite(id: string) {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, favorite: !d.favorite } : d)));
  }
  function handleRenameDoc(id: string, title: string) {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, title } : d)));
  }
  function handleChangeStatus(id: string, status: DocStatus) {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, status } : d)));
  }
  function handleToggleChecklistItem(docId: string, itemId: string) {
    setDocs((prev) => prev.map((d) => (d.id === docId
      ? { ...d, checklist: d.checklist.map((c) => (c.id === itemId ? { ...c, done: !c.done } : c)) }
      : d)));
  }
  function handleAddComment(docId: string, text: string) {
    const id = `cm-new-${nextCommentIdRef.current++}`;
    setComments((prev) => [...prev, { id, docId, authorName: currentUser.name, authorInitial: currentUser.initial, text, timeLabel: "방금 전" }]);
  }
  function handleUpdateMemberRole(id: string, role: Role) {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, role } : m)));
  }
  function handleInviteMember(input: { name: string; email: string; role: Role }) {
    const id = `m-new-${nextMemberIdRef.current++}`;
    setMembers((prev) => [...prev, {
      id, name: input.name, initial: input.name.charAt(0) || "?", email: input.email, role: input.role, status: "초대됨", joinedLabel: "초대 발송함", docsEdited: 0,
    }]);
  }
  function handleRemoveMember(id: string) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }
  function handleMarkNotificationsRead {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  const screenProps: ScreenProps = {
    onNavigate: setScreenKey,
    selectedId,
    onSelect: setSelectedId,
    docs,
    members,
    activity: ACTIVITY,
    comments,
    notifications,
    onCreateDoc: handleCreateDoc,
    onDeleteDoc: handleDeleteDoc,
    onToggleFavorite: handleToggleFavorite,
    onRenameDoc: handleRenameDoc,
    onChangeStatus: handleChangeStatus,
    onToggleChecklistItem: handleToggleChecklistItem,
    onAddComment: handleAddComment,
    onUpdateMemberRole: handleUpdateMemberRole,
    onInviteMember: handleInviteMember,
    onRemoveMember: handleRemoveMember,
    onMarkNotificationsRead: handleMarkNotificationsRead,
  };

  const frameStyle: React.CSSProperties = {
    background: "var(--semantic-bg-neutral-surface)",
    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
    borderRadius: "var(--semantic-radius-container)",
    boxShadow: "var(--semantic-shadow-raised)",
  };

  return (
    <div className={SHELL} style={{ ...frameStyle, height: SHELL_HEIGHT, overflow: "hidden" }}>
      <style>{SHELL_CSS}</style>
      <TooltipProvider>
        <ToastProvider>
          <SidebarProvider defaultOpen style={{ height: "100%", width: "100%", minHeight: 0 } as React.CSSProperties}>
            <ShellChrome
              systemName={system.name}
              screenKey={screenKey}
              setScreenKey={setScreenKey}
              screenProps={screenProps}
              currentUser={currentUser}
              docs={docs}
              members={members}
              notifications={notifications}
              onMarkNotificationsRead={handleMarkNotificationsRead}
            />
          </SidebarProvider>
        </ToastProvider>
      </TooltipProvider>
    </div>
  );
}
