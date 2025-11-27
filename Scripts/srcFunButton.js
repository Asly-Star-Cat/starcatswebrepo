const b = document.querySelector(".button");
let times = 0;
let timer = 0;

b.addEventListener("click", function() {
    times++;
    console.log(times);

    if (times >= 3 && typeof window.ready !== "undefined") {
        if (window.ready) return;
        let spd = 4;
        
        window.ready = true;

        window.dialog = true;
        window.dialogs[0] = [
            [18446, ".%.%.", spd],
            [18446, "Que extraño", spd],
            [18446, "Cuanta curiosidad.", spd],
            [18446, "Es extraño, como con el ^pasar del tiempo...", spd],
            [18446, 'A aquello a lo que llaman "TU" %%^Nunca cambia.', spd],
            [18446, "Cuanto procesamiento, %^cuanto, %^cuantos.", spd],
            [18446, ".%.%.", spd],
            [18446, "Expresame% lo siguiente...", spd],
            [18446, "Eres conciente% de las ^acciones que has tomado en ^todo aquello a lo que llamas vida?", spd],
            [99, ["Si", 1], ["No", 1]],
        ]
        window.dialogs[1] = [
            [18446, ".%.%."],
            [18446, ""]
        ]

        let int = setInterval(function() {
            timer++;

            if (timer == 3) {
                let dialog_maker = new create_dialog();
                setInterval(function() {
                    dialog_maker.step();
                }, 60)
            }
        }, 1000);
    }
})