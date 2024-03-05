import React, {useEffect, useRef} from 'react'
import att from "../../assets/images/Admin-20 (27).png"
import sample from "../../assets/images/Admin-20 (24).png"
import sample1 from "../../assets/images/Admin-20 (34).png"
import send from "../../assets/images/vdd-01.png"

const OrderDetailChat = () =>
{
    const chatInnerRef = useRef(null);

    useEffect(() => {
        chatInnerRef.current.scrollTop = chatInnerRef.current.scrollHeight;
      }, []); 

    return (
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
    )
}

export default OrderDetailChat