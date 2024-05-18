function start() {
    new Main();
}
var clear, addP, save, explore;

function test(n, isNew) {
    for (let i = 0; i < n; i++)
        console.log(explore(1, ["water"], isNew))
}

interface PokemonShort {
    nr: number, type1: PokeType, type2: PokeType
}

type LockType = 'none' | 'card' | 'ball' | 'hard';

class Main {

    pokemon: Array<Pokemon> = [];
    pokedex: Array<boolean> = [];
    // manaPanel: ManaPanel;
    pathPanel: PathPanel;
    increaseInFindingNewPokemon = 0;
    lockType: LockType = 'none';

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
                                x: 0,
                                y: 0,
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
            SavedData.createNew().saveAll();
            window.location.reload();
        }
        addP = (a: number) => this.addNewPokemon(a, 100, 100)
        save = () => this.saveAll();
        explore = (lvl, types, isnew) => Main.exploreNewPokemon(lvl, types, this.pokemon.map(x => ({ nr: x.nr, type1: x.mainType, type2: x.secondType })), isnew);
    }

    async load(): Promise<SavedData> {
        await StaticData.load();
        return SavedData.load();
    }

    saveAll() {
        new SavedData(
            this.pokemon.map(pokemon => ({
                x: pokemon.card.x,
                y: pokemon.card.y,
                isBall: pokemon.card.isBall,
                level: pokemon.level,
                nr: pokemon.nr,
                timer: pokemon.timer,
                isOpened: pokemon.card.isOpened
            }) as SavedPokemon),
            this.pokedex,
            // this.manaPanel.mana,
            this.pathPanel.completedPaths,
            this.pathPanel.currentPath,
            this.lockType,
            this.increaseInFindingNewPokemon,
        )
            .saveAll();
    }

    async addNewPokemon(nr: number, x: number, y: number): Promise<Pokemon> {
        const pokemon = new Pokemon(this, nr, 0, 1);
        await pokemon.init({
            nr,
            timer: 0,
            level: 1,
            x,
            y,
            isBall: true,
            isOpened: false,
        } as SavedPokemon);
        this.pokedex[nr] = true;
        this.pokemon.push(pokemon);
        return pokemon;
    }

    joinPokemon(pokemon1: Pokemon, id2: string) {
        const pokemon2 = this.pokemon.find(x => x.card.id === id2);
        if (pokemon1 && pokemon2 && pokemon1.nr === pokemon2.nr && pokemon1.level === pokemon2.level && pokemon1.card.isOpened && pokemon2.card.isOpened) {
            if (pokemon1.level === 10) {
                const evNrs = StaticData.evolutionsByPokemon[pokemon1.nr];
                if (evNrs !== null && evNrs.length > 0) {
                    const newNr = Util.randomFromArray(evNrs);
                    console.log("WILL EVOLVE: " + pokemon1.nr + " TO " + newNr);

                    if (newNr > 0) {
                        this.addNewPokemon(newNr, pokemon1.card.x, pokemon1.card.y);
                        this.pokemon.splice(this.pokemon.indexOf(pokemon1), 1);
                        pokemon1.card.remove();
                        this.pokemon.splice(this.pokemon.indexOf(pokemon2), 1);
                        pokemon2.card.remove();
                        return;
                    }
                }
            }
            // pokemon2.remove();
            this.pokemon.splice(this.pokemon.indexOf(pokemon2), 1);
            pokemon2.card.remove();
            pokemon1.level++;
            pokemon1.timer = pokemon1.maxTimer;
            pokemon1.card.animTempGrow();
            pokemon1.card.updateStars();
            pokemon1.card.updateFilled();
        }
    }

    async start(loadedData?: SavedData) {

        this.lockType = loadedData.lockType;
        this.increaseInFindingNewPokemon = loadedData.increaseInFindingNewPokemon;

        let loadTimes = [];
        loadedData.pokemon.forEach((savedPokemon: SavedPokemon) => {
            const newPokemon = new Pokemon(this, savedPokemon.nr, savedPokemon.timer, savedPokemon.level);
            loadTimes.push(newPokemon.init(savedPokemon));
            this.pokemon.push(newPokemon);
        });
        await Promise.all(loadTimes);

        // this.manaPanel = new ManaPanel(this, loadedData);
        // this.manaPanel.init();
        // this.manaPanel.update();

        this.pathPanel = new PathPanel(this, loadedData);
        this.pathPanel.init();
        this.pathPanel.update();

        this.stepperId = setInterval(() => this.step(), 250);

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
    saveCooldown = 0;
    step() {

        this.pokemon.forEach((pokemon) => {
            if (pokemon.card.isOpened)
                pokemon.step();
        });

        this.pathPanel.step();
        this.pathPanel.update();

        if (this.saveCooldown <= 0) {
            this.saveAll();
            this.saveCooldown = 60;
        } else {
            this.saveCooldown--;
        }

    }

    explore(types: Array<PokeType>, pos: JQuery.Coordinates) {

        const currLevel = Math.min(100, this.pathPanel.completedPaths);
        // const manas = this.manaPanel.mana;
        // const orderedManas = PokeTypes.filter(type => manas[type] > 0).map((type: PokeType) => ({ type, mana: manas[type] })).sort((a, b) => (b.mana - a.mana));
        // const orderedManasWithoutNormal = orderedManas.filter(({ type }) => type !== 'normal');
        // const sum = orderedManas.reduce((t, x) => (t + x.mana), 0)
        // const currentPokemonWithType = this.pokemon.filter(x => orderedManas.find(({ type }) => type === x.mainType || type === x.secondType));
        // let currentPokemon: Array<PokemonShort> = currentPokemonWithCurrentMana.map(x => ({ nr: x.nr, type1: x.mainType, type2: x.secondType }));
        // currentPokemon = currentPokemon.filter((x, i) => currentPokemon.findIndex(y => y.nr === x.nr) === i);

        console.log(`WILL TRY TO GET A ${types} POKEMON`);
        const currentPokemon: Array<PokemonShort> = this.pokemon.filter(x => types.includes(x.mainType) || types.includes(x.secondType)).map(x => ({ nr: x.nr, type1: x.mainType, type2: x.secondType }));
        console.log({ currentPokemon });

        // get new pokemon prob stats:
        const max = 0.2;
        const start = 0.3;
        const growth = 100;
        const getNewPokemonProb = .2; //(max - ((max - start) * (growth / (growth + currLevel)))); // from 0.3 at level==0 to 0.25 at level == 100
        // const getNewPokemonProb = 1;

        console.log("new pokemon prob = " + getNewPokemonProb)

        let nr: number = Main.exploreNewPokemon(currLevel, types, currentPokemon, /*can be new?*/Math.random() < getNewPokemonProb);

        if (nr) {
            this.startAddPokemonSequence(nr, pos);
            // this.manaPanel.level++;
            // this.manaPanel.removeAllMana();
        }
    }

    async startAddPokemonSequence(nr: number, posI: JQuery.Coordinates) {
        const pokemon = (await this.addNewPokemon(nr, posI.left, posI.top)).card.div;

        let vx = -4 + 8 * Math.random(), vy = -8 + Math.random() * 2, gravity = 0.6;
        let lifetime = 30 + Math.random() * 10;
        let intervalId: number;
        let intervalFunc = () => {
            const currPos = pokemon.offset();
            lifetime--;

            if (lifetime <= 0) {
                clearInterval(intervalId);
            } else {

                pokemon.css("left", currPos.left + vx);
                pokemon.css("top", currPos.top + vy);

                vy += gravity;
            }

        };
        intervalId = setInterval(intervalFunc, 1000 / 60);

    }

    // exploreCurrentPokemon(pokemon: Array<PokemonShort>, totalMana: number): number {
    //     console.log("exploring current pokemon...")

    //     const manas = this.manaPanel.mana;
    //     const weights = pokemon.map(x => {
    //         const mana1 = manas[x.type1];
    //         const mana2 = manas[x.type2] ?? 0;
    //         return (mana1 + mana2) / totalMana;
    //     })

    //     const num = Math.random();
    //     let s = 0;
    //     const lastIndex = weights.length - 1;

    //     // console.log(weights, pokemon.map(x => x.nr));

    //     for (var i = 0; i < lastIndex; ++i) {
    //         s += weights[i];
    //         if (num < s) {
    //             return pokemon[i].nr;
    //         }
    //     }

    //     return pokemon[lastIndex].nr;
    // }

    static exploreNewPokemon(level: number, types: Array<PokeType>, current: Array<PokemonShort>, canBeNew: boolean): number {
        console.log(`EXPLORING level:${level} types:${types} new:${canBeNew}`);
        const allPossible: Array<number> = [];
        if (!canBeNew)
            current.forEach(currPoke => allPossible.push(currPoke.nr));
        if (canBeNew || allPossible.length === 0)
            types.forEach(type => StaticData.pokemonsByType[type].forEach(nr => allPossible.push(nr)));

        if (allPossible.length === 0) return 0;

        allPossible.sort((a, b) => Number(a) - Number(b));

        for (let i = 0; i < allPossible.length; i++) {
            const nr = allPossible[i];
            const prevEvNr = StaticData.prevolutionsByPokemon[nr];
            if (prevEvNr && !current.find(x => x.nr === nr)) {
                allPossible.splice(i, 1);
                i--;
            }
        }

        let tries = 0;
        let nr = 0;
        while (nr == 0 && tries < 10000) {
            tries++;
            let index = 0;

            let skips = Math.floor(Math.abs(Util.gaussianRandom(level, level / 10)));

            while (skips > 0) {

                const numberDiff = allPossible[index + 1] - allPossible[0];

                skips--;
                const skipProb = this.getSkipProbability(level, skips, numberDiff);

                console.log(`SkipProbability(${level}, ${skips}, ${numberDiff}) = ${skipProb}`)

                if (Math.random() < skipProb)
                    index++;
            }
            nr = allPossible[Math.min(allPossible.length - 1, index)];
        }

        return nr;

        // const minNumber = Quests[this.pathPanel.completedPaths - 1]?.exploreNumber ?? 1;
        // const searchLength = Math.floor(Math.abs(this.gaussianRandom(50, 10)));
        // console.log({ minNumber, searchLength });

        // console.log("exploring new pokemon...")
        // const manas = { ...this.manaPanel.mana };
        // if (level < 100)
        //     manas.normal = (1 - .01 * level) * PokeTypes.map(x => manas[x]).reduce((max, x) => x > max ? x : max, 0);
        // console.log(manas);
        // const grabs: Array<{ nr: number, str: number }> = [];

        // for (let i = 0; i < searchLength; i++) {

        //     const nr = i;
        //     if (StaticData.prevolutionsByPokemon[nr] !== null
        //         || StaticData.prevolutionsByPokemon[nr] > nr
        //         || currentNrs.find(x => x === nr)
        //     ) continue;

        //     const typesOfNewPokemon = StaticData.typesByPokemon[nr];
        //     if (!Util.containsAny(typesOfNewPokemon, types))
        //         continue;

        //     let str = 0;
        //     // types.forEach(type => str += manas[type]);
        //     str += .1 * StaticData.rarityByPokemon[nr];
        //     grabs.push({ nr, str })
        // }
        // grabs.sort((a, b) => b.str - a.str);
        // // console.log(grabs);
        // const final = grabs[Math.min(grabs.length, Math.floor(Math.abs(this.gaussianRandom(0, 3))))];

        // return final.nr;
    }

    static getSkipProbability(level: number, skipsDone: number, diff: number): number {
        return .01 * (5 + level / 5) * (skipsDone > 1 ? skipsDone : 1) / (diff > 1 ? diff : 1);
    }

    getRandomPokemon(): number {
        let level = this.pathPanel.completedPaths;
        let nr = 1 + Math.abs(Math.floor(Util.gaussianRandom(level / 5, 10 + level / 10)));
        while (StaticData.prevolutionsByPokemon[nr] != null || StaticData.prevolutionsByPokemon[nr] > nr)
            nr--;
        return nr;
        // console.log(nr);
    }

    downloadFile(name: string, data: any) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        let a = $(`<a style="color:white;" download="${name}" href="${dataStr}">${name}</a>`)
        $('body').append(a);
    }
}
