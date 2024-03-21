import DefaultView from "./DefaultView.js";

export default class extends DefaultView {
    constructor(params) {
        super(params);
        this.setTitle("Loan Requirements | PallyWad Capital ");
    }

    async getHtml() {
        return `
        <div id="main" class="has-animation">
            <default-header></default-header>
            <div class="dashboard-area">
                <left-sidebar></left-sidebar>
                <div class="right-pane">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <div class=" text-center translate-bottom-50 transition-100 transition-delay-800">
                                <h3>Loan Requirements</h3>
                            </div>
                        </div>
                        <div class="row">
                            <p ><h4><b class="about-title" style="font-size: 20px !important;">Personal Loan.</b></h4></p>
                            <div class=" p-2">
                                <h5><b>Applicant Information: </b></h5>
                                <span>
                                    <ul>
                                        <li>First Name</li>
                                        <li> Middle Name</li>
                                        <li>Surname</li>
                                        <li>Gender</li>
                                        <li>Date of Birth</li>
                                        <li>Email Address (will be verified)</li>
                                        <li>Phone (will be verified via SMS)</li>
                                        <li>National Identity Number (NIN)</li>
                                        <li>Bank Verification Number (BVN)</li>
                                        
                                        <li>Home Address (House No, Street, City, Bus stop, Closest Landmark, State)</li>
                                        <li>Upload Passport photo</li>
                                        <li>Upload Identification (Valid International Passport or Driver’s License)</li>
                                    </ul>
                                </span>
                                
                                <h5><b>Other Loan Information: </b></h5>
                                <span>
                                    <ul>
                                        <li>Loan amount (should not more than 60% of collateral value) </li>
                                        <li>Purpose (Travel, Working capital funding, etc) </li>
                                        <li>Tenor (1 – 12 months) </li>
                                        <li>Capital Repayment Plan (Reducing Balance or Lumpsum at end of tenure) </li>
                                        <li>Collateral Type (Car or Gold) </li>
                                        <li>Collateral Value (Minimum 167% of loan amount) </li>
                                    </ul>
                                </span>
                                <h5><b>Support Documentation for Upload: (PDF, JPEG, PNG) </b></h5>
                                <span>
                                    <ul>
                                        <li>Government Approved ID (Minimum of 2, NIN slip + either of valid International Passport or Driver’s License)</li>
                                        <li>Recent Passport Photo  </li>
                                        <li>Utility Bill (For proof of address, not older than 3 months) </li>
                                    </ul>
                                </span>
                                <h5><b>Collateral back up information for Upload: (PDF, JPEG, PNG) </b></h5>
                                    <h6>Car: Items for upload: </h6>
                                    <span>
                                        <ul>
                                            <li>Image of Car</li>
                                            <li>Original vehicle particulars (Vehicle License & Proof or Ownership) </li>
                                            <li>Original car valuation certificate from Car 45</li>
                                            <li>Original signed transfer of ownership document (not dated) </li>
                                        </ul>
                                    </span>
                                    <h6>Gold: Items for upload: </h6>
                                    <span>
                                        <ul>
                                            <li>Pictures of gold alone</li>
                                            <li>Pictures of gold on scale to show weight of the gold. </li>
                                        </ul>
                                    </span>
                            </div>

                        </div>
                        <div>
                            <p ><h4><b class="about-title" style="font-size: 20px !important;">Business Loan.</b></h4></p>
                            <div class="p-2">
                                <h5><b> Organization's Information: </b></h5>
                                <span>
                                    <ul>
                                        <li>Organization's Name </li>
                                        <li>Organization Type (Partnership/LLP/Proprietorship/Private Limited/Public Ltd/Others (Should be a dropdown)</li>
                                        <li>Industry/Sector</li>
                                        <li>Product/Services</li>
                                        <li>CAC Registration Number</li>
                                        <li>Tax Identification Number (TIN)</li>
                                        <li>Phone</li>
                                        <li>Email</li>
                                        <li>Office Address (House No, Street, City, Bus stop, Closest landmark, LGA, State)</li>
                                    </ul>
                                </span>
                                <h5><b>Loan Information:</b></h5>
                                <span>
                                    <ul>
                                        <li>Loan amount (should not more than 60% of collateral value) </li>
                                        <li>Purpose (Travel, Working capital funding, etc) </li>
                                        <li>Tenor (1 - 12 months) </li>
                                        <li>Capital Repayment Plan (Reducing Balance or Lumpsum at end of tenure) </li>
                                        <li>Collateral Type (Car or Gold)</li>
                                        <li>Collateral Value (Minimum 167% of loan amount)</li>
                                    </ul>
                                </span>
                                <h5><b>Support Documentation for Upload: (PDF, JPEG, PNG)</b></h5>
                                <span>
                                    <ul>
                                        <li>Government Approved ID for SH & Dir (Minimum of 2, NIN + either of valid International Passport or Driver's License) </li>
                                        <li>Recent Passport Photo of SH & Dir </li>
                                        <li>Utility Bill (For proof of address, not older than 3 months) for the organization, SH & Dir</li>
                                        <li>CAC Documentation  </li>
                                        <li>Bank Statement of 12 months</li>
                                    </ul>
                                </span>
                                <h5><b>Collateral back up information for Upload: (PDF, JPEG, PNG) </b></h5>
                                    <h6>Car: Items for upload: </h6>
                                    <span>
                                        <ul>
                                            <li>Image of Car</li>
                                            <li>Original vehicle particulars (Vehicle License & Proof or Ownership) </li>
                                            <li>Original car valuation certificate from Car 45</li>
                                            <li>Original signed transfer of ownership document (not dated) </li>
                                        </ul>
                                    </span>
                                    <h6>Gold: Items for upload: </h6>
                                    <span>
                                        <ul>
                                            <li>Pictures of gold alone</li>
                                            <li>Pictures of gold on scale to show weight of the gold. </li>
                                        </ul>
                                    </span>
                                

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