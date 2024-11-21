import React from 'react'
import Header from './Header'

export default function Loyaut({children, auth, setAuth}) {
  return (
    <div className="container" style={
      {
        background: "url('bg.png') no-repeat center center fixed",
        backgroundSize: "cover",
      }
    }>
      {auth && <Header auth={auth} setAuth={setAuth}/>}
      {children}
    </div>
  )
}
