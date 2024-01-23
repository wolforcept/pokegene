// const normalTypeProbability = [1, .5, .36666, .23333, .1, 0, 0, 0, 0, 0, 0];
const secondTypeProbability = [0, 0, 0, 0, 0, 0, 0, 0.1666, .3333, .5];

class Pokemon {

    card: PokeCard;
    name: string
    types: PokeType[];

    get maxTimer(): number { return Math.floor(5 * Math.pow(this.level, 0.66666)) };
    get mainType() { return this.types[0]; }
    get secondType() { return this.types[1]; }

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
                    for (let i = 0; i < this.level; i++) {
                        let manaType: PokeType = Math.random() < secondTypeProbability[this.level] ? this.secondType : this.mainType;
                        this.main.manaPanel.addMana(manaType, 1);
                        setTimeout(() => this.card.createManaGainAnimation(manaType), i * 200 + (100 * Math.random()));
                    }
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
