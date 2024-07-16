function dismissMessage() {
    document.getElementById('importantMessage').style.display = 'none';
}

// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});