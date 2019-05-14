class Chess2 extends Chess {
    constructor(currentColumn = null, currentRow = null, mapMaker = new ChessMap()) {
        super();
        this.mapMaker = mapMaker;
        this.rootElement = $("#root");
        this.possibleMoveCellClassName = 'steedMoveCell';
    }

    init() {
        this.mapMaker.renderMap(this.rootElement);
        this.mapMaker.renderChessFeatures();
        let targetElements = $(`.${this.mapMaker.cellChessClassName}`);
        targetElements.on('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            $.each(targetElements, (index, value) => {
                $(value).removeClass(this.possibleMoveCellClassName);
            });

            let element = $(event.target);
            this.currentColumnIndex = (+element.data('idx')) - 1;
            this.currentRow = (+element.parent().data('idx'));
            let possibleMoves = this.createMoves().split(',');

            possibleMoves.forEach(el => {
                let address = this.parseCellAddress(el.trim());
                let element = this.getElementByCoordinates(address);
                element.addClass(this.possibleMoveCellClassName);
            });
            this.possibleMove.length = 0;
        });
    }

    parseCellAddress(address) {
        let resultArray = {};
        resultArray.column = this.getColumnIdx(address[0]) + 1;
        resultArray.row = +address[1];
        return resultArray;
    }

    getElementByCoordinates(coordinates) {
        let elements = $(`.${this.mapMaker.cellChessClassName}`);
        let result = null;
        $.each(elements, (index, value) => {
            let elem = $(value);
            if (elem.data('idx') === coordinates.column && elem.parent().data('idx') === coordinates.row) {
                result = elem;
            }
        });
        return result;
    }
}