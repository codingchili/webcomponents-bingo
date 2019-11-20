class BingoTile extends HTMLElement {
    connectedCallback() {
        this.checked = localStorage.getItem(this.getAttribute('text')) === "true";
        this.update();

        this.innerHTML = `<span class="bingo-text">${this.getAttribute('text')}</span>`;

        this.addEventListener('mousedown', (e) => {
            this.checked = !this.checked;
            this.update();
        });
    }

    update() {
        if (this.checked) {
            localStorage.setItem(this.getAttribute('text'), true);
            this.classList.add('checked');
        } else {
            localStorage.setItem(this.getAttribute('text'), false);
            this.classList.remove('checked');
        }
    }
}
customElements.define('bingo-tile', BingoTile);