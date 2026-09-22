import * as React from "react";
import { Descriptions, Empty, Flex, Input, Segmented, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CHANNELS, STORES, brandOf, channelLabel, type Store, type StoreStatus } from "../data";
import { Figure, StatTile, fmt } from "../parts";

const STATUS_COLOR: Record<StoreStatus, string> = { 영업: "success", 리뉴얼: "processing", 휴업: "default" };

export const STORES_LAYOUT_CSS = `
.st-split { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); align-items: start; }
.st-scrollx { min-width: 0; overflow-x: auto; }
@container rp (min-width: 62rem) {
  .st-split { grid-template-columns: minmax(0, 1fr) minmax(0, 22rem); }
}
`;

export function StoresScreen {
  const [status, setStatus] = React.useState<"전체" | StoreStatus>("전체");
  const [query, setQuery] = React.useState("");
  const [openId, setOpenId] = React.useState<string>(STORES[0].id);

  const rows = React.useMemo( => {
    const q = query.trim;
    return STORES.filter((s) => {
      if (status !== "전체" && s.status !== status) return false;
      if (!q) return true;
      // 브랜드 이름도 검색 대상에 포함
      return `${s.name} ${s.region} ${s.owner} ${brandOf(s.brandId)?.name ?? ""}`.includes(q);
    });
  }, [status, query]);

  // 필터 결과 밖으로 벗어난 선택은 초기화
  const open = rows.find((s) => s.id === openId) ?? null;
  const brand = open ? brandOf(open.brandId) : undefined;

  const columns: ColumnsType<Store> = [
    {
      title: "매장",
      dataIndex: "name",
      width: 150,
      render: (name: string, row) => (
        <div style={{ minWidth: 0 }}>
          <div title={name} style={{ inlineSize: 142, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 600 }}>
            {name}
          </div>
          <Typography.Text type="secondary" style={{ fontSize: 11 }}>{row.region}</Typography.Text>
        </div>
      ),
    },
    {
      title: "월매출",
      dataIndex: "monthly",
      align: "right",
      render: (v: number) => <span style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(v)}만</span>,
    },
    {
      title: "평점",
      dataIndex: "rating",
      align: "right",
      render: (v: number) => <span style={{ fontVariantNumeric: "tabular-nums" }}>{v.toFixed(1)}</span>,
    },
    {
      title: "상태",
      dataIndex: "status",
      render: (v: StoreStatus) => <Tag color={STATUS_COLOR[v]} style={{ marginInlineEnd: 0 }}>{v}</Tag>,
    },
  ];

  return (
    <Flex vertical gap={16}>
      <style>{STORES_LAYOUT_CSS}</style>

      <Flex gap={8} wrap align="center" justify="space-between">
        <Segmented
          value={status}
          onChange={(v) => setStatus(v as "전체" | StoreStatus)}
          options={["전체", "영업", "리뉴얼", "휴업"]}
        />
        <Input.Search
          allowClear
          placeholder="매장·지역·점주·브랜드로 찾기"
          style={{ maxInlineSize: 280 }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Flex>

      <div className="st-split">
        <Figure
          title="매장 목록"
          caption="행을 누르면 오른쪽(좁은 화면에서는 아래)에 그 매장의 상세가 열립니다."
          source={`가상 자료 · ${rows.length}개 / 전체 ${STORES.length}개`}
        >
          <div className="st-scrollx">
            <Table
              rowKey="id"
              size="small"
              pagination={false}
              columns={columns}
              dataSource={rows}
              rowClassName={(row) => (row.id === open?.id ? "ant-table-row-selected" : "")}
              // onRow는 tr에 연결. 버튼 클릭 버블링에 stopPropagation 필요한 구조임
              onRow={(row) => ({ onClick:  => setOpenId(row.id), style: { cursor: "pointer" } })}
            />
          </div>
        </Figure>

        {open ? (
          <Figure
            title={open.name}
            caption={`${brand?.name ?? "—"} · ${open.region}`}
            source={`${open.id} · ${open.opened} 개점`}
            action={<Tag color={STATUS_COLOR[open.status]} style={{ marginInlineEnd: 0 }}>{open.status}</Tag>}
          >
            <Flex vertical gap={12}>
              {/* 사진은 비율 고정. 원본 비율에 맡기면 매장마다 카드 높이가 달라져 오른쪽 열이 목록과 어긋나는 문제가 있음 */}
              <img
                src={open.photo}
                alt=""
                loading="lazy"
                style={{ inlineSize: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 8, display: "block" }}
              />

              <Flex gap={8} wrap>
                <div style={{ flex: "1 1 8rem", minInlineSize: 0 }}>
                  <StatTile label="월매출" value={fmt(open.monthly)} unit="만원" />
                </div>
                <div style={{ flex: "1 1 8rem", minInlineSize: 0 }}>
                  <StatTile label="평점" value={open.rating.toFixed(1)} unit="/ 5" />
                </div>
              </Flex>

              <Descriptions
                size="small"
                column={1}
                items={[
                  { key: "owner", label: "점주", children: open.owner },
                  { key: "seats", label: "좌석", children: `${open.seats}석` },
                  { key: "brand", label: "브랜드", children: `${brand?.name ?? "—"} · ${brand?.kind ?? "—"}` },
                  {
                    key: "channels",
                    label: "켠 채널",
                    children:
                      open.channels.length > 0 ? (
                        <Flex gap={4} wrap>
                          {open.channels.map((c) => <Tag key={c} style={{ marginInlineEnd: 0 }}>{channelLabel(c)}</Tag>)}
                        </Flex>
                      ) : (
                        // 빈 배열은 공백 대신 안내 문구로 표시
                        <Typography.Text type="secondary">하나도 켜지 않음</Typography.Text>
                      ),
                  },
                ]}
              />

              <Typography.Paragraph type="secondary" style={{ marginBlockEnd: 0, fontSize: 12.5, lineHeight: 1.7 }}>
                {open.memo}
              </Typography.Paragraph>
            </Flex>
          </Figure>
        ) : (
          <Figure title="상세" caption="고른 매장이 지금 목록에 없습니다.">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={`거르개를 풀거나 다른 매장을 고르세요. 지금 목록은 ${rows.length}개입니다.`}
            />
          </Figure>
        )}
      </div>

      <Typography.Text type="secondary" style={{ fontSize: 11 }}>
        채널 이름은 개요 화면의 {CHANNELS.length}개와 같은 목록에서 가져옴. 두 화면이 다른 이름을 쓰지 않도록 한 곳에서 읽음
      </Typography.Text>
    </Flex>
  );
}
