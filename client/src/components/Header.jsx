import React from 'react'

export default function Header({auth ,setAuth}) {
  return (
    <header>
      <h1>
        <b>Тех</b>Поддержка
      </h1>
      <ul>
        <li><a href="#main">Главная</a></li>
        <li><a href="#FAQ">FAQ</a></li>
      </ul>
      <div className="con-user">
        <div>
          <h6>{`${auth.first_name} ${auth.last_name}`}</h6>
          <p>{
            auth.role === 'student' ? 'Студент' : 'Преподаватель'
            }</p>
        </div>
        <button onClick={() => setAuth(false)}>Выйти</button>
      </div>
    </header>
  )
}
