
const pieceElements = document.querySelectorAll("[piece]");

for (const piece of pieceElements) {
    piece, addEventListener("click", clickHandler, { once: false });
}
