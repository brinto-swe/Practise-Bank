document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;

    if(userEmail === 'test@gmail.com' && userPassword === '1234'){
        window.location.href = 'deposit.html';
    }
    else{
        alert('Fake User')
    }
    // console.log(userEmail, userPassword)
})