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
                            Seamless loan application <br>processes
                            </h3>
                            <p class="sub-title translate-bottom-50 transition-100 transition-delay-800">
                                Fully online experience
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
                    <p class="about-title"></p>
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
                    <p style="font:Helvetica Neue; wieght: 400">Visit our <a href="/FAQs" data-link>FAQs</a> to see requirements for each product</p>
                </div>
            </div>
        
            <div class="container mt-5">

                <div class="row ">
                    <div class="col-12 col-md-12">
                        <div class="px-5 py-5 d-lg-flex align-items-center ">
                            <div class="col-md-6 col-12">
                            <p class="about-title"><i class="fa fa-2x fa-solid fa-pen green-circle"></i></p>
                            <p class="about-title"></p>
                                <h4 class="stop-worry-title">Transparent conditions, clear as day
                                </h4>
                                <p  style="font: Helvetica Neue; color: #ADADAD;"> 
                                No hidden charges, no additional costs.
                                </p>
                                <ul class="loan-type-list">
                                    <li><i class="fa fa-check green-circle"></i>Understand what you are getting into in advance. </li>
                                    <li><i class="fa fa-check green-circle"></i> No ‘in-between the lines’, no surprises.</li>
                                    <li><i class="fa fa-check green-circle"></i> Visit our FAQS to learn more.</li>
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
                                <p class="about-title"></p>
                                <h4 class="stop-worry-title">Our success is your success. 
                                </h4>
                                <p style="font: Helvetica Neue; color: #ADADAD;" > 
                                Our business is to support your business. 
                                </p>
                                <a href="">LEARN MORE &nbsp;&nbsp;&nbsp;<i class="fa fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        
                
        
                <div class="row mt-4">
                    <div class="col-md-12 col-12">
                        <div class="dark-grey-1 px-5 py-5">
                        <p class="about-title"></p>
                            <h4 class="stop-worry-title">
                            Transparent and flexible processes to align with your needs.</h4>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <span><i class="fa fa-2x fa-light fa-store green-circle"></i><b style="margin-left:5%">Your convenience is important.</b></span>
                                
                                <p style="font: Helvetica Neue; color: #ADADAD;margin-top:20px;"> 
                                    <ul>
                                        <li>We understand that projections can change</li>
                                        <li>We provide flexible repayment terms. </li>
                                        <li>No penalties for early loan repayment </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="col-md-4 col-12">
                                <span><i class="fa fa-2x fa-regular fa-heart green-circle"></i><b style="margin-left:0%">Get started from any device, anywhere, anytime</b></span>
                                
                                <p style="font: Helvetica Neue; color: #ADADAD;margin-top:20px;"> 
                                    <ul>
                                        <li>Loan applications made easy with technology. </li>
                                        <li>Seamless and user-centric experience. </li>
                                        <li>Fully online process until collateral delivery. </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="col-md-4 col-12">
                                <span><i class="fa fa-2x fa-light fa-cloud green-circle"></i><b style="margin-left:5%">Financial Support that is humane</b></span>
                                
                                <p style="font: Helvetica Neue; color: #ADADAD;margin-top:20px;"> 
                                    <ul>
                                        <li>At PallyWad Capital, we aim for financial inclusion. </li>
                                        <li>Understand what you are getting into in advance.</li>
                                        <li>Your business is dynamic, so are we.  </li>
                                    </ul>
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