import React from 'react';
import {Button, Space} from 'antd';
import { history } from 'umi';

const Login: React.FC = () => {

 const handleNavigation = (path: string) =>{
   history.push(path)
 }

  return (
    <Space>
      <Button type="primary" onClick={() => handleNavigation("/admin/sub-page")}>admin/sub-page</Button>

      <Button type="primary" onClick={() => handleNavigation("/welcome")}>welcome</Button>
    </Space>
  );
};

export default Login;
