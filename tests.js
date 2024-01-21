const fs = require('fs');

async function fetchall() {

    const out = [];

    for (let i = 1; i <= 1010; i++) {
        // for (let i = 1; i <= 3; i++) {

        await fetch(" https://pokeapi.co/api/v2/pokemon/" + i)
            .then((response) => {
                console.log("loading pokemon nr " + i)
                return response.json()
            })
            .then((data) => {

                data.types.forEach(_type => {
                    const type = _type.type.name
                    if (!out[i])
                        out[i] = []
                    out[i].push(type)
                    // console.log(type)
                });

                // fs.writeFile(i + '.json', JSON.stringify(data, null, 2), err => {
                //     if (err)
                //         console.error(err);
                // });
            });

        // const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
        // const response = await fetch(url);
        // const arrayBuffer = await response.arrayBuffer();
        // const buffer = Buffer.from(arrayBuffer);
        // fs.createWriteStream(`png/${i}.png`).write(buffer);

    }

    console.log(out)
    fs.writeFile('byType.json', JSON.stringify(out, null, 2), err => {
        if (err)
            console.error(err);
    });
}

fetchall()
