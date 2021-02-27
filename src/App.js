import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () => {
    
    return (
        <ChatEngine
        height="100vh"
        projectID = {process.env.React_App_Project_Id}
        userName= {process.env.React_App_User_Name}
        userSecret= {process.env.React_App_User_Secret}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
    )
}

export default App;