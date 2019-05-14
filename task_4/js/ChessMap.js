class ChessMap extends Map {
    constructor(size = 10) {
        super(size);
        this.cellChessClassName = 'chessCell';
        this.blackCellChessClassName = 'chessBlackCell';
    }

    renderChessFeatures() {
        let rowCellChessIdx = 1;
        let rowNumber = 1;
        let colSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',];
        $.each($('.tab-row'), (index, value) => {

            let element = $(value);
            let children = element.children();
            if (index === 0 || index === 9) {
                $.each(children, (idx, val) => {
                    if (idx !== 0 && idx !== 9) {
                        let symbol = colSymbols.shift();
                        $(val).text(symbol);
                        colSymbols.push(symbol);
                    }
                });
            } else {
                element.attr('data-idx', rowCellChessIdx++);
                let colCellChessIdx = 1;
                $.each(children, (index, value) => {
                    let elem = $(value);
                    if (index === 0) {
                        elem.text(rowNumber);
                    }
                    if (index === 9) {
                        elem.text(rowNumber++);
                    }
                    if (index !== 0 && index !== 9) {
                        elem.addClass(this.cellChessClassName);
                        elem.attr('data-idx', colCellChessIdx++);
                        if (rowNumber % 2 === 0 && index % 2 === 0) {
                            elem.addClass(this.blackCellChessClassName);
                        }
                        if (rowNumber % 2 !== 0 && index % 2 !== 0) {
                            elem.addClass(this.blackCellChessClassName);
                        }
                    }

                });
            }
        });
    }
}