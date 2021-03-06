import React, {StyleHTMLAttributes, Component, StyComponent} from 'react';



class Foolter extends React.Component{
    render(){
        return(
            <div>
                <footer id="footer" class="footer-area wow fadeIn">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                            <div class="logo padding">
                                <a href=""><img src="./assets/images/logo.png" alt=""></img></a>
                                <p>Health-Care được tạo ra để phục vụ sức khỏe cho cộng đồng một cách chu đáo nhất.</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="footer-info padding">
                                <h3>Liên hệ</h3>
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i> ISC Quang Trung</p>
                                <p><i class="fa fa-paper-plane" aria-hidden="true"></i> hotro@healthcare.com</p>
                                <p><i class="fa fa-phone" aria-hidden="true"></i> (+84) 088 613 468</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="subcriber-info">
                                <h3>Đăng ký theo dõi</h3>
                                <p>Nhận các thông tin mới nhất, mẹo hay và giải pháp từ chúng tôi.</p>
                                <div class="subcriber-box">
                                    <form id="mc-form" class="mc-form">
                                        <div class="newsletter-form">
                                        <input type="email" autocomplete="off" id="mc-email" placeholder="Email address"
                                            class="form-control" name="EMAIL"/>
                                        <button class="mc-submit" type="submit"><i class="fa fa-paper-plane"></i></button>
                                        <div class="clearfix"></div>
                                        {/* <!-- mailchimp-alerts Start --> */}
                                        <div class="mailchimp-alerts">
                                            <div class="mailchimp-submitting"></div>
                                            {/* <!-- mailchimp-submitting end --> */}
                                            <div class="mailchimp-success"></div>
                                            {/* <!-- mailchimp-success end --> */}
                                            <div class="mailchimp-error"></div>
                                            {/* <!-- mailchimp-error end --> */}
                                        </div>
                                        {/* <!-- mailchimp-alerts end --> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="copyright-area wow fadeIn">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                            <div class="footer-text">
                                <p>© 2020 Healthcare. All Rights Reserved.</p>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <div class="social">
                                <ul class="social-links">
                                    {/* <!-- <li><a href=""><i class="fa fa-rss"></i></a></li> --> */}
                                    <li><a href=""><i class="fa fa-facebook"/></a></li>
                                    {/*  <!-- <li><a href=""><i class="fa fa-twitter"></i></a></li> --> */}
                                    <li><a href=""><i class="fa fa-google"/></a></li>
                                    <li><a href=""><i class="fa fa-youtube"/></a></li>
                                    {/* <!-- <li><a href=""><i class="fa fa-pinterest"></i></a></li> --> */}
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Foolter