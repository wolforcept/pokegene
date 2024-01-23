class ManaPanel {

    mana: { [key in PokeType]: number } = { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 };
    level = 1;

    div: JQuery<HTMLElement>;

    get nextTarget() { return Math.floor((4 + Math.pow(this.level, 1.1)) / 2); }

    constructor(
        private main: Main,
        loadedData?: SavedData
    ) {
        if (loadedData) {
            PokeTypes.forEach(type => this.mana[type] = loadedData.mana[type]);
            this.level = loadedData.level;
        }
    }

    init() {
        this.div = $('<div id="manaBar"></div>')
        $('body').append(this.div);
        this.update();
        // TODO this.div.on('click', ()=>this.main.manaCli);
    }

    update() {
        const mana = this.mana;
        let nextTarget = this.nextTarget;
        // PokeTypes.forEach(type => sum += mana[type] ?? 0);
        let percentPrev = 0;
        let rollingSum = 0;
        let gradientString = '';
        PokeTypes.forEach(type => {
            if (mana[type] && mana[type] > 0) {
                rollingSum += mana[type];
                const color = Colors[type][0];
                const percent = Math.floor(100 * rollingSum / nextTarget);
                gradientString += `, #${color} ${percentPrev}%, #${color} ${percent}%`;
                percentPrev = percent;
            }
        })
        const gradient = `linear-gradient(90deg${gradientString}, #00000000 ${percentPrev}%, #00000000 100%)`;
        this.div.css('background', gradient);
        this.div.html(`${rollingSum} / ${nextTarget}`)
        if (rollingSum >= nextTarget) {
            this.main.explore();
        }
        // manaBar.css('width', '500px');
    }

    addMana(type: PokeType, amount = 1) {
        if (!this.mana[type])
            this.mana[type] = 0;
        this.mana[type] += amount;
        this.update();
    }

    removeAllMana() {
        PokeTypes.forEach(type => this.mana[type] = 0);
        this.update()
    }
}