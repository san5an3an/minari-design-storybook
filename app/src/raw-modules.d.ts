declare module "*?raw" {
  const source: string;
  export default source;
}

// @mantine/core/styles.layer.css 부수효과 임포트, 스타일만 적용
declare module "*.css";
