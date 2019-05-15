class Chess {
    /*создаем объект*/
    /**
     * @param currentColumn String (адрес колонки шахматной доски)
     * @param currentRow String (адрес строки шахматной доски)
     */
    constructor() {
        this.columnsNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
        this.currentCellCoordinates = {column: null, row: null};
        //this.possibleMove = [];
    }

    showPossibleMoves(userData) {
        if (this.validateCoordinatesInChessFormat(userData)) {
            Object.assign(this.currentCellCoordinates, this.parseCellAddress(userData));
            let possibleMoves = this.getPossibleSteedMovesCoordinates();
            return this.getPossibleMovesInChessFormat(possibleMoves).join(', ');
        } else {
            return 'Ошибка!!! Введите текущее положение коня в формате "D5"';
        }
    }

    /**
     * метод проверки пользовательских данных
     * @param coordinates {String}
     * @returns {boolean}
     */
    validateCoordinatesInChessFormat(coordinates) {
        return coordinates.match("^[a-hA-H]{1}[1-8]{1}$");
    }

    /**
     * метод создает координаты поля в шахматном формате из числового, например '11'=>'A1'
     * @param coordinatesAsString {Object}
     * @returns {string}
     */
    getCoordinatesInChessFormat(coordinates) {
        return this.createElement(this.columnsNames[coordinates.column - 1], coordinates.row);
    }

    /**
     * метод создает массив координат в шахматном формате из числового, например ['11','22','33','44']=>['A1','B2','C3','D4']
     * @param arrayPossibleMoves {Array}
     * @returns {Array}
     */
    getPossibleMovesInChessFormat(arrayPossibleMoves) {
        let result = [];
        arrayPossibleMoves.forEach((element) => {
            result.push(this.getCoordinatesInChessFormat(element));
        });
        return result;
    }

    /**
     * метод возвращает координаты шахматной ячейки в виде строки, например '24' или 'B4'
     * @param column
     * @param row
     * @returns {string}
     */
    createElement(column, row) {
        return "".concat(column, row);
    }

    getPossibleSteedMovesCoordinates() {
        let possibleMoves = [];
        let currentColIdx = this.currentCellCoordinates.column;

        let colMinus2 = currentColIdx - 2;
        let colMinus1 = currentColIdx - 1;
        let colPlus1 = currentColIdx + 1;
        let colPlus2 = currentColIdx + 2;

        let currentRowNumber = this.currentCellCoordinates.row;

        let rowMinus2 = currentRowNumber - 2;
        let rowMinus1 = currentRowNumber - 1;
        let rowPlus1 = currentRowNumber + 1;
        let rowPlus2 = currentRowNumber + 2;

        if ((currentColIdx - 2) > 0) {
            if ((currentRowNumber - 1) > 0) {
                possibleMoves.push({column: colMinus2, row: rowMinus1});
            }
            if ((currentRowNumber + 1) < 9) {
                possibleMoves.push({column: colMinus2, row: rowPlus1});
            }
        }
        if ((currentColIdx - 1) > 0) {
            if ((currentRowNumber - 2) > 0) {
                possibleMoves.push({column: colMinus1, row: rowMinus2});
            }
            if ((currentRowNumber + 2) < 9) {
                possibleMoves.push({column: colMinus1, row: rowPlus2});
            }
        }
        if ((currentColIdx + 1) < 9) {
            if ((currentRowNumber - 2) > 0) {
                possibleMoves.push({column: colPlus1, row: rowMinus2});
            }
            if ((currentRowNumber + 2) < 9) {
                possibleMoves.push({column: colPlus1, row: rowPlus2});
            }
        }
        if ((currentColIdx + 2) < 9) {
            if ((currentRowNumber - 1) > 0) {
                possibleMoves.push({column: colPlus2, row: rowMinus1});
            }
            if ((currentRowNumber + 1) < 9) {
                possibleMoves.push({column: colPlus2, row: rowPlus1});
            }
        }
        return possibleMoves;
    }

    parseCellAddress(address) {
        let result = {};
        result.column = this.columnsNames.indexOf(address[0].toUpperCase()) + 1;
        result.row = +address[1];
        console.log(result);
        return result;
    }

    parseCellCoordinates(coordinatesAsString) {
        return {
            column: +coordinatesAsString[0],
            row: +coordinatesAsString[1]
        };
    }
}