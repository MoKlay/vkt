import React from 'react'

export default function Admin() {
  return (
    <div className="page">
      <div className="admin">
        <div class="cont">
          <h1>Сообщения</h1>
          <div class="filters">
            <table class="filter-table">
              <tr>
                <td>
                  <select class="filter-dropdown">
                    <option value="1">Отдел</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
                <td>
                  <select class="filter-dropdown">
                    <option value="1">Дата</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
                <td>
                  <select class="filter-dropdown">
                    <option value="1">Клиент</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
                <td>
                  <select class="filter-dropdown">
                    <option value="1">Статус</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
                <td>
                  <button class="reset">Сбросить фильтр</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="con">

          <table class="requests-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Отдел</th>
                <th>Дата</th>
                <th>Клиент</th>
                <th>Приоритет</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Запрос на изменение личной информации</td>
                <td>Технический</td>
                <td>25 ноября 2024</td>
                <td>Дмитрий Шубин</td>
                <td>✦</td>
                <td class="status closed">Закрыто</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Не могу найти нужную статью в базе знаний</td>
                <td>Учебный</td>
                <td>24 ноября 2024</td>
                <td>Алена Юматова</td>
                <td>✦✦</td>
                <td class="status in-progress">В процессе</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Запрос на вывод комментариев к заданиям</td>
                <td>Учебный</td>
                <td>24 ноября 2024</td>
                <td>Элмар Мустафаев</td>
                <td>✦</td>
                <td class="status completed">Выполнено</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Не могу найти нужную статью в базе знаний</td>
                <td>Учебный</td>
                <td>24 ноября 2024</td>
                <td>Чингис Цыренов</td>
                <td>✦</td>
                <td class="status otkl">Отклонено</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Запрос на изменение личной информации</td>
                <td>Финансовый</td>
                <td>24 ноября 2024</td>
                <td>Алена Юматова</td>
                <td>✦✦✦</td>
                <td class="status in-progress">В процессе</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Не могу найти нужную статью в базе знаний</td>
                <td>Финансовый</td>
                <td>24 ноября 2024</td>
                <td>Дмитрий Шубин</td>
                <td>✦</td>
                <td class="status received">Получено</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div class="cont" />
        <div class="pagination">
          <span>1 из 10</span>
          <button class="next-page">Далее</button>
        </div>
      </div>
    </div>


  )
}
