/**
 * FitVerse Layout Loader
 * Dynamically loads shared navbar components
 */

// Load navbar based on page type
async function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    const pageType = document.body.getAttribute('data-layout');
    let navbarFile = '';

    switch(pageType) {
        case 'admin':
            navbarFile = 'layouts/admin-navbar.html';
            break;
        case 'coach':
            navbarFile = 'layouts/coach-navbar.html';
            break;
        case 'client':
            navbarFile = 'layouts/client-navbar.html';
            break;
        default:
            console.warn('No layout type specified');
            return;
    }

    try {
        const response = await fetch(navbarFile);
        if (response.ok) {
            const html = await response.text();
            navbarContainer.innerHTML = html;
            
            // Execute any scripts in the loaded HTML
            const scripts = navbarContainer.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            });
        } else {
            console.error('Failed to load navbar:', response.status);
        }
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// Load navbar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}

/**
 * Alternative: Include navbar using JavaScript
 * For pages that can't use async loading
 */
function includeNavbar(type, page) {
    const navbars = {
        admin: `layouts/admin-navbar.html`,
        coach: `layouts/coach-navbar.html`,
        client: `layouts/client-navbar.html`
    };

    if (navbars[type]) {
        document.body.setAttribute('data-layout', type);
        document.body.setAttribute('data-page', page);
        loadNavbar();
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadNavbar, includeNavbar };
}
