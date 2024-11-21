import React, { useState } from 'react'
import classNames from 'classnames'


export default function Auth({ active, onClickLink , onSubmit}) {
  const [openSelect, setOpenSelect] = useState(false)
  
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setSelect] = useState('student')

  return (
    <form className={classNames('loyaut', 'auth', { active })} onSubmit={(e => {
      e.preventDefault()
      onSubmit({
        first_name,
        last_name,
        email,
        password,
        role
      })
    })}>
      <h1>Создание аккаунта</h1>


      <label className='select'>
        <input type="checkbox" checked={openSelect} onChange={() => setOpenSelect(!openSelect)} />
        <p>{
          role === 'student' ? 'Студент' : 'Преподователь'
        }</p>
        <ul>
          <li>
          <button type='button' onClick={() => {
              setOpenSelect(false); setSelect('student') 
            }}>Студент</button>
          </li>
          <li>
            <button type='button' onClick={() => {
              setOpenSelect(false); setSelect('teacher') 
            }}>Преподаватель</button>
          </li>
        </ul>
      </label>


      <input type="text" placeholder="Введите имя" required value={first_name} onChange={(e) => setFirstName(e.target.value)} />

      <input type="text" placeholder="Введите фамилию" required value={last_name} onChange={(e) => setLastName(e.target.value)} />

      <input type="email" placeholder="example@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />

      <input type="password" placeholder="Введите пароль" required value={password} onChange={(e) => setPassword(e.target.value)} />

      <button className="btn">Создать аккаунт</button>

      <p className="signup-text">Есть аккаунт? <p onClick={onClickLink}>Войти</p></p>
    </form>
  )
}
