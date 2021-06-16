### Do it

`npm i`
`npm start`

### Comments

Начала реализацию с использованием redux, затем переписала на context. Файлы редакса оставила в репо, но отключила.
Успела реализовать только часть основного функционала плюс подсветку найденного вхождения.
Для перемещения пользователей хотела воспользоваться react-sortable-hoc, чтобы наделить material-ui Table компонент поддержкой drag-n-drop, но в задании есть огранчения на используемыен библитоеки и я засомневалась. 

### About

Тестовое задание Frontend developer в компанию Just-A

Разработать приложение сортировки с получением данных через api
Запрос должен содержать минимум 5000 пользователей. В момент загрузки показывается спинер загрузки. В списке под поиском отображаются пользователи сортированные по группам по дате регистрации (registered.age). Если в группе нет пользователей, группа отображается со стилем disabled. Группы можно независимо раскрывать и закрывать чтобы увидеть список пользователей в группе.

Поиск локально ищет пользователей по имени и фамилии или вхождением подстроки в имя или фамилию. При поиске пользователи отображаются с принадлежностью к группе

Будет плюсом сделать подсветку найденного вхождения.

Пользователей должно быть можно перемещать в список «Избранные» с помощью Drag&Drop с подсветкой колонки «Избранные» в момент захвата карточки пользователя. Перемещать карточку можно за любое место. Курсор должен меняться на drag в момент попадания в зону возможности захвата.

В колонке «Избранные» пользователи отображаются без принадлежности к группе.

- Будет плюсом добавить анимацию «броска» (плавное появление в месте броска) пользователя в группу «Избранные».

- Будет плюсом добавить возможность рассортировывать пользователей в группе «Избранные» с помощью Drag&Drop.

