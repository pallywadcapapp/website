/* ---------------- DEFAULT HEADER -------------------*/ 
class DefaultHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        <header>
            <div class="container">
                <div class="row">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid d-flex align-items-center justify-content-center">
                            <a class="navbar-brand translate-top-50 transition-100 transition-delay-200" href="/" data-link><img src="assets/img/padwally-logo.png" /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                    <li class="nav-item ">
                                        <a class="nav-link" aria-current="page" href="/" data-link>Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/loans" data-link>Loans</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/aboutus" data-link>About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/contactus" data-link>Contact Us</a>
                                    </li>
                                </ul>
                                <div>
                                    <a href="javascript:void(0);" id="sign-in" class="default-button default-transparent-button" data-link>Sign In</a>
                                    <a href="/onboarding" class="default-button" data-link>Get Started</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('default-header', DefaultHeader)


/* ---------------- DEFAULT FOOTER  -------------------*/ 
class DefaultFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        <footer class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-8 pe-5">
                        <h4>Meet PallyWad Capital, A dynamic and forward-thinking lending institution</h4>
                    </div>
                    <div class="col-md-3 col-4 text-end">
                        <p class="mt-2">
                            <a href="/onboarding" class="default-button-white">Get Started</a>
                        </p>
                    </div>
                    <div class="col-md-12 mt-2">
                        <hr class="footerline">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4 col-12">
                        <img src="assets/img/pallywad-logo-white.png" class="img-fluid" />
                        <p class="fueling-dreams">
                            Fueling Dreams, Powering Growth
                        </p>
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="row">
                            <div class="col-md-4">
                                <p class="footer-link-title">PAGES</p>
                                <ul class="footer-link">
                                    <li><a href="/" data-link>Home</a></li>
                                    <li><a href="loans" data-link>Loans</a></li>
                                    <li><a href="aboutus" data-link>About Us</a></li>
                                    <li><a href="contactus" data-link>Contact Us</a></li>
                                </ul>
                            </div>

                            <div class="col-md-4">
                                <p class="footer-link-title">ACCOUNT</p>
                                <ul class="footer-link">
                                    <li><a href="https://app.pallywad.com/sign-in">Log in</a></li>
                                    <li><a href="/onboarding">Sign up</a></li>
                                </ul>
                            </div>

                            <div class="col-md-4">
                                <p class="footer-link-title">COMPANY</p>
                                <ul class="footer-link">
                                    <li><a href="/terms">Terms of service</a></li>
                                    <li><a href="/privacy" data-link>Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <!--<div class="col-md-3 col-12">
                        <p class="footer-link-title">NEWSLETTER</p>
                        <p class="footer-newsletter-desc">Subscribe to stay in touch, so as to get 
                            updates on our lending structure improvements
                        </p>
                        <div>
                            <form action="" method="POST">
                                <textarea rows="3" class="footer-newsletter-form" placeholder="Enter your email address"></textarea>
                                <a href="/onboarding" class="default-button-green">Get Started</a>
                            </form>
                        </div>
                    </div>-->
                    <div class="col-md-12 mt-2">
                        <hr class="footerline">
                    </div>
                    <div class="col-md-9">
                        &copy; 2024 PallyWad Capital. All rights reserved.
                    </div>
                    <div class="col-md-3">
                        <ul class="footer-social-links">
                            <li class="translate-top-50 transition-100 transition-delay-100"><a href="#" title="linkedin"><i class="fab fa-instagram"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-200"><a href="#" title="twitter"><i class="fab fa-x-twitter"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-300"><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-400"><a href="#" title="Facebook"><i class="fab fa-linkedin"></i></a></li>
                            <li class="translate-top-50 transition-100 transition-delay-500"><a href="#" title="google"><i class="fab fa-youtube"></i></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}

customElements.define('default-footer', DefaultFooter)


/* ---------------- ONBOARDING HEADER -------------------*/ 
class OnboardingHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-12 col-12 text-center">
                        <a class=" navbar-brand translate-top-50 transition-100 transition-delay-200" href="/" data-link>
                            <img src="assets/img/padwally-logo.png" />
                        </a>
                    </div>
                </div>
            </div>
        
        `
    }
}

customElements.define('onboarding-header', OnboardingHeader)