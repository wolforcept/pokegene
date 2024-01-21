var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Colors = {
    'normal': ['d5d5d5', '000000BB'],
    'grass': ['5fdb83', '000000BB'],
    'poison': ['c276cd', '000000BB'],
    'fire': ['ff7100', '000000BB'],
    'flying': ['5b73db', '000000BB'],
    'water': ['60ecff', '000000BB'],
    'bug': ['d1ff00', '000000BB'],
    'electric': ['ffe600', '000000BB'],
    'ground': ['c77e64', '000000BB'],
    'fairy': ['ffa0df', '000000BB'],
    'fighting': ['ff175c', '000000BB'],
    'psychic': ['ff2424', '000000BB'],
    'rock': ['c1aa46', '000000BB'],
    'steel': ['bfdbda', '000000BB'],
    'ice': ['91fff8', '000000BB'],
    'ghost': ['aa6fbbb8', 'FFFFFF'],
    'dragon': ['009aff', '000000BB'],
    'dark': ['161520', 'FFFFFFBB'],
};
var PokeTypes = Object.keys(Colors);
function start() {
    new Main();
}
var clear;
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.pokemon = [];
        this.load()
            .then(function (loadedData) {
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
                    .show(function (nr) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        loadedData.pokemon.push({
                            nr: nr,
                            timer: 0,
                            level: 1,
                            x: null,
                            y: null,
                            isBall: true,
                            isOpened: false
                        });
                        this.start(loadedData);
                        return [2 /*return*/];
                    });
                }); });
            }
            else {
                _this.start(loadedData);
            }
        });
        clear = function () {
            new SavedData(1, [], {}).saveAll();
            window.location.reload();
        };
    }
    Main.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, StaticData.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, SavedData.load()];
                }
            });
        });
    };
    Main.prototype.saveAll = function () {
        new SavedData(this.manaPanel.level, this.pokemon.map(function (pokemon) { return ({
            x: pokemon.card.x,
            y: pokemon.card.y,
            isBall: pokemon.card.isBall,
            level: pokemon.level,
            nr: pokemon.nr,
            timer: pokemon.timer,
            isOpened: pokemon.card.isOpened
        }); }), this.manaPanel.mana)
            .saveAll();
    };
    Main.prototype.addNewPokemon = function (nr) {
        return __awaiter(this, void 0, void 0, function () {
            var pokemon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pokemon = new Pokemon(this, nr, 0, 1);
                        return [4 /*yield*/, pokemon.init({
                                nr: nr,
                                timer: 0,
                                level: 1,
                                x: null,
                                y: null,
                                isBall: true,
                                isOpened: false,
                            })];
                    case 1:
                        _a.sent();
                        this.pokemon.push(pokemon);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.joinPokemon = function (pokemon1, id2) {
        var pokemon2 = this.pokemon.find(function (x) { return x.card.id === id2; });
        if (pokemon1 && pokemon2 && pokemon1.nr === pokemon2.nr && pokemon1.level === pokemon2.level) {
            // pokemon2.remove();
            this.pokemon.splice(this.pokemon.indexOf(pokemon2), 1);
            pokemon2.card.remove();
            pokemon1.level++;
            pokemon1.card.animTempGrow();
            pokemon1.card.updateStars();
        }
    };
    Main.prototype.start = function (loadedData) {
        var _this = this;
        loadedData.pokemon.forEach(function (savedPokemon) {
            var newPokemon = new Pokemon(_this, savedPokemon.nr, savedPokemon.timer, savedPokemon.level);
            newPokemon.init(savedPokemon);
            _this.pokemon.push(newPokemon);
        });
        this.manaPanel = new ManaPanel(this, loadedData);
        this.manaPanel.init();
        this.manaPanel.update();
        this.stepperId = setInterval(function () { return _this.step(); }, 1000);
    };
    // explorations = 0
    Main.prototype.step = function () {
        this.pokemon.forEach(function (pokemon) {
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
    };
    Main.prototype.explore = function () {
        var manas = this.manaPanel.mana;
        var grabs = [];
        var _loop_1 = function (i) {
            var nr = this_1.getRandomPokemon();
            var types = StaticData.typesByPokemon[nr];
            var str = 0;
            types.forEach(function (type) {
                if (type != 'normal')
                    str += manas[type];
            });
            grabs.push({ nr: nr, str: str });
        };
        var this_1 = this;
        for (var i = 0; i < 20; i++) {
            _loop_1(i);
        }
        grabs.sort(function (a, b) { return b.str - a.str; });
        console.log(grabs);
        var final = grabs[Math.floor(Math.abs(this.gaussianRandom() * 3))];
        this.addNewPokemon(final.nr);
        this.manaPanel.level++;
        this.manaPanel.removeAllMana();
    };
    Main.prototype.getRandomPokemon = function () {
        var nr = 1 + Math.abs(Math.floor(this.gaussianRandom(this.manaPanel.level / 5, 10 + this.manaPanel.level / 10)));
        while (StaticData.prevolutionsByPokemon[nr] != null)
            nr--;
        return nr;
        // console.log(nr);
    };
    Main.prototype.gaussianRandom = function (mean, stdev) {
        if (mean === void 0) { mean = 0; }
        if (stdev === void 0) { stdev = 1; }
        var u = 1 - Math.random(); // Converting [0,1) to (0,1]
        var v = Math.random();
        var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        // Transform to the desired mean and standard deviation:
        return z * stdev + mean;
    };
    Main.prototype.downloadFile = function (name, data) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        var a = $("<a style=\"color:white;\" download=\"".concat(name, "\" href=\"").concat(dataStr, "\">").concat(name, "</a>"));
        $('body').append(a);
    };
    return Main;
}());
var ManaPanel = /** @class */ (function () {
    function ManaPanel(main, loadedData) {
        var _this = this;
        this.main = main;
        this.mana = { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 };
        this.level = 1;
        if (loadedData) {
            PokeTypes.forEach(function (type) { return _this.mana[type] = loadedData.mana[type]; });
            this.level = loadedData.level;
            console.log(this.level);
        }
    }
    Object.defineProperty(ManaPanel.prototype, "nextTarget", {
        get: function () { return Math.floor((4 + Math.pow(this.level, 1.2)) / 2); },
        enumerable: false,
        configurable: true
    });
    ManaPanel.prototype.init = function () {
        this.div = $('<div id="manaBar"></div>');
        $('body').append(this.div);
        this.update();
        // TODO this.div.on('click', ()=>this.main.manaCli);
    };
    ManaPanel.prototype.update = function () {
        var mana = this.mana;
        var nextTarget = this.nextTarget;
        // PokeTypes.forEach(type => sum += mana[type] ?? 0);
        var percentPrev = 0;
        var rollingSum = 0;
        var gradientString = '';
        PokeTypes.forEach(function (type) {
            if (mana[type] && mana[type] > 0) {
                rollingSum += mana[type];
                var color = Colors[type][0];
                var percent = Math.floor(100 * rollingSum / nextTarget);
                gradientString += ", #".concat(color, " ").concat(percentPrev, "%, #").concat(color, " ").concat(percent, "%");
                percentPrev = percent;
            }
        });
        var gradient = "linear-gradient(90deg".concat(gradientString, ", #00000000 ").concat(percentPrev, "%, #00000000 100%)");
        this.div.css('background', gradient);
        this.div.html("".concat(rollingSum, " / ").concat(nextTarget));
        if (rollingSum >= nextTarget) {
            this.main.explore();
        }
        // manaBar.css('width', '500px');
    };
    ManaPanel.prototype.addMana = function (type, amount) {
        if (amount === void 0) { amount = 1; }
        if (!this.mana[type])
            this.mana[type] = 0;
        this.mana[type] += amount;
        this.update();
    };
    ManaPanel.prototype.removeAllMana = function () {
        var _this = this;
        PokeTypes.forEach(function (type) { return _this.mana[type] = 0; });
        this.update();
    };
    return ManaPanel;
}());
var lastDivGrabbed;
var levelStars = [
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
];
var PokeCard = /** @class */ (function () {
    // lastPos: JQuery.Coordinates;
    function PokeCard(pokemon, onClick, onHoldClick, onDrop, savedData) {
        var _a;
        this.pokemon = pokemon;
        this.onClick = onClick;
        this.onHoldClick = onHoldClick;
        this.onDrop = onDrop;
        this.id = (Math.random() + 1).toString(36).substring(7) + (Math.random() + 1).toString(36).substring(7);
        this.enteringIntervalId = null;
        this.lastClick = 0;
        this.wasDragged = false;
        if (savedData) {
            this.x = savedData.x;
            this.y = savedData.y;
            this.isBall = savedData.isBall;
            this.isOpened = (_a = savedData.isOpened) !== null && _a !== void 0 ? _a : false;
        }
        this.init();
    }
    PokeCard.prototype.init = function () {
        var _this = this;
        var pokemon = this.pokemon;
        this.div = $("<div class=\"pokemon ".concat(this.isOpened ? "" : "closed", " ").concat(this.isBall ? "ball" : "", "\"></div>"));
        var div = this.div;
        div.css('background-color', "#" + Colors[pokemon.mainType][0]);
        div.attr('id', this.id);
        // name
        var name = $("<div class=\"pokemonName name\">".concat(pokemon.name, "</div>"));
        // number
        var number = $("<div class=\"number\">#".concat(pokemon.nr, "</div>"));
        // types
        var typeDivs = pokemon.types.map(function (type) { return _this.makeTypeDiv(type); });
        var typesDiv = $("<div class=\"typesDiv\"></div>");
        typeDivs.forEach(function (t) { return typesDiv.append(t); });
        // pokemon image
        var pokemonImage = $("<div class=\"pokemonImage\"><img class=\"image\" src=\"assets/pokemons/".concat(pokemon.nr, ".png\"></div>"));
        this.stars = $("<div class=\"stars\"></div>");
        pokemonImage.append(this.stars);
        this.updateStars();
        // pokeball image
        var pokeballImage = $("<img class=\"pokeballImage\" src=\"assets/items/pokeball.png\">");
        div.append(pokeballImage);
        var topDiv = $("<div class=\"topDiv\"></div>");
        topDiv.append(name);
        topDiv.append(number);
        div.append(topDiv);
        var botDiv = $("<div class=\"botDiv\"></div>");
        botDiv.append(typesDiv);
        botDiv.append(pokemonImage);
        div.append(botDiv);
        this.addToBody();
    };
    PokeCard.prototype.animTempGrow = function () {
        var _this = this;
        this.stars.addClass('anim_tempGrow');
        setTimeout(function () { return _this.stars.removeClass('anim_tempGrow'); }, 1000);
    };
    PokeCard.prototype.updateStars = function () {
        var _this = this;
        this.stars.empty();
        levelStars[this.pokemon.level].forEach(function (star) {
            var starImg = $("<img src=\"assets/ui/star_".concat(star, " copy.svg\">"));
            _this.stars.append(starImg);
        });
    };
    PokeCard.prototype._onMouseDown = function () {
        lastDivGrabbed === null || lastDivGrabbed === void 0 ? void 0 : lastDivGrabbed.css('z-index', '10');
        this.div.css('z-index', '100');
        lastDivGrabbed = this.div;
        this.wasDragged = false;
    };
    PokeCard.prototype._onMouseUp = function () {
        var _this = this;
        if (this.wasDragged)
            return;
        if (!this.isOpened) {
            this.div.find(".pokemonImage").addClass("anim_becomingVisible");
            this.div.find(".pokeballImage").addClass("anim_pokeballOpening");
            setTimeout(function () {
                _this.div.removeClass("closed");
                _this.div.find(".pokemonImage").removeClass("anim_becomingVisible");
                _this.div.find(".pokeballImage").removeClass("anim_pokeballOpening");
                _this.toggleBall();
            }, 1000);
            this.isOpened = true;
            return;
        }
        var now = Date.now();
        if (now - this.lastClick < 200) {
            this.toggleBall();
            this.lastClick = 0;
        }
        else
            this.lastClick = now;
    };
    PokeCard.prototype._onDrag = function (event) {
        this.x = event.position.left;
        this.y = event.position.top;
        this.wasDragged = true;
    };
    PokeCard.prototype._onDrop = function (ev1, ev2) {
        var id2 = ev2.draggable.attr("id");
        this.onDrop(this.id, id2);
    };
    PokeCard.prototype.makeTypeDiv = function (type) {
        var name = $("<div class=\"name\">".concat(type, "</div>"));
        var image = $("<img class=\"typeImage\" src=\"assets/types/".concat(type, ".png\" class=\"typeImage\">"));
        var div = $("<div class=\"type\"></div>");
        div.append(name);
        div.append(image);
        return div;
    };
    PokeCard.prototype.toggleBall = function () {
        var _this = this;
        if (!this.div.hasClass('ball')) {
            // this.div.removeClass('card');
            this.div.addClass('ball');
            this.div.addClass('anim_cardClosing');
            setTimeout(function () { return _this.div.removeClass('anim_cardClosing'); }, 1000);
            this.isBall = true;
        }
        else {
            this.div.removeClass('ball');
            // this.div.addClass('card');
            // this.div.addClass('anim_cardOpening')
            // setTimeout(() => this.div.removeClass('anim_cardOpening'), 1000);
            this.isBall = false;
        }
        this.updateFilled();
    };
    PokeCard.prototype.throwInPokeball = function () {
        var _this = this;
        var dx = 500;
        this.div.css('left', dx);
        this.div.css('top', dx);
        this.enteringIntervalId = setInterval(function () {
            if (dx > 50) {
                dx *= .99;
                _this.div.css('left', 200 - dx);
                _this.div.css('top', 200 - dx);
            }
            else {
                clearInterval(_this.enteringIntervalId);
                _this.enteringIntervalId = null;
            }
        }, 1000 / 60);
    };
    PokeCard.prototype.addToBody = function () {
        var _this = this;
        $("body").append(this.div);
        if (!this.x && !this.y) {
            if (!this.isOpened) {
                this.throwInPokeball();
            }
            else {
                this.div.css('left', 0);
                this.div.css('top', 0);
            }
        }
        else {
            this.div.css('left', this.x);
            this.div.css('top', this.y);
        }
        this.div.css('position', 'absolute');
        this.div.draggable({ drag: function (_a, event) { _this._onDrag(event); return !_this.enteringIntervalId; } });
        this.div.droppable({ drop: function (event1, event2) { return _this._onDrop(event1, event2); } });
        this.div.click(function () { return _this.onClick(); });
        this.div.on('mousedown', function () { return _this._onMouseDown(); });
        this.div.on('mouseup', function () { return _this._onMouseUp(); });
        // this.div.on('mouseleave', () => this._onMouseLeave());
        // if (this.isBall)
        //     this.toggleBall();
        this.updateFilled();
    };
    PokeCard.prototype.remove = function () {
        this.div.remove();
    };
    PokeCard.prototype.updateFilled = function () {
        var color = Colors[this.pokemon.mainType];
        var n = 100 * this.pokemon.timer / this.pokemon.maxTimer;
        if (this.div.hasClass('ball')) {
            var gradient = "radial-gradient(closest-side, #".concat(color[0], " 89%, transparent 90% 100%),\n            conic-gradient(white ").concat(n, "%, #").concat(color[0], " 0)");
            this.div.css('background', gradient);
        }
        else {
            this.div.css('background', "#".concat(color[0]));
            this.div.find('.pokemonName').css('background', "linear-gradient(180deg,  #".concat(color[0], " 85%, transparent 86%), \n                                                     linear-gradient(90deg, white ").concat(n, "%, rgb(0,0,0,0.2) ").concat(n + 1, "%)"));
        }
        // card.css("background", `radial-gradient(closest-side, #${color} 79%, transparent 80% 100%), conic-gradient(white ${n}%, transparent 0)`)
    };
    PokeCard.prototype.createManaGainAnimation = function (type) {
        var anim = $("<img class=\"anim_manaGain\" src=\"./assets/types/".concat(type, ".png\">"));
        var pos = this.div.position();
        anim.css({ top: pos.top + 32, left: pos.left + 32 });
        $("body").append(anim);
        setTimeout(function () {
            anim.remove();
        }, 1000);
    };
    return PokeCard;
}());
var Pokemon = /** @class */ (function () {
    function Pokemon(main, nr, timer, level) {
        this.main = main;
        this.nr = nr;
        this.timer = timer;
        this.level = level;
    }
    Object.defineProperty(Pokemon.prototype, "maxTimer", {
        get: function () { return Math.floor(5 * Math.pow(this.level, 0.66666)); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Pokemon.prototype, "mainType", {
        get: function () { return this.types[0]; },
        enumerable: false,
        configurable: true
    });
    Pokemon.prototype.init = function (savedPokemon) {
        return __awaiter(this, void 0, void 0, function () {
            var staticData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, StaticData.loadPokemon(this.nr)];
                    case 1:
                        staticData = _a.sent();
                        this.name = staticData.name;
                        this.types = staticData.types;
                        this.card = new PokeCard(this, 
                        /* onClic */ function () {
                            if (_this.timer >= _this.maxTimer) {
                                _this.timer = 0;
                                var probs_1 = [];
                                if (_this.level < 5) {
                                    for (var i = 0; i < 5 - _this.level; i++)
                                        probs_1.push('normal');
                                }
                                if (_this.level > 7)
                                    _this.types.forEach(function (t) { return probs_1.push(t); });
                                else
                                    probs_1.push(_this.mainType);
                                var finalType = probs_1[Math.floor(Math.random() * probs_1.length)];
                                console.log(probs_1, finalType);
                                _this.main.manaPanel.addMana(finalType, _this.level);
                                _this.card.createManaGainAnimation(finalType);
                                // TODO cookieData_addMana(type);
                                _this.card.updateFilled();
                            }
                        }, 
                        /* onHold */ function () { }, 
                        /* onDrop */ function (idHeld, idDropped) { return _this.main.joinPokemon(_this, idDropped); }, savedPokemon);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pokemon.prototype.step = function () {
        if (this.timer < this.maxTimer)
            this.timer++;
        this.card.updateFilled();
    };
    Pokemon.prototype.toJSON = function () {
        return { nr: this.nr, timer: this.timer, level: this.level };
    };
    return Pokemon;
}());
var SavedData = /** @class */ (function () {
    function SavedData(level, pokemon, mana) {
        this.level = level;
        this.pokemon = pokemon;
        this.mana = mana;
    }
    SavedData.createNew = function () {
        return new SavedData(1, [], { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 });
    };
    SavedData.load = function () {
        var _a;
        var loaded = (_a = JSON.parse(localStorage.getItem('poke_saved_data'))) !== null && _a !== void 0 ? _a : SavedData.createNew();
        console.log({ loaded: loaded });
        return loaded;
    };
    SavedData.prototype.saveAll = function () {
        localStorage.setItem('poke_saved_data', JSON.stringify(this));
    };
    return SavedData;
}());
var StarterSelect = /** @class */ (function () {
    function StarterSelect() {
    }
    StarterSelect.prototype.show = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var div, chosenNr, appendStarter, subdiv1, subdiv2, _a, _b, _c, _d, _e, _f, _g, _h, confirmButton, cancelButton, wrapper;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        console.log("showing starter");
                        div = $("<div class=\"pickStarter\">Choose Your Starter:</div>");
                        chosenNr = null;
                        appendStarter = function (subdiv, pokemon) {
                            var pokemonDiv = $("<div class=\"starter\"></div>");
                            var pokemonName = $("<div class=\"name\">".concat(pokemon.name, "</div>"));
                            var pokemonImage = $("<img src=\"assets/pokemons/".concat(pokemon.nr, ".png\">"));
                            // const starterButtonWrapper = $(`<div class="starterButtonWrapper"></div>`)
                            pokemonDiv.append(pokemonName);
                            pokemonDiv.append(pokemonImage);
                            // pokemonDiv.append(starterButtonWrapper);
                            subdiv.append(pokemonDiv);
                            // $(document).on('mousedown', () => {
                            //     mouseDown = true;
                            // });
                            // $(document).on('mouseup', () => {
                            //     mouseDown = false;
                            // });
                            pokemonDiv.on("click", function () {
                                $('.starter').hide();
                                pokemonDiv.show();
                                chosenNr = pokemon.nr;
                                confirmButton.show();
                                cancelButton.show();
                                // starterButtonWrapper.append($(`<div>CHOOSE ME</div>`))
                            });
                        };
                        subdiv1 = $("<div class=\"starterSubdiv\"></div>");
                        subdiv2 = $("<div class=\"starterSubdiv\"></div>");
                        div.append(subdiv1);
                        div.append(subdiv2);
                        _a = appendStarter;
                        _b = [subdiv1];
                        return [4 /*yield*/, StaticData.loadPokemon(1)];
                    case 1:
                        _a.apply(void 0, _b.concat([_j.sent()]));
                        _c = appendStarter;
                        _d = [subdiv1];
                        return [4 /*yield*/, StaticData.loadPokemon(4)];
                    case 2:
                        _c.apply(void 0, _d.concat([_j.sent()]));
                        _e = appendStarter;
                        _f = [subdiv2];
                        return [4 /*yield*/, StaticData.loadPokemon(7)];
                    case 3:
                        _e.apply(void 0, _f.concat([_j.sent()]));
                        _g = appendStarter;
                        _h = [subdiv2];
                        return [4 /*yield*/, StaticData.loadPokemon(25)];
                    case 4:
                        _g.apply(void 0, _h.concat([_j.sent()]));
                        confirmButton = $("<div class=\"starterButton starterConfirm\">Confirm</div>");
                        cancelButton = $("<div class=\"starterButton starterCancel\">Cancel</div>");
                        div.append(confirmButton);
                        div.append(cancelButton);
                        confirmButton.hide();
                        cancelButton.hide();
                        cancelButton.on('click', function () {
                            chosenNr = null;
                            $('.starter').show();
                            confirmButton.hide();
                            cancelButton.hide();
                        });
                        confirmButton.on('click', function () {
                            callback(chosenNr);
                            // cookieData_addPokemon(chosen);
                            $('.pickStarter').hide();
                            // startGame();
                        });
                        wrapper = $("<div class=\"pickStarterWrapper\"></div>");
                        wrapper.append(div);
                        $("body").append(wrapper);
                        return [2 /*return*/];
                }
            });
        });
    };
    return StarterSelect;
}());
var StaticData = /** @class */ (function () {
    function StaticData() {
    }
    StaticData.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("loading static data...");
                        console.log("loading types...");
                        return [4 /*yield*/, fetch('../assets/data/typesByPokemon.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.typesByPokemon = json; })];
                    case 1:
                        _a.sent();
                        // console.log(typesByPokemon)
                        return [4 /*yield*/, fetch('../assets/data/pokemonsByType.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.pokemonsByType = json; })];
                    case 2:
                        // console.log(typesByPokemon)
                        _a.sent();
                        return [4 /*yield*/, fetch('../assets/data/evolutionsByPokemon.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.evolutionsByPokemon = json; })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, fetch('../assets/data/prevolutionsByPokemon.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.prevolutionsByPokemon = json; })];
                    case 4:
                        _a.sent();
                        console.log({ prevolutionsByPokemon: this.prevolutionsByPokemon });
                        // console.log(pokemonsByType)
                        console.log("loading static data finished");
                        return [2 /*return*/];
                }
            });
        });
    };
    StaticData.loadPokemon = function (nr) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("loading pokemon nr ".concat(nr, "..."));
                        return [4 /*yield*/, fetch("./pokemons/".concat(nr, ".json"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        console.log("loading pokemon ".concat(nr, " done"));
                        return [2 /*return*/, {
                                nr: nr,
                                name: json.name,
                                types: this.typesByPokemon[nr],
                                // speciesUrl: json.species.url
                            }];
                }
            });
        });
    };
    return StaticData;
}());
