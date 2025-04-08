document.querySelectorAll('.mineral-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Mineral details: ' + card.querySelector('h3').textContent);
    });
});
// script.js

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the search query and filter type
    let searchQuery = document.getElementById('search').value.toLowerCase();
    let filterType = document.getElementById('type').value;

    // Get all minerals and rocks
    let minerals = document.querySelectorAll('.mineral');
    let rocks = document.querySelectorAll('.rock');

    // Hide all minerals and rocks initially
    minerals.forEach(mineral => mineral.style.display = 'none');
    rocks.forEach(rock => rock.style.display = 'none');

    // Filter based on search query and selected type
    minerals.forEach(mineral => {
        let name = mineral.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchQuery) && (filterType === '' || mineral.dataset.type === filterType)) {
            mineral.style.display = 'block';
        }
    });

    rocks.forEach(rock => {
        let name = rock.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchQuery) && (filterType === '' || rock.dataset.type === filterType)) {
            rock.style.display = 'block';
        }
    });
});
