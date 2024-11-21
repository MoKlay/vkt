import React, { useEffect } from 'react'

export default function Header({ auth, setAuth, setOpenChat, setOpenTicket }) {
  const [role, setRole] = React.useState('')

  useEffect(() => {
    switch (auth.role) {
      case 'student':
        setRole('Студент')
        break;
      case 'teacher':
        setRole('Преподователь')
        break
      default:
        setRole('Администратор')
        break
    }
  }, [auth.role, setAuth])

  return (
    <header>
      <h1>
        <b>Тех</b>Поддержка
      </h1>

      <ul>
      {(role === 'Студент' || role === 'Преподователь') && (<>
        <li><a href="#main" onClick={()=> setOpenChat(false)}>Главная</a></li>
        <li><a href="#FAQ" onClick={()=> setOpenChat(false)}>FAQ</a></li>
        <li><p onClick={() =>setOpenTicket(true)}>Создать запрос</p></li>
        <li><p onClick={() =>setOpenChat(true)}>Чат-бот</p></li>
      
      </>)}
      </ul>
      <div className="con-user">
        <div>
          <h6>{`${auth.first_name} ${auth.last_name}`}</h6>
          <p>{role}</p>
        </div>
        <button onClick={() => {
          setAuth(false)
          setOpenChat(false)
          }}>Выйти</button>
      </div>
    </header>
  )
}
