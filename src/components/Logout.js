import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
const Logout = () => {
    
    const logOutUser = () => {
        window.localStorage.clear();
        window.location.reload();
    }
  
    return (
      <div className="ce-chat-logout">
        <Button type='primary' shape="round" icon={<LogoutOutlined />} size="large" onClick={logOutUser}>Logout</Button>
      </div>
    );
  };

export default Logout;