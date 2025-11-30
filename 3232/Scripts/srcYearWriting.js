let base = "2026";
let i = 1;
let timer = 0;

function scr_start_write() {
    const int = setInterval(function() {
        let doc = document.querySelector(".year");

        let output = base.substring(0, i);
        output = output.padStart(i, "0");

        doc.innerHTML = output;
        i++;
        const aud = document.getElementById("sndClick");
        const copy = aud.cloneNode();
        copy.play();
        if (i > base.length) {
            clearInterval(int);
            const int2 = setInterval(() => {
                scr_active_buttons(true);
                const aud = document.getElementById("sndSparkles");
                const copy = aud.cloneNode();
                copy.play();
                clearInterval(int2);

                const int3 = setInterval(() => {
                    const aud = document.getElementById("musStars");
                    aud.loop = true;
                    aud.volume = 0.5;
                    aud.play()
                    clearInterval(int3);
                }, 5000);
            }, 1000);
        }
    }, 500);     
}

const wait = setInterval(function() {
    clearInterval(wait);
    scr_start_write();
}, 1000)

