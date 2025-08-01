import React from 'react'
import foter_logo from "../images/logo.png"

function Footer() {
    return (
        <div className='foooter-wrapper'>
            <div className='container'>
                <div className='footer-wrap-section'>
                    <div className='logo footer-section'>
                        <img src={foter_logo} alt="" className='mb-3' />
                        <p>Subscribe to our newsletter to get updates about our grand offers.</p>

                        <div className='social-media'>

                                <a href="">
                                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                                </a>
                                <a href="">
                                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"></path></svg>
                                </a>

                                <a href="">
                                    <svg  viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg>
                                </a>

                                <a href="">
                                    <svg  viewBox="0 0 24 24"><path fill="currentColor" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"></path></svg>
                                </a>
                        </div>

                    </div>
                    <div className='quik-link footer-section'>
                        <h3>Quick Links</h3>

                        <ul>
                            <li><a href="">home </a></li>
                            <li><a href="">about us</a></li>
                            <li><a href="">shop</a></li>
                            <li><a href="">contact us </a></li>
                            <li><a href="">sevices </a></li>
                        </ul>

                    </div>

                    <div className='help-center footer-section'>

                        <h3>Help Center</h3>

                        <ul>
                            <li> <a href="">FAQs</a></li>
                            <li> <a href="">payment</a></li>
                            <li> <a href="">Checkout</a></li>
                            <li> <a href="">Delivery Info</a></li>
                        </ul>


                    </div>

                    <div className='our-newsletter footer-section'>

                        <h3>our newsletter</h3>
                                                  <p>Subscribe to our newsletter to get updates about our grand offers.</p>

                        <div>

                            <input type="text" className='form-cotrol' />
                        </div>

                    </div>
                </div>

            </div>

            <div className='container'>
                <div className='footer-bottom'>
                    <p>&copy; 2025 Waggy All Right Reserved.</p>
                    <p>By <a href="">Waggy template</a></p>

                </div>
            </div>

        </div>
    )
}


export default Footer