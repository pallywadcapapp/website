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
                        <div id="onboarding-forms" class="white-bg rounded div-shadow onboarding-form onb3 ">
                        
                            <form id="step-2"  >
                                <div class="text-center mt-3 px-8">
                                    <a href="/onboarding" data-link><img src="../assets/img/top-continue-graphic.png" class="onboard-icon" /></a>
                                    <h3>Let's get to know you</h3>
                                    <p>Personal Information.</p>
                                </div>
                                
                                <div class="form-group px-7 mt-3">
                                    <label>Password <span class="text-danger">*</span></label>
                                    <input type="password" required class="form-control" id="password" name="password"
                                    onkeyup="checkPasswordStrength();" placeholder="Create a password">
                                    <span class="lock-icon"><img src="../assets/img/padlock-icon.png" /></span>
                                    <span toggle="#password" class="fa fa-eye-slash eye-icon toggle-password"></span>
                                </div>
                                <div id="password-strength-status"></div>
                                <div id="message">
                                <h6>Password must contain the following:</h6>
                                <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                                <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                                <p id="number" class="invalid">A <b>number</b></p>
                                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                              </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Confirm Password <span class="text-danger">*</span></label>
                                    <input type="password" required class="form-control" id="confirmpassword" name="confirmpassword" placeholder="confirm password">
                                    <span class="lock-icon"><img src="../assets/img/padlock-icon.png" /></span>
                                    <span toggle="#confirmpassword" class="fa fa-eye-slash eye-icon toggle-password"></span>
                                </div>
                                <div style="margin-top: 7px;" id="CheckPasswordMatch"></div>
                                <div class="form-group px-7 mt-3">
                                    <label>First Name <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="firstname" name="firstname" placeholder="Your First Name">
                                    <span class="user-icon fa fa-user-o"></span>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Last Name <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="lastname" name="lastname" placeholder="Your Last Name">
                                    <span class="user-icon fa fa-user-o"></span>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Middle Name <span class="text-danger">*</span></label>
                                    <input type="text" required class="form-control" id="othernames" name="othernames" placeholder="Middle Name">
                                    <span class="user-icon fa fa-user-o"></span>
                                </div>
                                <div class="form-group px-7 mt-3">
                                    <label>Mobile No<span class="text-danger">*</span></label>
                                    <input type="number" required class="form-control" id="phoneNo"  name="phoneNo" placeholder="Valid phone number"
                                    onchange="validatePhoneNumber()">
                                    <span class="phone-icon fa-solid fa-phone"></span>
                                </div>
                                <div id="phoneValidationMsg" style="color:red"></div>
                                <div class="form-group mt-5 px-7">
                                    <button id="submit-onboarding" class="continue-button">Continue</button>
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
        `
    }
}