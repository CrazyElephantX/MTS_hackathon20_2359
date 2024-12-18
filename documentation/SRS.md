# SRS

## БД
Основная база данных - PostgreSQL
Обязательные поля для всех таблиц:

| **Поле**   | **Тип**                              | **Описание**                      |
| ---------- | ------------------------------------ | --------------------------------- |
| created_at | datetime UTC в соответствии RFC 3339 | Дата и время создания             |
| updated_at | datetime UTC в соответствии RFC 3339 | Дата и время последнего изменения |
| deleted_at | datetime UTC в соответствии RFC 3339 | Дата и время удаления             |
### Users
| **Поле**     | **Тип** | **Описание**                                   |
| ------------ | ------- | ---------------------------------------------- |
| id           | uuid    | id пользователя (Используем telegram_id)       |
| name         | string  | Ник пользователя для лидерборда                |
| phone        | string  | Телефон пользователя                           |
| mdm_id       | uuid    | id пользователя в системе заказчика приложения |
| refferal_id  | string  | Необходимо обеспечить уникальность             |
| localization | enum    | ru, en                                         |
### achievements
| **Поле**           | **Тип** | **Описание**                                            |
| ------------------ | ------- | ------------------------------------------------------- |
| id                 | uuid    | id достижения                                           |
| action_id          | uuid    | id действия для выполнения достижения                   |
| description        | string  | Описание достижения                                     |
| quantity           | int     | Количество раз выполнения цели для получения достижения |
| parent_achievement | uuid    | Достижение которое необходимо выполнить для открытия    |
### achievements_progress
| **Поле**       | **Тип** | **Описание**     |
| -------------- | ------- | ---------------- |
| user_id        | uuid    | id пользователя  |
| achievement_id | uuid    | id достижения    |
| quantity       | int     | Текущий прогресс |
### mst_services
| **Поле**    | **Тип** | **Описание**               |
| ----------- | ------- | -------------------------- |
| id          | uuid    | id услуги МТС              |
| description | string  | Описание услуги            |
| cost        | int     | Стоимость услуги в монетах |
| discount    | int     | Процент скидки             |

### subscriptions

| **Поле**    | **Тип** | **Описание**      |
| ----------- | ------- | ----------------- |
| id          | uuid    | id подписки       |
| description | string  | Описание подписки |
### balance
| **Поле** | **Тип** | **Описание**                       |
| -------- | ------- | ---------------------------------- |
| user_id  | uuid    | id пользователя владельца кошелька |
| quantity | int     | Текущий остаток                    |
