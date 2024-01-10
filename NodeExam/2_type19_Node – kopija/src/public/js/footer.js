// src/public/js/footer.js

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer-container');
    
    // Include your footer HTML content
    const footerContent = `
        <footer>
            <p>&copy; 2024 Fantastyc LSD Productions. All rights reserved.</p>
        </footer>
    `;

    // Set the footer content inside the container
    footerContainer.innerHTML = footerContent;
});
