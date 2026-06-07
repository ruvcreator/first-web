function showSection(id) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function hideAll() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.display = "none";
    });
}