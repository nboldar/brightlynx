/*вешаем обработчик на кнопку*/
$("#submit").on("click", event => {
    /*внесенные пользователем данные присваиваем переменной*/
    let userData = $("#currentPosition").val();
    /*убираем дефолтное поведение формы*/
    event.preventDefault();
    /*создаем объект*/
    let chess = new Chess();
    /*вставляем результат в форму вывода*/
    $("#result").text(chess.showPossibleMoves(userData));
    /*активируем модальное окно с результатом*/
    $(".modal").modal();
});
