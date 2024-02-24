import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Onboarding User - Getting Started | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <onboarding-header></onboarding-header>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-12 ms-auto me-auto mt-4">
                        <div id="onboarding-forms" class="white-bg rounded div-shadow onboarding-form ">
                            <form id="step-1">
                                <div class="text-center mt-3 px-8">
                                    <img src="../assets/img/top-continue-graphic.png" class="onboard-icon" />
                                    <h3>Let's get started</h3>
                                    <p>Create a user account with PallyWad Capital,
                                    Provide basic personal Information</p>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Email <span class="text-danger">*</span></label>
                                    <input type="email" required class="form-control" id="email" name="email" placeholder="Your valid email">
                                    <span class="email-icon"><img src="../assets/img/email-icon.png" /></span>
                                </div>
                                <div class="form-group mt-3 px-7">
                                    <button id="continue" class="continue-button" type="button">Continue</button>
                                    <a href="https://app.pallywad.com/sign-in" class="have-account mt-3">Already have an account? <span>Sign In</span></a>
                                </div>
                                <hr class="mt-4 mb-4">
                                <div class="privacy-area text-center">
                                    <img src="../assets/img/shield-check.png" class="me-1" />PallyWad will not share your confidential data to a third party. Read our
                                    <a href="">Privacy Policy.</a>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        `;

        
    }
}