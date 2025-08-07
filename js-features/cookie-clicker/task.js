let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
cookie.onclick = () => {
    if (cookie.width == 200) {
        cookie.width += 10;
        counter.textContent++;
    } else {
        cookie.width -= 10;
        counter.textContent++;
    }
}
