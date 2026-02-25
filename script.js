// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form simulation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you. A GLOBAL-MIX Agency representative will contact you shortly.");
    this.reset();
});

// Investor Brief Download
function downloadBrief() {
    alert("Investor Brief download will be available once PDF is uploaded.");
}
