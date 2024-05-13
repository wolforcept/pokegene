class StarterSelect {

    async show(callback: (nr: number) => void) {
        console.log("showing starter")
        const div = $(`<div class="pickStarter">Choose Your Starter:</div>`)
        let chosenNr: number = null;
        const appendStarter = (subdiv, pokemon: PokemonStaticData) => {
            const pokemonDiv = $(`<div class="starter"></div>`)
            const pokemonName = $(`<div class="name">${pokemon.name}</div>`)
            const pokemonImage = $(`<img src="assets/pokemons/${pokemon.nr}.png" title="${pokemon.name}">`)
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
            pokemonDiv.on("click", () => {
                $('.starter').hide();
                pokemonDiv.show();
                chosenNr = pokemon.nr;
                confirmButton.show();
                cancelButton.show();
                // starterButtonWrapper.append($(`<div>CHOOSE ME</div>`))
            })
        }
        const subdiv1 = $(`<div class="starterSubdiv"></div>`)
        const subdiv2 = $(`<div class="starterSubdiv"></div>`)
        div.append(subdiv1);
        div.append(subdiv2);
        appendStarter(subdiv1, await StaticData.loadPokemon(1))
        appendStarter(subdiv1, await StaticData.loadPokemon(4))
        appendStarter(subdiv2, await StaticData.loadPokemon(7))
        appendStarter(subdiv2, await StaticData.loadPokemon(25))

        const confirmButton = $(`<div class="starterButton starterConfirm">Confirm</div>`);
        const cancelButton = $(`<div class="starterButton starterCancel">Cancel</div>`);
        div.append(confirmButton);
        div.append(cancelButton);
        confirmButton.hide();
        cancelButton.hide();

        cancelButton.on('click', () => {
            chosenNr = null;
            $('.starter').show();
            confirmButton.hide();
            cancelButton.hide();
        });

        confirmButton.on('click', () => {
            callback(chosenNr);
            // cookieData_addPokemon(chosen);
            $('.pickStarter').hide();
            // startGame();
        });

        const wrapper = $(`<div class="pickStarterWrapper"></div>`)
        wrapper.append(div);
        $("body").append(wrapper);
    }
}