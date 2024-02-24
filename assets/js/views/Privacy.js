import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Privacy | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <default-header></default-header>
            <div class="container-fluid">
                 <div class="row ">
                        <div class="col-md-12 col-12 pe-5 ps-8 ">
                            <h4 class="mt-10 translate-bottom-50 transition-100 transition-delay-600 text-center">
                                <b>Privacy Policy</b>
                            </h4>
                            <p class="translate-bottom-50 transition-100 transition-delay-800">
                            <span>
                                At PallyWad Capital Ltd, the privacy of our Data Subjects and their Personal Data is of utmost importance to us,
                             and in line with our resolution, we have developed this Privacy Policy to explain your privacy rights, particularly 
                             regarding how we collect, process, retain, share and protect your Personal Data when you visit our website
                            </span>
                             <br />
                            <span>
                                This Privacy Policy between PallyWad Capital Limited ("PallyWad") and you constitute our commitment to your
                              continued privacy on all our platforms. It is designed to provide information regarding our privacy practices and help
                               you understand how we handle your data. 
                            </span>
                            </p>
                            <h5 class="mt-10 translate-bottom-50 transition-100 transition-delay-600">
                                <b>Information We Collect</b>
                            </h5>
                            <p class="translate-bottom-50 transition-100 transition-delay-1000">
                                <b>Personal Information:</b><br />
                                <span>
                                    We may collect various types of personal information from you, including but not limited to 
                                </span>
                                <ul>
                                    <li>
                                        Name, address, email address, telephone number, date of birth, Bank Verification Number (BVN), Tax Identification Number (TIN), and other identifying information. 
                                    </li>
                                    <li>
                                        Financial information, such as income, assets, debts, credit history, and bank account details. 
                                    </li>
                                    <li>
                                        Employment information, including occupation, employer details, and income sources
                                    </li>
                                </ul>

                                <span>
                                    We collect Personal Data about you when you use the services offered on our website and digital platform, including the following: 
                                    <ol>
                                        <li>
                                            <b>Sign-up information: </b> When you register to use the services offered on our digital platform, we will collect Personal Data
                                             as necessary to offer and fulfil the service you request. Depending on the service you choose, we may require that you 
                                             provide us with your name, email address, and mobile number. We may also require you to provide additional, necessary 
                                             personal details as you use our services.
                                        </li>
                                        <li>
                                            <b>Image Information: </b> We may collect your image (upload, storage, and use) information to support your Loan account. 
                                            We may also collect information from your images when you use our customer support to upload evidence such as 
                                            statements and checks. In addition, we may collect your image information in connection with regulatory 
                                            KYC (Know Your Customer) purposes
                                        </li>
                                        <li>
                                            <b>Information from other sources:</b> We may collect information from other sources, such as our social media platforms 
                                            when you reach out to us to complain about our services. However, we will only ask for information relevant to the help 
                                            required of us by you. 
                                        </li>
                                        <li>
                                            <b>Other information we collect related to your use of our website or Services:</b> We may collect additional information 
                                            from or about you when you communicate with us, contact our customer support teams, respond to a survey or use functionality 
                                            offered by third-party service providers through our Platform. For instance, when you initiate third-party applications 
                                            through the PallyWad website application, with your prior consent, your SMS may be collected and monitored to help third-party 
                                            service providers reduce risks associated with your application through the relevant model/system to provide customised services. 
                                        </li>
                                        <li>
                                            <b>When you apply for a job with us:</b> We may request Personal Data about your education, employment and state of health. 
                                            As part of your application, you will be asked to provide your express consent to our use of this information to assess your 
                                            application and any monitoring activities which may be required of us under applicable laws as an employer. We may also 
                                            carry out screening checks (including reference, background and criminal record checks). We may exchange your Personal Data 
                                            with academic institutions, recruiters, health maintenance organisations, law enforcement agencies, referees and your 
                                            previous employers. Without your Data, we may not be able to process your application for positions with us. 
                                        </li>
                                    </ol>
                                </span>
                                <span><b>We do not collect the information of minors.</b></span><br />
                                <span>If you are under the age of 18, you are not eligible to use the service offered on our digital platform. </span> <br />
                                <br />
                                <span><b>How Do We Retain Personal Data? </b></span>
                                <span>We retain Personal Data in an identifiable format only for as long as required for our business purposes, with specific 
                                reference to the service rendered to you, and to fulfil our legal or regulatory obligations. Subject to applicable law, 
                                which might, from time to time, oblige us to retain your Data for a certain period, we will retain your Data for as long 
                                as necessary to fulfil the purposes we collect it for, including the purposes of satisfying any legal, accounting, or 
                                reporting obligations. Personal Data that is no longer in use or which has been retained beyond the requisite statutorily 
                                required storage period, will be destroyed in line with industrial best practices for such operations. 
                                </span> <br/> <br/>

                                <span><b>Usage Information:  </b></span><br />
                                <span>We automatically collect certain information about your use of our services and website, including: </span><br />
                                <ul>
                                    <li>Device information: IP address, device type, browser type, operating system, and language preferences. </li>
                                    <li>Usage data: Pages visited, links clicked, time spent on pages, and other interactions with our website.</li>
                                   
                                </ul>
                                <span><b>How We Use Your Information: </b></span><br />
                                <span>We may use the information we collect for various purposes, including but not limited to </span><br />
                                <ul>
                                    <li>Processing loan applications, verifying identity, assessing creditworthiness, and managing loan accounts.</li>
                                    <li>Providing customer support, responding to inquiries, and resolving disputes.</li>
                                    <li>Improving our products and services, enhancing user experience, and customising content and advertisements.</li>
                                    <li>Marketing and promotional activities, including sending you newsletters, offers, and updates about our products and services. </li>
                                    <li>Complying with legal obligations, enforcing our policies, and protecting against fraud and security threats.</li>
                                </ul>
                                <span><b>Information Sharing: </b></span>
                                <span>We may share your personal information with third parties for the following purposes: </span><br />
                                <ul>
                                    <li><b>Service Providers:</b> We may disclose your information to third-party service providers, affiliates, and business partners who assist us in providing our services, such as credit bureaus, financial institutions, marketing agencies, and IT service providers</li>
                                    <li><b>Legal Compliance:</b> We may disclose your information in response to legal requests, court orders, and government regulations, or to protect our rights, property, or safety.</li>
                                    <li><b>For business transfers:</b> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company</li>
                                    <li><b>With Affiliates:</b> We may share Your information with Our affiliates, in which case we will require those affiliates to honour this Privacy Policy. Affiliates include any other subsidiaries, joint, venture partners or other companies that We control or that are under common control with Us. </li>
                                    <li><b>With business partners:</b> We may share Your information with Our business partners to offer You certain products, services, or promotions</li>
                                    <li><b>With other users:</b> When you share personal information or otherwise interact in public areas with other users, such information may be viewed by all users and may be publicly distributed outside</li>
                                    <li>We may disclose your personal information for any other purpose with your consent.</li>
                                    <li>PallyWad is based in Nigeria and the information we collect is governed by the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act, of 2023. By accessing or using the Services or otherwise providing information to us, you consent to the processing and transfer of information in and to Nigeria and other countries.</li>
                                    <li>For more information about the cookies, we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy. </li>
                                </ul>

                                <span><b>Where We Store Your Personal Data </b></span><br />
                                <span>The Personal Data PallyWad collects from you may be transferred to and stored at a destination outside Nigeria. 
                                By submitting your Personal Data, you agree to this transfer, storing or processing. We will take all steps reasonably 
                                necessary to ensure that your Personal Data is treated securely with an appropriate level of protection and that the 
                                transfer is lawful. </span>
                                <ol>
                                    <li><b>Detailed Information on the Processing of Your Personal Data</b> <br/>The Service Providers We use may have 
                                    access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about 
                                    Your activity on Our Service in accordance with their Privacy Policies.</li>
                                    <li><b>Usage, Performance and Miscellaneous </b><br />We may use third-party Service Providers to provide better improvement of our Service. </li>
                                    <li><b>Google Places </b><br />Google Places is a service that returns information about places using HTTP requests. 
                                    It is operated by Google. Google Places service may collect information from You and from Your Device for security 
                                    purposes. The information gathered by Google Places is held in accordance with the Privacy Policy of Google: Google 
                                    Policy </li>
                                </ol>

                                <span><b>Data Security: </b></span><br />
                                <span>We implement technical, administrative, and physical security measures to protect your personal information from 
                                unauthorised access, disclosure, alteration, and destruction. Despite our efforts to safeguard your information, no 
                                method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute 
                                security. </span><br />
                                <span>Your Data is regarded as confidential and will not be divulged to any third party, except under legal and/or regulatory conditions. You have the right to request sight of, and copies of all information we keep on you if such requests are made in compliance with the Freedom of Information Act and other relevant enactments.</span> <br />
                                <span>While we are dedicated to securing our systems and services and safeguarding the information entrusted to us, your 
                                role in fulfilling confidentiality duties includes but is not limited to, adopting and enforcing appropriate security 
                                measures such as securing and maintaining the privacy of your password(s) and account/profile registration information, 
                                adherence with physical security protocols on our premises, verifying that the Personal Data we maintain of you is 
                                accurate and current. We will inform you of any breaches which may affect your Data. </span><br />
                                <span><b>Cookies and Tracking Technologies </b></span> <br />
                                <span>Cookies are small files placed on your device’s browser that enable the website to identify your device as you view 
                                different pages. Like most interactive websites, our website uses cookies to enable us track of your activity for the 
                                duration of a session. Our website uses only encrypted session cookies which are erased either after a predefined timeout 
                                period or once the user logs out of the platform and closes the browser. Session cookies do not collect information from 
                                your device. They will typically store data in the form of a session identification that does not personally identify 
                                you. Certain aspects of our website are only available through the use of cookies, so your use of our website may be 
                                limited or not possible if you choose to disable or decline cookies. </span><br />
                                <span><b> Your Rights and Choices: </b></span> <br />
                                <span>You have certain rights and choices regarding your personal information, including the right to</span> <br />
                                <ol>
                                    <li>
                                        <span><b>Requests to Access, Rectify or Erase.</b></span>
                                        <ol type="a">
                                            <li>
                                                <spa><b>Access Request </b></span> <br />
                                                <span>As permitted under law and applicable data privacy regulations, you have the right to ask us whether we hold any 
                                                    Personal Data relating to you and, if we do, to be provided with a copy of that Personal Data in electronic form, 
                                                    unless you want to receive it in any other way (for example, a paper copy). In addition, you can ask us for 
                                                    information on how we use your Personal Data, who we share it with, how long we keep it, where it is stored, and 
                                                    other information to help you understand how we use it. 
                                                </span>
                                            </li>
                                            <li>
                                                <span><b>Rectification Request </b></span><br />
                                                <span>You have the right to ask us to correct your Personal Data (including through providing a supplementary statement) 
                                                    if it is inaccurate or update outdated or incomplete Personal Data without undue delay. Where we cannot correct the 
                                                    Personal Data, we include a note on our files regarding your request to correct your Data. 
                                                </span>
                                            </li>
                                            <li><span><b>Erasure Request </b></span><br />
                                                <span>You have the right to ask us to erase your Data if: </span>
                                                <ol type="i">
                                                    <li>Your Data are no longer necessary for the purpose(s) they were collected for. </li>
                                                    <li>Your Data have been unlawfully processed. </li>
                                                    <li>Your Data must be erased to comply with a regulation. </li>
                                                    <li>You withdraw your consent for the processing of the Personal Data (and if this is the only basis on which we are processing your Personal Data). </li>
                                                    <li>You object to the possession, provided there are no overriding legitimate grounds for continued processing, or </li>
                                                    <li>You object to processing for direct marketing purposes. </li>
                                                </ol>
                                            </li>
                                            <span>If we receive your erasure request, we will also take reasonable steps to inform other data controllers processing the data so they can seek to erase links to or copies of your Personal Data. We may refuse to act on your request to erase your Data if the processing of your Personal Data is necessary:   </span>
                                            <li>To exercise our right to freedom of expression and information. </li>
                                            <li>To comply with the NDPR and relevant Nigerian laws.</li>
                                            <li>For the performance of a task carried out in the public interest or to exercise some official authority vested in us. </li>
                                            <li>To establish, exercise or defend legal claims.</li>
                                            <span>In these cases, we can restrict the processing instead of erasing your Personal Data if requested to do so by you. </span>
                                        </ol>
                                    </li>
                                    <li>
                                        <span><b>Requests to Object: </b><span><br />
                                        <span>You have the right to object at any time to the processing of your Personal Data if we process it based on our 
                                        legitimate interests. This includes any so-called “profiling”. Our privacy notice informs you when we rely on legitimate 
                                        interests to process your Data. In these cases, we will stop processing your Personal Data unless we can demonstrate 
                                        compelling legitimate reasons for continuing the processing. We may reject your request if the processing of your 
                                        Personal Data is needed to establish, exercise or defend legal claims. You have the right to object at any time if we 
                                        process your Personal Data for direct marketing purposes. You may also object at any time to profiling supporting our 
                                        direct marketing. In such cases, we will stop processing your Personal Data when we receive your objection. 
                                        </span>
                                    </li>
                                    <li>
                                        <span><b>Requests to Restrict</b></span><br />
                                        <span>You have the right to ask us to restrict the processing of your Personal Data if: </span>
                                        <ul>
                                            <li>You contest the accuracy of your Personal Data, and we are in the process of verifying the Personal Data we hold. </li>
                                            <li>The processing is unlawful, and you do not want us to erase your Data</li>
                                            <li>We no longer need your Data for the original purpose(s) of processing, but you need them to establish, exercise or defend legal claims and you do not want us to delete the Personal Data as a result, or</li>
                                            <li>You have objected to processing carried out because of our legitimate interests while we verify if our legitimate grounds override yours</li>
                                            <spa>If processing is restricted, we may process your Personal Data (except for storage purposes), only</span>
                                            <li>If you have given us your consent</li>
                                            <li>For establishing, exercising or defending legal claims.</li>
                                            <li>For protecting the rights of another natural or legal person, or </li>
                                            <li>For reasons of important public interest as defined under the NDPR and relevant Nigerian laws </li>
                                        </ul>
                                        <span>Once processing is restricted following your request, we will inform you before we lift the restriction. </span>
                                    </li>
                                    <li>
                                        <span><b>Requests for Portability</b></span><br />
                                        <span>If our processing is performed by computer and is necessary to fulfil a contract with you, or is based on your 
                                        consent, you have the right to: </span>
                                        <ul>
                                            <li>Receive any Personal Data you have provided to us in a structured, commonly used and machine-readable electronic format</li>
                                            <li>Send your Data to another organisation or have us do so for you if it is technically feasible for us to do so</li>
                                            
                                        </ul>
                                        <span>
                                            If your request relates to a set of Personal Data that also concerns other individuals, we may restrict the 
                                            transfer to only the portion relevant to you, unless you establish that you have also gotten their consent. 
                                        </span>
                                    </li>
                                    <li>
                                        <span><b>Requests to Object to Automated Decisions</b></span><br />
                                        <span> Generally, you have the right to object to any legal decision concerning you or which otherwise significantly 
                                        affects you if this is based solely on the automated processing of your Personal Data. This includes automated decisions 
                                        based on profiling. In such instances, you may undertake a legal process to prevent or advance your rights. </span><br />
                                        <span>Otherwise, we may refuse your request regarding such automated decisions where</span>
                                        <ul>
                                            <li>Necessary to enter into a contract with you, or for the performance of your contract with us</li>
                                            <li>Permitted by regulations, or </li>
                                            <li>Based on your explicit consent </li>
                                        </ul>
                                        <span>Our actions on the automated processing involving your sensitive Personal Data (where you have given your explicit 
                                            consent, or the processing is necessary for reasons of substantial public interest) are in complete compliance with 
                                            the NDPR and relevant laws. 
                                        </span>
                                    </li>
                                </ol>
                            </p>
                            <p>
                                <span><b>Updates to Privacy Policy: </b><span><br />
                                <span>This privacy policy is reviewed periodically and when there is any substantial change to business or regulatory requirements. The revised Privacy Policy will be effective as of the published updated date. When reviewed, we shall communicate via our communication channels such as our Website, Social Media Accounts etc. If the revised version includes a substantial change, we may notify you of any material updates by posting the revised policy through other appropriate channels.</span>
                            </p>
                            <p>
                                <span><b>Contact Us </b><span><br />
                                <span>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:info@pallywad.com">info@pallywad.com</a></span>
                            </p>
                            <p>
                                <span><b>Consent: </b><span><br />
                                <span>By using our services or accessing our website, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.</span>
                            </p>
                        </div>
                        
                    </div>
            </div>
            <default-footer></default-footer>
        </div>
        `
    }
}