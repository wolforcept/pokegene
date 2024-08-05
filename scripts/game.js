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
var levelStars = [
    [],
    [], // level 1 <- starting level
    /*2*/ ["bronze"],
    /*3*/ ["silver"],
    /*4*/ ["gold"],
    /*5*/ ["silver"],
    /*6*/ ["silver", "silver"],
    /*7*/ ["silver", "silver", "silver"],
    /*8*/ ["gold"],
    /*9*/ ["gold", "gold"],
    /*10*/ ["gold", "gold", "gold"],
];
var ColorsAny = ['FFFFFF', '000000BB'];
var Colors = {
    'normal': ['d5d5d5', 'd5d5d5BB'],
    'grass': ['5fdb83', '5fdb83BB'],
    'poison': ['c276cd', 'c276cdBB'],
    'fire': ['ff5027', 'ff5027BB'],
    'flying': ['5b73db', '5b73dbBB'],
    'water': ['40ccff', '40ccffBB'],
    'bug': ['d1ff00', 'd1ff00BB'],
    'electric': ['ffe600', 'ffe600BB'],
    'ground': ['c77e64', 'c77e64BB'],
    'fairy': ['ffa0df', 'ffa0dfBB'],
    'fighting': ['ff870d', 'ff870dBB'],
    'psychic': ['ff5771', 'ff5771BB'],
    'rock': ['c1aa46', 'c1aa46BB'],
    'steel': ['678791', '678791BB'],
    // 'steel': ['bfdbda', '000000BB'],
    'ice': ['91fff8', '91fff8BB'],
    'ghost': ['625d7c', '625d7cBB'],
    'dragon': ['009aff', '009affBB'],
    'dark': ['161520', '161520BB'],
};
var PokeTypes = Object.keys(Colors);
var PokemonNumberByRegion = {
    "Kanto": { from: 1, to: 151 },
    "Johto": { from: 152, to: 251 },
    "Hoenn": { from: 252, to: 386 },
    "Sinnoh": { from: 387, to: 493 },
    "Unova": { from: 494, to: 649 },
    "Kalos": { from: 650, to: 721 },
    "Alola": { from: 722, to: 809 },
    "Galar": { from: 910, to: 905 },
    "Paldea": { from: 906, to: 1025 },
};
var boatAffixes = [
    { minLevel: 1, maxLevel: 100, name: "Anne", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "Aqua", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "Libra", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "Cactus", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "Libra", adds: [] },
    { minLevel: 25, maxLevel: 100, name: "Prime", adds: [{ type: "fighting", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Tidal", adds: [] },
    { minLevel: 20, maxLevel: 100, name: "Flower", adds: [{ type: "grass", amount: 2 }] },
    { minLevel: 40, maxLevel: 100, name: "Royal", adds: [{ type: "dragon", amount: 0.5 }] },
];
var cityAffixes = [
    { minLevel: 1, maxLevel: 100, name: "Accumula", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Alfornada", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Ambrette", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Anistar", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Anville", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Aquacorde", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Artazon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Aspertia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Azalea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Ballonlea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Black", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Blackthorn", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "CaboPoco", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Camphrier", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Canalave", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cascarrafa", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Castelia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Celadon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Celestic", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cerulean", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cherrygrove", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cianwood", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Circhester", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cinnabar", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Guren", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cortondo", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Coumarine", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Couriway", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cyllage", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Dendemille", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Dewford", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Diamond", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Driftveil", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Ecruteak", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Eterna", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "EverGrande", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Fallarbor", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "FightArea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Floaroma", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Floccesy", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Fortree", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Freezington", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Frontier", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Fuchsia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Geosenge", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Goldenrod", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Hammerlocke", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Hau'oli", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Heahea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Hearthome", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Hulbury", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Humilau", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Icirrus", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Iki", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Jubilife", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Jubilife", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Kiloude", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Konikoni", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Lacunosa", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Lavaridge", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Lavender", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Laverre", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Lentimas", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Levincia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Littleroot", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Lilycove", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "LosPlatos", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Lumiose", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Mahogany", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Malie", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Mauville", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Medali", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Mesagoza", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Mistralton", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Montenevera", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Mossdeep", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Mossui", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Motostoke", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Nacrene", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "NewBark", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Nimbasa", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Nuvema", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Oldale", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Olivine", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Opelucid", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Oreburgh", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Pacifidlog", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Pallet", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Paniola", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Pastoria", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Pearl", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Petalburg", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Pewter", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Po", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "PortoMarinada", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Postwick", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "ResortArea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Rustboro", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Saffron", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Sandgem", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Santalune", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Seafolk", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Shalour", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Slateport", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Snowbelle", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Snowpoint", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Solaceon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Sootopolis", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Spikemuth", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Striaton", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Sunyshore", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Tapu", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Turffield", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Twinleaf", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Undella", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Vaniville", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Veilstone", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Verdanturf", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Vermilion", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Violet", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Virbank", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Viridian", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Wedgehurst", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Wyndon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Zapapico", adds: [{ type: "normal", amount: 0.5 }] },
];
var mountainAffixes = [
    { minLevel: 10, maxLevel: 100, name: "Chimney", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 30, maxLevel: 100, name: "Moon", adds: [{ type: "fairy", amount: 2 }] },
    { minLevel: 35, maxLevel: 100, name: "Avalanche", adds: [{ type: "water" }, { type: "ice", amount: 2 }] },
    { minLevel: 40, maxLevel: 100, name: "Battle", adds: [{ type: "dragon", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Blaze", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Clear", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "Cleft", adds: [] },
    { minLevel: 35, maxLevel: 100, name: "Freeze", adds: [{ type: "ice", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Green", adds: [{ type: "grass", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Horn", adds: [{ type: "normal" }, { type: "bug", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Lanakila", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "Mistral", adds: [{ type: "normal" }] },
    { minLevel: 10, maxLevel: 100, name: "Molteau", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Mortar", adds: [] },
    { minLevel: 30, maxLevel: 100, name: "Moonview", adds: [{ type: "fairy", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Pyre", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 35, maxLevel: 100, name: "Snowfall", adds: [{ type: "ice", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Shady", adds: [{ type: "ghost", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Spirit", adds: [{ type: "ghost", amount: 2 }] },
    { minLevel: 50, maxLevel: 100, name: "Steel", adds: [{ type: "steel", amount: 2 }] },
];
var pathPrefixes = [
    { minLevel: 1, maxLevel: 100, name: "{city} {any}", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel: 1, maxLevel: 100, name: "Cave of {any}", adds: [{ type: "rock" }, { type: "ground", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Meteor {any}", adds: [{ type: "fire" }, { type: "flying" }] },
    { minLevel: 10, maxLevel: 100, name: "Magma {any}", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Venom {any}", adds: [{ type: "poison", amount: 2 }] },
    { minLevel: 25, maxLevel: 100, name: "Warring {any}", adds: [{ type: "fighting", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Rocky {any}", adds: [{ type: "rock", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Fire {any}", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Bloom {any}", adds: [{ type: "grass", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Poison {any}", adds: [{ type: "poison", amount: 3 }] },
    { minLevel: 50, maxLevel: 100, name: "Iron {any}", adds: [{ type: "steel", amount: 3 }] },
    { minLevel: 15, maxLevel: 100, name: "Puzzle {any}", adds: [{ type: "psychic", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Sky {any}", adds: [{ type: "flying", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Ghost {any}", adds: [{ type: "ghost" }] },
    { minLevel: 35, maxLevel: 100, name: "Snow {any}", adds: [{ type: "ice", amount: 3 }, { type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "Clay {any}", adds: [{ type: "ground" }] },
    { minLevel: 15, maxLevel: 100, name: "Rainbow {any}", adds: [{ type: "grass" }, { type: "psychic" }] },
    { minLevel: 40, maxLevel: 100, name: "Twist {any}", adds: [{ type: "psychic", amount: 2 }, { type: "dragon", amount: 1 }] },
    { minLevel: 1, maxLevel: 100, name: "Rock {any}", adds: [{ type: "rock", amount: 2 }] },
    { minLevel: 50, maxLevel: 100, name: "Unknown {any}", adds: [{ type: "dark" }] },
    { minLevel: 1, maxLevel: 100, name: "Giant {any}", adds: [{ type: "flying" }] },
    { minLevel: 10, maxLevel: 100, name: "Ember {any}", adds: [{ type: "fire" }] },
    { minLevel: 35, maxLevel: 100, name: "Frozen {any}", adds: [{ type: "ice" }] },
    { minLevel: 35, maxLevel: 100, name: "Freezing {any}", adds: [{ type: "ice" }, { type: "water" }] },
    { minLevel: 30, maxLevel: 100, name: "Glittering {any}", adds: [{ type: "fairy", amount: 2 }] },
    { minLevel: 30, maxLevel: 100, name: "Grace {any}", adds: [{ type: "fairy" }] },
    { minLevel: 10, maxLevel: 100, name: "Charged {any}", adds: [{ type: "electric" }] },
    { minLevel: 50, maxLevel: 100, name: "Dark {any}", adds: [{ type: "dark", amount: 2 }, { type: "ghost" }] },
    { minLevel: 20, maxLevel: 100, name: "Mirage {any}", adds: [{ type: "ghost" }] },
    { minLevel: 1, maxLevel: 100, name: "Great {any}", adds: [{ type: "flying" }] },
    { minLevel: 35, maxLevel: 100, name: "Ice {any}", adds: [{ type: "ice", amount: 2 }] },
    { minLevel: 40, maxLevel: 100, name: "Dragon {any}", adds: [{ type: "dragon", amount: 2 }] },
    { minLevel: 1, maxLevel: 100, name: "Mt {mt}", adds: [{ type: "normal", amount: 0.5 }], final: true },
    { minLevel: 5, maxLevel: 100, name: "S.S. {boat}", adds: [{ type: "water" }], final: true },
    { minLevel: 30, maxLevel: 100, name: "Safari Zone", adds: [{ type: "flying" }, { type: "grass" }, { type: "water" }, { type: "normal" }, { type: "poison" }, { type: "rock" }, { type: "ground" }], final: true },
    { minLevel: 1, maxLevel: 100, name: "{city} Grasslands", adds: [{ type: "grass" }, { type: "bug" }], final: true },
    { minLevel: 1, maxLevel: 100, name: "Cape of {city}", adds: [{ type: "normal", amount: 0.3 }], final: true },
    { minLevel: 1, maxLevel: 100, name: "Great {any} of {city}", adds: [] },
];
var pathSufixes = [
    { minLevel: 1, maxLevel: 100, name: "{any} of {any}", adds: [] },
    { minLevel: 1, maxLevel: 100, name: "{any} and {any}", adds: [] },
    { minLevel: 25, maxLevel: 100, name: "Ring", adds: [{ type: "fighting" }] },
    { minLevel: 25, maxLevel: 100, name: "Arena", adds: [{ type: "fighting", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Blight", adds: [{ type: "poison", amount: 2 }, { type: "ghost", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Swamp", adds: [{ type: "poison", amount: 3 }] },
    { minLevel: 25, maxLevel: 100, name: "Pass", adds: [{ type: "normal" }, { type: "fighting" }] },
    { minLevel: 1, maxLevel: 100, name: "Stone", adds: [{ type: "rock" }] },
    { minLevel: 1, maxLevel: 100, name: "Hill", adds: [{ type: "normal" }, { type: "grass" }, { type: "bug" }] },
    { minLevel: 1, maxLevel: 100, name: "Pillar", adds: [{ type: "grass" }] },
    { minLevel: 1, maxLevel: 100, name: "Settlement", adds: [{ type: "grass" }] },
    { minLevel: 1, maxLevel: 100, name: "Peak", adds: [{ type: "flying" }] },
    { minLevel: 1, maxLevel: 100, name: "Mountain", adds: [{ type: "ground" }, { type: "rock" }] },
    { minLevel: 40, maxLevel: 100, name: "Volcano", adds: [{ type: "fire" }, { type: "dragon" }] },
    { minLevel: 1, maxLevel: 100, name: "Apex", adds: [{ type: "flying" }] },
    { minLevel: 5, maxLevel: 100, name: "Ship", adds: [{ type: "water" }] },
    { minLevel: 5, maxLevel: 100, name: "Ferry", adds: [{ type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "Tree", adds: [{ type: "grass" }, { type: "bug" }] },
    { minLevel: 5, maxLevel: 100, name: "Port", adds: [{ type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "Canyon", adds: [{ type: "ground" }] },
    { minLevel: 1, maxLevel: 100, name: "City", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Town", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Village", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Road", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Route", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Summit", adds: [{ type: "normal" }, { type: "flying" }] },
    { minLevel: 1, maxLevel: 100, name: "Tunnel", adds: [{ type: "rock" }, { type: "ground" }] },
    { minLevel: 50, maxLevel: 100, name: "Mines", adds: [{ type: "rock" }, { type: "steel" }] },
    { minLevel: 20, maxLevel: 100, name: "Ruins", adds: [{ type: "rock" }, { type: "ghost", amount: 0.1 }] },
    { minLevel: 5, maxLevel: 100, name: "Well", adds: [{ type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "Tower", adds: [{ type: "normal" }] },
    { minLevel: 5, maxLevel: 100, name: "Island", adds: [{ type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "Chamber", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Chasm", adds: [{ type: "ground" }] },
    { minLevel: 5, maxLevel: 100, name: "Islands", adds: [{ type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "City", adds: [{ type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "River", adds: [{ type: "water" }] },
    { minLevel: 5, maxLevel: 100, name: "Lake", adds: [{ type: "water" }] },
    { minLevel: 1, maxLevel: 100, name: "Mountains", adds: [{ type: "ground" }, { type: "rock" }, { type: "grass" }] },
    { minLevel: 1, maxLevel: 100, name: "Forest", adds: [{ type: "grass" }, { type: "bug" }] },
    { minLevel: 5, maxLevel: 100, name: "Bay", adds: [{ type: "water" }, { type: "flying" }] },
    { minLevel: 1, maxLevel: 100, name: "Ranch", adds: [{ type: "normal" }, { type: "grass" }] },
    { minLevel: 10, maxLevel: 100, name: "Complex", adds: [{ type: "poison" }] },
    { minLevel: 1, maxLevel: 100, name: "Room", adds: [{ type: "normal" }] },
    { minLevel: 10, maxLevel: 100, name: "Mansion", adds: [{ type: "normal" }, { type: "electric" }] },
    { minLevel: 1, maxLevel: 100, name: "Beach", adds: [{ type: "water" }, { type: "normal" }] },
    { minLevel: 1, maxLevel: 100, name: "Expansion", adds: [{ type: "ground" }, { type: "grass" }] },
    { minLevel: 5, maxLevel: 100, name: "Falls", adds: [{ type: "water" }, { type: "flying" }] },
];
var replaceables = [
    { replace: "{any}", arr: pathSufixes },
    { replace: "{boat}", arr: boatAffixes },
    { replace: "{city}", arr: cityAffixes },
    { replace: "{mt}", arr: mountainAffixes },
];
var FilterPanel = /** @class */ (function () {
    function FilterPanel() {
    }
    FilterPanel.prototype.init = function () {
        var _this = this;
        this.div = $("<div id=\"filterPanel\"></div>");
        var button = $("<div class=\"button\"></div>");
        // const content = $(`<div class="filters"></div>`);
        PokeTypes.forEach(function (type, i) {
            var butt = $("<div class=\"listItem filter ".concat(type, "\"><img src=\"assets/types/").concat(type, ".png\"></div>"));
            var lastClick = 0;
            butt.on('click', function () {
                var now = Date.now();
                if (now - lastClick < 250) {
                    // $('.filter').addClass('off');
                    // butt.removeClass('off');
                    PokeTypes.forEach(function (t) { return _this.toggle(t, false); });
                    _this.toggle(type, true);
                }
                else {
                    // if (butt.hasClass('off')) {
                    // butt.removeClass('off');
                    _this.toggle(type, butt.hasClass('off'));
                    // } else {
                    // butt.addClass('off');
                    // this.toggle(type, false)
                    // }
                }
                lastClick = now;
            });
            _this.div.append(butt);
            if (i == 8) { // all on
                var butt_1 = $("<div class=\"listItem\"><img src=\"assets/types/any.png\"></div>");
                butt_1.on('click', function () {
                    var willBe = butt_1.hasClass('off');
                    if (willBe)
                        butt_1.removeClass('off');
                    else
                        butt_1.addClass('off');
                    PokeTypes.forEach(function (t) { return _this.toggle(t, willBe); });
                });
                _this.div.append(butt_1);
            }
        });
        // all off
        var filtersAreVisible = true;
        var butt = $("<div class=\"filterArrow\"><img class=\"arrowLeft\" src=\"assets/ui/arrow_left.svg\"><img class=\"arrowRight\" src=\"assets/ui/arrow_right.svg\"></div>");
        butt.on('click', function () {
            filtersAreVisible = !filtersAreVisible;
            if (filtersAreVisible) {
                $('.listItem').show();
                $(".arrowLeft").hide();
                $(".arrowRight").show();
            }
            else {
                $('.listItem').hide();
                $(".arrowLeft").show();
                $(".arrowRight").hide();
            }
        });
        this.div.append(butt);
        setTimeout(function () {
            $(".arrowLeft").hide();
        }, 200);
        var wrapper = $("<div id=\"filterPanelWrapper\"></div>");
        wrapper.append(this.div);
        $("body").append(wrapper);
    };
    FilterPanel.prototype.toggle = function (type, isVisible) {
        if (isVisible) {
            $(".pokemon.".concat(type)).show();
            $(".filter.".concat(type)).removeClass('off');
        }
        else {
            $(".pokemon.".concat(type)).hide();
            $(".filter.".concat(type)).addClass('off');
        }
    };
    return FilterPanel;
}());
function start() {
    new Main();
}
var clear, addP, save, explore;
function test(n, isNew) {
    // for (let i = 0; i < n; i++)
    // console.log(explore(1, ["water"], isNew))
}
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.pokemon = [];
        this.pokedex = [];
        this.increaseInFindingNewPokemon = 0;
        this.lockType = 'none';
        // explorations = 0
        this.saveCooldown = 0;
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
                            x: 0,
                            y: 0,
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
            SavedData.createNew().saveAll();
            window.location.reload();
        };
        addP = function (a) { return _this.addNewPokemon(a, 100, 100); };
        save = function () { return _this.saveAll(); };
        explore = function (lvl, types) { return Main.exploreNewPokemon(lvl, types, _this.pokemon.map(function (x) { return ({ nr: x.nr, type1: x.mainType, type2: x.secondType }); })); };
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
        new SavedData(this.pokemon.map(function (pokemon) { return ({
            x: pokemon.card.x,
            y: pokemon.card.y,
            isBall: pokemon.card.isBall,
            level: pokemon.level,
            nr: pokemon.nr,
            timer: pokemon.timer,
            isOpened: pokemon.card.isOpened
        }); }), this.pokedex, 
        // this.manaPanel.mana,
        this.pathPanel.completedPaths, this.pathPanel.currentPath, this.lockType, this.increaseInFindingNewPokemon)
            .saveAll();
    };
    Main.prototype.addNewPokemon = function (nr, x, y) {
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
                                x: x,
                                y: y,
                                isBall: true,
                                isOpened: false,
                            })];
                    case 1:
                        _a.sent();
                        this.pokedex[nr] = true;
                        this.pokemon.push(pokemon);
                        return [2 /*return*/, pokemon];
                }
            });
        });
    };
    Main.prototype.joinPokemon = function (pokemon1, id2) {
        var pokemon2 = this.pokemon.find(function (x) { return x.card.id === id2; });
        if (pokemon1 && pokemon2 && pokemon1.nr === pokemon2.nr && pokemon1.level === pokemon2.level && pokemon1.card.isOpened && pokemon2.card.isOpened) {
            if (pokemon1.level >= 4) {
                var evNrs = StaticData.evolutionsByPokemon[pokemon1.nr];
                if (evNrs !== null && evNrs.length > 0) {
                    var newNr = Util.randomFromArray(evNrs);
                    // console.log("WILL EVOLVE: " + pokemon1.nr + " TO " + newNr);
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
    };
    Main.prototype.start = function (loadedData) {
        return __awaiter(this, void 0, void 0, function () {
            var loadTimes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lockType = loadedData.lockType;
                        this.increaseInFindingNewPokemon = loadedData.increaseInFindingNewPokemon;
                        loadTimes = [];
                        loadedData.pokemon.forEach(function (savedPokemon) {
                            var newPokemon = new Pokemon(_this, savedPokemon.nr, savedPokemon.timer, savedPokemon.level);
                            loadTimes.push(newPokemon.init(savedPokemon));
                            _this.pokemon.push(newPokemon);
                        });
                        return [4 /*yield*/, Promise.all(loadTimes)];
                    case 1:
                        _a.sent();
                        // this.manaPanel = new ManaPanel(this, loadedData);
                        // this.manaPanel.init();
                        // this.manaPanel.update();
                        this.pathPanel = new PathPanel(this, loadedData);
                        this.pathPanel.init();
                        this.pathPanel.update();
                        this.filterPanel = new FilterPanel();
                        this.filterPanel.init();
                        this.stepperId = setInterval(function () { return _this.step(); }, 250);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.step = function () {
        this.pokemon.forEach(function (pokemon) {
            if (pokemon.card.isOpened)
                pokemon.step();
        });
        this.pathPanel.step();
        this.pathPanel.update();
        if (this.saveCooldown <= 0) {
            this.saveAll();
            this.saveCooldown = 60;
        }
        else {
            this.saveCooldown--;
        }
    };
    Main.prototype.explore = function (types, pos) {
        var currLevel = Math.min(100, this.pathPanel.completedPaths);
        // const manas = this.manaPanel.mana;
        // const orderedManas = PokeTypes.filter(type => manas[type] > 0).map((type: PokeType) => ({ type, mana: manas[type] })).sort((a, b) => (b.mana - a.mana));
        // const orderedManasWithoutNormal = orderedManas.filter(({ type }) => type !== 'normal');
        // const sum = orderedManas.reduce((t, x) => (t + x.mana), 0)
        // const currentPokemonWithType = this.pokemon.filter(x => orderedManas.find(({ type }) => type === x.mainType || type === x.secondType));
        // let currentPokemon: Array<PokemonShort> = currentPokemonWithCurrentMana.map(x => ({ nr: x.nr, type1: x.mainType, type2: x.secondType }));
        // currentPokemon = currentPokemon.filter((x, i) => currentPokemon.findIndex(y => y.nr === x.nr) === i);
        var currentPokemon = this.pokemon.filter(function (x) { return types.includes(x.mainType) || types.includes(x.secondType); }).map(function (x) { return ({ nr: x.nr, type1: x.mainType, type2: x.secondType }); });
        // get new pokemon prob stats:
        // const max = 0.2;
        // const start = 0.3;
        // const growth = 100;
        // const getNewPokemonProb = 1; //(max - ((max - start) * (growth / (growth + currLevel)))); // from 0.3 at level==0 to 0.25 at level == 100
        // const getNewPokemonProb = 1;
        var getNewPokemonProb = this.pathPanel.completedPaths < 10 ? .3 : (this.pathPanel.completedPaths < 20 ? .2 : (this.pathPanel.completedPaths < 30 ? .1 : (this.pathPanel.completedPaths < 50 ? .05 : .02)));
        var isNew = Math.random() < getNewPokemonProb;
        console.log("exploring... types=".concat(types, " isNew=").concat(isNew));
        var nr = Main.exploreOldPokemon(currentPokemon, types);
        if (isNew || !nr) {
            var newNr = Main.exploreNewPokemon(currLevel, types, currentPokemon);
            if (newNr)
                nr = newNr;
        }
        if (nr) {
            this.startAddPokemonSequence(nr, pos);
            // this.manaPanel.level++;
            // this.manaPanel.removeAllMana();
        }
    };
    Main.prototype.startAddPokemonSequence = function (nr, posI) {
        return __awaiter(this, void 0, void 0, function () {
            var pokemon, vx, vy, gravity, lifetime, intervalId, intervalFunc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addNewPokemon(nr, posI.left, posI.top)];
                    case 1:
                        pokemon = (_a.sent()).card.div;
                        vx = -4 + 8 * Math.random(), vy = -8 + Math.random() * 2, gravity = 0.6;
                        lifetime = 30 + Math.random() * 10;
                        intervalFunc = function () {
                            var currPos = pokemon.offset();
                            lifetime--;
                            if (lifetime <= 0) {
                                clearInterval(intervalId);
                            }
                            else {
                                pokemon.css("left", currPos.left + vx);
                                pokemon.css("top", currPos.top + vy);
                                vy += gravity;
                            }
                        };
                        intervalId = setInterval(intervalFunc, 1000 / 60);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    Main.exploreOldPokemon = function (allOld, types) {
        var allPossible = allOld.filter(function (x) { return types.includes(x.type1) || types.includes(x.type2); });
        if (allPossible.length === 0)
            return undefined;
        Util.shuffle(allPossible);
        return Util.randomFromArray(allPossible).nr;
    };
    Main.exploreNewPokemon = function (level, types, current) {
        var allPossible = [];
        types.forEach(function (type) { return StaticData.pokemonsByType[type].forEach(function (nr) { return allPossible.push(nr); }); });
        allPossible = allPossible.filter(function (x) {
            if (current.find(function (y) { return y.nr === x; }))
                return false;
            var preEv = StaticData.prevolutionsByPokemon[x];
            if ((preEv && preEv > 0 && preEv < x))
                return false;
            return true;
        });
        if (allPossible.length === 0)
            return undefined;
        allPossible.sort(function (a, b) { return Number(a) - Number(b); });
        // for (let i = 0; i < allPossible.length; i++) {
        //     const nr = allPossible[i];
        //     const prevEvNr = StaticData.prevolutionsByPokemon[nr];
        //     if (prevEvNr && !current.find(x => x.nr === nr)) {
        //         allPossible.splice(i, 1);
        //         i--;
        //     }
        // }
        // let tries = 0;
        // let nr = 0;
        // while (nr == 0 && tries < 10000) {
        //     tries++;
        //     let index = 0;
        //     let skips = Math.floor(Math.abs(Util.gaussianRandom(level, level / 10)));
        //     while (skips > 0) {
        //         const numberDiff = allPossible[index + 1] - allPossible[0];
        //         skips--;
        //         const skipProb = this.getSkipProbability(level, skips, numberDiff);
        //         // console.log(`SkipProbability(${level}, ${skips}, ${numberDiff}) = ${skipProb}`)
        //         if (Math.random() < skipProb)
        //             index++;
        //     }
        //     nr = allPossible[Math.min(allPossible.length - 1, index)];
        // }
        return allPossible[0];
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
    };
    Main.getSkipProbability = function (level, skipsDone, diff) {
        return .01 * (5 + level / 5) * (skipsDone > 1 ? skipsDone : 1) / (diff > 1 ? diff : 1);
    };
    Main.prototype.getRandomPokemon = function () {
        var level = this.pathPanel.completedPaths;
        var nr = 1 + Math.abs(Math.floor(Util.gaussianRandom(level / 5, 10 + level / 10)));
        while (StaticData.prevolutionsByPokemon[nr] != null || StaticData.prevolutionsByPokemon[nr] > nr)
            nr--;
        return nr;
        // console.log(nr);
    };
    Main.prototype.downloadFile = function (name, data) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
        var a = $("<a style=\"color:white;\" download=\"".concat(name, "\" href=\"").concat(dataStr, "\">").concat(name, "</a>"));
        $('body').append(a);
    };
    return Main;
}());
var ManaPanel = /** @class */ (function () {
    function ManaPanel() {
    }
    return ManaPanel;
}());
var PathPanel = /** @class */ (function () {
    function PathPanel(main, loadedData) {
        this.main = main;
        this.knownTypes = {};
        if (loadedData) {
            this.completedPaths = loadedData.completedPaths;
            this.currentPath = loadedData.currentPath;
        }
    }
    Object.defineProperty(PathPanel.prototype, "nextAmount", {
        get: function () { return Math.floor((4 + Math.pow(this.completedPaths / 2, 1.1)) / 2); },
        enumerable: false,
        configurable: true
    });
    PathPanel.prototype.init = function () {
        this.title = $('<div id="title"></div>');
        var top = $('<div id="top"></div>');
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
        var wrapper = $('<div id="path_panel"></div>');
        wrapper.append(top, this.currentPathDiv);
        $('body').append(wrapper);
        this.step();
        this.update();
        // this.createManaDisplay();
        // TODO this.div.on('click', ()=>this.main.manaCli);
    };
    PathPanel.prototype.step = function () {
        var _this = this;
        this.main.pokemon.forEach(function (pokemon) { return pokemon.types.forEach(function (x) {
            if (!_this.knownTypes[x])
                _this.knownTypes[x] = true;
        }); });
        if ((!this.currentPath || !this.currentPath.wilds.find(function (x) { return x.value < x.maxValue; })) && !this.possiblePaths) {
            this.makePossiblePaths();
            this.main.saveAll();
        }
        if (this.possiblePaths && !this.possiblePathsDiv) {
            this.makePossiblePathsDiv();
        }
    };
    PathPanel.prototype.update = function () {
        var _this = this;
        if (!this.currentPath)
            return;
        this.title.html("".concat(this.completedPaths, " - ").concat(this.currentPath.name));
        // this.title.html(`${this.currentPath.region} - ${this.completedPaths} - ${this.currentPath.name}`);
        this.currentPath.wilds.forEach(function (wild) {
            if (!wild.div && wild.value < wild.maxValue) {
                var div = $("<div class=\"wild\"><img class=\"pokeball\" src=\"../assets/items/pokeball.png\"></div>");
                var progress = $("<div class=\"progress\"></div>");
                var progressWrapper = $("<div class=\"progress_wrapper\"></div>");
                progressWrapper.append(progress);
                var typeImages_1 = $("<div class=\"type_images\"></div>");
                if (wild.isUnknown)
                    typeImages_1.append($("<img src=\"./assets/types/any.png\" title=\"unknown type\" height=\"32px\">"));
                else
                    wild.types.forEach(function (type) {
                        var typeImg = $("<img src=\"./assets/types/".concat(type, ".png\" title=\"").concat(type, "\" height=\"32px\">"));
                        typeImages_1.append(typeImg);
                    });
                div.append(typeImages_1);
                div.append(progressWrapper);
                div.appendTo(_this.currentPathDiv);
                wild.div = div;
            }
            var background = "repeating-linear-gradient(45deg, ";
            var backgroundX = 1;
            wild.types.forEach(function (type) {
                var color = wild.isUnknown ? ColorsAny[0] : Colors[type][0];
                background += "#".concat(color, " ").concat((backgroundX - 1) * 10, "px, #").concat(color, " ").concat(backgroundX * 10, "px,");
                backgroundX++;
            });
            if (wild.types.length === 1) {
                var type = wild.types[0];
                var color = wild.isUnknown ? ColorsAny[1] : Colors[type][1];
                background += "#".concat(color, " ").concat((backgroundX - 1) * 10, "px, #").concat(color, " ").concat(backgroundX * 10, "px,");
                backgroundX++;
            }
            if (wild.value < wild.maxValue) {
                var progressDiv = wild.div.find(".progress");
                progressDiv.css("background", background.substring(0, background.length - 1) + ")");
                progressDiv.css("width", (100 * wild.value / wild.maxValue) + "%");
            }
        });
    };
    PathPanel.prototype.addToPossiblePath = function (path, _a) {
        var type = _a.type, amount = _a.amount;
        var found = path.parts.filter(function (x) { return x.type === type; });
        if (found.length > 0) {
            found[0].amount += amount !== null && amount !== void 0 ? amount : 1;
        }
        else {
            path.parts.push({ type: type, amount: amount !== null && amount !== void 0 ? amount : 1 });
        }
    };
    PathPanel.prototype.recalculatePartsOfPath = function (path) {
        if (path.parts.length > 3) {
            path.parts.sort(function (a, b) { return b.amount - a.amount; });
            console.log("HAD TO SORT PARTS: " + JSON.stringify(path.parts));
            path.parts = [path.parts[0], path.parts[1], path.parts[2]];
        }
        var sum = 0;
        path.parts.forEach(function (_a) {
            var amount = _a.amount;
            sum += amount;
        });
        path.parts.forEach(function (part) {
            part.amount = Math.round(100 * part.amount / sum);
        });
        var finalSum = 0;
        path.parts.forEach(function (_a) {
            var amount = _a.amount;
            finalSum += amount;
        });
        if (finalSum < 100) {
            path.parts[0].amount += 1;
        }
    };
    PathPanel.prototype.makePossiblePath = function () {
        var _this = this;
        var path = { name: "", parts: [] };
        var possiblePrefixes = pathPrefixes.filter(function (x) { return _this.completedPaths >= x.minLevel; });
        console.log("---- making possible path ----");
        var i = 0;
        var attempts = 0;
        do {
            attempts++;
            var affix = Util.randomFromArray(possiblePrefixes);
            if (!affix)
                continue;
            path.name = affix.name;
            affix.adds.forEach(function (add) { return _this.addToPossiblePath(path, add); });
            console.log(" > start with ".concat(affix.name, " \u2192 ").concat(JSON.stringify(affix.adds.map(function (x) { return x.type + "(" + (x.amount ? x.amount : 1) + ")"; }))));
            while (path.name.includes("{")) {
                i++;
                if (i > 10000) {
                    return { name: "error", parts: [{ type: "normal", amount: 1 }] };
                }
                for (var i_1 = 0; i_1 < replaceables.length; i_1++) {
                    var replaceable = replaceables[i_1];
                    if (path.name.includes(replaceable.replace)) {
                        i_1 = replaceables.length;
                        var newAffix = Util.randomFromArray(replaceable.arr.filter(function (x) { return _this.completedPaths >= x.minLevel; }));
                        path.name = path.name.replace(replaceable.replace, newAffix.name);
                        newAffix.adds.forEach(function (add) { return _this.addToPossiblePath(path, add); });
                        console.log(" > adding ".concat(newAffix.name, " \u2192 ").concat(JSON.stringify(newAffix.adds.map(function (x) { return x.type + "(" + (x.amount ? x.amount : 1) + ")"; }))));
                    }
                }
            }
        } while (path.parts.length == 0 && attempts < 1000);
        if (!path.name)
            path.name = "Untravelled Path";
        if (path.parts.length === 0)
            path.parts = [{ amount: 1, type: "normal" }];
        this.recalculatePartsOfPath(path);
        return path;
    };
    PathPanel.prototype.makePossiblePaths = function () {
        this.possiblePaths = [];
        for (var i = 0; i < 3; i++) {
            var path = this.makePossiblePath();
            this.possiblePaths.push(path);
        }
    };
    PathPanel.prototype.makePossiblePathsDiv = function () {
        var _this = this;
        this.possiblePathsDiv = $("<div id=\"possible_paths_panel\"></div>");
        this.possiblePaths.forEach(function (pp) {
            var path = $("<div class=\"possible_path\"><span class=\"name\">".concat(pp.name, "</span></div>"));
            var partsDiv = $("<div class=\"parts\"></div>");
            pp.parts.forEach(function (type) {
                var percent = $("<div class=\"percent\"><span>".concat(type.amount, "%</span></div>"));
                var typeImg = $("<img src=\"./assets/types/".concat(type.type, ".png\" title=\"").concat(type.type, "\" height=\"32px\">"));
                percent.append(typeImg);
                partsDiv.append(percent);
            });
            path.append(partsDiv);
            path.on("click", function () { return _this.choosePath(pp); });
            _this.possiblePathsDiv.append(path);
        });
        $('#path_panel').append(this.possiblePathsDiv);
    };
    PathPanel.prototype.choosePath = function (pp) {
        var _this = this;
        this.completedPaths++;
        this.possiblePaths = undefined;
        this.possiblePathsDiv.remove();
        this.possiblePathsDiv = undefined;
        this.currentPath = {
            region: "Kanto",
            name: pp.name,
            wilds: []
        };
        var nWilds = 7 + Math.floor(Math.random() * 5);
        var types = [];
        pp.parts.forEach(function (part) {
            var nOfType = part.amount / 100 * nWilds;
            for (var i = 0; i < nOfType; i++) {
                console.log(_this.knownTypes);
                _this.addWild([part.type], _this.knownTypes[part.type] ? false : true);
            }
        });
        Util.shuffle(this.currentPath.wilds);
        this.update();
    };
    PathPanel.prototype.addWild = function (types, isUnknown) {
        console.log(types + " is " + isUnknown);
        var wild = { types: types, maxValue: 20 + this.nextAmount, value: 0, isUnknown: isUnknown };
        this.currentPath.wilds.push(wild);
    };
    PathPanel.prototype.addProgress = function (type) {
        if (!this.currentPath)
            return;
        for (var i = 0; i < 3; i++) {
            var wild = this.findUncompleteWildWithTypeOrAnyOrUnknown(type);
            if (wild) {
                if (wild.value < wild.maxValue)
                    wild.value++;
                if (wild.value >= wild.maxValue) {
                    var pos = wild.div.find(".pokeball").offset();
                    wild.div.remove();
                    this.main.explore(wild.types, pos);
                }
                return;
            }
        }
    };
    PathPanel.prototype.findUncompleteWildWithTypeOrAnyOrUnknown = function (type) {
        var i = 0;
        return this.currentPath.wilds.find(function (x) {
            if (x.value < x.maxValue)
                i++;
            if (i > 3)
                return;
            if (x.value >= x.maxValue)
                return false;
            if (x.isUnknown)
                return true;
            if (x.types.includes(type))
                return true;
            // if (x.types.find(x => !this.knownTypes[x])) return true;
            return false;
        });
    };
    return PathPanel;
}());
var lastDivGrabbed;
var PokeCard = /** @class */ (function () {
    // lastPos: JQuery.Coordinates;
    function PokeCard(pokemon, onClick, onDrop, savedData) {
        var _a;
        this.pokemon = pokemon;
        this.onClick = onClick;
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
        var _a;
        var pokemon = this.pokemon;
        this.div = $("<div class=\"pokemon ".concat(pokemon.mainType, " ").concat(pokemon.secondType, " ").concat(pokemon.mainType === 'ghost' || pokemon.secondType === 'ghost' ? "ghost" : "", " ").concat(this.isOpened ? "" : "closed", " ").concat(this.isBall ? "" : "showExtraInfo", "\"></div>"));
        var div = this.div;
        // div.css('background-color', "#" + Colors[pokemon.mainType][0]);
        div.attr('id', this.id);
        // pokemon image
        var pokemonImage = $("<div class=\"pokemonImage\"><img class=\"image\" src=\"assets/pokemons/".concat(pokemon.nr, ".png\" title=\"").concat(pokemon.starsString, " ").concat(pokemon.name, "\"></div>"));
        // stars
        this.stars = $("<div class=\"stars\"></div>");
        this.updateStars();
        // progress bar
        this.progressDiv = $("<div class=\"progress\"></div>");
        // main image and colors
        var imageAndColorsDiv = $("<div class=\"imageAndColors\"></div>");
        imageAndColorsDiv.append(pokemonImage);
        var color = Colors[this.pokemon.mainType];
        var color2 = Colors[(_a = this.pokemon.types[1]) !== null && _a !== void 0 ? _a : this.pokemon.mainType];
        var gradient = "linear-gradient(-45deg, #".concat(color2[0], " 49.9%, #").concat(color[0], " 50%), linear-gradient(-45deg, #").concat(color2[0], " 49.9%, #").concat(color[0], " 50%)");
        imageAndColorsDiv.css('background', gradient);
        // extra info
        var name = $("<div class=\"pokemonName name\">".concat(pokemon.name, "</div>"));
        var number = $("<div class=\"number\">#".concat(pokemon.nr, "</div>"));
        var typesDiv = $("<div class=\"typesDiv\"></div>");
        var typeDivs = pokemon.types.map(function (type) { return _this.makeTypeDiv(type); });
        typeDivs.forEach(function (t) { return typesDiv.append(t); });
        var topDiv = $("<div class=\"topDiv\"></div>");
        topDiv.append(number);
        topDiv.append(name);
        div.append(topDiv);
        var extraInfo = $("<div class=\"extraInfo\"></div>");
        extraInfo.append(topDiv);
        extraInfo.append(typesDiv);
        if (!this.isOpened)
            this.pokeballImage = $("<img class=\"pokeballImage\" src=\"assets/items/pokeball.png\"></div>");
        div.append(this.stars);
        div.append(imageAndColorsDiv);
        div.append(this.progressDiv);
        div.append(extraInfo);
        div.append(this.pokeballImage);
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
            // this.div.find(".pokemonImage").addClass("anim_becomingVisible");
            // this.div.find(".pokeballImage").addClass("anim_pokeballOpening");
            setTimeout(function () {
                _this.div.removeClass("closed");
                //     this.div.find(".pokemonImage").removeClass("anim_becomingVisible");
                //     this.div.find(".pokeballImage").removeClass("anim_pokeballOpening");
                // // this.toggleBall();
            }, 300);
            Smoke.make(this.div.offset());
            this.isOpened = true;
            return;
        }
        var now = Date.now();
        if (now - this.lastClick < 200) {
            this.toggleExtraInfo();
            this.lastClick = 0;
        }
        else {
            this.lastClick = now;
            this.onClick();
        }
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
        var image = $("<img class=\"typeImage\" src=\"assets/types/".concat(type, ".png\" title=\"").concat(type, "\" class=\"typeImage\">"));
        var div = $("<div class=\"type\"></div>");
        div.append(image);
        div.append(name);
        return div;
    };
    PokeCard.prototype.toggleExtraInfo = function () {
        if (!this.div.hasClass('showExtraInfo')) {
            this.div.addClass('showExtraInfo');
            this.isBall = false;
        }
        else {
            this.div.removeClass('showExtraInfo');
            this.isBall = true;
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
                dx *= .975;
                _this.div.css('left', 200 - dx);
                _this.div.css('top', 200 - dx);
            }
            else {
                clearInterval(_this.enteringIntervalId);
                _this.enteringIntervalId = null;
            }
        }, 1000 / 60);
    };
    PokeCard.prototype.isDraggable = function () {
        return !this.enteringIntervalId &&
            ((this.isBall && (this.pokemon.main.lockType != 'ball' && this.pokemon.main.lockType != 'hard'))
                || (!this.isBall && (this.pokemon.main.lockType != 'card' && this.pokemon.main.lockType != 'hard')));
    };
    PokeCard.prototype.addToBody = function () {
        var _this = this;
        $("body").append(this.div);
        this.div.css('left', this.x);
        this.div.css('top', this.y);
        this.div.draggable({ drag: function (_a, event) { _this._onDrag(event); return _this.isDraggable(); } });
        this.div.droppable({ drop: function (event1, event2) { return _this._onDrop(event1, event2); } });
        // this.div.on('click', () => this.onClick());
        this.div.on('mousedown', function () { return _this._onMouseDown(); });
        this.div.on('mouseup', function () { return _this._onMouseUp(); });
        // this.div.on('mouseleave', () => this._onMouseLeave());
        this.updateFilled();
    };
    PokeCard.prototype.remove = function () {
        this.div.remove();
    };
    PokeCard.prototype.updateFilled = function () {
        var n = 100 * this.pokemon.timer / this.pokemon.maxTimer;
        this.progressDiv.css('background', "conic-gradient(white ".concat(n, "%, rgb(55, 55, 61) 0)"));
    };
    PokeCard.prototype.createManaGainAnimation = function (type) {
        var anim = $("<img class=\"mana\" src=\"./assets/types/".concat(type, ".png\">"));
        var pos = this.div.offset();
        anim.css({ top: pos.top + 50, left: pos.left + 50 });
        var intervalId, lifetime = 100, vx = -.5 + Math.random(), vy = -.5 + Math.random();
        intervalId = setInterval(function () {
            if (lifetime <= 0) {
                clearInterval(intervalId);
                anim.remove();
            }
            else {
                lifetime--;
                anim.css({ top: pos.top + 50 + vx * (100 - lifetime), left: pos.left + 50 + vy * (100 - lifetime) });
            }
        }, 1000 / 60);
        $("body").append(anim);
    };
    return PokeCard;
}());
// const normalTypeProbability = [1, .5, .36666, .23333, .1, 0, 0, 0, 0, 0, 0];
var secondTypeProbability = [0, 0, 0, 0, 0, 0, 0, 0.1666, .3333, .5];
var Pokemon = /** @class */ (function () {
    function Pokemon(main, nr, timer, level) {
        this.main = main;
        this.nr = nr;
        this.timer = timer;
        this.level = level;
    }
    Object.defineProperty(Pokemon.prototype, "maxTimer", {
        // get maxTimer(): number { return 5; };
        // get maxTimer(): number { return Math.floor(5 * Math.pow(this.level, 0.66666)) };
        get: function () { return 5 + Math.pow(3, this.level - 1); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Pokemon.prototype, "mainType", {
        get: function () { return this.types[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "secondType", {
        get: function () { return this.types[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "starsString", {
        get: function () {
            switch (this.level) {
                case 2: return "Bronze 1";
                case 3: return "Silver 1";
                case 4: return "Gold 1";
                default: return "";
            }
        },
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
                                // const manaGain = Math.pow(2, this.level - 1);
                                // for (let i = 0; i < manaGain; i++) {
                                // let manaType: PokeType = !this.secondType
                                //     ? this.mainType
                                //     : (Math.random() < secondTypeProbability[this.level] ? this.secondType : this.mainType);
                                // setTimeout(() => {
                                //     this.main.manaPanel.addMana(manaType, 1);
                                //     this.card.createManaGainAnimation(manaType)
                                // }, i * 200 + (100 * Math.random()));
                                // }
                                // this.generateMana();
                                _this.card.updateFilled();
                            }
                        }, 
                        /* onDrop */ function (idHeld, idDropped) { return _this.main.joinPokemon(_this, idDropped); }, savedPokemon);
                        return [2 /*return*/];
                }
            });
        });
    };
    Pokemon.prototype.step = function () {
        if (this.timer < this.maxTimer) {
            this.timer++;
            this.generateMana();
        }
        this.card.updateFilled();
    };
    Pokemon.prototype.generateMana = function () {
        var manaType = this.getRandomManaType();
        this.main.pathPanel.addProgress(manaType);
        this.card.createManaGainAnimation(manaType);
    };
    Pokemon.prototype.getRandomManaType = function () {
        return !this.secondType
            ? this.mainType
            // : (Math.random() < secondTypeProbability[this.level] ? this.secondType : this.mainType);
            : (Math.random() < .5 ? this.secondType : this.mainType);
    };
    Pokemon.prototype.toJSON = function () {
        return { nr: this.nr, timer: this.timer, level: this.level };
    };
    return Pokemon;
}());
var Quests = [
    {
        manaRequired: { 'normal': 100 },
        exploreNumber: 50,
    }
];
var SavedData = /** @class */ (function () {
    function SavedData(pokemon, pokedex, 
    // public mana: { [key in PokeType]?: number },
    completedPaths, currentPath, lockType, increaseInFindingNewPokemon) {
        this.pokemon = pokemon;
        this.pokedex = pokedex;
        this.completedPaths = completedPaths;
        this.currentPath = currentPath;
        this.lockType = lockType;
        this.increaseInFindingNewPokemon = increaseInFindingNewPokemon;
    }
    SavedData.createNew = function () {
        return new SavedData([], // pokemon
        [], // pokedex
        1, // paths done
        undefined, // path,
        'none', // lock type
        0 // increase in finding new pokemon
        );
        // mana:
        // { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 },
    };
    SavedData.load = function () {
        var _a;
        var loaded = (_a = JSON.parse(localStorage.getItem('poke_saved_data'))) !== null && _a !== void 0 ? _a : SavedData.createNew();
        console.log({ loaded: loaded });
        if (!loaded.pokedex)
            loaded.pokedex = [];
        loaded.pokemon.forEach(function (x) { return loaded.pokedex[x.nr] = true; });
        return loaded;
    };
    SavedData.prototype.saveAll = function () {
        var saveObj = JSON.parse(JSON.stringify(this));
        if (saveObj.currentPath)
            saveObj.currentPath.wilds.forEach(function (x) { return delete x.div; });
        localStorage.setItem('poke_saved_data', JSON.stringify(saveObj));
    };
    return SavedData;
}());
var Smoke = /** @class */ (function () {
    function Smoke() {
    }
    // frames: Array<HTMLImageElement>;
    // constructor() {
    //     for (let i = 0; i < Smoke.smokeFrames.length; i++) {
    //         let img = new Image();
    //         img.src = Smoke.smokeFrames[i];
    //         this.frames.push(img);
    //     }
    // }
    Smoke.make = function (pos) {
        var smoke = $("<img class=\"smoke\">");
        smoke.css("left", pos.left);
        smoke.css("top", pos.top);
        $("body").append(smoke);
        var _loop_1 = function (i) {
            setTimeout(function () {
                if (i >= Smoke.smokeFrames.length)
                    smoke.remove();
                else
                    smoke.attr("src", Smoke.smokeFrames[i]);
            }, i * this_1.frameLenght);
        };
        var this_1 = this;
        for (var i = 0; i <= Smoke.smokeFrames.length; i++) {
            _loop_1(i);
        }
    };
    Smoke.frameLenght = 40;
    Smoke.smokeFrames = [
        "assets/ui/smoke_1.png",
        "assets/ui/smoke_2.png",
        "assets/ui/smoke_3.png",
        "assets/ui/smoke_4.png",
        "assets/ui/smoke_5.png",
        "assets/ui/smoke_6.png",
        "assets/ui/smoke_7.png",
        "assets/ui/smoke_8.png",
        "assets/ui/smoke_9.png",
        "assets/ui/smoke_10.png",
    ];
    return Smoke;
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
                            var pokemonImage = $("<img src=\"assets/pokemons/".concat(pokemon.nr, ".png\" title=\"").concat(pokemon.name, "\">"));
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
                        console.log({ typesByPokemon: this.typesByPokemon });
                        // console.log(typesByPokemon)
                        return [4 /*yield*/, fetch('../assets/data/pokemonsByType.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.pokemonsByType = json; })];
                    case 2:
                        // console.log(typesByPokemon)
                        _a.sent();
                        console.log({ pokemonsByType: this.pokemonsByType });
                        return [4 /*yield*/, fetch('../assets/data/evolutionsByPokemon.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.evolutionsByPokemon = json; })];
                    case 3:
                        _a.sent();
                        console.log({ evolutionsByPokemon: this.evolutionsByPokemon });
                        return [4 /*yield*/, fetch('../assets/data/prevolutionsByPokemon.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.prevolutionsByPokemon = json; })];
                    case 4:
                        _a.sent();
                        console.log({ prevolutionsByPokemon: this.prevolutionsByPokemon });
                        return [4 /*yield*/, fetch('../assets/data/rarityByPokemon.json')
                                .then(function (response) { return response.json(); })
                                .then(function (json) { return _this.rarityByPokemon = json; })];
                    case 5:
                        _a.sent();
                        console.log({ rarityByPokemon: this.rarityByPokemon });
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
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.distance = function (a, b) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var x1 = (_b = (_a = a.x) !== null && _a !== void 0 ? _a : a.left) !== null && _b !== void 0 ? _b : 0;
        var x2 = (_d = (_c = b.x) !== null && _c !== void 0 ? _c : b.left) !== null && _d !== void 0 ? _d : 0;
        var y1 = (_f = (_e = a.y) !== null && _e !== void 0 ? _e : a.top) !== null && _f !== void 0 ? _f : 0;
        var y2 = (_h = (_g = b.y) !== null && _g !== void 0 ? _g : b.top) !== null && _h !== void 0 ? _h : 0;
        return Math.hypot(x2 - x1, y2 - y1);
    };
    Util.shuffle = function (array) {
        var _a;
        var currentIndex = array.length;
        var randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            _a = [array[randomIndex], array[currentIndex]], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
    };
    Util.randomFromArray = function (arr) {
        if (arr.length === 0)
            return undefined;
        return arr[Math.floor(Math.random() * arr.length)];
    };
    Util.containsAny = function (arr1, arr2) {
        for (var i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i]))
                return true;
        }
        return false;
    };
    Util.gaussianRandom = function (mean, stdev) {
        if (mean === void 0) { mean = 0; }
        if (stdev === void 0) { stdev = 1; }
        var u = 1 - Math.random(); // Converting [0,1) to (0,1]
        var v = Math.random();
        var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        // Transform to the desired mean and standard deviation:
        return z * stdev + mean;
    };
    return Util;
}());
