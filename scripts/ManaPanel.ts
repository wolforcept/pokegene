class ManaPanel {

    // mana: { [key in PokeType]: number } = { 'normal': 0, 'grass': 0, 'poison': 0, 'fire': 0, 'flying': 0, 'water': 0, 'bug': 0, 'electric': 0, 'ground': 0, 'fairy': 0, 'fighting': 0, 'psychic': 0, 'rock': 0, 'steel': 0, 'ice': 0, 'ghost': 0, 'dragon': 0, 'dark': 0 };
    // level = 1;

    // div: JQuery<HTMLElement>;
    // title: JQuery<HTMLElement>;
    // percents: JQuery<HTMLElement>;

    // get nextTarget() { return Math.floor((4 + Math.pow(this.level / 2, 1.1)) / 2); }

    // constructor(
    //     private main: Main,
    //     loadedData?: SavedData
    // ) {
    // if (loadedData) {
    // PokeTypes.forEach(type => this.mana[type] = loadedData.mana[type]);
    // this.level = loadedData.level;
    // }
    // }

    // init() {

    // console.log(this.main.lockType)
    // const leftButtonImage = $(`<img src="assets/ui/lock_${this.main.lockType}.svg">`);
    // const leftButtonClick = () => {
    //     if (this.main.lockType === 'none')
    //         this.main.lockType = 'card';
    //     else if (this.main.lockType === 'card')
    //         this.main.lockType = 'ball';
    //     else if (this.main.lockType === 'ball')
    //         this.main.lockType = 'hard';
    //     else if (this.main.lockType === 'hard')
    //         this.main.lockType = 'none';
    //     leftButtonImage.attr('src', `assets/ui/lock_${this.main.lockType}.svg`);
    //     this.main.saveAll();
    // }

    // this.title = $('<div id="manaBar_Title"></div>');
    // const top = $('<div id="manaBar_top"></div>');
    // top.append(this.title);

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

    // const wrapper = $('<div id="manaBar_wrapper"></div>');
    // wrapper.append(this.div);
    // $('body').append(wrapper);
    // this.update();

    // this.createManaDisplay();
    // TODO this.div.on('click', ()=>this.main.manaCli);
    // }

    // update() {
    //     const mana = this.mana;
    //     let nextTarget = this.nextTarget;
    //     // PokeTypes.forEach(type => sum += mana[type] ?? 0);
    //     let percentPrev = 0;
    //     let rollingSum = 0;
    //     let gradientString = '';
    //     const orderedTypes = [...PokeTypes].sort((a, b) => mana[a] - mana[b]);
    //     orderedTypes.forEach(type => {
    //         if (mana[type] && mana[type] > 0) {
    //             rollingSum += mana[type];
    //             const color = Colors[type][0];
    //             const percent = Math.floor(100 * rollingSum / nextTarget);
    //             gradientString += `, #${color} ${percentPrev}%, #${color} ${percent}%`;
    //             percentPrev = percent;
    //         }
    //     })
    //     const gradient = `linear-gradient(90deg${gradientString}, #00000000 ${percentPrev}%, #00000000 100%)`;
    //     if (!this.percents) return;
    //     this.percents.css('background', gradient);
    //     this.percents.html(`${rollingSum} / ${nextTarget}`)
    //     if (rollingSum >= nextTarget) {
    //         // this.main.explore();
    //     }
    //     // manaBar.css('width', '500px');
    // }

    // addMana(type: PokeType, amount = 1) {
    //     if (!this.mana[type])
    //         this.mana[type] = 0;
    //     this.mana[type] += amount;
    //     this.update();
    // }

    // removeAllMana() {
    //     PokeTypes.forEach(type => this.mana[type] = 0);
    //     this.update()
    // }

    // createManaDisplay() {
    //     let currentAction = null;

    //     const div = $(`<div id="manaDisplay"></div>`);
    //     // const displays = [];
    //     let line = $(`<div class="manaDisplayLine"></div>`);
    //     let n = 0;
    //     PokeTypes.forEach(type => {

    //         const display = $(`<div class="manaDisplay"></div>`);
    //         const displayImg = $(`<img src="./assets/types/${type}.png" height="32px">`);
    //         const displayText = $(`<div class="manaDisplayText" id="manaDisplay_${type}">0</div>`);
    //         display.append(displayImg);
    //         display.append(displayText);

    //         display.on('click', () => {
    //             if (currentAction === "convert") {
    //                 // cookieData_convertMana(type);
    //                 // updateManaDisplay();
    //             }

    //             if (currentAction === "invest") {
    //                 // cookieData_investMana(type);
    //                 // updateManaDisplay();
    //             }

    //             if (currentAction === "research") {
    //                 // cookieData_researchMana(type);
    //                 // updateManaDisplay();
    //             }
    //         })

    //         line.append(display);
    //         n++;
    //         if (n === 3) {
    //             div.append(line);
    //             n = 0;
    //             line = $(`<div class="manaDisplayLine"></div>`);
    //         }

    //         // displays.push(display);
    //     })

    //     const researchButton = $(`<div class="button off">Research</div>`);
    //     researchButton.css('background-color', 'rgb(200, 80, 0)');
    //     researchButton.on('click', () => {
    //         currentAction = "research";
    //         $("#manaDisplay .button").addClass('off');
    //         researchButton.removeClass('off');
    //     });

    //     const investButton = $(`<div class="button off">Invest</div>`);
    //     investButton.css('background-color', 'rgb(44, 161, 40)');
    //     investButton.on('click', () => {
    //         currentAction = "invest";
    //         $("#manaDisplay .button").addClass('off');
    //         investButton.removeClass('off');
    //     });

    //     const convertButton = $(`<div class="button off">Convert</div>`);
    //     convertButton.css('background-color', 'rgb(65, 65, 200)');
    //     convertButton.on('click', () => {
    //         currentAction = "convert";
    //         $("#manaDisplay .button").addClass('off');
    //         convertButton.removeClass('off');
    //     });

    //     line = $(`<div class="manaDisplayLine"></div>`);
    //     line.append(investButton);
    //     line.append(convertButton);
    //     line.append(researchButton);
    //     div.append(line);

    //     // manaDisplay = div;
    //     // manaDisplay.displays = displays;
    //     $(`body`).append(div);
    //     div.draggable();
    //     // updateManaDisplay();
    //     investButton.click();
    // }
}