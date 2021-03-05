import { ChatEngine } from 'react-chat-engine';
import './App.css';
import 'antd/dist/antd.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    
    return (
        <ChatEngine
        height="100vh"
        projectID = {process.env.React_App_Project_Id}
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        renderChatSettingsTop={() => <Logout />}
        />
    )
}

export default App;