interface PokemonStaticData {
    nr: number;
    name: string;
    types: PokeType[];
}

class StaticData {

    static typesByPokemon: Array<Array<PokeType>>;
    static pokemonsByType: { [key in PokeType]: Array<number> };
    static evolutionsByPokemon: Array<null | Array<number>>;
    static prevolutionsByPokemon: Array<number | null>;
    static rarityByPokemon: Array<number>;

    static async load() {
        console.log("loading static data...")
        console.log("loading types...")
        await fetch('../assets/data/typesByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.typesByPokemon = json);
        console.log({ typesByPokemon: this.typesByPokemon });
        // console.log(typesByPokemon)
        await fetch('../assets/data/pokemonsByType.json')
            .then((response) => response.json())
            .then((json) => this.pokemonsByType = json);
        console.log({ pokemonsByType: this.pokemonsByType });
        await fetch('../assets/data/evolutionsByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.evolutionsByPokemon = json);
        console.log({ evolutionsByPokemon: this.evolutionsByPokemon });
        await fetch('../assets/data/prevolutionsByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.prevolutionsByPokemon = json);
        console.log({ prevolutionsByPokemon: this.prevolutionsByPokemon });
        await fetch('../assets/data/rarityByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.rarityByPokemon = json);
        console.log({ rarityByPokemon: this.rarityByPokemon });
        // console.log(pokemonsByType)
        console.log("loading static data finished")
    }

    static async loadPokemon(nr: number): Promise<PokemonStaticData> {
        console.log(`loading pokemon nr ${nr}...`)
        const response = await fetch(`./pokemons/${nr}.json`)
        const json = await response.json()
        console.log(`loading pokemon ${nr} done`)
        return {
            nr,
            name: json.name,
            types: this.typesByPokemon[nr],
            // speciesUrl: json.species.url
        }
    }
}