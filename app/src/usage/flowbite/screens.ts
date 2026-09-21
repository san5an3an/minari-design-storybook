import type { ComponentType } from "react";
import type { CustomerItem } from "./data";
import { ActivityScreen } from "./screens/ActivityScreen";
import { CustomerDetailScreen } from "./screens/CustomerDetailScreen";
import { CustomersScreen } from "./screens/CustomersScreen";
import { ReviewsScreen } from "./screens/ReviewsScreen";

export interface ScreenProps {
  onNavigate?: (key: string) => void;
  selectedId?: string;
  onSelect?: (id: string) => void;
  customers?: CustomerItem[];
  onRegisterCustomer?: (c: CustomerItem) => void;
}

export interface ScreenDefinition {
  key: string;
  // 탭에 보이는 이름
  label: string;
  // 화면 용도 한 행 설명
  lede: string;
  Screen: ComponentType<ScreenProps>;
}

export const SCREENS: ScreenDefinition[] = [
  {
    key: "customers",
    label: "고객",
    lede: "요금제와 매출을 한눈에 보는 고객 표.",
    Screen: CustomersScreen,
  },
  {
    key: "detail",
    label: "고객 상세",
    lede: "이 고객의 매출·미팅·리뷰.",
    Screen: CustomerDetailScreen,
  },
  {
    key: "reviews",
    label: "리뷰",
    lede: "고객이 남긴 별점과 후기.",
    Screen: ReviewsScreen,
  },
  {
    key: "activity",
    label: "영업 활동",
    lede: "딜이 어느 단계에서 어느 단계로 옮겨갔는지 시간 순으로.",
    Screen: ActivityScreen,
  },
];
