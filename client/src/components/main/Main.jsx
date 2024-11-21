import React from 'react'
import Ticket from './Ticket'

export default function Main({auth}) {
  const [openTicket, setOpenTicket] = React.useState(false)
  return (
    <div className='main-container'>
      <div className='page' id='main'>
        <span>
          <h3>Интеллектуальная система образовательной организации</h3>
          <h1>Служба технической поддержки</h1>
        </span>
        <p>
          Перед тем как создавать запрос, мы рекомендуем ознакомиться с нашим разделом FAQ ниже,
          где собраны ответы на самые распространенные вопросы. Возможно, вы найдете решение своей
          проблемы без необходимости обращения в службу поддержки.
        </p>
        <div className="con-btn">
          <button className='btn' onClick={() => setOpenTicket(true)}>Создать запрос</button>
          
          <button className='chat-button chat-button-text btn' disabled>Чат-бот</button>

        </div>
        {openTicket && <Ticket setOpenTicket={setOpenTicket} auth={auth}/>}
      </div>
      <div className="page" id='FAQ'>
        <div className='con'>
          <h1>FAQ</h1>
          <ul className='tabs' >
            <li>
              <label>
                <input type="radio" name="FAQ" value='tech' checked />
                Технические
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="FAQ" value='study' />
                Учебные
              </label>
            </li>
          </ul>
          <ul className='faq-con'>
            <li>
              <label>
                <input type='checkbox' name="que" value='other'/>
                <h5>Вопрос</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nemo tenetur aliquam culpa aperiam quasi exercitationem nesciunt, qui eius voluptatibus distinctio totam et saepe deleniti esse voluptatem? Facere, dicta?</p>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox'  name="que" value='other' />
                <h5>Вопрос</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nemo tenetur aliquam culpa aperiam quasi exercitationem nesciunt, qui eius voluptatibus distinctio totam et saepe deleniti esse voluptatem? Facere, dicta?</p>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name="que" value='other' />
                <h5>Вопрос</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nemo tenetur aliquam culpa aperiam quasi exercitationem nesciunt, qui eius voluptatibus distinctio totam et saepe deleniti esse voluptatem? Facere, dicta?</p>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name="que" value='other' />
                <h5>Вопрос</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nemo tenetur aliquam culpa aperiam quasi exercitationem nesciunt, qui eius voluptatibus distinctio totam et saepe deleniti esse voluptatem? Facere, dicta?</p>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name="que" value='other' />
                <h5>Вопрос</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nemo tenetur aliquam culpa aperiam quasi exercitationem nesciunt, qui eius voluptatibus distinctio totam et saepe deleniti esse voluptatem? Facere, dicta?</p>
              </label>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

