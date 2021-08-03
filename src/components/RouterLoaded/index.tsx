import React from 'react';
import styles from "@/pages/user/Login/index.less";
import Spin from 'antd/lib/spin';

// RouterAfterLoaded
const RouterLoaded: React.FC = () => {
  return (
    <div className={styles.container}>
      路由切换后的loading
      <Spin />
    </div>
  );
};


export default RouterLoaded
