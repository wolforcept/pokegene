interface PossiblePath {
    name: string;
    parts: Array<{ amount: number, type: PokeType }>;
}

interface Wild {
    types: Array<PokeType>;
    maxValue: number;
    value: number;
    div?: JQuery<HTMLElement>;
    isUnknown: boolean;
}

interface Path {
    region: string;
    name: string;
    wilds: Array<Wild>;
}

interface Add {
    type: PokeType;
    amount?: number;
}

interface Affix {
    name: string;
    adds: Array<Add>;
    final?: boolean;
    isPrefix?: boolean;
    minLevel: number;
    maxLevel: number;
}

interface Replaceable {
    replace: string;
    arr: Array<Affix>;
}

class PathPanel {

    public currentPath: Path;
    public completedPaths: number;
    private possiblePaths: Array<PossiblePath>;

    private title: JQuery<HTMLElement>;
    private currentPathDiv: JQuery<HTMLElement>;
    private possiblePathsDiv: JQuery<HTMLElement>;
    private knownTypes: { [key in PokeType]?: boolean } = {};

    get nextAmount() { return Math.floor((4 + Math.pow(this.completedPaths / 2, 1.1)) / 2); }

    constructor(
        private main: Main,
        loadedData?: SavedData
    ) {
        if (loadedData) {
            this.completedPaths = loadedData.completedPaths;
            this.currentPath = loadedData.currentPath;
        }

    }

    init() {

        this.title = $('<div id="title"></div>');
        const top = $('<div id="top"></div>');
        top.append(this.title);

        this.currentPathDiv = $('<div id="path"></div>');

        // const leftButton = $('<div id="leftButton"></div>');
        // leftButton.append(leftButtonImage);
        // leftButton.on('click', leftButtonClick);

        // const rightButton = $('<div id="rightButton"></div>');
        // this.percents = $('<div id="percents"></div>');
        // const percentsWrapper = $('<div id="percents_wrapper"></div>');
        // percentsWrapper.append(this.percents);

        // const bottom = $('<div id="manaBar_bottom"></div>');
        // bottom.append(leftButton, percentsWrapper, rightButton);

        // this.div = $('<div id="manaBar"></div>');
        // this.div.append(top, bottom);

        const wrapper = $('<div id="path_panel"></div>');
        wrapper.append(top, this.currentPathDiv);
        $('body').append(wrapper);

        this.step();
        this.update();

        // this.createManaDisplay();
        // TODO this.div.on('click', ()=>this.main.manaCli);
    }

    step() {

        this.main.pokemon.forEach(pokemon => pokemon.types.forEach(x => {
            if (!this.knownTypes[x])
                this.knownTypes[x] = true;
        }));

        if ((!this.currentPath || !this.currentPath.wilds.find(x => x.value < x.maxValue)) && !this.possiblePaths) {
            this.makePossiblePaths();
            this.main.saveAll();
        }
        if (this.possiblePaths && !this.possiblePathsDiv) {
            this.makePossiblePathsDiv();
        }
    }

    update() {

        if (!this.currentPath) return;
        this.title.html(`${this.completedPaths} - ${this.currentPath.name}`);
        // this.title.html(`${this.currentPath.region} - ${this.completedPaths} - ${this.currentPath.name}`);

        this.currentPath.wilds.forEach(wild => {

            if (!wild.div && wild.value < wild.maxValue) {
                const div = $(`<div class="wild"><img class="pokeball" src="../assets/items/pokeball.png"></div>`);
                const progress = $(`<div class="progress"></div>`);
                const progressWrapper = $(`<div class="progress_wrapper"></div>`);
                progressWrapper.append(progress);
                const typeImages = $(`<div class="type_images"></div>`);
                if (wild.isUnknown)
                    typeImages.append($(`<img src="./assets/types/any.png" title="unknown type" height="32px">`));
                else
                    wild.types.forEach(type => {
                        const typeImg = $(`<img src="./assets/types/${type}.png" title="${type}" height="32px">`);
                        typeImages.append(typeImg);
                    })
                div.append(typeImages);
                div.append(progressWrapper);
                div.appendTo(this.currentPathDiv);
                wild.div = div;
            }

            let background = `repeating-linear-gradient(45deg, `;
            let backgroundX = 1;
            wild.types.forEach(type => {
                const color = wild.isUnknown ? ColorsAny[0] : Colors[type][0];
                background += `#${color} ${(backgroundX - 1) * 10}px, #${color} ${backgroundX * 10}px,`;
                backgroundX++;
            });
            if (wild.types.length === 1) {
                const type = wild.types[0];
                const color = wild.isUnknown ? ColorsAny[1] : Colors[type][1];
                background += `#${color} ${(backgroundX - 1) * 10}px, #${color} ${backgroundX * 10}px,`;
                backgroundX++;
            }

            if (wild.value < wild.maxValue) {
                const progressDiv = wild.div.find(".progress");
                progressDiv.css("background", background.substring(0, background.length - 1) + ")");
                progressDiv.css("width", (100 * wild.value / wild.maxValue) + "%");
            }

        })

    }

    addToPossiblePath(path: PossiblePath, { type, amount }: Add) {

        const found = path.parts.filter(x => x.type === type);
        if (found.length > 0) {
            found[0].amount += amount ?? 1;
        } else {
            path.parts.push({ type, amount: amount ?? 1 });
        }
    }

    recalculatePartsOfPath(path: PossiblePath) {

        if (path.parts.length > 3) {
            path.parts.sort((a, b) => b.amount - a.amount);
            console.log("HAD TO SORT PARTS: " + JSON.stringify(path.parts));
            path.parts = [path.parts[0], path.parts[1], path.parts[2]];
        }

        let sum = 0;
        path.parts.forEach(({ amount }) => {
            sum += amount;
        })
        path.parts.forEach((part) => {
            part.amount = Math.round(100 * part.amount / sum);
        });

        let finalSum = 0;
        path.parts.forEach(({ amount }) => {
            finalSum += amount;
        });
        if (finalSum < 100) {
            path.parts[0].amount += 1;
        }
    }

    makePossiblePath(): PossiblePath {
        const path: PossiblePath = { name: "", parts: [] };

        const possiblePrefixes = pathPrefixes.filter(x => this.completedPaths >= x.minLevel);

        console.log("---- making possible path ----")
        let i = 0;
        let attempts = 0;
        do {
            attempts++;

            const affix = Util.randomFromArray(possiblePrefixes);
            if (!affix) continue;
            path.name = affix.name;
            affix.adds.forEach(add => this.addToPossiblePath(path, add));
            console.log(` > start with ${affix.name} → ${JSON.stringify(affix.adds.map(x => x.type + "(" + (x.amount ? x.amount : 1) + ")"))}`)

            while (path.name.includes("{")) {
                i++;
                if (i > 10000) {
                    return { name: "error", parts: [{ type: "normal", amount: 1 }] };
                }

                for (let i = 0; i < replaceables.length; i++) {
                    const replaceable = replaceables[i];
                    if (path.name.includes(replaceable.replace)) {
                        i = replaceables.length;
                        const newAffix = Util.randomFromArray(replaceable.arr.filter(x => this.completedPaths >= x.minLevel));
                        path.name = path.name.replace(replaceable.replace, newAffix.name);
                        newAffix.adds.forEach(add => this.addToPossiblePath(path, add));
                        console.log(` > adding ${newAffix.name} → ${JSON.stringify(newAffix.adds.map(x => x.type + "(" + (x.amount ? x.amount : 1) + ")"))}`)
                    }
                }
            }

        } while (path.parts.length == 0 && attempts < 1000)

        if (!path.name) path.name = "Untravelled Path";
        if (path.parts.length === 0) path.parts = [{ amount: 1, type: "normal" }];

        this.recalculatePartsOfPath(path);
        return path;
    }

    makePossiblePaths() {
        this.possiblePaths = [];

        for (let i = 0; i < 3; i++) {
            const path = this.makePossiblePath();
            this.possiblePaths.push(path);
        }
    }

    makePossiblePathsDiv() {
        this.possiblePathsDiv = $(`<div id="possible_paths_panel"></div>`);
        this.possiblePaths.forEach(pp => {
            const path = $(`<div class="possible_path"><span class="name">${pp.name}</span></div>`);
            const partsDiv = $(`<div class="parts"></div>`);
            pp.parts.forEach(type => {
                const percent = $(`<div class="percent"><span>${type.amount}%</span></div>`);
                const typeImg = $(`<img src="./assets/types/${type.type}.png" title="${type.type}" height="32px">`);
                percent.append(typeImg);
                partsDiv.append(percent)
            })
            path.append(partsDiv);
            path.on("click", () => this.choosePath(pp))
            this.possiblePathsDiv.append(path);
        })
        $('#path_panel').append(this.possiblePathsDiv);
    }

    choosePath(pp: PossiblePath) {
        this.completedPaths++;
        this.possiblePaths = undefined;
        this.possiblePathsDiv.remove();
        this.possiblePathsDiv = undefined;
        this.currentPath = {
            region: "Kanto",
            name: pp.name,
            wilds: []
        };

        const nWilds = 7 + Math.floor(Math.random() * 5);
        const types = [];
        pp.parts.forEach(part => {
            const nOfType = part.amount / 100 * nWilds;
            for (let i = 0; i < nOfType; i++) {
                console.log(this.knownTypes);
                this.addWild([part.type], this.knownTypes[part.type] ? false : true);
            }
        });
        Util.shuffle(this.currentPath.wilds);

        this.update();
    }

    addWild(types: Array<PokeType>, isUnknown: boolean) {
        console.log(types + " is " + isUnknown)
        const wild: Wild = { types, maxValue: 20 + this.nextAmount, value: 0, isUnknown };
        this.currentPath.wilds.push(wild);
    }

    addProgress(type: PokeType) {
        if (!this.currentPath) return;

        for (let i = 0; i < 3; i++) {

            const wild: Wild | undefined = this.findUncompleteWildWithTypeOrAnyOrUnknown(type);
            if (wild) {
                if (wild.value < wild.maxValue)
                    wild.value++;
                if (wild.value >= wild.maxValue) {
                    const pos = wild.div.find(".pokeball").offset();
                    wild.div.remove();
                    this.main.explore(wild.types, pos);
                }
                return;
            }
        }
    }

    findUncompleteWildWithTypeOrAnyOrUnknown(type: PokeType) {
        let i = 0;
        return this.currentPath.wilds.find(x => {
            if (x.value < x.maxValue) i++;
            if (i > 3) return;
            if (x.value >= x.maxValue) return false;
            if (x.isUnknown) return true;
            if (x.types.includes(type)) return true;
            // if (x.types.find(x => !this.knownTypes[x])) return true;
            return false;
        });
    }

}
