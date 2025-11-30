const b = document.querySelector(".button");
let times = 0;
let timer = 0;

b.addEventListener("click", function() {
    times++;
    const aud = document.getElementById("sndText");
    const copy = aud.cloneNode();
    copy.play();
    if (times >= 3 && typeof window.ready !== "undefined") {
        if (window.ready) return;
        let spd = 2;
        
        window.ready = true;

        window.dialogs[0] = [
            [18446, ".%.%.", spd],
            [18446, "Que curioso..", spd],
            [18446, "Cuánta es% la curiosidad &que llevas ahora mismo...", spd],
            [18446, "Es interesante,% como con &el pasar del tiempo...", spd],
            [18446, 'Aquello que llamamos "TÚ" %%&Nunca cambia.', spd],
            [18446, "Cambian los días,% &cambian las noches% &Pero TÚ sigues ahí.", spd],
            [18446, ".%.%.", spd],
            [18446, "Escucha...", spd],
            [18446, "Hay algo esperando en &el otro lado", spd],
            [18446, "Podrías alcanzarlo,% &podrías no.", spd],
            [18446, "Pero antes, necesito &que respondas lo &siguiente..", spd],
            [18446, "...", spd, 1],
            [18446, "Eres consciente% de las &acciones que tomas &en tu vida?", spd],
            [99, ["Si", 1], ["No", 2]],
        ]
        window.dialogs[1] = [
            [18446, ".%.%.", spd],
            [18446, "Eres CONSCIENTE% de las &consecuencias de tus acciones?", spd],
            [99, ["Si", 3], ["No", 4]],
        ]
        window.dialogs[2] = [
            [18446, ".%.%.", spd],
            [18446, "Interesante respuesta...", spd],
            [18446, "A veces elegimos% &sin darnos cuenta &de lo que hacemos", spd],
            [18446, ".%.", spd],
            [18446, "Pero está bien.% &Lo importante es &mirar ahora.", spd],
            [18446, ".%%", spd],
            [18446, "Eres consciente% de las &consecuencias de tus &acciones?", spd],
            [99, ["Si", 3], ["No", 4]],
        ]

        window.dialogs[3] = [
           [18446, ".%..", spd],
           [18446, "Continuemos.", spd],
           [18446, "Qué prefieres% &Jamón &&&&&&o Queso?", spd],
           [99, ["Jamón", 5], ["Queso", 6]],
        ]
        window.dialogs[4] = [
            [18446, "..%.", spd],
            [18446, "Continuemos.% &Con algo mas simple.", spd],
            [18446, "Qué prefieres% &Jamón &&o queso?", spd],
            [99, ["Jamón", 5], ["Queso", 6]],
        ]

        window.dialogs[5] = [
            [18446, "...%% &Curioso%% &No tan curioso", spd],
            [18446, "Por último,% &Cuál es tu mayor sueño?", spd],
            [99, ["Si", 7], ["No", 7]],
        ]
        window.dialogs[6] = [
            [18446, "matate", 0],
            [18446, "Por último,% &Cuál es tu mayor sueño?", spd],
            [99, ["Si", 7], ["No", 7]],
        ]

        window.dialogs[7] = [
            [18446, "...", spd],
            [18446, "No podría saberlo,% &y tampoco imaginarlo &en este estado.", spd],
            [18446, "Pero tus respuestas &podrían valer,% &podrían no", spd],
            [18446, ".%.%.%.%.", spd],
            [18446, "A decír verdad,% todo &lo posterior será &descartado.", spd],
            [18446, "Ya las decisiones %fueron tomadas, aunque &no las vayas a notar.", spd],
            [18446, "Bucles se repiten,% &con parar% &sin parar.", spd],
            [18446, "...", spd],
            [18446, "Se que esperas algo mas...", spd],
            [18446, "Hay mejores cosas que hacer,% &si fuera la verdad.", spd],
            [18446, "Escucha% &persona", spd],
            [18446, "Quiero que respondas &lo siguiente.", spd],
            [18446, "Qué hay mas alla de &las estrellas?", spd],
            [18446, "Qué hay mas alla,% &de lo que nosotros &podemos ver?", spd],
            [18446, "Piensa.%.%%.%%%%%% &Tú Lo crees?", spd],
            [18446, "Mira hacia arriba.%.%.%%%%", spd],
            [18446, "Bueno...% el techo &no ayuda demasiado..", spd],
            [18446, "Te ayudaré esta vez,% &espero que sirva.", spd, 2],
            [18446, "Nos vemos pronto.%%", 5, 3],
            [18446, "", spd, 4],
        ]

        let int = setInterval(function() {
            timer++;

            if (timer == 3) {
                window.dialog_maker = new create_dialog();
                setInterval(function() {
                    dialog_maker.step();
                    dialog_maker.update();
                }, 60)
            }
        }, 1000);
    }
})