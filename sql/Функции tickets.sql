-- Функция для добавления заявки
CREATE OR REPLACE FUNCTION add_ticket(p_user_id INTEGER, p_type_id INTEGER, p_description TEXT)
RETURNS TEXT AS $$
DECLARE
  v_ticket_id INTEGER;
BEGIN
  -- Проверка существования пользователя
  IF NOT EXISTS (SELECT 1 FROM users WHERE user_id = p_user_id) THEN
    RAISE EXCEPTION 'Пользователь не найден.';
  END IF;

  -- Проверка существования типа заявки
  IF NOT EXISTS (SELECT 1 FROM ticket_types WHERE type_id = p_type_id) THEN
    RAISE EXCEPTION 'Тип заявки не найден.';
  END IF;

  -- Добавление заявки
  INSERT INTO tickets (user_id, type_id,  description,status)
  VALUES (p_user_id, p_type_id, p_description, 'new')
  RETURNING ticket_id INTO v_ticket_id;

  RETURN 'Запрос отправлен'; -- Возвращаем ID созданной заявки
EXCEPTION
  WHEN OTHERS THEN
    RAISE EXCEPTION 'Ошибка при добавлении заявки: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;


-- Функция для удаления заявки
CREATE OR REPLACE FUNCTION delete_ticket(p_ticket_id INTEGER)
RETURNS TEXT AS $$
BEGIN
  -- Проверка существования заявки
  IF NOT EXISTS (SELECT 1 FROM tickets WHERE ticket_id = p_ticket_id) THEN
    RETURN 'Заявка не найдена.';
  END IF;

  -- Удаление заявки
  DELETE FROM tickets WHERE ticket_id = p_ticket_id;

  RETURN 'Заявка успешно удалена.';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Ошибка при удалении заявки: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;