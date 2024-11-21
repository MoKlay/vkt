CREATE OR REPLACE FUNCTION add_type_ticket(p_type_ticket VARCHAR(255)) RETURNS TEXT AS $$ 
BEGIN 
IF EXISTS (SELECT 1 FROM ticket_types WHERE type_name = p_type_ticket) THEN
RETURN 'Тип тикета уже существует';
END IF;

INSERT 
INTO 
ticket_types 
(type_name) 
VALUES 
(p_type_ticket);

RETURN 'Тип тикета успешно добавлен';
EXCEPTION
  WHEN OTHERS THEN
    RETURN 'Ошибка при добавлении ' || SQLERRM;
END;
$$ LANGUAGE plpgsql;