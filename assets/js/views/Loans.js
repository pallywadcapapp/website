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
        
            <div class="hero">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-md-12 col-12 pe-5 ps-8 text-center">
                            <h3 class="mt-10 translate-bottom-50 transition-100 transition-delay-600">
                                Unlock Your Financial <br>Potential
                            </h3>
                            <p class="sub-title translate-bottom-50 transition-100 transition-delay-800">
                                Tell us about your loan needs, and let's make it happen!
                            </p>
                            <p class="translate-bottom-50 transition-100 transition-delay-1000">
                                <a href="/onboarding" class="default-button default-button-large">Request Loan</a>
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-12 col-md-12"> <hr class="greybg"></div>
                    </div>
                </div>
            </div>

            <div class="container-fluid light-blue py-5">
                <div class="col-md-12 col-12  text-center ">
                    <p class="about-title">LOANING</p>
                    <h3 class="mt-3 translate-bottom-50 transition-100 transition-delay-600">
                        Available loans
                    </h3>
                    <div class="col-md-6 offset-3 mt-3">
                        <ul class="nav nav-pills nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active" style="background-color:#33D290 !important" aria-current="page" href="/onboarding?type=personal">Personal Loan</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style="background-color:#F88559 !important" href="/onboarding?type=business">Business Loan</a>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <p style="font:Helvetica Neue; wieght: 400">Each loan type is a unique product and it's own details and interest rate</p>
                </div>
            </div>
        
            <div class="container mt-5">

                <div class="row ">
                    <div class="col-12 col-md-12">
                        <div class="px-5 py-5 d-lg-flex align-items-center ">
                            <div class="col-md-6 col-12">
                            <p class="about-title"><i class="fa fa-2x fa-solid fa-pen green-circle"></i></p>
                            <p class="about-title">LOANING</p>
                                <h4 class="stop-worry-title">Loans, minus the
                                paperwork and haggling.
                                </h4>
                                <p  style="font: Helvetica Neue; color: #ADADAD;"> 
                                    We make loaning uncomplicated by setting clear
                                    criteria that you can view beforehand to decide if we
                                    fit your needs.
                                </p>
                                <ul class="loan-type-list">
                                    <li><i class="fa fa-check green-circle"></i> Competitively priced and tailored for you</li>
                                    <li><i class="fa fa-check green-circle"></i> Get an overview on your loans.</li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-12 text-center">
                                <img src="assets/img/loanj.png" class="stop-worry-pic"  />
                        
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row ">
                    <div class="col-12 col-md-12">
                        <div class="px-5 py-5 d-lg-flex align-items-center ">
                            
                            <div class="col-md-6 col-12 text-center">
                                <img src="assets/img/loanI.png" class="stop-worry-pic"  />
                        
                            </div>
                            <div class="col-md-6 col-12">
                            <p class="about-title"><i class="fa fa-2x fa-chart-line orange-circle"></i></p>
                                <p class="about-title">TYPES OF LOANS</p>
                                <h4 class="stop-worry-title">Fund your business with supportive scheme
                                </h4>
                                <p style="font: Helvetica Neue; color: #ADADAD;" > 
                                Whether you’re a small business that just starting out or a company affected by recession, we have schemes that help you get back on track
                                </p>
                                <a href="">LEARN MORE &nbsp;&nbsp;&nbsp;<i class="fa fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        
                
        
                <div class="row mt-4">
                    <div class="col-md-12 col-12">
                        <div class="dark-grey-1 px-5 py-5">
                        <p class="about-title">BENEFITSS</p>
                            <h4 class="stop-worry-title">
                            Fair, flexible loan plans that don’t cost
                            you an arm and a leg.</h4>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <span><i class="fa fa-2x fa-light fa-store green-circle"></i><b style="margin-left:5%">Convenienc first</b></span>
                                
                                <p style="font: Helvetica Neue; color: #ADADAD;margin-top:20px;"> 
                                Whether you’re a small business that just starting out or a company affected by recession, we have schemes that help you get back on track
                                </p>
                            </div>
                            <div class="col-md-4 col-12">
                                <span><i class="fa fa-2x fa-regular fa-heart green-circle"></i><b style="margin-left:5%">Support that’s humant</b></span>
                                
                                <p style="font: Helvetica Neue; color: #ADADAD;margin-top:20px;"> 
                                Not sure about the details of the loans? Need help with a second loan? We’re here to help 24/7.
                                </p>
                            </div>
                            <div class="col-md-4 col-12">
                                <span><i class="fa fa-2x fa-light fa-cloud green-circle"></i><b style="margin-left:5%">Apply from anywhere</b></span>
                                
                                <p style="font: Helvetica Neue; color: #ADADAD;margin-top:20px;"> 
                                We make applying for loans easy - fill the form in minutes from anywhere, anytime.
                                </p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            
            </div>
        
            <default-footer></default-footer>
        </div>
        `
    }
}