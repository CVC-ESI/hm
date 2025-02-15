// چک کردن ذخیره بودن شناسه در LocalStorage
window.onload = function () {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        window.location.href = 'dashboard.html';
    }
};

// ذخیره شناسه وارد شده
function saveUsername() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        alert("لطفا شناسه را وارد کنید.");
    }
}
