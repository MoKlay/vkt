-- Функция для добавления пользователя
CREATE OR REPLACE FUNCTION add_user(p_first_name VARCHAR(255), p_last_name VARCHAR(255), p_email VARCHAR(255), p_password VARCHAR(255), p_role VARCHAR(50))
RETURNS TEXT AS $$
DECLARE
  v_user_id INTEGER;
BEGIN
  -- Проверка на существование email
  IF EXISTS (SELECT 1 FROM users WHERE email = p_email) THEN
    RETURN 'Пользователь с таким email уже существует.';
  END IF;

  -- Проверка на корректность роли
  IF p_role NOT IN ('student', 'teacher', 'admin') THEN
    RETURN 'Неверная роль пользователя.';
  END IF;

  -- Добавление пользователя
  INSERT INTO users (first_name, last_name, email, password, role)
  VALUES (p_first_name, p_last_name, p_email, p_password, p_role)
  RETURNING user_id INTO v_user_id;

  RETURN 'Пользователь успешно добавлен';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Ошибка при добавлении пользователя: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;


-- Функция для изменения данных пользователя
CREATE OR REPLACE FUNCTION update_user(p_user_id INTEGER, p_first_name VARCHAR(255), p_last_name VARCHAR(255), p_email VARCHAR(255), p_password VARCHAR(255), p_role VARCHAR(50))
RETURNS TEXT AS $$
DECLARE
BEGIN
  -- Проверка на существование пользователя
  IF NOT EXISTS (SELECT 1 FROM users WHERE user_id = p_user_id) THEN
    RETURN 'Пользователь не найден.';
  END IF;

  -- Проверка на корректность роли
  IF p_role IS NOT NULL AND p_role NOT IN ('student', 'teacher', 'admin') THEN
      RETURN 'Неверная роль пользователя.';
  END IF;

  -- Обновление данных пользователя
  UPDATE users
  SET first_name = COALESCE(p_first_name, first_name),
      last_name = COALESCE(p_last_name, last_name),
      email = COALESCE(p_email, email),
      password = COALESCE(p_password, password),
      role = COALESCE(p_role, role)
  WHERE user_id = p_user_id;

  RETURN 'Данные пользователя успешно изменены.';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Ошибка при изменении данных пользователя: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;


-- Функция для удаления пользователя
CREATE OR REPLACE FUNCTION delete_user(p_user_id INTEGER)
RETURNS TEXT AS $$
BEGIN
  -- Проверка на существование пользователя
  IF NOT EXISTS (SELECT 1 FROM users WHERE user_id = p_user_id) THEN
    RETURN 'Пользователь не найден.';
  END IF;

  -- Удаление пользователя
  DELETE FROM users WHERE user_id = p_user_id;

  RETURN 'Пользователь успешно удален.';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Ошибка при удалении пользователя: ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;