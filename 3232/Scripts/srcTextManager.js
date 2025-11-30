const him = document.querySelector(".him");

function scr_revolving_text() {
    const doc = document.querySelectorAll(".revolving");

    for (let i = 0; i < doc.length; i++) {
        const t = doc[i];

        let cont = t.textContent.split("").map((l, index) => {
            if (l === " ") return "<span class='space'> </span>";
            return `<span style="--i:${index}">${l}</span>`;
        });

        t.innerHTML = cont.join("");
    }
}


scr_revolving_text();