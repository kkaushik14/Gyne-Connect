// Dropbox design
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav li");

    navItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            const dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.classList.add("show");
            }
        });

        item.addEventListener("mouseleave", function() {
            const dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.classList.remove("show");
            }
        });
    });
});

// hover effect
// document.addEventListener('DOMContentLoaded', (event) => {
//     const navItems = document.querySelectorAll('.effect-hov');

//     navItems.forEach(item => {
//         item.addEventListener('mouseover', () => {
//             item.style.backgroundColor = '#575757';
//         });

//         item.addEventListener('mouseout', () => {
//             item.style.backgroundColor = '';
//         });
//     });
// });

// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});