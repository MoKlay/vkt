import React, { useState } from 'react'
import classNames from 'classnames'

export default function Login({ active, onClickLink, onSubmit}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({email, password})
  }

  return (
    <form className={classNames(['loyaut', 'login', { active }])} onSubmit={handleSubmit}>
      <div>
        <h1>Вход в систему</h1>
        <p>Для входа введите почту и пароль</p>
      </div>
      <input type="email" placeholder="Электронная почта" value={email} onChange={e => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required/>
      <button className="btn" >Войти</button>
      <p className="signup-text">Еще нет аккаунта? <p onClick={onClickLink}>Создать аккаунт</p></p>
    </form>
  )
}
