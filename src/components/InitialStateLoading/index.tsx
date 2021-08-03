import React from 'react';
import styles from "@/pages/user/Login/index.less";
import Spin from 'antd/lib/spin';

// initialStateLoading
const InitialStateLoading: React.FC = () => {
  return (
    <div className={styles.container}>
       初始化简全局数据loading
      <Spin />
    </div>
  );
};


export default InitialStateLoading
