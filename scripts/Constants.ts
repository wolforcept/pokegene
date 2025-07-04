const levelStars = [
    [],
    [], // level 1 <- starting level
    /*2*/["bronze"],
    /*3*/["bronze", "bronze"],
    /*4*/["bronze", "bronze", "bronze"],
    /*5*/["silver"],
    /*6*/["silver", "silver"],
    /*7*/["silver", "silver", "silver"],
    /*8*/["gold"],
    /*9*/["gold", "gold"],
    /*10*/["gold", "gold", "gold"],
]

const ColorsAny = ['FFFFFF', '000000BB'];
const Colors: { [key in PokeType]: Array<string> } = {
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
}

type PokeType = 'normal' | 'grass' | 'poison' | 'fire' | 'flying' | 'water' | 'bug' | 'electric' | 'ground' | 'fairy' | 'fighting' | 'psychic' | 'rock' | 'steel' | 'ice' | 'ghost' | 'dragon' | 'dark';

const PokeTypes = Object.keys(Colors) as Array<PokeType>;

const PokemonNumberByRegion = {
    "Kanto": { from: 1, to: 151 },
    "Johto": { from: 152, to: 251 },
    "Hoenn": { from: 252, to: 386 },
    "Sinnoh": { from: 387, to: 493 },
    "Unova": { from: 494, to: 649 },
    "Kalos": { from: 650, to: 721 },
    "Alola": { from: 722, to: 809 },
    "Galar": { from: 910, to: 905 },
    "Paldea": { from: 906, to: 1025 },
}

const boatAffixes: Array<Affix> = [
    { minLevel:  1, maxLevel: 100, name: "Anne", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "Aqua", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "Libra", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "Cactus", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "Libra", adds: [] },
    { minLevel: 25, maxLevel: 100, name: "Prime", adds: [{ type: "fighting", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Tidal", adds: [] },
    { minLevel: 20, maxLevel: 100, name: "Flower", adds: [{ type: "grass", amount: 2 }] },
    { minLevel: 40, maxLevel: 100, name: "Royal", adds: [{ type: "dragon", amount: 0.5 }] },
];

const cityAffixes: Array<Affix> = [
    { minLevel:  1, maxLevel: 100, name: "Accumula", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Alfornada", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Ambrette", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Anistar", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Anville", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Aquacorde", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Artazon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Aspertia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Azalea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Ballonlea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Black", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Blackthorn", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "CaboPoco", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Camphrier", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Canalave", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cascarrafa", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Castelia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Celadon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Celestic", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cerulean", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cherrygrove", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cianwood", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Circhester", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cinnabar", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Guren", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cortondo", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Coumarine", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Couriway", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cyllage", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Dendemille", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Dewford", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Diamond", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Driftveil", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Ecruteak", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Eterna", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "EverGrande", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Fallarbor", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "FightArea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Floaroma", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Floccesy", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Fortree", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Freezington", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Frontier", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Fuchsia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Geosenge", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Goldenrod", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Hammerlocke", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Hau'oli", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Heahea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Hearthome", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Hulbury", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Humilau", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Icirrus", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Iki", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Jubilife", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Jubilife", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Kiloude", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Konikoni", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Lacunosa", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Lavaridge", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Lavender", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Laverre", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Lentimas", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Levincia", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Littleroot", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Lilycove", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "LosPlatos", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Lumiose", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Mahogany", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Malie", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Mauville", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Medali", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Mesagoza", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Mistralton", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Montenevera", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Mossdeep", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Mossui", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Motostoke", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Nacrene", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "NewBark", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Nimbasa", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Nuvema", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Oldale", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Olivine", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Opelucid", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Oreburgh", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Pacifidlog", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Pallet", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Paniola", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Pastoria", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Pearl", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Petalburg", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Pewter", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Po", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "PortoMarinada", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Postwick", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "ResortArea", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Rustboro", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Saffron", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Sandgem", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Santalune", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Seafolk", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Shalour", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Slateport", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Snowbelle", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Snowpoint", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Solaceon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Sootopolis", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Spikemuth", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Striaton", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Sunyshore", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Tapu", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Turffield", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Twinleaf", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Undella", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Vaniville", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Veilstone", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Verdanturf", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Vermilion", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Violet", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Virbank", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Viridian", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Wedgehurst", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Wyndon", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Zapapico", adds: [{ type: "normal", amount: 0.5 }] },
];

const mountainAffixes: Array<Affix> = [
    { minLevel: 10, maxLevel: 100, name: "Chimney", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 30, maxLevel: 100, name: "Moon", adds: [{ type: "fairy", amount: 2 }] },
    { minLevel: 35, maxLevel: 100, name: "Avalanche", adds: [{ type: "water" }, { type: "ice", amount: 2 }] },
    { minLevel: 40, maxLevel: 100, name: "Battle", adds: [{ type: "dragon", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Blaze", adds: [{ type: "fire", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Clear", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "Cleft", adds: [] },
    { minLevel: 35, maxLevel: 100, name: "Freeze", adds: [{ type: "ice", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Green", adds: [{ type: "grass", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Horn", adds: [{ type: "normal" }, { type: "bug", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Lanakila", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "Mistral", adds: [{ type: "normal" }] },
    { minLevel: 10, maxLevel: 100, name: "Molteau", adds: [{ type: "fire", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Mortar", adds: [] },
    { minLevel: 30, maxLevel: 100, name: "Moonview", adds: [{ type: "fairy", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Pyre", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 35, maxLevel: 100, name: "Snowfall", adds: [{ type: "ice", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Shady", adds: [{ type: "ghost", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Spirit", adds: [{ type: "ghost", amount: 2 }] },
    { minLevel: 50, maxLevel: 100, name: "Steel", adds: [{ type: "steel", amount: 2 }] },
];

const pathPrefixes: Array<Affix> = [
    { minLevel:  1, maxLevel: 100, name: "{city} {any}", adds: [{ type: "normal", amount: 0.5 }] },
    { minLevel:  1, maxLevel: 100, name: "Cave of {any}", adds: [{ type: "rock" }, { type: "ground", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Meteor {any}", adds: [{ type: "fire" }, { type: "flying" }] },
    { minLevel: 10, maxLevel: 100, name: "Magma {any}", adds: [{ type: "fire", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Venom {any}", adds: [{ type: "poison", amount: 2 }] },
    { minLevel: 25, maxLevel: 100, name: "Warring {any}", adds: [{ type: "fighting", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Rocky {any}", adds: [{ type: "rock", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Fire {any}", adds: [{ type: "fire", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Bloom {any}", adds: [{ type: "grass", amount: 2 }] },
    { minLevel: 10, maxLevel: 100, name: "Poison {any}", adds: [{ type: "poison", amount: 3 }] },
    { minLevel: 50, maxLevel: 100, name: "Iron {any}", adds: [{ type: "steel", amount: 3 }] },
    { minLevel: 15, maxLevel: 100, name: "Puzzle {any}", adds: [{ type: "psychic", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Sky {any}", adds: [{ type: "flying", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Ghost {any}", adds: [{ type: "ghost" }] },
    { minLevel: 35, maxLevel: 100, name: "Snow {any}", adds: [{ type: "ice", amount: 3 }, { type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "Clay {any}", adds: [{ type: "ground" }] },
    { minLevel: 15, maxLevel: 100, name: "Rainbow {any}", adds: [{ type: "grass" }, { type: "psychic" }] },
    { minLevel: 40, maxLevel: 100, name: "Twist {any}", adds: [{ type: "psychic", amount: 2 }, { type: "dragon", amount: 1 }] },
    { minLevel:  1, maxLevel: 100, name: "Rock {any}", adds: [{ type: "rock", amount: 2 }] },
    { minLevel: 50, maxLevel: 100, name: "Unknown {any}", adds: [{ type: "dark" }] },
    { minLevel:  1, maxLevel: 100, name: "Giant {any}", adds: [{ type: "flying" }] },
    { minLevel: 10, maxLevel: 100, name: "Ember {any}", adds: [{ type: "fire" }] },
    { minLevel: 35, maxLevel: 100, name: "Frozen {any}", adds: [{ type: "ice" }] },
    { minLevel: 35, maxLevel: 100, name: "Freezing {any}", adds: [{ type: "ice" }, { type: "water" }] },
    { minLevel: 30, maxLevel: 100, name: "Glittering {any}", adds: [{ type: "fairy", amount: 2 }] },
    { minLevel: 30, maxLevel: 100, name: "Grace {any}", adds: [{ type: "fairy" }] },
    { minLevel: 10, maxLevel: 100, name: "Charged {any}", adds: [{ type: "electric" }] },
    { minLevel: 50, maxLevel: 100, name: "Dark {any}", adds: [{ type: "dark", amount: 2 }, { type: "ghost" }] },
    { minLevel: 20, maxLevel: 100, name: "Mirage {any}", adds: [{ type: "ghost" }] },
    { minLevel:  1, maxLevel: 100, name: "Great {any}", adds: [{ type: "flying" }] },
    { minLevel: 35, maxLevel: 100, name: "Ice {any}", adds: [{ type: "ice", amount: 2 }] },
    { minLevel: 40, maxLevel: 100, name: "Dragon {any}", adds: [{ type: "dragon", amount: 2 }] },
    { minLevel:  1, maxLevel: 100, name: "Mt {mt}", adds: [{ type: "normal", amount: 0.5 }], final: true },
    { minLevel:  5, maxLevel: 100, name: "S.S. {boat}", adds: [{ type: "water" }], final: true },
    { minLevel: 30, maxLevel: 100, name: "Safari Zone", adds: [{ type: "flying" }, { type: "grass" }, { type: "water" }, { type: "normal" }, { type: "poison" }, { type: "rock" }, { type: "ground" }], final: true },
    { minLevel:  1, maxLevel: 100, name: "{city} Grasslands", adds: [{ type: "grass" }, { type: "bug" }], final: true },
    { minLevel:  1, maxLevel: 100, name: "Cape of {city}", adds: [{ type: "normal", amount: 0.3 }], final: true },
    { minLevel:  1, maxLevel: 100, name: "Great {any} of {city}", adds: [] },
]

const pathSufixes: Array<Affix> = [
    { minLevel:  1, maxLevel: 100, name: "{any} of {any}", adds: [] },
    { minLevel:  1, maxLevel: 100, name: "{any} and {any}", adds: [] },
    { minLevel: 25, maxLevel: 100, name: "Ring", adds: [{ type: "fighting" }] },
    { minLevel: 25, maxLevel: 100, name: "Arena", adds: [{ type: "fighting", amount: 2 }] },
    { minLevel: 20, maxLevel: 100, name: "Blight", adds: [{ type: "poison", amount: 2 }, { type: "ghost", amount: 2 }] },
    { minLevel:  10, maxLevel: 100, name: "Swamp", adds: [{ type: "poison", amount: 3 }] },
    { minLevel: 25, maxLevel: 100, name: "Pass", adds: [{ type: "normal" }, { type: "fighting" }] },
    { minLevel:  1, maxLevel: 100, name: "Stone", adds: [{ type: "rock" }] },
    { minLevel:  1, maxLevel: 100, name: "Hill", adds: [{ type: "normal" }, { type: "grass" }, { type: "bug" }] },
    { minLevel:  1, maxLevel: 100, name: "Pillar", adds: [{ type: "grass" }] },
    { minLevel:  1, maxLevel: 100, name: "Settlement", adds: [{ type: "grass" }] },
    { minLevel:  1, maxLevel: 100, name: "Peak", adds: [{ type: "flying" }] },
    { minLevel:  1, maxLevel: 100, name: "Mountain", adds: [{ type: "ground" }, { type: "rock" }] },
    { minLevel: 40, maxLevel: 100, name: "Volcano", adds: [{ type: "fire" }, { type: "dragon" }] },
    { minLevel:  1, maxLevel: 100, name: "Apex", adds: [{ type: "flying" }] },
    { minLevel:  5, maxLevel: 100, name: "Ship", adds: [{ type: "water" }] },
    { minLevel:  5, maxLevel: 100, name: "Ferry", adds: [{ type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "Tree", adds: [{ type: "grass" }, { type: "bug" }] },
    { minLevel:  5, maxLevel: 100, name: "Port", adds: [{ type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "Canyon", adds: [{ type: "ground" }] },
    { minLevel:  1, maxLevel: 100, name: "City", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Town", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Village", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Road", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Route", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Summit", adds: [{ type: "normal" }, { type: "flying" }] },
    { minLevel:  1, maxLevel: 100, name: "Tunnel", adds: [{ type: "rock" }, { type: "ground" }] },
    { minLevel: 50, maxLevel: 100, name: "Mines", adds: [{ type: "rock" }, { type: "steel" }] },
    { minLevel: 20, maxLevel: 100, name: "Ruins", adds: [{ type: "rock" }, { type: "ghost", amount: 0.1 }] },
    { minLevel:  5, maxLevel: 100, name: "Well", adds: [{ type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "Tower", adds: [{ type: "normal" }] },
    { minLevel:  5, maxLevel: 100, name: "Island", adds: [{ type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "Chamber", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Chasm", adds: [{ type: "ground" }] },
    { minLevel:  5, maxLevel: 100, name: "Islands", adds: [{ type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "City", adds: [{ type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "River", adds: [{ type: "water" }] },
    { minLevel:  5, maxLevel: 100, name: "Lake", adds: [{ type: "water" }] },
    { minLevel:  1, maxLevel: 100, name: "Mountains", adds: [{ type: "ground" }, { type: "rock" }, { type: "grass" }] },
    { minLevel:  1, maxLevel: 100, name: "Forest", adds: [{ type: "grass" }, { type: "bug" }] },
    { minLevel:  5, maxLevel: 100, name: "Bay", adds: [{ type: "water" }, { type: "flying" }] },
    { minLevel:  1, maxLevel: 100, name: "Ranch", adds: [{ type: "normal" }, { type: "grass" }] },
    { minLevel: 10, maxLevel: 100, name: "Complex", adds: [{ type: "poison" }] },
    { minLevel:  1, maxLevel: 100, name: "Room", adds: [{ type: "normal" }] },
    { minLevel: 10, maxLevel: 100, name: "Mansion", adds: [{ type: "normal" }, { type: "electric" }] },
    { minLevel:  1, maxLevel: 100, name: "Beach", adds: [{ type: "water" }, { type: "normal" }] },
    { minLevel:  1, maxLevel: 100, name: "Expansion", adds: [{ type: "ground" }, { type: "grass" }] },
    { minLevel:  5, maxLevel: 100, name: "Falls", adds: [{ type: "water" }, { type: "flying" }] },
]

const replaceables: Array<Replaceable> = [
    { replace: "{any}", arr: pathSufixes },
    { replace: "{boat}", arr: boatAffixes },
    { replace: "{city}", arr: cityAffixes },
    { replace: "{mt}", arr: mountainAffixes },
];
