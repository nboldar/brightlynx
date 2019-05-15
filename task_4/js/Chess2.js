class Chess2 extends Chess {
    constructor(mapMaker = new ChessMap()) {
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
            this.currentCellCoordinates.column = (+element.data('idx'));
            this.currentCellCoordinates.row = (+element.parent().data('idx'));
            let possibleMoves = this.getPossibleSteedMovesCoordinates();

            possibleMoves.forEach(el => {
                console.log(el);

                 let element = this.getElementByCoordinates(el);
                 element.addClass(this.possibleMoveCellClassName);
            });
            //this.possibleMove.length = 0;
        });
    }

    getElementByCoordinates(coordinatesObj) {
        let elements = $(`.${this.mapMaker.cellChessClassName}`);
        let result = null;
        $.each(elements, (index, value) => {
            let elem = $(value);
            if (elem.data('idx') === coordinatesObj.column && elem.parent().data('idx') === coordinatesObj.row) {
                result = elem;
            }
        });
        return result;
    }

}