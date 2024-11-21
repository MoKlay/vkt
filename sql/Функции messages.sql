-- Функция для добавления сообщения
CREATE OR REPLACE FUNCTION add_message(p_ticket_id INTEGER, p_user_id INTEGER, p_text TEXT)
RETURNS VOID AS $$
BEGIN
  -- Проверка существования заявки
  IF NOT EXISTS (SELECT 1 FROM tickets WHERE ticket_id = p_ticket_id) THEN
    RAISE EXCEPTION 'Заявка не найдена.';
  END IF;

  -- Проверка существования пользователя
  IF NOT EXISTS (SELECT 1 FROM users WHERE user_id = p_user_id) THEN
    RAISE EXCEPTION 'Пользователь не найден.';
  END IF;

  -- Добавление сообщения
  INSERT INTO messages (ticket_id, user_id, text)
  VALUES (p_ticket_id, p_user_id, p_text);

EXCEPTION
  WHEN OTHERS THEN
    RAISE EXCEPTION 'Ошибка при добавлении сообщения: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;


-- Функция для удаления сообщения
CREATE OR REPLACE FUNCTION delete_message(p_message_id INTEGER)
RETURNS TEXT AS $$
BEGIN
  -- Проверка существования сообщения
  IF NOT EXISTS (SELECT 1 FROM messages WHERE message_id = p_message_id) THEN
    RETURN 'Сообщение не найдено.';
  END IF;

  -- Удаление сообщения
  DELETE FROM messages WHERE message_id = p_message_id;

  RETURN 'Сообщение успешно удалено.';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Ошибка при удалении сообщения: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;