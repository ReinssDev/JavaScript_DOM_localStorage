let root = document.getElementById('root');
const btnLogin = document.getElementById('btn-login');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const admin = document.getElementById('admin');
const user = document.getElementById('user');

const onLogin = () => {
    console.log('Tombol login di klik');
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    localStorage.setItem('username', usernameInput.value);

    if(usernameInput.value === 'admin' && passwordInput.value === 'admin123#') {
        const textAdmin = 'Hai, admin. Semoga hari ini anda bisa menjalani aktivitas dengan baik!';
        admin.append(textAdmin);
        localStorage.setItem('role', 'admin');
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        btnLogin.style.display = 'none';
    } else {
        const textUser = `Hai, ${usernameInput.value} semoga hari ini menjadi hari yang menyenangkan`;
        user.append(textUser);
        localStorage.setItem('role', 'user');
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        btnLogin.style.display = 'none';
    }

}

if(localStorage.getItem('username')) {
    usernameInput.style.display = 'none';
    passwordInput.style.display = 'none';
    btnLogin.style.display = 'none';

    if(localStorage.getItem('role') === 'admin') {
        const textAdmin = 'Hai, admin. Semoga hari ini anda bisa menjalani aktivitas dengan baik!';
        admin.append(textAdmin);
        user.style.display = 'none';
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        btnLogin.style.display = 'none';
    } else {
        const textUser = `Hai, ${usernameInput.value} semoga hari ini menjadi hari yang menyenangkan`;
        user.append(textUser);
        admin.style.display = 'none';
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        btnLogin.style.display = 'none';
    }
}

btnLogin.addEventListener('click', () => {
    onLogin();
});