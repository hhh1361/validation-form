# Validation Form  
### Link:  
##### https://hhh1361.github.io/validation-form/  
---
### Technologies:  
##### JS, REST, React, Redux, Bootstrap.
---
### Description:  
##### Reistration form. Validate email,
--- 

Задание:
Создать форму регистрации, которая состоит из 5-ти простых шагов. При этом каждый шаг должен быть выполнен отдельным компонентом.  

Заголовок вверху должен меняться при каждом шаге.  
Синяя полоска должна заполняться по мере продвижения по шагам.  
Все поля формы, кроме Company обязательны.  
На шаге Company - если поле заполнено - текст на кнопке Next Step, если не заполнено - Skip this step.  
Шаг Timezone - значение должно определяться автоматически.  
Переход на следующий шаг возможен только после валидации всех полей текущего шага.  
Email нужно проверить на уникальность, сделать это можно отправив POST запрос:  

curl -X POST \https://frontapi.vinchain.io/auth/api/check-email/ \-H 'Content-Type: application/json' \-d '{"email":"test@test.com"}'
Если статус ответа 200 - значит email валидный, если 400 - пользователь с таким email уже существует.  

На последнем шаге данные необходимо сохранить в Redux Store, убрать форму и вывести сообщение “Congratulations! Your account has been created”  

Страницу сверстать с помощью Bootstrap. Допускаются небольшие отклонения от макета.  

Ссылка на макеты:  
https://drive.google.com/drive/folders/1GfR1fC7VhfTOpgYOtZODqIodOJX8CWXj
