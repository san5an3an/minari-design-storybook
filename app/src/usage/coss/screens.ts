import type { ComponentType } from "react";
import type {
  ActivityItem, CommentItem, DocItem, DocSpace, DocStatus, Member, NotificationItem, Role,
} from "./data";
import { ActivityScreen } from "./screens/ActivityScreen";
import { DocumentDetailScreen } from "./screens/DocumentDetailScreen";
import { DocumentsScreen } from "./screens/DocumentsScreen";
import { MembersScreen } from "./screens/MembersScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;

  docs: DocItem[];
  members: Member[];
  activity: ActivityItem[];
  comments: CommentItem[];
  notifications: NotificationItem[];

  onCreateDoc: (input: { title: string; space: DocSpace; description: string }) => void;
  onDeleteDoc: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onRenameDoc: (id: string, title: string) => void;
  onChangeStatus: (id: string, status: DocStatus) => void;
  onToggleChecklistItem: (docId: string, itemId: string) => void;
  onAddComment: (docId: string, text: string) => void;
  onUpdateMemberRole: (id: string, role: Role) => void;
  onInviteMember: (input: { name: string; email: string; role: Role }) => void;
  onRemoveMember: (id: string) => void;
  onMarkNotificationsRead:  => void;
}

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "documents",
    label: "문서",
    lede: "팀이 함께 쓰는 문서를 한곳에서 관리해요.",
    Screen: DocumentsScreen,
  },
  {
    key: "detail",
    label: "문서 상세",
    lede: "문서 본문을 읽고, 편집하고, 댓글을 남겨요.",
    Screen: DocumentDetailScreen,
  },
  {
    key: "members",
    label: "구성원",
    lede: "구성원 권한을 관리하고 새 멤버를 초대해요.",
    Screen: MembersScreen,
  },
  {
    key: "activity",
    label: "활동",
    lede: "누가 무엇을 언제 바꿨는지 한눈에 확인해요.",
    Screen: ActivityScreen,
  },
];
