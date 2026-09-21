import * as React from "react";
import { Copy, Mail, MoreHorizontal, Search, Trash2, UserCheck, UserPlus, Users2, UserX } from "lucide-react";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "../../../bases/coss-ui/accordion";
import { AlertDialog, AlertDialogClose, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPopup, AlertDialogTitle } from "../../../bases/coss-ui/alert-dialog";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Card, CardTitle } from "../../../bases/coss-ui/card";
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogPanel, DialogPopup, DialogTitle, DialogTrigger } from "../../../bases/coss-ui/dialog";
import { Field, FieldLabel } from "../../../bases/coss-ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../../bases/coss-ui/input-group";
import { Input } from "../../../bases/coss-ui/input";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "../../../bases/coss-ui/menu";
import { Radio, RadioGroup } from "../../../bases/coss-ui/radio-group";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Switch } from "../../../bases/coss-ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../bases/coss-ui/table";
import { toastManager } from "../../../bases/coss-ui/toast";
import type { MemberStatus, Role } from "../data";
import { CURRENT_USER_ID } from "../data";
import type { ScreenProps } from "../screens";

const ROLES: Role[] = ["소유자", "관리자", "편집자", "댓글 작성자", "뷰어"];
const LINK_PERMISSIONS = ["뷰어만", "댓글 가능", "편집 가능"] as const;

function MiniStat({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: "brand" | "success" | "warning" }) {
  return (
    <Card style={{ padding: "0.875rem", display: "flex", alignItems: "center", gap: "0.75rem", flex: "1 1 9rem", minWidth: 0 }}>
      <span
        aria-hidden
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", width: "2.25rem", height: "2.25rem",
          borderRadius: "var(--semantic-radius-control)", background: `var(--semantic-bg-${tone}-subtle)`, color: `var(--semantic-fg-${tone}-default)`, flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div>
        <div style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.1 }}>{value}</div>
        <div style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{label}</div>
      </div>
    </Card>
  );
}

function MemberStatusBadge({ status }: { status: MemberStatus }) {
  if (status === "활성") {
    return <Badge variant="outline" style={{ background: "var(--semantic-bg-success-subtle)", color: "var(--semantic-fg-on-success-subtle)", borderColor: "transparent" }}>활성</Badge>;
  }
  return <Badge variant="outline" style={{ background: "var(--semantic-bg-warning-subtle)", color: "var(--semantic-fg-on-warning-subtle)", borderColor: "transparent" }}>초대됨</Badge>;
}

const ROLE_EXPLAIN: Record<Role, string> = {
  소유자: "워크스페이스를 삭제하거나 소유권을 넘길 수 있어요. 모든 권한을 가져요.",
  관리자: "구성원을 초대·제거하고 역할을 바꿀 수 있어요. 워크스페이스 삭제는 할 수 없어요.",
  편집자: "문서를 만들고 편집할 수 있어요. 구성원 관리 권한은 없어요.",
  "댓글 작성자": "문서를 읽고 댓글을 남길 수 있어요. 본문은 편집할 수 없어요.",
  뷰어: "문서를 읽기만 할 수 있어요. 댓글이나 편집은 할 수 없어요.",
};

export function MembersScreen({ members, onUpdateMemberRole, onInviteMember, onRemoveMember }: ScreenProps) {
  const [roleFilter, setRoleFilter] = React.useState<Role | "전체">("전체");
  const [statusFilter, setStatusFilter] = React.useState<MemberStatus | "전체">("전체");
  const [query, setQuery] = React.useState("");
  const [pendingRemoveId, setPendingRemoveId] = React.useState<string | null>(null);
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [inviteName, setInviteName] = React.useState("");
  const [inviteEmail, setInviteEmail] = React.useState("");
  const [inviteRole, setInviteRole] = React.useState<Role>("뷰어");
  const [linkSharingOn, setLinkSharingOn] = React.useState(true);
  const [linkPermission, setLinkPermission] = React.useState<typeof LINK_PERMISSIONS[number]>("댓글 가능");

  const q = query.trim.toLowerCase;
  const filtered = members.filter((m) =>
    (roleFilter === "전체" || m.role === roleFilter)
    && (statusFilter === "전체" || m.status === statusFilter)
    && (q === "" || m.name.toLowerCase.includes(q) || m.email.toLowerCase.includes(q)));

  const activeCount = members.filter((m) => m.status === "활성").length;
  const invitedCount = members.filter((m) => m.status === "초대됨").length;
  const removing = members.find((m) => m.id === pendingRemoveId);

  function submitInvite {
    if (inviteName.trim === "" || inviteEmail.trim === "") return;
    onInviteMember({ name: inviteName.trim, email: inviteEmail.trim, role: inviteRole });
    setInviteOpen(false);
    setInviteName("");
    setInviteEmail("");
    setInviteRole("뷰어");
    toastManager.add({ title: "초대장을 보냈어요" });
  }

  const shareLink = "https://notes.bloomstudio.im/join/bloom-studio-9x2k";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "1.125rem", fontWeight: 700 }}>구성원</div>
          <div style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}>구성원 권한을 관리하고 새 멤버를 초대해요.</div>
        </div>
        <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
          <DialogTrigger render={<Button size="sm"><UserPlus size={14} />구성원 초대</Button>} />
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>구성원 초대</DialogTitle>
              <DialogDescription>이메일로 초대장을 보내고 역할을 지정해요.</DialogDescription>
            </DialogHeader>
            <DialogPanel style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Field><FieldLabel>이름</FieldLabel><Input value={inviteName} onChange={(e) => setInviteName(e.target.value)} placeholder="예: 오하준" /></Field>
              <Field><FieldLabel>이메일</FieldLabel><Input type="email" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} placeholder="name@company.com" /></Field>
              <Field>
                <FieldLabel>역할</FieldLabel>
                <RadioGroup value={inviteRole} onValueChange={(v: unknown) => setInviteRole(v as Role)}>
                  {(["편집자", "댓글 작성자", "뷰어"] as Role[]).map((r) => (
                    <label key={r} style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "var(--semantic-text-body-sm)", cursor: "pointer" }}>
                      <Radio value={r} />{r}
                    </label>
                  ))}
                </RadioGroup>
              </Field>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">취소</Button>} />
              <Button disabled={inviteName.trim === "" || inviteEmail.trim === ""} onClick={submitInvite}>초대 보내기</Button>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </div>

      <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
        <MiniStat icon={<Users2 size={16} />} label="전체 구성원" value={String(members.length)} tone="brand" />
        <MiniStat icon={<UserCheck size={16} />} label="활성" value={String(activeCount)} tone="success" />
        <MiniStat icon={<UserX size={16} />} label="초대 대기 중" value={String(invitedCount)} tone="warning" />
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <InputGroup style={{ width: "12.5rem" }}>
          <InputGroupAddon align="inline-start"><Search size={14} /></InputGroupAddon>
          <InputGroupInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="이름·이메일 검색" />
        </InputGroup>
        <Select value={roleFilter} onValueChange={(v: unknown) => setRoleFilter(v as Role | "전체")}>
          <SelectTrigger size="sm" style={{ width: "8.5rem" }}><SelectValue placeholder="역할" /></SelectTrigger>
          <SelectPopup>
            <SelectItem value="전체">전체 역할</SelectItem>
            {ROLES.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
          </SelectPopup>
        </Select>
        <Select value={statusFilter} onValueChange={(v: unknown) => setStatusFilter(v as MemberStatus | "전체")}>
          <SelectTrigger size="sm" style={{ width: "8rem" }}><SelectValue placeholder="상태" /></SelectTrigger>
          <SelectPopup>
            <SelectItem value="전체">전체 상태</SelectItem>
            <SelectItem value="활성">활성</SelectItem>
            <SelectItem value="초대됨">초대됨</SelectItem>
          </SelectPopup>
        </Select>
      </div>

      <Card style={{ overflow: "hidden" }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>구성원</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>참여</TableHead>
              <TableHead>편집한 문서</TableHead>
              <TableHead style={{ width: "2rem" }} />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((m) => (
              <TableRow key={m.id}>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Avatar style={{ width: "1.75rem", height: "1.75rem" }}><AvatarFallback style={{ fontSize: "0.6875rem" }}>{m.initial}</AvatarFallback></Avatar>
                    <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                      <span style={{ fontWeight: 600, fontSize: "var(--semantic-text-body-sm)", whiteSpace: "nowrap" }}>{m.name}{m.id === CURRENT_USER_ID ? " (나)" : ""}</span>
                      <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>{m.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Select
                    value={m.role}
                    disabled={m.role === "소유자"}
                    onValueChange={(v: unknown) => { onUpdateMemberRole(m.id, v as Role); toastManager.add({ title: `${m.name}님의 역할을 변경했어요` }); }}
                  >
                    <SelectTrigger size="sm" style={{ width: "7.5rem" }}><SelectValue /></SelectTrigger>
                    <SelectPopup>
                      {ROLES.map((r) => <SelectItem key={r} value={r} disabled={r === "소유자"}>{r}</SelectItem>)}
                    </SelectPopup>
                  </Select>
                </TableCell>
                <TableCell><MemberStatusBadge status={m.status} /></TableCell>
                <TableCell style={{ color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>{m.joinedLabel}</TableCell>
                <TableCell>{m.docsEdited}</TableCell>
                <TableCell>
                  <Menu>
                    <MenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="더 보기"><MoreHorizontal size={14} /></Button>} />
                    <MenuPopup align="end">
                      {m.status === "초대됨" && (
                        <MenuItem onClick={ => toastManager.add({ title: `${m.name}님에게 초대 메일을 다시 보냈어요` })}>
                          <Mail size={14} />초대 메일 재전송
                        </MenuItem>
                      )}
                      <MenuItem variant="destructive" disabled={m.role === "소유자"} onClick={ => setPendingRemoveId(m.id)}>
                        <Trash2 size={14} />제거
                      </MenuItem>
                    </MenuPopup>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Card style={{ padding: "0.875rem" }}>
        <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.75rem" }}>워크스페이스 공유 링크</CardTitle>
        <Field>
          <FieldLabel>공유 링크</FieldLabel>
          <InputGroup>
            <InputGroupInput readOnly value={shareLink} />
            <InputGroupAddon align="inline-end">
              <Button size="sm" variant="ghost" onClick={ => { void navigator.clipboard?.writeText(shareLink); toastManager.add({ title: "링크를 복사했어요" }); }}>
                <Copy size={13} />복사
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <label style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginTop: "0.875rem", cursor: "pointer" }}>
          <Switch checked={linkSharingOn} onCheckedChange={setLinkSharingOn} />
          <span style={{ fontSize: "var(--semantic-text-body-sm)" }}>링크가 있는 모든 팀 구성원이 참여할 수 있어요</span>
        </label>
        {linkSharingOn && (
          <div style={{ marginTop: "0.75rem", paddingInlineStart: "2.25rem" }}>
            <div style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)", marginBottom: "0.5rem" }}>새로 참여하는 구성원의 기본 권한</div>
            <RadioGroup value={linkPermission} onValueChange={(v: unknown) => setLinkPermission(v as typeof LINK_PERMISSIONS[number])}>
              {LINK_PERMISSIONS.map((p) => (
                <label key={p} style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "var(--semantic-text-body-sm)", cursor: "pointer" }}>
                  <Radio value={p} />{p}
                </label>
              ))}
            </RadioGroup>
          </div>
        )}
      </Card>

      <Card style={{ padding: "0.875rem" }}>
        <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.375rem" }}>역할별 권한 안내</CardTitle>
        <Accordion defaultValue={["소유자"]}>
          {ROLES.map((r) => (
            <AccordionItem key={r} value={r}>
              <AccordionTrigger>{r}</AccordionTrigger>
              <AccordionPanel>{ROLE_EXPLAIN[r]}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <AlertDialog open={pendingRemoveId !== null} onOpenChange={(o: boolean) => { if (!o) setPendingRemoveId(null); }}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>구성원을 제거할까요?</AlertDialogTitle>
            <AlertDialogDescription>{removing ? `${removing.name}님은 더 이상 이 워크스페이스에 접근할 수 없어요.` : ""}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="outline">취소</Button>} />
            <AlertDialogClose
              render={(
                <Button
                  variant="destructive"
                  onClick={ => {
                    if (pendingRemoveId) {
                      onRemoveMember(pendingRemoveId);
                      toastManager.add({ title: "구성원을 제거했어요" });
                    }
                  }}
                >
                  제거
                </Button>
              )}
            />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </div>
  );
}
