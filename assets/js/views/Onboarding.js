import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Onboarding User - Getting Started | Pallywad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <onboarding-header></onboarding-header>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-12 ms-auto me-auto mt-4">
                        <div id="onboarding-forms" class="white-bg rounded div-shadow onboarding-form ">
                            <form id="step-1"  >
                                <div class="text-center mt-3 px-8">
                                    <img src="../assets/img/top-continue-graphic.png" class="onboard-icon" />
                                    <h3>Let's get started</h3>
                                    <p>Create a user account with Pallywad Capital,
                                    Provide basic personal Information</p>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Email <span class="text-danger">*</span></label>
                                    <input type="email" required class="form-control email-icon" id="email" name="email">
                                    <input type="hidden" id="email_exists" name="email_exists" />
                                   
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Create Password <span class="text-danger">*</span></label>
                                    <input type="password" required class="form-control lock-icon" id="password" name="password">
                                </div>
                                <div class="form-group mt-2 px-7">
                                    <button id="continue-1" class="continue-button">Continue</button>
                                    <a href="/signin" class="have-account mt-3">Already have an account? <span>Sign In</span></a>
                                </div>
                                <hr class="mt-4 mb-4">
                                <div class="privacy-area text-center">
                                    <img src="../assets/img/shield-check.png" class="me-1" />Pallywad will not share your confidential data to a third party. Read our
                                    <a href="">Privacy Policy.</a>
                                </div>
                            </form>



                            <form id="step-2"  >
                                <div class="text-center mt-3 px-8">
                                    <img src="../assets/img/top-continue-graphic.png" class="onboard-icon" />
                                    <h3>Let's get started</h3>
                                    <p>Personal information you give help us to
                                    know you better.</p>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Full name <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control email-icon" id="fullname" name="fullname">
                                   
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Mobile No<span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control phone-icon" id="phone" name="phone">
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Date of Birth<span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control lock-icon" id="dob" name="dob">
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Address<span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control lock-icon" id="address" name="address">
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Valid means of ID<span class="text-danger">*</span></label>
                                    <input type="file" required class="form-control" id="valid_id" name="valid_id">
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Proof of Address<span class="text-danger">*</span></label>
                                    <input type="file" required class="form-control" id="proof_of_address" name="proof_of_address">
                                </div>

                                <div class="form-group mt-2 px-7">
                                    <button id="continue-2" class="continue-button">Continue</button>
                                </div>
                                <hr class="mt-4 mb-4">
                                <div class="privacy-area text-center">
                                    <img src="../assets/img/shield-check.png" class="me-1" />Pallywad will not share your confidential data to a third party. Read our
                                    <a href="">Privacy Policy.</a>
                                </div>
                            </form>

                            
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        `
    }
}