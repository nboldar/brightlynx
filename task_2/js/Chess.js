class Chess {
    /*создаем объект*/
    /**
     *
     * @param currentColumn String (адрес колонки шахматной доски)
     * @param currentRow String (адрес строки шахматной доски)
     */
    constructor(currentColumn, currentRow) {
        this.columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
        this.currentColumnIndex = this.getColumnIdx(currentColumn);
        this.currentRow = +currentRow;
        this.possibleMove = [];
    }

    /**
     *
     * @param column String
     * @returns {number}
     */
    getColumnIdx(column) {
        return this.columns.indexOf(column);
    }

    /**
     * добавляем элемент в результирующий массив
     * @param element String (например "E3")
     */
    addMove(element) {
        this.possibleMove.push(element);
    }

    /**
     *
     * @param column String
     * @param row Number
     * @returns {string}
     */
    createElement(column, row) {
        return "".concat(column, row);
    }

    createMoves() {
        let currentColIdx = this.currentColumnIndex;

        let colMinus2 = this.columns[currentColIdx - 2];
        let colMinus1 = this.columns[currentColIdx - 1];
        let colPlus1 = this.columns[currentColIdx + 1];
        let colPlus2 = this.columns[currentColIdx + 2];

        let currentRowNumber = this.currentRow;

        let rowMinus2 = currentRowNumber - 2;
        let rowMinus1 = currentRowNumber - 1;
        let rowPlus1 = currentRowNumber + 1;
        let rowPlus2 = currentRowNumber + 2;

        if ((currentColIdx - 2) >= 0) {
            if ((currentRowNumber - 1) > 0) {
                this.addMove(this.createElement(colMinus2, rowMinus1));
            }
            if ((currentRowNumber + 1) < 9) {
                this.addMove(this.createElement(colMinus2,rowPlus1));
            }
        }
        if ((currentColIdx - 1) >= 0) {
            if ((currentRowNumber - 2) > 0) {
                this.addMove(this.createElement(colMinus1, rowMinus2));
            }
            if ((currentRowNumber + 2) < 9) {
                this.addMove(this.createElement(colMinus1, rowPlus2));
            }
        }
        if ((currentColIdx + 1) < 8) {
            if ((currentRowNumber - 2) > 0) {
                this.addMove(this.createElement(colPlus1, rowMinus2));
            }
            if ((currentRowNumber + 2) < 9) {
                this.addMove(this.createElement(colPlus1, rowPlus2));
            }
        }
        if ((currentColIdx + 2) < 8) {
            if ((currentRowNumber - 1) > 0) {
                this.addMove(this.createElement(colPlus2, rowMinus1));
            }
            if ((currentRowNumber + 1) < 9) {
                this.addMove(this.createElement(colPlus2, rowPlus1));
            }
        }
        return this.possibleMove.join(", ");
    }


}