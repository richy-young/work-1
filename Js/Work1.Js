const userName = prompt("Hello Welcome, What is your name?");
if (userName) {
    alert("Hello " + userName + "! Welcome to Digi's Eatery Hub, I hope you enjoy your stay here.");
}

const signInForm = document.querySelector('.signin-form');
if (signInForm) {
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('signin-email').value.trim();
        const password = document.getElementById('signin-password').value.trim();

        if (!email || !password) {
            alert('Please enter both your email and password.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Signed in successfully as ' + email + '!');
        window.location.hash = '';
        signInForm.reset();
    });
}