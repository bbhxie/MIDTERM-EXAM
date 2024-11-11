const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    login(); 
});

function login() {
    const loginEmail = document.getElementById('emailAddress').value.trim();
    const loginPassword = document.getElementById('password').value.trim(); // Corrected to match input ID
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
        document.getElementById('loginError').textContent = 'Mag register ka muna please';
        return;
    }
    if (storedUserData.email === loginEmail && storedUserData.password === loginPassword) {
            alert('K na wews!');
            console.log('Logged in as:', storedUserData.username);
 
        if (loginEmail.endsWith ('@admin.com')) {
            window.location.assign('../Admin/dasboard.html');
        } else if (loginEmail.endsWith ('@gmail.com')) {
            window.location.assign('../landing.html');
        }
   
    } else {
        document.getElementById('loginError').textContent = 'Bonak invalid teh';
    }
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passIcon = document.getElementById("pass-icon");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passIcon.src = "../images/eye_open.png"; 
    } else {
        passwordInput.type = "password";
        passIcon.src = "../images/eye_close.png";  
    }
};