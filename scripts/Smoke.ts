class Smoke {
    static frameLenght = 40;
    static smokeFrames = [
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

    // frames: Array<HTMLImageElement>;

    // constructor() {
    //     for (let i = 0; i < Smoke.smokeFrames.length; i++) {
    //         let img = new Image();
    //         img.src = Smoke.smokeFrames[i];
    //         this.frames.push(img);
    //     }
    // }

    static make(pos: JQuery.Coordinates) {
        const smoke = $(`<img class="smoke">`);
        smoke.css("left", pos.left);
        smoke.css("top", pos.top);
        $("body").append(smoke);

        for (let i = 0; i <= Smoke.smokeFrames.length; i++) {
            setTimeout(() => {
                if (i >= Smoke.smokeFrames.length)
                    smoke.remove();
                else
                    smoke.attr("src", Smoke.smokeFrames[i]);
            }, i * this.frameLenght);
        }
    }
}