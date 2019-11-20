class PlayerName extends HTMLElement {
    connectedCallback() {
        this.name = localStorage.getItem("username") || "unknown";
        this.editable = false;
        this.display();
        this.addEventListener('mousedown', (e) => {
            this.editable = !this.editable;
            if (this.editable) {
                this.edit();
            }
        });
    }

    render(html) {
        this.innerHTML = html;
    }

    edit() {
        this.editable = true;
        this.render(`
            <input id="input" type="text" placeholder="${this.name}" autofocus></input>
        `);
        setTimeout((e) => {
            let input = document.getElementById("input");
            input.focus();
            input.addEventListener('blur', this.save.bind(this));
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.save(e);
                }
            });
        }, 0);
    }

    save(e) {
        let input = document.getElementById("input");
        if (input.value.length > 0) {
            this.name = input.value;
            localStorage.setItem('username', this.name);
        }
        this.display();
    }

    display() {
        this.editable = false;
        this.render(`<span>Player name ${this.name}.</span>`);
    }
}
customElements.define('player-name', PlayerName);