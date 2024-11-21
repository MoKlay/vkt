import React, { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Здравствуйте! Чем могу помочь?', received: true }
  ]);

  const handleQuickReply = (response) => {
    setMessages([...messages, { text: response, received: false }, { text: getResponse(response), received: true }]);
  };

  const getResponse = (question) => {
    const responses = {
      "Где я могу найти инструкции или документацию?": "Вы можете найти инструкции в разделе Документация на нашем сайте.",
      "Как оставить отзыв о работе поддержки?": "Вы можете оставить отзыв, заполнив форму обратной связи.",
      "Почему я не могу войти в свой аккаунт?": "Проверьте правильность вводимых данных. Если проблема сохраняется, сбросьте пароль.",
      "Что делать, если я не получил ответ?": "Пожалуйста, проверьте папку со спамом или обратитесь к службе поддержки.",
      "Каковы часы работы службы поддержки?": "Служба поддержки работает с 9:00 до 18:00 по Москве."
    };
    return responses[question] || null;
  };

  const getCustomResponse = (message) => {
    const responses = [];
    // Проверка на наличие ключевых слов и соответствующие ответы
    if (/\b(документ|паспорт|номер группы)\b/i.test(message)) {
      responses.push("Вы можете внести или проверить эти данные в личном кабинете.");
    }
    if (/\b(преподаватель)\b/i.test(message)) {
      responses.push("Список преподавателей находится в разделе обучение.");
    }
    return responses.length > 0 ? responses.join(' ') : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    const messageText = input.value.trim();
    
    if (messageText) {
      const customResponse = getCustomResponse(messageText);
      // Определяем, какой ответ использовать: индивидуальный или стандартное сообщение
      const responseMessage = customResponse || 'Передано в тех поддержку';
      
      setMessages([...messages, { text: messageText, received: false }, { text: responseMessage, received: true }]);
      input.value = '';
    }
  };

  return (
    <div>
      <section class="page">

        <div class="chat-container">
          <h2 class="chat-title">Чат-бот</h2>
          <div class="chat-divider"></div>
          <div className='dialog'>
          {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.received ? 'message-received' : 'message-sent'}
              >
                <p>{msg.text}</p>
              </div>
            ))}

          </div>

          <section class="quick-replies">
            <div class="quick-reply-row">
              <button class="quick-reply-btn"onClick={() => handleQuickReply("Где я могу найти инструкции или документацию?")}>Где я могу найти инструкции или документацию?</button>
              <button class="quick-reply-btn" onClick={() => handleQuickReply("Как оставить отзыв о работе поддержки?")}>Как оставить отзыв о работе поддержки?</button>
            </div>
            <div class="quick-reply-row">
              <button class="quick-reply-btn" onClick={() => handleQuickReply("Почему я не могу войти в свой аккаунт?")}>Почему я не могу войти в свой аккаунт?</button>
              <button class="quick-reply-btn" onClick={() => handleQuickReply("Что делать, если я не получил ответ?")}>Что делать, если я не получил ответ?</button>
              <button class="quick-reply-btn"onClick={() => handleQuickReply("Каковы часы работы службы поддержки?")}>Каковы часы работы службы поддержки?</button>
            </div>
          </section>

          <form class="message-input-container" onSubmit={handleSubmit}>
            <label for="messageInput" class="visually-hidden">Введите сообщение</label>
            <input type="text" id="messageInput" class="message-input" placeholder="Введите сообщение" />
            <button type="submit" class="send-button">Отправить</button>
          </form>
        </div>
      </section>
    </div>
  )
}
