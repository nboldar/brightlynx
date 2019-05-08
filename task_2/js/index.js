/*вешаем обработчик на кнопку*/
$("#submit").on("click", event => {
/*внесенные пользователем данные присваиваем переменной*/
    let userData = $("#currentPosition").val();
/*Проверяем данные от пользователя*/
    if (userData.match("^[a-hA-H]{1}[1-8]{1}$")) {
        /*убираем дефолтное поведение формы*/
        event.preventDefault();
        /*из данных создаем массив из двух элементов*/
        let userDataArray = userData.split("", 2);
        /*переводим имя столбца в верхний регистр(шахматы все таки)*/
        userDataArray[0] = userDataArray[0].toUpperCase();
        /*присваиваем переменным адрес столбца и строки шахматной доски*/
        let column, row;
        [column, row] = userDataArray;
        /*создаем объект*/
        let chess = new Chess(column, row);
        /*вставляем результат в форму вывода*/
        $("#result").text(chess.createMoves());
        /*обнуляем результат*/
        chess.possibleMove.length = 0;
        /*активируем модальное окно с результатом*/
        $(".modal").modal();
    }

});