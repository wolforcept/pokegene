interface Quest {
    manaRequired: { [key in PokeType]?: number };
    exploreNumber: number;
}

const Quests: Array<Quest> = [

    {
        manaRequired: { 'normal': 100 },
        exploreNumber: 50,
    }

]