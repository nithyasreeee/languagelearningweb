document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you can add your authentication logic
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Redirect to selection page
    document.querySelector('.container').style.display = 'none'; // Hide the login form
    document.querySelector('.selection-container').style.display = 'block'; // Show selection page
});

function redirectTo(role) {
    window.location.href = role; // Redirect to the chosen page (tutor.html or student.html)
}
