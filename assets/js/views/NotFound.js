import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Error 404 | Page not found ");
    }

    async getHtml() {
        return `
        <default-header></default-header>
        <div class="text-center mt-5 mb-5">
            <img src="assets/img/404.png" />
            <p>Sorry, the page you requested could not be found, please <a href="/" data-link>click here</a> to return to the homepage.</p>
        </div>
        <default-footer></default-footer>
        `;
    }
}