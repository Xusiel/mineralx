document.querySelectorAll('.mineral-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Mineral details: ' + card.querySelector('h3').textContent);
    });
});
