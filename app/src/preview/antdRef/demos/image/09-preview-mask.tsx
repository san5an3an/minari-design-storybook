// @ts-nocheck
import React from 'react';
import { Image, Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <Image
        width={100}
        alt="흐리게 미리보기"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        preview={{
          mask: { blur: true },
          cover: (
            <Space vertical align="center">
              blur
            </Space>
          ),
        }}
      />
      <Image
        alt="어둡게 덮기 미리보기"
        width={100}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        preview={{
          cover: (
            <Space vertical align="center">
              어둡게 덮기
            </Space>
          ),
        }}
      />
      <Image
        width={100}
        alt="덮기 없음 미리보기"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        preview={{
          mask: false,
          cover: (
            <Space vertical align="center">
              덮기 없음
            </Space>
          ),
        }}
      />
    </Space>
  );
};

export default App;