class BingoGrid extends HTMLElement {
    connectedCallback() {
        this.align()
    }

    align() {
        this.style['flex-basis'] = `${100 / this.getAttribute('grid-columns')}%`;
        this.style['width'] = `${this.getAttribute('grid-columns') * 198}px`;
    }

    update(layout) {
        this.setAttribute('grid-columns', layout.columns);
        this.align();
        console.log(layout);

        for (let text of layout.tiles) {
            let tile = document.createElement('bingo-tile');
            tile.setAttribute('text', text);
            this.appendChild(tile);
        }
    }
}
customElements.define('bingo-grid', BingoGrid);