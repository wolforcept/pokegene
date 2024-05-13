var lastDivGrabbed: JQuery<HTMLElement>;

class PokeCard {
    // open() {
    //     // this.isOpened = true;
    //     this.div.addClass("anim_openPokeball");
    //     setTimeout(() => {
    //         this.div.removeClass("anim_openPokeball");
    //         // this.div.removeClass("closed")
    //     }, 750)
    // }

    div: JQuery<HTMLElement>;
    private progressDiv: JQuery<HTMLElement>;
    private stars: JQuery<HTMLElement>;
    pokeballImage: JQuery<HTMLElement>;
    id = (Math.random() + 1).toString(36).substring(7) + (Math.random() + 1).toString(36).substring(7);
    x: number;
    y: number;
    isBall: boolean;
    isOpened: boolean;
    enteringIntervalId = null;

    lastClick = 0;
    wasDragged = false;
    // lastPos: JQuery.Coordinates;

    constructor(
        private pokemon: Pokemon,
        private onClick: () => void,
        private onDrop: (idHeld: string, idDropped: string) => void,
        savedData: SavedPokemon
    ) {
        if (savedData) {
            this.x = savedData.x;
            this.y = savedData.y;
            this.isBall = savedData.isBall;
            this.isOpened = savedData.isOpened ?? false;
        }
        this.init();
    }

    init() {
        const pokemon = this.pokemon;
        this.div = $(`<div class="pokemon ${pokemon.mainType === 'ghost' || pokemon.secondType === 'ghost' ? "ghost" : ""} ${this.isOpened ? "" : "closed"} ${this.isBall ? "" : "showExtraInfo"}"></div>`);
        const div = this.div;

        // div.css('background-color', "#" + Colors[pokemon.mainType][0]);
        div.attr('id', this.id);

        // pokemon image
        const pokemonImage = $(`<div class="pokemonImage"><img class="image" src="assets/pokemons/${pokemon.nr}.png" title="${pokemon.starsString} ${pokemon.name}"></div>`)

        // stars
        this.stars = $(`<div class="stars"></div>`);
        this.updateStars();

        // progress bar
        this.progressDiv = $(`<div class="progress"></div>`);

        // main image and colors
        const imageAndColorsDiv = $(`<div class="imageAndColors"></div>`);
        imageAndColorsDiv.append(pokemonImage);
        const color = Colors[this.pokemon.mainType];
        const color2 = Colors[this.pokemon.types[1] ?? this.pokemon.mainType];
        const gradient = `linear-gradient(-45deg, #${color2[0]} 49.9%, #${color[0]} 50%), linear-gradient(-45deg, #${color2[0]} 49.9%, #${color[0]} 50%)`;
        imageAndColorsDiv.css('background', gradient);

        // extra info
        const name = $(`<div class="pokemonName name">${pokemon.name}</div>`);
        const number = $(`<div class="number">#${pokemon.nr}</div>`);
        const typesDiv = $(`<div class="typesDiv"></div>`);
        const typeDivs = pokemon.types.map(type => this.makeTypeDiv(type));
        typeDivs.forEach(t => typesDiv.append(t));

        const topDiv = $(`<div class="topDiv"></div>`);
        topDiv.append(number);
        topDiv.append(name);
        div.append(topDiv);

        const extraInfo = $(`<div class="extraInfo"></div>`);
        extraInfo.append(topDiv);
        extraInfo.append(typesDiv);

        if (!this.isOpened)
            this.pokeballImage = $(`<img class="pokeballImage" src="assets/items/pokeball.png"></div>`)

        div.append(this.stars);
        div.append(imageAndColorsDiv);
        div.append(this.progressDiv);
        div.append(extraInfo);
        div.append(this.pokeballImage);
        this.addToBody();
    }

    animTempGrow() {
        this.stars.addClass('anim_tempGrow');
        setTimeout(() => this.stars.removeClass('anim_tempGrow'), 1000);
    }

    updateStars() {
        this.stars.empty();
        levelStars[this.pokemon.level].forEach((star) => {
            const starImg = $(`<img src="assets/ui/star_${star} copy.svg">`);
            this.stars.append(starImg)
        })
    }

    _onMouseDown() {
        lastDivGrabbed?.css('z-index', '10');
        this.div.css('z-index', '100');
        lastDivGrabbed = this.div;
        this.wasDragged = false;
    }

    _onMouseUp() {

        if (this.wasDragged) return;

        if (!this.isOpened) {
            // this.div.find(".pokemonImage").addClass("anim_becomingVisible");
            // this.div.find(".pokeballImage").addClass("anim_pokeballOpening");
            setTimeout(() => {
                this.div.removeClass("closed");
                //     this.div.find(".pokemonImage").removeClass("anim_becomingVisible");
                //     this.div.find(".pokeballImage").removeClass("anim_pokeballOpening");
                // // this.toggleBall();
            }, 300);
            Smoke.make(this.div.offset());
            this.isOpened = true;
            return;
        }

        const now = Date.now();
        if (now - this.lastClick < 200) {
            this.toggleExtraInfo();
            this.lastClick = 0;
        }
        else {
            this.lastClick = now;
            this.onClick();
        }
    }

    _onDrag(event: JQueryUI.DraggableEventUIParams) {
        this.x = event.position.left;
        this.y = event.position.top;
        this.wasDragged = true;
    }

    _onDrop(ev1: any, ev2) {
        const id2 = ev2.draggable.attr("id");
        this.onDrop(this.id, id2);
    }

    makeTypeDiv(type: PokeType): JQuery<HTMLElement> {
        const name = $(`<div class="name">${type}</div>`)
        const image = $(`<img class="typeImage" src="assets/types/${type}.png" title="${type}" class="typeImage">`);

        const div = $(`<div class="type"></div>`);
        div.append(image);
        div.append(name);
        return div;
    }

    toggleExtraInfo() {
        if (!this.div.hasClass('showExtraInfo')) {
            this.div.addClass('showExtraInfo');
            this.isBall = false;
        } else {
            this.div.removeClass('showExtraInfo');
            this.isBall = true;
        }
        this.updateFilled();
    }

    throwInPokeball() {
        let dx = 500;
        this.div.css('left', dx);
        this.div.css('top', dx);
        this.enteringIntervalId = setInterval(() => {
            if (dx > 50) {
                dx *= .975;
                this.div.css('left', 200 - dx);
                this.div.css('top', 200 - dx);
            } else {
                clearInterval(this.enteringIntervalId);
                this.enteringIntervalId = null;
            }
        }, 1000 / 60)
    }

    isDraggable() {
        return !this.enteringIntervalId &&
            (
                (this.isBall && (this.pokemon.main.lockType != 'ball' && this.pokemon.main.lockType != 'hard'))
                || (!this.isBall && (this.pokemon.main.lockType != 'card' && this.pokemon.main.lockType != 'hard'))
            )
            ;
    }

    addToBody() {
        $("body").append(this.div)
        this.div.css('left', this.x)
        this.div.css('top', this.y)
        this.div.draggable({ drag: ({ }, event) => { this._onDrag(event); return this.isDraggable(); } });
        this.div.droppable({ drop: (event1, event2) => this._onDrop(event1, event2) });
        // this.div.on('click', () => this.onClick());
        this.div.on('mousedown', () => this._onMouseDown());
        this.div.on('mouseup', () => this._onMouseUp());
        // this.div.on('mouseleave', () => this._onMouseLeave());
        this.updateFilled();
    }

    remove() {
        this.div.remove();
    }

    updateFilled() {
        const n = 100 * this.pokemon.timer / this.pokemon.maxTimer;
        this.progressDiv.css('background', `conic-gradient(white ${n}%, rgb(55, 55, 61) 0)`);
    }

    createManaGainAnimation(type: PokeType) {
        const anim = $(`<img class="mana" src="./assets/types/${type}.png">`);
        const pos = this.div.offset();
        anim.css({ top: pos.top + 50, left: pos.left + 50 });

        let intervalId: number, lifetime = 100, vx = -.5 + Math.random(), vy = -.5 + Math.random();
        intervalId = setInterval(() => {
            if (lifetime <= 0) {
                clearInterval(intervalId);
                anim.remove();
            } else {
                lifetime--;
                anim.css({ top: pos.top + 50 + vx * (100 - lifetime), left: pos.left + 50 + vy * (100 - lifetime) });
            }
        }, 1000 / 60);

        $(`body`).append(anim);

    }
}
