import React from 'react'
import Header from './Header'
import Ticket from './main/Ticket'
import Chat from './chat_bot/Chat'

export default function Loyaut({children, auth, setAuth, openTicket, setOpenTicket, setOpenChat, openChat}) {

  return (
    <div className="container" style={
      {
        background: "url('bg.png') no-repeat center center fixed",
        backgroundSize: "cover",
      }
    }>
      {auth && <Header auth={auth} setAuth={setAuth} setOpenTicket={setOpenTicket} setOpenChat={setOpenChat}/>}
      {children}
      {openTicket && <Ticket setOpenTicket={setOpenTicket} auth={auth}/>}
      {openChat && <Chat />}
    </div>
  )
}
