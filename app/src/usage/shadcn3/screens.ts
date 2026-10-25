import type { ComponentType, ReactNode } from "react";
import type { Transaction } from "./data";
import { BudgetMobile } from "./mobile/BudgetMobile";
import { OverviewMobile } from "./mobile/OverviewMobile";
import { TransactionDetailMobile } from "./mobile/TransactionDetailMobile";
import { TransactionsListMobile } from "./mobile/TransactionsListMobile";
import { BudgetScreen } from "./screens/BudgetScreen";
import { OverviewScreen } from "./screens/OverviewScreen";
import { TransactionDetailScreen } from "./screens/TransactionDetailScreen";
import { TransactionsListScreen } from "./screens/TransactionsListScreen";

export interface ScreenDefinition {
  key: string;
  label: string;
  lede: string;
  Screen: ComponentType<ScreenProps>;
  // 뷰포트 768 미만에서 쓸 모바일 화면 지정. 없으면 Screen 을 그대로 사용함
  MobileScreen?: ComponentType<MobileScreenProps>;
}

export interface ScreenProps {
  itemId?: string;
  onOpen?: (screenKey: string, itemId: string) => void;
  transactions: Transaction[];
  onAdd: (t: Transaction) => void;
  // 히어로 검색창 값, 대시보드와 거래 내역 필터링에 사용
  query?: string;
}

// 모바일 화면이 Dashboard.tsx 에서 props 로 받는 값 정의. Dashboard.tsx 를 import 하면 순환 참조가 생김
export interface MobileScreenProps extends ScreenProps {
  // 개요 히어로 배경 사진 주소 지정
  heroImage: string;
  greeting: string;
  userName: string;
  // 데스크탑과 같은 지표 격자(StatRow) 전달. 계산을 두 번 구현하지 않기 위함
  statRow: ReactNode;
  // 거래 내역 검색어 변경 연결. 검색어 값은 Dashboard.tsx 가 관리함
  onQueryChange: (query: string) => void;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "overview",
    label: "대시보드",
    lede: "이번 달 수입·지출·예산과 실시간 지출 피드를 한 화면에서.",
    Screen: OverviewScreen,
    MobileScreen: OverviewMobile,
  },
  {
    key: "list",
    label: "거래 내역",
    lede: "전체 거래를 표로. 카테고리로 거르고 행을 누르면 상세로 이동.",
    Screen: TransactionsListScreen,
    MobileScreen: TransactionsListMobile,
  },
  {
    key: "budget",
    label: "예산",
    lede: "카테고리별 예산 대비 지출 현황.",
    Screen: BudgetScreen,
    MobileScreen: BudgetMobile,
  },
  {
    key: "detail",
    label: "상세",
    lede: "고른 거래 하나. 대시보드에서 넘어온 화면이라 뒤로 가기가 늘 있음.",
    Screen: TransactionDetailScreen,
    MobileScreen: TransactionDetailMobile,
  },
];
