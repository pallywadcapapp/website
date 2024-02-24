import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("PallyWad Capital | Your reliable source for loans and more.");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <default-header></default-header>
        
            <div class="hero">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-md-6 col-12 pe-5 ps-8">
                            <h3 class="mt-10 translate-bottom-50 transition-100 transition-delay-600">Empowering Your  Financial  Journey With
                                Cutting-Edge Solutions
                            </h3>
                            <p class="sub-title translate-bottom-50 transition-100 transition-delay-800">
                                Unlock your potential Opportunities with Hassle-Free Loans.
                            </p>
                            <p class="translate-bottom-50 transition-100 transition-delay-1000">
                                <a href="/onboarding" class="default-button">Get Started</a>
                            </p>
                        </div>
                        <div class="col-md-6 col-12 light-blue text-center ">
                            <img src="assets/img/phone-user.jpg" style="border-radius:10px;" class="empower-pics translate-bottom-100 transition-100 transition-delay-400" />
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="container-fluid mt-15">
                <div class="row text-center ">
                    <p class="services-title" >SERVICES</p>
                    <h4 class=" services-bold-caption col-12 col-md-10 offset-md-1" >Power up your business with a full-stack
                        lending solution that fits your needs.
                    </h4>
                    <p class="sub-title">
                        Lending that doesn't weigh you down.
                    </p>
                    <div class="col-12 col-md-4 offset-md-4 text-left mb-3">
                        <ul class="loan-type-list">
                            <li><i class="fa fa-check green-circle"></i> Personal loans</li>
                            <li><i class="fa fa-check green-circle"></i> Business loans</li>
                        </ul>
                    </div>
                    <p>
                        <a href="/onboarding"  class="default-button default-button-large">Apply for Loan</a>
                    </p>
                </div>
            </div>
        
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 col-md-12"> <hr class="greybg"></div>
                
                </div>
                
                <div class="row ">
                    <div class="col-12 col-md-12">
                        <div class="dark-grey-1 px-5 py-5 d-lg-flex align-items-center ">
                            <div class="col-md-6 col-12">
                            
                                <h4 class="stop-worry-title">Stop worrying over finances
                                    and run your business</h4>
                                <p class="stop-worry-sub-title" > Get business loans approved within hours/days with 
                                    transparent lending criteria and process.
                                </p>
                                <p class="mt-5" >
                                    <a href="/onboarding" class="default-button">Get Started Now</a>
                                </p>
                            </div>
                            <div class="col-md-6 col-12 text-center">
                                <img src="assets/img/woman-on-pc.jpg" class="stop-worry-pic"  />
                        
                            </div>
                        </div>
                    </div>
                </div>
        
                
        
                <div class="row mt-4">
                    <div class="col-md-6 col-12">
                        <div class="dark-grey-1 px-5 py-5">
                            <h4 class="stop-worry-title">
                                Change the way you
                                manage you money.</h4>
                            <p class="stop-worry-sub-title"> Don't let the lack of funds stop you from
                                living your dreams. Get the financial support
                                you need to make the most out of money.
                            </p>
                            <div>
                                <img src="assets/img/get-access.png" class="img-fluid" />
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="dark-grey-1 px-5 py-5">
                            <h4 class="stop-worry-title">
                                Access business fundings in hours/days.</h4>
                            <p class="stop-worry-sub-title"> 
                                Get your business and projects on the move with our lending plans.
                            </p>
                            <div class="white-bg-form shadow py-4 px-5 rounded">
                                <form action="" method="POST">
                                    <div class="form-group">
                                        <label><b>Name<span class="text-danger">*</span></b></label>
                                        <input type="text" class="form-control" placeholder="Enter your name and surname" />
                                    </div>
        
                                    <div class="form-group mt-3">
                                        <label><b>What type of loan works for you?
                                            <span class="text-danger">*</span></b></label><br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                            <label class="form-check-label" for="inlineRadio1">Personal</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                            <label class="form-check-label" for="inlineRadio2">Business</label>
                                        </div>
                                        <div class="">
                                            <p class="mt-3 text-center">
                                                <a href="" class="default-button default-rounded ">Continue &raquo;</a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div>
        
            <div class="light-blue px-5 py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="about-holder">
                                <p class="about-title">About Us</p>
                                <hr class="greybg2">
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <h4>
                                PallyWad Capital is a leading
                                financial institution dedicated to
                                empowering individuals and 
                                businesses with financial
                                solutions.
                            </h4>
                            <p>
                                Our innovative and accessible lending solutions redefine the financial experience, making
        capital accessible to every aspiring individual and business in Lagos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
            <default-footer></default-footer>
        </div>
        `
    }
}