
// toggleBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         const faqItem = btn.closest('.faq-item');
//         faqItem.classList.toggle('active');
        
//         if (faqItem.classList.contains('active')) {
//             btn.textContent = '-';
//         } else {
//             btn.textContent = '+';
//         }
//     });
// });

const navItems = document.getElementById("displayNav");
const toggleBtns = document.getElementById("icon"); 
const closeIcon = document.getElementById("closeIcon"); 

toggleBtns.addEventListener('click', () => {
 

    // Show the displayNav element
    navItems.style.display = "flex";
});

closeIcon.addEventListener('click', () => {
 

    // Show the displayNav element
    navItems.style.display = "none";
});

