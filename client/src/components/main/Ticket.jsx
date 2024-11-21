import React, { useEffect } from 'react'
import $ from 'jquery'
import Alert from '../Alert'

export default function Ticket({
  auth,
  setOpenTicket
}) {
  const [alert, setAlert] = React.useState(null)
  const [openSelect, setOpenSelect] = React.useState(false)
  const [ticket, setTicket] = React.useState([])
  const [type, setType] = React.useState(null)
  const [description, setDescription] = React.useState('')

  useEffect(() => {
    $.get('api/type_ticket', (data) => {
      if (data.length !== 0) {
        setTicket(data)
        data[0] && setType(data[0])
      } else {
        setType('Пусто')
      }
    })
  }, [])

  function handleSubmit (e) {
    e.preventDefault()
    $.post('api/tickets/add', {
      user_id: auth.user_id,
      type_id: type.type_id,
      description
    }, (value) => {
      setAlert(value)
    })
  }
  return (
    type && <div className="con-ticket" >
      <div className="close" onClick={() => {
      setOpenTicket(false)
    }}></div>
      <form className='ticket' onSubmit={handleSubmit}>
        <h1>Создание запроса</h1>

        <label className='select'>
          <input type="checkbox" checked={openSelect} onChange={() => setOpenSelect(!openSelect)}/>
          Тип запроса
          <p>{type.type_name}</p>
          <ul>
            {
              ticket.map((item, index) => {
                return <li key={index}>
                  <button type='button' onClick={() => {
                    setOpenSelect(false)
                    item.type_name && setType(item)
                  }}>{item.type_name}</button>
                </li>
              })
            }
          </ul>
        </label>

        <label>
          Описание
          <textarea value={description} onChange={(e) => {
            setDescription(e.target.value)
          }} required></textarea>
        </label>
        
        <button className='btn' disabled={type === 'Пусто'}>Отправить запрос</button>
      </form>
      {alert && <Alert alert={alert} setAlert={setAlert} onEnd={() => {
        setOpenTicket(false)
      }}/>}

    </div>
  )
}
