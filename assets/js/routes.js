class AppContent extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = ``
    }
}

customElements.define('app-content', AppContent)