class BingoGrid extends HTMLElement {
    connectedCallback() {
        this.style['flex-basis'] = `${100 / this.getAttribute('grid-columns')}%`;
        this.style['width'] = `${this.getAttribute('grid-columns') * 198}px`;
    }

    update(tiles) {
        for (let text of tiles) {
            let tile = document.createElement('bingo-tile');
            tile.setAttribute('text', text);
            this.appendChild(tile);
        }
    }
}
customElements.define('bingo-grid', BingoGrid);