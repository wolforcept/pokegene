function start() {
    new Main();
}
var clear;

class Main {

    pokemon: Array<Pokemon> = [];
    manaPanel: ManaPanel;

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
            new SavedData(1, [], {},).saveAll();
            window.location.reload();
        }
    }

    async load(): Promise<SavedData> {
        await StaticData.load();
        return SavedData.load();
    }

    saveAll() {
        new SavedData(
            this.manaPanel.level,
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
        console.log({ pokemon1, pokemon2 })
        if (pokemon1 && pokemon2 && pokemon1.nr === pokemon2.nr && pokemon1.level === pokemon2.level) {
            // pokemon2.remove();
            this.pokemon.splice(this.pokemon.indexOf(pokemon2), 1);
            pokemon2.card.remove();
            pokemon1.level++;
            pokemon1.card.animTempGrow();
            pokemon1.card.updateStars();
        }
    }

    start(loadedData?: SavedData) {

        loadedData.pokemon.forEach((savedPokemon: SavedPokemon) => {
            const newPokemon = new Pokemon(this, savedPokemon.nr, savedPokemon.timer, savedPokemon.level);
            newPokemon.init(savedPokemon);
            this.pokemon.push(newPokemon);
        });

        this.manaPanel = new ManaPanel(this, loadedData);
        this.manaPanel.init();
        this.manaPanel.update();

        console.log("test")
        this.stepperId = setInterval(() => this.step(), 1000);
    }

    explorations = 0
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
        const manas = this.manaPanel.mana;
        const grabs: Array<{ nr: number, str: number }> = [];
        for (let i = 0; i < 20; i++) {
            let nr = this.getRandomPokemon();
            const types = StaticData.typesByPokemon[nr];
            let str = 0;
            types.forEach(type => {
                str += manas[type];
            });
            grabs.push({ nr, str })
        }
        grabs.sort((a, b) => b.str - a.str);
        console.log(grabs);
        const final = grabs[0];
        this.addNewPokemon(final.nr);
        this.manaPanel.level++;
        this.manaPanel.removeAllMana();
    }

    getRandomPokemon(): number {
        let nr = 1 + Math.abs(Math.floor(this.gaussianRandom(this.pokemon.length / 3, 10)));
        while (StaticData.prevolutionsByPokemon[nr] != null)
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