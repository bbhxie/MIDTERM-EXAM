let generatedOTP = ""; 

        function generateOTP() {
            generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
            console.log("Generated OTP: " + generatedOTP); 

            alert("Generated OTP (for testing): " + generatedOTP);  
        }

        function verifyOTP() {
            const enteredOTP = document.getElementById("otp1").value 

            console.log("Entered OTP: " + enteredOTP);  

            if (enteredOTP === generatedOTP) {
                document.getElementById("verificationMessage").innerText = "OTP verified successfully!";
                document.getElementById("otpForm").reset();
                window.location.assign('login.html');  
            } else {
                document.getElementById("verificationMessage").innerText = "Incorrect OTP. Please try again.";
            }
        }

        window.onload = generateOTP;