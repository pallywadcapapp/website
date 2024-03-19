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
                            PallyWad Capital is an innovative financial institution, reshaping the financial landscape by leveraging advanced technology
                             to provide a seamless and fully online lending experience to individuals and businesses. Our dynamic approach adapts to industry and economic trends, and we stand as a catalyst for financial inclusivity in Nigeria by providing accessible and technology-driven lending solutions. 
                            </span>
                        </p>
                        <p>
                            <h5><b>Vision</b></h5>
                            <span>
                                Our vision is to be the leading force in reshaping financial experience, where financial services are seamlessly
                             integrated into the lives of our customers, unlocking opportunities and creating lasting value. 
                            </span>
                        </p>
                        <p>
                            <h5><b>Mission</b></h5>
                            <span>
                                We are on a mission to empower dreams, fuel growth, and foster financial inclusion. We aim to make capital accessible to 
                                every aspiring individual and business in Lagos, through seamless cutting-edge technology and tailored funding solutions. 
                            </span>
                        </p>
                        <p>
                            <h5><b>Core Values - FITS </b></h5>
                            <ul>
                                <li>Flexibility </li>
                                <li>Integrity </li>
                                <li>Transparency </li>
                                <li>Sensitivity </li>
                            </ul>
                        </p>
                        <p>
                            <h5><b>Products</b></h5>
                            <ul>
                                <li>
                                    <b>Personal Loans</b><br/>
                                    <span>Catering to established businesses with tangible assets, providing collateralized loans to support expansion, 
                                        working capital needs, or equipment purchase.</span>
                                </li>
                                <li>
                                    <b>Business Loans</b><br />
                                    <span>
                                    Catering to established businesses with tangible assets, providing collateralized loans to support expansion, working 
                                    capital needs, or equipment purchase.
                                    </span>
                                </li>
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