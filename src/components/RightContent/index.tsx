import { Space } from 'antd';
import React from 'react';
import styles from "./index.less"

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space >
      <span className={styles.rightContentSpanColor}>自定义顶部右边内容</span>
    </Space>
  );
};
export default GlobalHeaderRight;
