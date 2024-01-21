interface PokemonStaticData {
    nr: number;
    name: string;
    types: PokeType[];
}

class StaticData {

    static typesByPokemon: Array<Array<PokeType>>;
    static pokemonsByType: any;
    static evolutionsByPokemon: any;
    static prevolutionsByPokemon: Array<number | null>;

    static async load() {
        console.log("loading static data...")
        console.log("loading types...")
        await fetch('../assets/data/typesByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.typesByPokemon = json);
        // console.log(typesByPokemon)
        await fetch('../assets/data/pokemonsByType.json')
            .then((response) => response.json())
            .then((json) => this.pokemonsByType = json);
        await fetch('../assets/data/evolutionsByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.evolutionsByPokemon = json);
        await fetch('../assets/data/prevolutionsByPokemon.json')
            .then((response) => response.json())
            .then((json) => this.prevolutionsByPokemon = json);
        console.log({ prevolutionsByPokemon: this.prevolutionsByPokemon });
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