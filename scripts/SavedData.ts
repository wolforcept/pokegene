
interface SavedPokemon {
    nr: number;
    timer: number;
    level: number;

    x: number;
    y: number;
    isBall: boolean;
    isOpened: boolean;
}

class SavedData {

    constructor(
        public pokemon: Array<SavedPokemon>,
        public pokedex: Array<boolean>,
        // public mana: { [key in PokeType]?: number },
        public completedPaths: number,
        public currentPath: Path,
        public lockType: LockType,
        public increaseInFindingNewPokemon: number
    ) { }

    static createNew() {
        return new SavedData(
            [], // pokemon
            [], // pokedex
            1, // paths done
            undefined, // path,
            'none', // lock type
            0 // increase in finding new pokemon
        );
        // mana:
        // { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 },
    }

    static load(): SavedData {
        const loaded = JSON.parse(localStorage.getItem('poke_saved_data')) as SavedData ?? SavedData.createNew();
        console.log({ loaded });
        if (!loaded.pokedex) loaded.pokedex = [];
        loaded.pokemon.forEach(x => loaded.pokedex[x.nr] = true)
        return loaded;
    }

    saveAll() {
        const saveObj: SavedData = JSON.parse(JSON.stringify(this));
        if (saveObj.currentPath)
            saveObj.currentPath.wilds.forEach(x => delete x.div);
        localStorage.setItem('poke_saved_data', JSON.stringify(saveObj));
    }
}