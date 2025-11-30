const path = "Resources/Puzzle/";

const rows_lets = [
    ["A", "H", "S", "C", "D"],
    ["H", "M", "N", "T", "P"],
    ["L", "Q", "R", "S", "A"],
    ["S", "U", "R", "W", "X"],
    ["V", "L", "M", "N", "O"],
    ["0", "B", "C", "D", "E"],
    ["E", "F", "G", "L", "I"],
    ["S", "E", "K", "M", "L"],
];
const sounds = [
    document.getElementById("sndStar0"),
    document.getElementById("sndStar1"),
    document.getElementById("sndStar2"),
    document.getElementById("sndStar3"),
    document.getElementById("sndStar4"),
];

function scr_active_buttons(show) {
    const puzzle = document.getElementById("puzzle");

    if (show) {
        puzzle.style.display = "flex";
        document.getElementById("puzzle").classList.add("cosmic");
    } else {
        puzzle.style.display = "none";
    }
}
scr_active_buttons(false);
const puzzleContainer = document.getElementById("puzzle");

rows_lets.forEach((letters) => {
    const button = document.createElement("div");
    button.classList.add("letter-btn");

    let index = 0;

    button.style.backgroundImage = `url(${path}${letters[index]}.png)`;

    button.addEventListener("click", () => {
        index++;
        if (index >= letters.length) index = 0;

        button.classList.remove("animate");
        void button.offsetWidth;
        button.classList.add("animate");

        const aud_ind = Math.floor(Math.random() * 3)
        const copy = sounds[aud_ind].cloneNode(true);
        copy.play();

        button.style.backgroundImage = `url(${path}${letters[index]}.png)`;
    });

    puzzleContainer.appendChild(button);
});
