import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loans | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <default-header></default-header>
        
            
			<div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
                <div class="wrapper">
                    <div class="row no-gutters">
                    <div class="col-md-12 align-items-stretch">
                        <div class=" text-center translate-bottom-50 transition-100 transition-delay-800">
                            <h3 class="mb-4">About Us</h3>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <p>
                            <span>
                            PallyWad Capital Ltd is an innovative financial services company dedicated to improving financial inclusivity by 
                            providing seamless and tailored funding solutions through a user-centric and fully online experience.
                            </span>
                        </p>
                        <p>
                            <h5>Products</h5>
                            <ul>
                                <li>Personal Loans </li>
                                <li>Business Loans  </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br />
            <default-footer></default-footer>
        </div>
        `
    }
}