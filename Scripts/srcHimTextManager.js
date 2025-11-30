const him = document.querySelector(".him");

function scr_revolving_text(str) {
    const doc = document.querySelectorAll(".revolving");

    for (let i = 0; i < doc.length; i++) {
        const t = doc[i];

        let cont = str.split("").map((l, i) => {
                if (l === " ") return "<span class='space'> </span>";
                return `<span style="--i:${i}">${l}</span>`
            }
        );
        doc.innerHTML = cont.join("");
    }
}

const b0 = document.querySelector(".yourbutton0");
const b1 = document.querySelector(".yourbutton1");


function scr_active_buttons(bool) {
    if (bool === true) {
        b0.classList.remove("hide");
        b1.classList.remove("hide");
    } else {
        b0.classList.add("hide");
        b1.classList.add("hide");       
    }
}

class create_dialog {
    constructor () {
        this.branch = window.dialogs[window.dia_index];
        this.index = -1;
        
        this.dialog = [];
        this.type = 0;
        this.i = 0;

        this.full_text = "";
        this.shown_text = "";
        this.waiter = 0;
        this.delay_timer = 0;
        
        this.can_text = true;
        
        this.ini_text_speed = 30;
        this.text_speed = this.ini_text_speed;
        this.next();
    }

    next() {
        this.branch = window.dialogs[window.dia_index];
        this.index++;
        
        if (this.index >= this.branch.length) {
            console.log("acabe");
            return;
        }

        this.i = 0;
        this.dialog = this.branch[this.index];
        this.type = this.dialog[0];
        this.event_val = 0;

        this.delay_timer = 0;
        this.options = [];
        this.opt_selected = null;
        this.prev_text = "";
        this.shown_text = "";

        if (this.type === 99) {
            this.delay_timer = 4;
            for (let j = 1; j < this.dialog.length; j++) {
                this.options.push(this.dialog[j]);
            }
            b0.onclick = () => window.dialog_maker.select_option(0);
            b1.onclick = () => window.dialog_maker.select_option(1);
            scr_active_buttons(true);
        } else { 
            this.full_text = this.dialog[1];
            this.ini_text_speed = this.dialog[2];
            this.event_val = this.dialog[3];
            
            this.text_speed = this.ini_text_speed;
            this.can_text = true;

            this.text_count = 0;
            this.waiter = 0;
        }
        this.event(this.event_val);
    }

    step() {
        if (this.type === 99) {
            if (this.delay_timer > 0) {
                this.delay_timer--;
            } else {
                this.delay_timer = 0;
                b0.innerHTML = this.options[0][0];
                b1.innerHTML = this.options[1][0];
            }

            if (this.opt_selected !== null) {
                let selected = this.opt_selected;
                this.opt_selected = null;

                this.index = -1;
                window.dia_index = this.options[selected][1];               
                
                b0.innerHTML = "";
                b1.innerHTML = "";
                this.options.length = 0;

                this.next();
                scr_active_buttons(false);
            }
        } else {
            if (this.can_text) {
                this.text_count++;

                if (this.text_count >= this.text_speed && this.i < this.full_text.length) {
                    if (this.waiter > 0) {
                        this.waiter--;
                        this.text_count = 0;  
                    } else {
                        let char = this.full_text[this.i];
                        if (char === "&") {
                            this.shown_text += "\n";
                            this.i++;
                        } else if (char === "%") {
                            this.waiter = 2;
                            this.i++;
                        } else {
                            if (char !== " ") {
                                const aud = document.getElementById("sndHIMTalk");
                                const copy = aud.cloneNode();
                                copy.play();
                            }
                            this.shown_text += char;
                            this.i++;
                        }

                        this.text_count = 0;
                    }
                } else if (this.i >= this.full_text.length) {
                    this.can_text = false;
                    this.text_count = 0;
                }
                console.log(this.shown_text);
            } else {
                this.text_count++;
                if (this.text_count >= 30) {
                    this.next();
                    this.text_count = 0;
                }
            }
        }
    }
    select_option(n) {
        if (this.type === 99) {
            this.opt_selected = n;
        }
    }

    update() {
        if (!this.prev_text) this.prev_text = "";
        if (this.shown_text === "") { him.innerHTML = ""; return; }
        if (this.shown_text.length === this.prev_text.length) return;

        const char = this.shown_text[this.shown_text.length - 1];
        const i = this.shown_text.length - 1;
        if (char === "\n") {
            him.insertAdjacentHTML("beforeend", "<br>");
            this.prev_text = this.shown_text;
            return;
        }

        let html = "";
        if (char === " ") {
            html = `<span class='space'> </span>`;
        } else {
            html = `<span class="revolving" style="--i:${i}"><span>${char}</span></span>`;
        }

        him.insertAdjacentHTML("beforeend", html);
        this.prev_text = this.shown_text;
    }
    
    event(val) {
        switch (val) {
            case 1 :   
                document.getElementById("bger").classList.add("bg_anim");
                window.main_aud = document.getElementById("musTalk");
                window.main_aud.loop = true;
                window.main_aud.volume = 0.5;
                window.main_aud.play();
            break;
            case 2 :
                document.getElementById("bger").classList.remove("bg_anim");       
            break;
            case 3 :
                document.getElementById("fader").classList.add("fade");
                const aud = document.getElementById("sndCymbal");
                const copy = aud.cloneNode();
                copy.play();
                window.main_aud.pause();
            break;
            case 4 :
                localStorage.setItem("redirectTo3232", "true");
                window.location.href = "3232/3232.html";
            break;
        }
    }
}



