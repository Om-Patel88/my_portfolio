class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this._toggleMenu = this._toggleMenu.bind(this);
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; }
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 0.5rem 1rem;
                    background: var(--nav-bg, #ffffff);
                    color: var(--nav-fg, #111827);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
                }
                .brand {
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .menu {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .menu a {
                    text-decoration: none;
                    color: inherit;
                    padding: 0.25rem 0.5rem;
                    border-radius: 6px;
                }
                .menu a:hover { background: rgba(0,0,0,0.03); }
                .menu-toggle {
                    display: none;
                    background: none;
                    border: 0;
                    font-size: 1.25rem;
                }

                /* Mobile styles */
                @media (max-width: 768px) {
                    .menu { display: none; flex-direction: column; width: 100%; margin-top: 0.5rem; }
                    .menu.open { display: flex; }
                    .menu-toggle { display: inline-flex; align-items: center; }
                    .navbar { flex-wrap: wrap; }
                }
            </style>
            <nav class="navbar" role="navigation" aria-label="Primary">
                <div class="brand">
                    <span aria-hidden="true">&#x1F4BB;</span>
                    <a href="/" class="brand-link">Portfolio</a>
                </div>
                <button class="menu-toggle" aria-expanded="false" aria-controls="primary-menu">☰</button>
                <div class="menu" id="primary-menu">
                    <a class="nav-link" href="#home">Home</a>
                    <a class="nav-link" href="#about">About</a>
                    <a class="nav-link" href="#projects">Projects</a>
                    <a class="nav-link" href="#contact">Contact</a>
                </div>
            </nav>
        `;

        // Elements
        this._menu = this.shadowRoot.querySelector('.menu');
        this._btn = this.shadowRoot.querySelector('.menu-toggle');

        // Attach listener
        if (this._btn) this._btn.addEventListener('click', this._toggleMenu);
    }

    disconnectedCallback() {
        if (this._btn) this._btn.removeEventListener('click', this._toggleMenu);
    }

    _toggleMenu() {
        if (!this._menu || !this._btn) return;
        const isOpen = this._menu.classList.toggle('open');
        this._btn.setAttribute('aria-expanded', String(isOpen));
    }
 }
 
// Register the custom element if not already defined
if (!customElements.get('custom-navbar')) {
    customElements.define('custom-navbar', CustomNavbar);
}
