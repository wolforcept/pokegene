// const normalTypeProbability = [1, .5, .36666, .23333, .1, 0, 0, 0, 0, 0, 0];
const secondTypeProbability = [0, 0, 0, 0, 0, 0, 0, 0.1666, .3333, .5];

class Pokemon {

    card: PokeCard;
    name: string
    types: PokeType[];

    // get maxTimer(): number { return 5; };
    // get maxTimer(): number { return Math.floor(5 * Math.pow(this.level, 0.66666)) };
    get maxTimer(): number { return 5 + Math.pow(3, this.level - 1) };
    get mainType() { return this.types[0]; }
    get secondType() { return this.types[1]; }
    get starsString() {
        switch (this.level) {
            case 2: return "Bronze 1";
            case 3: return "Bronze 2";
            case 4: return "Bronze 3";
            case 5: return "Silver 1";
            case 6: return "Silver 2";
            case 7: return "Silver 3";
            case 8: return "Gold 1";
            case 9: return "Gold 2";
            case 10: return "Gold 3";
            default: return "";
        }
    }

    constructor(
        public main: Main,
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
                    // const manaGain = Math.pow(2, this.level - 1);
                    // for (let i = 0; i < manaGain; i++) {
                    // let manaType: PokeType = !this.secondType
                    //     ? this.mainType
                    //     : (Math.random() < secondTypeProbability[this.level] ? this.secondType : this.mainType);
                    // setTimeout(() => {
                    //     this.main.manaPanel.addMana(manaType, 1);
                    //     this.card.createManaGainAnimation(manaType)
                    // }, i * 200 + (100 * Math.random()));
                    // }
                    // this.generateMana();
                    this.card.updateFilled();
                }
            },
            /* onDrop */(idHeld, idDropped) => this.main.joinPokemon(this, idDropped),
            savedPokemon
        );

    }

    step() {
        if (this.timer < this.maxTimer) {
            this.timer++;
            this.generateMana();
        }
        this.card.updateFilled();
    }

    generateMana() {
        const manaType = this.getRandomManaType();
        this.main.pathPanel.addProgress(manaType);
        this.card.createManaGainAnimation(manaType);
    }

    getRandomManaType(): PokeType {
        return !this.secondType
            ? this.mainType
            // : (Math.random() < secondTypeProbability[this.level] ? this.secondType : this.mainType);
            : (Math.random() < .5 ? this.secondType : this.mainType);
    }

    toJSON() {
        return { nr: this.nr, timer: this.timer, level: this.level };
    }

}
