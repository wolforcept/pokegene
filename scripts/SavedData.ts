class SavedData {

    constructor(
        public level: number,
        public pokemon: Array<SavedPokemon>,
        public mana: { [key in PokeType]?: number },
    ) { }

    private static createNew() {
        return new SavedData(
            1,
            [],
            { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 }
        );
    }

    static load(): SavedData {
        const loaded = JSON.parse(localStorage.getItem('poke_saved_data')) as SavedData ?? SavedData.createNew();
        console.log({ loaded });
        return loaded;
    }

    saveAll() {
        localStorage.setItem('poke_saved_data', JSON.stringify(this));
    }
}

interface SavedPokemon {
    nr: number;
    timer: number;
    level: number;

    x: number;
    y: number;
    isBall: boolean;
    isOpened: boolean;
}