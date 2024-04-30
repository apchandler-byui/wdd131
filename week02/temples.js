document.addEventListener('DOMContentLoaded', (event) => {
    // Hamburger menu
    const nav = document.querySelector('nav');
    const hamburger = document.createElement('button');
    hamburger.textContent = '☰';
    hamburger.addEventListener('click', () => {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'block';
            hamburger.textContent = '✖';
        } else {
            nav.style.display = 'none';
            hamburger.textContent = '☰';
        }
    });

    // Insert the hamburger button into the header
    const header = document.querySelector('header');
    header.insertBefore(hamburger, header.firstChild);

    // Copyright year and date last modified
    const footer = document.querySelector('footer');
    const date = new Date(document.lastModified);
    footer.textContent = `© ${new Date().getFullYear()} Andrew Chandler. Last modified on ${date.toLocaleDateString()}.`;

    // Hide the hamburger menu in larger views
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 640) {
            nav.style.display = 'flex';
            hamburger.style.display = 'none';
        } else {
            nav.style.display = 'none';
            hamburger.style.display = 'block';
            hamburger.textContent = '☰';
        }
    });

    // Trigger the resize event to set the initial state
    window.dispatchEvent(new Event('resize'));
});