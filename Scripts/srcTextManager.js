function scr_revolving_text() {
    const doc = document.querySelectorAll(".revolving");

    for (let i = 0; i < doc.length; i++) {
        const t = doc[i];

        let cont = t.textContent.split("").map((l, i) => {
                if (l === " ") return "<span class='space'> </span>";
                return `<span style="--i:${i}">${l}</span>`
            }
        );
        t.innerHTML = cont.join("");
    }
}

class create_dialog {
    constructor () {
        this.branch = window.dialogs[window.dia_index];
        this.index = -1;
        
        this.dialog = [];

        this.color_list = [
            ["/r/", "red"],
            ["/b/", "blue"],
            ["/g/", "green"],
        ];

        this.i = 0;

        this.full_text = "";
        this.shown_text = "";
        this.waiter = 0;

        this.can_text = true;
        
        this.ini_text_speed = 30;
        this.text_speed = this.ini_text_speed;
        this.next();
    }

    next() {
        this.index++;

        if (this.index >= this.branch.length) {
            console.log("acabe");
            return
        }
        
        this.dialog = this.branch[this.index];

        this.i = 0;
        this.full_text = this.dialog[1];
        this.ini_text_speed = this.dialog[2];
        
        this.shown_text = "";
        this.text_speed = this.ini_text_speed;
        this.text_count = 0;

        this.can_text = true;
    }

    step() {
        if (this.can_text) {
            this.text_count++;

            if (this.text_count >= this.text_speed && this.i < this.full_text.length) {
                if (this.waiter > 0) {
                    this.waiter--;
                    this.text_count = 0;  
                } else {
                    let char = this.full_text[this.i];

                    if (char === "%") {
                        this.waiter = 2;
                        this.i++;
                    } else {
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
            console.log(this.text_count);
            if (this.text_count >= 30) {
                this.next();
                this.text_count = 0;
            }
        }
    }
}

scr_revolving_text();

