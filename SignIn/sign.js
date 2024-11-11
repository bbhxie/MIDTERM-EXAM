const form = document.getElementById('signupForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });

        function validateForm() {
            let isValid = true;

            if (username.value.trim() === "") {
                setError('username', 'Username is required');
                isValid = false;
            } else {
                setSuccess('username');
            }

            if (email.value.trim() === "") {
                setError('email', 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                setError('email', 'Enter a valid email address');
                isValid = false;
            } else {
                setSuccess('email');
            }
            if (number.value.trim() === "") {
                setError('number', 'number is required');
                isValid = false;
            } else if (number.value.length < 12) {
                setError('number', 'invalid number');
                isValid = false;
            } else {
                setSuccess('password');
            }
            if (password.value.trim() === "") {
                setError('password', 'Password is required');
                isValid = false;
            } else if (password.value.length < 8) {
                setError('password', 'Password must be at least 8 characters');
                isValid = false;
            } else {
                setSuccess('password');
            }

            if (confirmPassword.value.trim() === "") {
                setError('confirmPassword', 'Confirm Password is required');
                isValid = false;
            } else if (confirmPassword.value !== password.value) {
                setError('confirmPassword', 'Passwords do not match');
                isValid = false;
            } else {
                setSuccess('confirmPassword');
            }

            if (isValid) {
                // Store form data in localStorage
                const userData = {
                    username: username.value.trim(),
                    email: email.value.trim(),
                    number: number.value.trim(),
                    password: password.value.trim() // Consider encrypting in a real application
                };
        
                localStorage.setItem('userData', JSON.stringify(userData));
        
                console.log('User Data:', userData);

                alert("Registration successful! You can now log in.");
                form.reset();
                window.location.assign('authentication.html');
            }
        
        }


        function setError(field, message) {
            const errorElement = document.getElementById(field + 'Error');
            errorElement.textContent = message;
        }


        function setSuccess(field) {
            const errorElement = document.getElementById(field + 'Error');
            errorElement.textContent = '';
        }


        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
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
        }
         