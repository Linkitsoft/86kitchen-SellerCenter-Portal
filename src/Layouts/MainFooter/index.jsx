import React from 'react'
import logo from "../../assets/images/Admin-20 (89).png"
import { webUrls } from '../../utils/webUrls'

const MainFooter = () =>
{
    return (
        <div className="mainFooter">
            <div className="container">
                <div className="mainFooter_top">
                    <div>
                        <p className="mainFooter_head">86kitch’n </p>
                        <div className="mainFooter_item">
                            <p>About</p>
                            <p>Press</p>
                            <p>Blog</p>
                            <p>Partner Center</p>
                            <p>Affiliate Center</p>
                        </div>
                    </div>
                    <div>
                        <p className="mainFooter_head">Services </p>
                        <div className="mainFooter_subtwo">
                            <div className="mainFooter_item">
                                <p>Internet Connection</p>
                                <p>POS System</p>
                                <p>Multimedia Screen</p>
                                <p>Drive Thru</p>
                            </div>
                            <div className="mainFooter_item">
                                <p>BOM Analysis</p>
                                <p>(CCTV) surveillance system</p>
                                <p>Self Service Kiosl</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mainFooter_head">Support </p>
                        <div className="mainFooter_item">
                            <p>Help</p>
                            <p>Safety</p>
                            <p>Terms of use</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div>
                        <p className="mainFooter_head">Links</p>
                        <div className="mainFooter_item">
                            <p> <a target='_blank' rel='noreferrer' href={webUrls.marketPlace}>Marketplace </a></p>
                            {/* <p> <a target='_blank' rel='noreferrer' href={webUrls.superAdmin}>Super Admin </a></p> */}
                            <p> <a target='_blank' rel='noreferrer' href={webUrls.affiliate}>Affiliate Center </a></p>
                        </div>
                    </div>
                </div>
                <div className="mainFooter_bottom">
                    <p>2023 86Kitch’n</p>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainFooter