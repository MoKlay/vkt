import React from 'react';
import ReactDOM from 'react-dom/client';
import Loyaut from './components/Loyaut';
import Form from './components/authentication/Form';
import './css/index.css'
import Main from './components/main/Main';
import Admin from './components/admin/Admin';
function App() {
  const [auth, setAuth] = React.useState(null);
  const [openTicket, setOpenTicket] = React.useState(false)
  const [openChat, setOpenChat] = React.useState(false)
  return (
    <Loyaut auth={auth} setAuth={setAuth} openTicket={openTicket} setOpenTicket={setOpenTicket} openChat={openChat} setOpenChat={setOpenChat}>
      {!auth && <Form setAuth={setAuth} />}
      {auth && (auth.role === 'student' || auth.role === 'teacher') && <Main setAuth={setAuth} setOpenTicket={setOpenTicket} setOpenChat={setOpenChat} openChat={openChat}/>}
      {auth && auth.role === 'admin' && <Admin />}
    </Loyaut>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);