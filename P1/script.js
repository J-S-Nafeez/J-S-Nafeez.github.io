document.addEventListener('DOMContentLoaded', () => {
    // Signup functionality
    const signupBtn = document.getElementById('signupBtn');
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPass').value.trim();
            if (name && email && password) {
                localStorage.setItem('user', JSON.stringify({ name, email, password }))
                
                document.getElementById('signupMsg').innerText = "Signup successful! Redirecting to login...";
                
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            } else {
                document.getElementById('signupMsg').innerText = "All fields are required.";
            }
        });
    }
  
    // Login functionality
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPass').value.trim();

            const stored = JSON.parse(localStorage.getItem('user'));

            if (stored && email === stored.email && password === stored.password) {
                sessionStorage.setItem('username', stored.name);
                window.location.href = "welcome.html";
            } else {
                document.getElementById('loginMsg').innerText = "Invalid credentials.";
            }
        });
    }
});
