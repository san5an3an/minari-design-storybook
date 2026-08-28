// @ts-nocheck
import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

/**
 * Ref: https://github.com/ant-design/ant-design/issues/17125
 */
const App: React.FC = () => (
  <Typography>
    <Title level={4}>표가 있는 Typography</Title>

    <table>
      <thead>
        <tr>
          <th>요금제</th>
          <th>가격</th>
          <th>기능</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>기본</td>
          <td>무료</td>
          <td>1GB Storage, Basic Support</td>
        </tr>
        <tr>
          <td>프로</td>
          <td>월 $9.99</td>
          <td>100GB Storage, Priority Support</td>
        </tr>
        <tr>
          <td>기업</td>
          <td>문의하기</td>
          <td>무제한 저장 공간, 24시간 지원</td>
        </tr>
      </tbody>
    </table>
  </Typography>
);

export default App;