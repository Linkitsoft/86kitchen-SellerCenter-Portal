import React, {useRef, useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import back from "../../assets/images/Admin-20 (29).png"
import att from "../../assets/images/Admin-20 (27).png"
import bg from "../../assets/images/Admin-20 (22).png"
import sample from "../../assets/images/Admin-20 (24).png"
import sample1 from "../../assets/images/Admin-20 (34).png"
import send from "../../assets/images/vdd-01.png"
import { useNavigate } from 'react-router-dom'

const OrderDetails = () =>
{

    const chatInnerRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        chatInnerRef.current.scrollTop = chatInnerRef.current.scrollHeight;
      }, []); 

    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"4"} />
                    <div className="od">
                        <div className="od_header">
                            <p className="od_title"><img src={back} alt='' onClick={() => navigate(-1)}/>Samentha John - Invoice No: 001 </p>
                            <div className="od_date">Submission date : <span>09 / 11 / 2023 - 08:53 PM</span></div>
                        </div>
                        <div className="od_main">
                            <div className="od_left">
                                <div className="od_header">
                                    <p className="od_subhead">Order Details</p>
                                    <p className="od_cost">Total Cost: <span>$150</span></p>
                                </div>
                                <img className="od_img" src={bg} alt='' />
                                <p className="od_head">Limited Time Offers</p>
                                <p className="od_desc">Hi i am samantha i like your services Yellow
                                    Storm Triple Typhoon 20 Mbps - Month cost
                                    $50, Ont time cost $100</p>
                                <button className="od_btn" onClick={() => navigate('/generateSales')}>Generate Sales</button>
                            </div>
                            <div className="od_right">
                                <div className="od_chatHead">
                                    <p>Live Chat</p>
                                    <p>StormFiber</p>
                                </div>
                                <p className="od_chatLimit">Limited Time Offer</p>
                                <div className="od_chatInner" ref={chatInnerRef}>
                                    <div className="od_chatGet">
                                        <div>m! Provident similique accusantium nemo autem. Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                            sapiente officiis modi at sunt ex</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatGet">
                                        <div>Hey There!</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatGet">
                                        <div className="od_chatImg">
                                            <img src={sample} alt='' />
                                        </div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatGet">
                                        <div>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, moles</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div>m! Provident similique accusantium nemo autem. Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                            sapiente officiis modi at sunt ex</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div className="od_chatImg">
                                            <img src={sample1} alt='' />
                                        </div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div>Hey There!</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, moles</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatGet">
                                        <div>m! Provident similique accusantium nemo autem. Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                            sapiente officiis modi at sunt ex</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatGet">
                                        <div>Hey There!</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatGet">
                                        <div>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, moles</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div>m! Provident similique accusantium nemo autem. Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                            sapiente officiis modi at sunt ex</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div>Hey There!</div>
                                        <p>12:12</p>
                                    </div>
                                    <div className="od_chatSend">
                                        <div>orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, moles</div>
                                        <p>12:12</p>
                                    </div>
                                </div>
                                <div className="od_chatBottom">
                                    <input type='text' placeholder='Type message..' />
                                    <div className="od_chatSend">
                                        <img style={{ width: "20px" }} src={att} alt='' />
                                        <img src={send} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
