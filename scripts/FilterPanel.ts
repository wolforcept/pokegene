
class FilterPanel {

    private div: JQuery<HTMLElement>;
    private filter: PokeType;

    constructor() {
    }

    init() {
        this.div = $(`<div id="filterPanel"></div>`);
        const button = $(`<div class="button"></div>`);

        // const content = $(`<div class="filters"></div>`);
        PokeTypes.forEach((type, i) => {
            const butt = $(`<div class="listItem filter ${type}"><img src="assets/types/${type}.png"></div>`);
            let lastClick = 0;
            butt.on('click', () => {
                const now = Date.now();
                if (now - lastClick < 250) {
                    // $('.filter').addClass('off');
                    // butt.removeClass('off');
                    PokeTypes.forEach(t => this.toggle(t, false));
                    this.toggle(type, true)
                } else {
                    // if (butt.hasClass('off')) {
                    // butt.removeClass('off');
                    this.toggle(type, butt.hasClass('off'))
                    // } else {
                    // butt.addClass('off');
                    // this.toggle(type, false)
                    // }
                }
                lastClick = now;
            })
            this.div.append(butt);

            if (i == 8) { // all on
                const butt = $(`<div class="listItem"><img src="assets/types/any.png"></div>`);
                butt.on('click', () => {
                    const willBe = butt.hasClass('off');
                    if (willBe) butt.removeClass('off')
                    else butt.addClass('off')
                    PokeTypes.forEach(t => this.toggle(t, willBe));
                });
                this.div.append(butt);
            }
        })

        // all off
        let filtersAreVisible = true;
        const butt = $(`<div class="filterArrow"><img class="arrowLeft" src="assets/ui/arrow_left.svg"><img class="arrowRight" src="assets/ui/arrow_right.svg"></div>`);
        butt.on('click', () => {
            filtersAreVisible = !filtersAreVisible;
            if (filtersAreVisible) {
                $('.listItem').show();
                $(`.arrowLeft`).hide();
                $(`.arrowRight`).show();
            } else {
                $('.listItem').hide();
                $(`.arrowLeft`).show();
                $(`.arrowRight`).hide();
            }
        })
        this.div.append(butt);
        setTimeout(() => {
            $(`.arrowLeft`).hide();
        }, 200);

        const wrapper = $(`<div id="filterPanelWrapper"></div>`);
        wrapper.append(this.div);
        $("body").append(wrapper);
    }

    toggle(type: PokeType, isVisible: boolean) {
        if (isVisible) {
            $(`.pokemon.${type}`).show();
            $(`.filter.${type}`).removeClass('off');
        } else {
            $(`.pokemon.${type}`).hide();
            $(`.filter.${type}`).addClass('off');
        }
    }
}