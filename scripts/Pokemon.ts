class Pokemon {

    card: PokeCard;
    name: string
    types: PokeType[];

    get maxTimer(): number { return Math.floor(5 * Math.pow(this.level, 0.66666)) };
    get mainType() { return this.types[0]; }

    constructor(
        private main: Main,
        public nr: number,
        public timer: number,
        public level: number,
    ) {
    }

    async init(savedPokemon: SavedPokemon) {
        const staticData = await StaticData.loadPokemon(this.nr);
        this.name = staticData.name;
        this.types = staticData.types;
        this.card = new PokeCard(this,
            /* onClic */() => {

                if (this.timer >= this.maxTimer) {
                    this.timer = 0;
                    this.card.createManaGainAnimation(this.mainType);
                    this.main.manaPanel.addMana(this.mainType, this.level);
                    // TODO cookieData_addMana(type);
                    this.card.updateFilled();
                }
            },
            /* onHold */() => { },
            /* onDrop */(idHeld, idDropped) => this.main.joinPokemon(this, idDropped),
            savedPokemon
        );

    }

    step() {
        if (this.timer < this.maxTimer)
            this.timer++;
        this.card.updateFilled();
    }

    toJSON() {
        return { nr: this.nr, timer: this.timer, level: this.level };
    }

}
