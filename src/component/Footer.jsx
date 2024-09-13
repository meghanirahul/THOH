import React from "react";
import '../style/section/footer.css'
import {ReactComponent as Submit} from '../asset/submit.svg' 

export default function Footer(){
    return(
        <>
        <div className="footer-main">
            <div className="page-width footer-inline">
                <div className="footer-link-cotain">
                    <div className="quick-links">
                        <h4 className="h4">Accounts</h4>
                        <ul>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Log in</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Sign up</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Redeem a Gift Card</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h4 className="h4">Company</h4>
                        <ul>
                            <li className="footer-link">
                                <a className="light-text" href="#this">About us</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Factories</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Careers</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">International</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h4 className="h4">Connect</h4>
                        <ul>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Facebook</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Instagram</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Twitter</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Affilates</a>
                            </li>
                            <li className="footer-link">
                                <a className="light-text" href="#this">Our Stories</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="emailsingup-box">
                    <div className="email-backimg">
                        <div className="signup_massage">
                            <h4 className="h4">Sign to get everyday updated by new collection and discounts!</h4>
                        </div>
                        <div className="email_box">
                            <input className="email_input"
                             type="email"
                             placeholder="Email adress"> 
                            </input>
                            <button className="email_submit" type="submit" value="Subscribe"><Submit /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}