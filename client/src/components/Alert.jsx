import React from 'react'

export default function Alert({alert, setAlert , onEnd = () => {}}) {
  const [message, setMessage] = React.useState(alert)

  return (
    <div className='alert' style={{
      animationName: message ? 'bounceIn' : 'bounceOut',
    }} onAnimationEnd={() => {
      if (message) {
        setTimeout(() => {
          setMessage(null)
        }, 1000);
      } else{
        setAlert(null)
        onEnd()
      }
    }}>
      {alert}
    </div>
  )
}
