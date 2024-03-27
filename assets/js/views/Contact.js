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
                        <div class="col-md-7 d-flex align-items-stretch">
                            <div class="contact-wrap w-100 p-md-5 p-4">
                                <h3 class="mb-4">Get in touch</h3>
                                <div id="form-message-warning" class="mb-4"></div> 
                          <div id="form-message-success " hidden class="mb-4">
                        Your message was sent, thank you!
                          </div>
                                <form id="contactForm" name="contactForm">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name" id="name" placeholder="Name">
                                            </div>
                                            <br />
                                        </div>
                                        <div class="col-md-12"> 
                                            <div class="form-group">
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                                            </div>
                                            <br />
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">
                                            </div>
                                            <br />
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <button type="button" class="btn default-button ">Send Message</button>
                                                <div class="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-5 d-flex align-items-stretch">
                            <div class="info-wrap w-100 p-lg-5 p-4" style="background-color: #24488F; color: #fff !important;">
                                <h3 class="mb-4 mt-md-4" style="color: #fff !important;">Contact us</h3>
                        <div class="dbox w-100 d-flex align-items-start">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-map-marker"></span>
                            </div>
                            <div class="text pl-3">
                           <span><b>Address: </b></span> 4 Gbangbala Street, Ikate-Elegushi, Lagos
                          </div>
                      </div>
                        <div class="dbox w-100 d-flex align-items-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone"></span>
                            </div>
                            <div class="text pl-3">
                            <span><b>Phone: </b></span> <a style="color: #fff !important;" href="tel://+2349084310006">09084310006</a>
                          </div>
                      </div>
                        <div class="dbox w-100 d-flex align-items-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane"></span>
                            </div>
                            <div class="text pl-3">
                            <span><b>Email: </b></span> <a style="color: #fff !important;" href="mailto:info@pallywad.com">info@pallywad.com</a>
                          </div>
                      </div>
                        <div class="dbox w-100 d-flex align-items-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe"></span>
                            </div>
                            <div class="text pl-3">
                            <span><b>Website </b></span> <a style="color: #fff !important;" href="javascript::voud(0);"> PallyWad.com</a>
                          </div>
                      </div>
                  </div>
                        </div>
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