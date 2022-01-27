import { Link } from 'react-router-dom';

const ChatList = ({ chats, chatId }) => {
  return <div className={'chatList'}>
    {Object.keys(chats).map((chat, i) => (
      <Link to={`/chats/${chat}`} key={i} style={{ color: chat === chatId ? 'black' : 'grey'}}>
        <h3>{chats[chat].name}</h3>
      </Link>
    ))}
  </div>
}

export default ChatList