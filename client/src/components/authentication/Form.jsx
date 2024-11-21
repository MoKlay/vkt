import React, {  useState } from 'react'
import Login from './Login'
import Auth from './Auth'
import $ from 'jquery'
import Alert from '../Alert'

export default function Form({setAuth}) {
  const [active, setActive] = useState(null)
  const [login, setLogin] = useState(true)
  const [alert, setAlert] = useState(null)

  function handleSubmitAuth(user) {
    $.post('/api/user/add', user, (t, status, xhr) => {
      const message = t.rows.map(r => Object.values(r)[0])[0]
      setAlert(message)
      if (xhr.status === 201) {
        setLogin(true)
      }

      
    })
  }

  function handleSubmitLogin(user) {
    $.post('/api/user/login', user, (t, status, xhr) => {
      if (t) {
        setActive(t)
      } else {
        setAlert('Username or password incorrect')
      }
    })
  }

  return (
    <>
    <div className="form-container" style={{
      animationName: !active ? 'fadeIn' : 'fadeOut',
      transform: !active ? 'translateY(0)' : 'translateY(-100vh)',
    }} onAnimationEndCapture={() => {
      if (active) {
        setAuth && setAuth(active)
      } 
    }}>
      <Login active={login} onClickLink={() => setLogin(false)} onSubmit={handleSubmitLogin}/>
      <Auth active={!login && true} onClickLink={() => setLogin(true)} onSubmit={handleSubmitAuth}/>
    </div>
    {alert && <Alert alert={alert} setAlert={setAlert} />}
    </>
  )
}
