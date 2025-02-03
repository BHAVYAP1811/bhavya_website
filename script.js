function nextPage(page) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = page;
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('fade-in');
});
