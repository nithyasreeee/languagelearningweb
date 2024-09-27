// Responsive sidebar toggle for mobile devices
const sidebarToggle = document.createElement('div');
sidebarToggle.innerHTML = '&#9776;';  // Hamburger icon
sidebarToggle.classList.add('sidebar-toggle');

// Add the toggle button to the body
document.body.appendChild(sidebarToggle);

// Toggle sidebar visibility on small screens
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Adjust the sidebar and content layout on window resize
function adjustLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
        sidebar.classList.add('active'); // Keep sidebar visible on larger screens
    } else {
        sidebar.classList.remove('active'); // Hide on smaller screens
    }
}

// Run the layout adjustment function on page load and when resizing the window
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
