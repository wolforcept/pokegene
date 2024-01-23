function start() {
    new Main();
}
var clear, addP, explore;

interface PokemonShort {
    nr: number, type1: PokeType, type2: PokeType
}

class Main {

    pokemon: Array<Pokemon> = [];
    manaPanel: ManaPanel;
    increaseInFindingNewPokemon = 0;
    questsDone: number;

    stepperId: number;

    constructor() {
        this.load()
            .then((loadedData: SavedData) => {

                // const prevolutions = [];
                // StaticData.evolutionsByPokemon.forEach((element, nr) => {
                //     if (element && element.length > 0) {
                //         element.forEach((x) => {
                //             prevolutions[x] = nr;
                //         })
                //     }
                // });
                // console.log(prevolutions);

                // this.downloadFile("prevolutionsByPokemon.json", prevolutions);

                if (loadedData.pokemon.length === 0) {
                    new StarterSelect()
                        .show(async nr => {
                            loadedData.pokemon.push({
                                nr,
                                timer: 0,
                                level: 1,
                                x: null,
                                y: null,
                                isBall: true,
                                isOpened: false
                            })
                            this.start(loadedData);
                        });
                } else {
                    this.start(loadedData)
                }
            });
        clear = () => {
            new SavedData(1, 0, [], {},).saveAll();
            window.location.reload();
        }
        addP = (a: number) => this.addNewPokemon(a)
        explore = () => this.explore();
    }

    async load(): Promise<SavedData> {
        await StaticData.load();
        return SavedData.load();
    }

    saveAll() {
        new SavedData(
            this.manaPanel.level,
            this.questsDone,
            this.pokemon.map(pokemon => ({
                x: pokemon.card.x,
                y: pokemon.card.y,
                isBall: pokemon.card.isBall,
                level: pokemon.level,
                nr: pokemon.nr,
                timer: pokemon.timer,
                isOpened: pokemon.card.isOpened
            }) as SavedPokemon),
            this.manaPanel.mana,
        )
            .saveAll();
    }

    async addNewPokemon(nr: number) {
        const pokemon = new Pokemon(this, nr, 0, 1);
        await pokemon.init({
            nr,
            timer: 0,
            level: 1,
            x: null,
            y: null,
            isBall: true,
            isOpened: false,
        } as SavedPokemon);
        this.pokemon.push(pokemon);
    }

    joinPokemon(pokemon1: Pokemon, id2: string) {
        const pokemon2 = this.pokemon.find(x => x.card.id === id2);
        if (pokemon1 && pokemon2 && pokemon1.nr === pokemon2.nr && pokemon1.level === pokemon2.level && pokemon1.card.isOpened && pokemon2.card.isOpened) {
            // pokemon2.remove();
            this.pokemon.splice(this.pokemon.indexOf(pokemon2), 1);
            pokemon2.card.remove();
            pokemon1.level++;
            pokemon1.timer = 0;
            pokemon1.card.animTempGrow();
            pokemon1.card.updateStars();
            pokemon1.card.updateFilled();
        }
    }

    async start(loadedData?: SavedData) {

        let loadTimes = [];
        loadedData.pokemon.forEach((savedPokemon: SavedPokemon) => {
            const newPokemon = new Pokemon(this, savedPokemon.nr, savedPokemon.timer, savedPokemon.level);
            loadTimes.push(newPokemon.init(savedPokemon));
            this.pokemon.push(newPokemon);
        });
        await Promise.all(loadTimes);

        this.manaPanel = new ManaPanel(this, loadedData);
        this.manaPanel.init();
        this.manaPanel.update();

        this.stepperId = setInterval(() => this.step(), 1000);

        // explore();

        // const rarities = {};
        // for (let i = 1; i < 1010; i++) {

        //     const encounters = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/encounters/`)).json();
        //     let sum = 0;
        //     let nr = 0;
        //     encounters.forEach(({ version_details }) => {
        //         nr++;
        //         const subSum = version_details.reduce((sum, { max_chance }) => sum += max_chance === 100 ? 0 : max_chance, 0);
        //         sum += subSum / version_details.length;
        //     });

        //     rarities[i] = sum / nr;
        //     // console.log(sum / nr);
        // }
        // // console.log(rarities);
        // this.downloadFile("rarityByPokemon.json", rarities);
    }

    // explorations = 0
    step() {
        this.pokemon.forEach((pokemon) => {
            if (pokemon.card.isOpened)
                pokemon.step();
        });
        this.manaPanel.update();
        this.saveAll();
        // if (this.explorations === 0) {
        //     this.explore();
        //     this.explorations++;
        // }
        // console.log(this.manaPanel.mana);
    }

    explore() {

        const currLevel = this.manaPanel.level;
        const manas = this.manaPanel.mana;
        const orderedManas = PokeTypes.filter(type => manas[type] > 0).map((type: PokeType) => ({ type, mana: manas[type] })).sort((a, b) => (b.mana - a.mana));
        // const orderedManasWithoutNormal = orderedManas.filter(({ type }) => type !== 'normal');
        const sum = orderedManas.reduce((t, x) => (t + x.mana), 0)
        const currentPokemonWithCurrentMana = this.pokemon.filter(x => orderedManas.find(({ type }) => type === x.mainType || type === x.secondType));
        let currentPokemon: Array<PokemonShort> = currentPokemonWithCurrentMana.map(x => ({ nr: x.nr, type1: x.mainType, type2: x.secondType }));
        currentPokemon = currentPokemon.filter((x, i) => currentPokemon.findIndex(y => y.nr === x.nr) === i);
        // console.log({ currentPokemon });

        // get new pokemon prob stats:
        const max = 0.1;
        const start = 0.3;
        const growth = 100;
        const getNewPokemonProb = (max - ((max - start) * (growth / (growth + currLevel))));

        console.log("new pokemon prob = " + getNewPokemonProb)

        let nr: number;
        if (currentPokemon.length > 0 && Math.random() > getNewPokemonProb) {
            nr = this.exploreCurrentPokemon(currentPokemon, sum);
            // this.increaseInFindingNewPokemon++;
        } else {
            nr = this.exploreNewPokemon(currentPokemon.map(x => x.nr), orderedManas);
            // this.increaseInFindingNewPokemon = 0;
        }

        if (nr) {
            this.addNewPokemon(nr);
            this.manaPanel.level++;
            this.manaPanel.removeAllMana();
        }
    }

    exploreCurrentPokemon(pokemon: Array<PokemonShort>, totalMana: number): number {
        console.log("exploring current pokemon...")

        const manas = this.manaPanel.mana;
        const weights = pokemon.map(x => {
            const mana1 = manas[x.type1];
            const mana2 = manas[x.type2] ?? 0;
            return (mana1 + mana2) / totalMana;
        })

        const num = Math.random();
        let s = 0;
        const lastIndex = weights.length - 1;

        // console.log(weights, pokemon.map(x => x.nr));

        for (var i = 0; i < lastIndex; ++i) {
            s += weights[i];
            if (num < s) {
                return pokemon[i].nr;
            }
        }

        return pokemon[lastIndex].nr;
    }

    exploreNewPokemon(currentNrs: Array<number>, manas2: Array<{ type: PokeType, mana: number }>): number {

        const level = this.manaPanel.level;
        const minNumber = Quests[this.questsDone - 1]?.exploreNumber ?? 1;
        // const searchLength = Math.floor(Math.abs(this.gaussianRandom(50, 10)));
        const searchLength = Math.floor(Math.abs(this.gaussianRandom(50, 10 + level / 4)));
        // console.log({ minNumber, searchLength });

        // console.log("exploring new pokemon...")
        const manas = { ...this.manaPanel.mana };
        if (level < 100)
            manas.normal = (1 - .01 * level) * PokeTypes.map(x => manas[x]).reduce((max, x) => x > max ? x : max, 0);
        // console.log(manas);
        const grabs: Array<{ nr: number, str: number }> = [];

        for (let i = 0; i < searchLength; i++) {

            const nr = minNumber + i;
            if (
                nr < minNumber
                || StaticData.prevolutionsByPokemon[nr] !== null
                || StaticData.prevolutionsByPokemon[nr] > nr
                || currentNrs.find(x => x === nr)
            ) continue;

            const types = StaticData.typesByPokemon[nr];
            let str = 0;
            types.forEach(type => str += manas[type]);
            grabs.push({ nr, str })
        }
        grabs.sort((a, b) => b.str - a.str);
        // console.log(grabs);
        const final = grabs[Math.min(grabs.length, Math.floor(Math.abs(this.gaussianRandom(0, 3))))];

        return final.nr;
    }

    getRandomPokemon(): number {
        let nr = 1 + Math.abs(Math.floor(this.gaussianRandom(this.manaPanel.level / 5, 10 + this.manaPanel.level / 10)));
        while (StaticData.prevolutionsByPokemon[nr] != null || StaticData.prevolutionsByPokemon[nr] > nr)
            nr--;
        return nr;
        // console.log(nr);
    }

    gaussianRandom(mean = 0, stdev = 1) {
        const u = 1 - Math.random(); // Converting [0,1) to (0,1]
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        // Transform to the desired mean and standard deviation:
        return z * stdev + mean;
    }

    downloadFile(name: string, data: any) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        let a = $(`<a style="color:white;" download="${name}" href="${dataStr}">${name}</a>`)
        $('body').append(a);
    }
}