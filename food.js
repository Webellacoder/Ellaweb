
function showSection(meal) {
    // Hide all sections
    document.querySelectorAll('.meal-section').forEach(section => {
    section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(meal).style.display = 'block';
    }