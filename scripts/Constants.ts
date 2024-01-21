const Colors: { [key in PokeType]: Array<string> } = {
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
}

type PokeType = 'normal' | 'grass' | 'poison' | 'fire' | 'flying' | 'water' | 'bug' | 'electric' | 'ground' | 'fairy' | 'fighting' | 'psychic' | 'rock' | 'steel' | 'ice' | 'ghost' | 'dragon' | 'dark';

const PokeTypes = Object.keys(Colors);
