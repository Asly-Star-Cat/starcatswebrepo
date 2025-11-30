window.ready = false;
window.dialogs = [];
window.dia_index = 7;

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.key === "F12") e.preventDefault();
});