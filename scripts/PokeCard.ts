var lastDivGrabbed: JQuery<HTMLElement>;

const levelStars = [
    [],
    [], // level 1 <- starting level
    ["bronze"],
    ["bronze", "bronze"],
    ["bronze", "bronze", "bronze"],
    ["silver"],
    ["silver", "silver"],
    ["silver", "silver", "silver"],
    ["gold"],
    ["gold", "gold"],
    ["gold", "gold", "gold"],
]

class PokeCard {
    // open() {
    //     // this.isOpened = true;
    //     this.div.addClass("anim_openPokeball");
    //     setTimeout(() => {
    //         this.div.removeClass("anim_openPokeball");
    //         // this.div.removeClass("closed")
    //     }, 750)
    // }

    private div: JQuery<HTMLElement>;
    private stars: JQuery<HTMLElement>;
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
        private onHoldClick: () => void,
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
        this.div = $(`<div class="pokemon ${this.isOpened ? "" : "closed"} ${this.isBall ? "ball" : ""}"></div>`);
        const div = this.div;

        div.css('background-color', "#" + Colors[pokemon.mainType][0]);
        div.attr('id', this.id);

        // name
        const name = $(`<div class="pokemonName name">${pokemon.name}</div>`);

        // number
        const number = $(`<div class="number">#${pokemon.nr}</div>`);

        // types
        const typeDivs = pokemon.types.map(type => this.makeTypeDiv(type));
        const typesDiv = $(`<div class="typesDiv"></div>`);
        typeDivs.forEach(t => typesDiv.append(t));

        // pokemon image
        const pokemonImage = $(`<div class="pokemonImage"><img class="image" src="assets/pokemons/${pokemon.nr}.png"></div>`)
        this.stars = $(`<div class="stars"></div>`);
        pokemonImage.append(this.stars);
        this.updateStars();

        // pokeball image
        const pokeballImage = $(`<img class="pokeballImage" src="assets/items/pokeball.png">`)
        div.append(pokeballImage);

        const topDiv = $(`<div class="topDiv"></div>`);
        topDiv.append(name);
        topDiv.append(number);
        div.append(topDiv);

        const botDiv = $(`<div class="botDiv"></div>`);
        botDiv.append(typesDiv);
        botDiv.append(pokemonImage);
        div.append(botDiv);
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
            this.div.find(".pokemonImage").addClass("anim_becomingVisible");
            this.div.find(".pokeballImage").addClass("anim_pokeballOpening");
            setTimeout(() => {
                this.div.removeClass("closed");
                this.div.find(".pokemonImage").removeClass("anim_becomingVisible");
                this.div.find(".pokeballImage").removeClass("anim_pokeballOpening");
                this.toggleBall();
            }, 1000);
            this.isOpened = true;
            return;
        }

        const now = Date.now();
        if (now - this.lastClick < 200) {
            this.toggleBall();
            this.lastClick = 0;
        }
        else
            this.lastClick = now;
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
        const image = $(`<img class="typeImage" src="assets/types/${type}.png" class="typeImage">`);

        const div = $(`<div class="type"></div>`);
        div.append(name);
        div.append(image);
        return div;
    }

    toggleBall() {
        if (!this.div.hasClass('ball')) {
            // this.div.removeClass('card');
            this.div.addClass('ball');
            this.div.addClass('anim_cardClosing')
            setTimeout(() => this.div.removeClass('anim_cardClosing'), 1000);
            this.isBall = true;
        } else {
            this.div.removeClass('ball');
            // this.div.addClass('card');
            // this.div.addClass('anim_cardOpening')
            // setTimeout(() => this.div.removeClass('anim_cardOpening'), 1000);
            this.isBall = false;
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

    addToBody() {
        $("body").append(this.div)
        if (!this.x && !this.y) {
            if (!this.isOpened) {
                this.throwInPokeball();
            } else {
                this.div.css('left', 0)
                this.div.css('top', 0)
            }
        } else {
            this.div.css('left', this.x)
            this.div.css('top', this.y)
        }
        this.div.css('position', 'absolute')
        this.div.draggable({ drag: ({ }, event) => { this._onDrag(event); return !this.enteringIntervalId; } });
        this.div.droppable({ drop: (event1, event2) => this._onDrop(event1, event2) });
        this.div.click(() => this.onClick());
        this.div.on('mousedown', () => this._onMouseDown());
        this.div.on('mouseup', () => this._onMouseUp());
        // this.div.on('mouseleave', () => this._onMouseLeave());
        // if (this.isBall)
        //     this.toggleBall();
        this.updateFilled();
    }

    remove() {
        this.div.remove();
    }

    updateFilled() {
        const color = Colors[this.pokemon.mainType];
        const color2 = Colors[this.pokemon.types[1] ?? this.pokemon.mainType];
        const n = 100 * this.pokemon.timer / this.pokemon.maxTimer;

        if (this.div.hasClass('ball')) {

            const gradient1 = `radial-gradient(closest-side, #${color[0]} 89%, transparent 90% 100%), conic-gradient(white ${n}%, #${color[0]} 0)`;
            const gradient2 = `linear-gradient(-45deg, #${color2[0]} 49.9%, #${color[0]} 50%)`;
            const gradient3 = `radial-gradient(closest-side, #${color[0]} 89%, transparent 90% 100%), conic-gradient(white ${n}%, #${color[0]} 0), linear-gradient(-45deg, #${color2[0]} 49.9%, #${color[0]} 50%)`;
            this.div.css('background', gradient3);

        } else {

            // const gradient = `#${color[0]}`;
            const gradient = `linear-gradient(-45deg, #${color2[0]} 49.9%, #${color[0]} 50%), linear-gradient(-45deg, #${color2[0]} 49.9%, #${color[0]} 50%)`;
            this.div.css('background', gradient);
            this.div.find('.pokemonName').css('background', `linear-gradient(180deg,  #${color[0]} 85%, transparent 86%), 
                                                     linear-gradient(90deg, white ${n}%, rgb(0,0,0,0.2) ${n + 1}%)`
            );
        }

        // card.css("background", `radial-gradient(closest-side, #${color} 79%, transparent 80% 100%), conic-gradient(white ${n}%, transparent 0)`)
    }

    createManaGainAnimation(type: PokeType) {
        const anim = $(`<img class="anim_manaGain" src="./assets/types/${type}.png">`);
        const pos = this.div.position();
        anim.css({ top: pos.top + 32, left: pos.left + 32 });
        $(`body`).append(anim);
        setTimeout(() => {
            anim.remove();
        }, 1000);

    }
}
