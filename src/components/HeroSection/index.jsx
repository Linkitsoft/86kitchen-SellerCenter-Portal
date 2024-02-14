import React from 'react'
import sample from "../../assets/images/sample.mp4";
import company from "../../assets/images/Admin-20 (37).png"
import wifi1 from "../../assets/images/Admin-20 (62).png"
import wifi2 from "../../assets/images/Admin-20 (61).png"
import wifi3 from "../../assets/images/Admin-20 (60).png"
import wifi4 from "../../assets/images/Admin-20 (59).png"
import wifi5 from "../../assets/images/Admin-20 (63).png"
import leftPat from "../../assets/images/Admin-20 (64).png"
import rightPat from "../../assets/images/Admin-20 (58).png"
import user1 from "../../assets/images/Admin-20 (56).png"

const HeroSection = () =>
{
    function generateStars(num)
    {
        const starsArray = Array.from({ length: num }, (_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
        ));

        return <div>{starsArray}</div>;
    }
    return (
        <div className="hero">
            <div className="hero_top">
                <div className="container">
                    <div className="hero_content">
                        <p className="hero_text">Learn About <br /> 86 Kitch’n Partner Center</p>
                        <video src={sample}></video>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="hero_feature">Featured by:</p>
                <img className="hero_company" src={company} alt='' />
                <div className="hero_star">
                    {generateStars(4)}
                    <p>4.8 rating based on 149 reviews</p>
                </div>
            </div>
            <div className="hero_banner">
                <p className="hero_head">Find Thousands Of 86 Kitch’n Restaurants</p>
                <div className="hero_main">
                    <div className="hero_left">
                        <img src={leftPat} alt='' />
                    </div>
                    <div className="hero_all">
                        <div className="hero_headmini">What Kind of Partner in 86 Kitch’n</div>
                        <div className="hero_stars">
                            <div className="hero_single">
                                <img src={wifi1} alt='' />
                                <p>Internet Connection</p>
                            </div>
                            <div className="hero_single">
                                <img src={wifi2} alt='' />
                                <p>Internet Connection</p>
                            </div>
                            <div className="hero_single">
                                <img src={wifi3} alt='' />
                                <p>Internet Connection</p>
                            </div>
                            <div className="hero_single">
                                <img src={wifi4} alt='' />
                                <p>Internet Connection</p>
                            </div>
                            <div className="hero_single">
                                <img src={wifi5} alt='' />
                                <p>Internet Connection</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero_right">
                        <img src={rightPat} alt='' />
                    </div>
                </div>
                <div className="hero_signup">
                    <button className="hero_btn">Let's Sign Up</button>

                </div>
            </div>
            <p className="hero_head">What People Are Saying</p>
            <div className="container">
                <div className="hero_review">
                    <div className="hero_reviewall">
                        <p className="msg">I have been using 86 Kitch’n for a
                            few years now. Does exactly what
                            it should do, Full Multi vendor
                            capabilities. Support are always
                            fast and helpful. And the dev
                            team are always open to suggested new features. Happy customer</p>
                        <div className="hero_msg">
                            <img src={user1} alt='' />
                            <div>
                                <p className="name">Samentha</p>
                                <p className="type">Connect</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero_reviewall">
                        <p className="msg">I have been using 86 Kitch’n for a
                            few years now. Does exactly what
                            it should do, Full Multi vendor
                            capabilities. Support are always
                            fast and helpful. And the dev
                            team are always open to suggested new features. Happy customer</p>
                        <div className="hero_msg">
                            <img src={user1} alt='' />
                            <div>
                                <p className="name">Samentha</p>
                                <p className="type">Connect</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero_reviewall">
                        <p className="msg">I have been using 86 Kitch’n for a
                            few years now. Does exactly what
                            it should do, Full Multi vendor
                            capabilities. Support are always
                            fast and helpful. And the dev
                            team are always open to suggested new features. Happy customer</p>
                        <div className="hero_msg">
                            <img src={user1} alt='' />
                            <div>
                                <p className="name">Samentha</p>
                                <p className="type">Connect</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero_sell">
                    Let’s Start selling services with 86 Kitch’n <br/>
                    marketplace today
                </div>
            </div>
        </div>
    )
}

export default HeroSection