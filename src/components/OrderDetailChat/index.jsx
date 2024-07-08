import React, { useEffect, useRef, useState } from 'react'
import att from "../../assets/images/Admin-20 (27).png"
import sample from "../../assets/images/Admin-20 (24).png"
import sample1 from "../../assets/images/Admin-20 (34).png"
import send from "../../assets/images/vdd-01.png"
import RoleAccess from '../../hoc/RoleAccess';
import useUserRole from '../../hooks/useUserRole'
import UploadImg from '../UploadImage'
import { io } from "socket.io-client";
import { PartnerChat } from '../../Services/Partner'
import { useUserDetails } from '../../context/profileContext'

const socket = io("https://kjjp4n4d-8080.inc1.devtunnels.ms/");

const OrderDetailChat = ({ customerId, queryId }) =>
{
    const chatInnerRef = useRef(null);
    const roles = useUserRole()
    const [img, setImg] = useState()
    const Ref = useRef()
    const [msg, setMsg] = useState("")
    const [messages, setMessages] = useState([]);
    const { userDetails } = useUserDetails()
    const handleImg = (e) =>
    {
        UploadImg(e, setImg)
        Ref.current.value = null
        // const file = e?.target?.files[0]
        // if (file?.size <= 10000000) {
        //     setImg(URL.createObjectURL(file))
        // } else {
        //     toast.warning("File size should be less than 10mb")
        // }
    }

    useEffect(() =>
    {
        chatInnerRef.current.scrollTop = chatInnerRef.current.scrollHeight;
    }, []);

    const handleSendMsg = async () =>
    {
        const body = {
            queryId: queryId,
            receiverId: customerId,
            chat: msg
        }

        await PartnerChat(body)
    }

    useEffect(() =>
    {

        socket.on('connect', () =>
        {
            console.log('Connected to Socket.IO server');
        });

        socket.on(queryId, (data) =>
        {
            setMessages(prevMessages => [...prevMessages, { ...data, type: userDetails?.id === data?.senderId ? 'sent' : 'receive' }]);

        });
        // eslint-disable-next-line
    }, [])

    return (
        <div className="od_right">
            <div className="od_chatHead">
                <p>Live Chat</p>
                <p>StormFiber</p>
            </div>
            <p className="od_chatLimit">Limited Time Offer</p>
            <div className="od_chatInner" ref={chatInnerRef}>
                {
                    messages?.map((item) => (
                        <div className="od_chatGet">
                            <div>{item?.chat}</div>
                            <p>12:12</p>
                        </div>
                    ))
                }
                {/* <div className="od_chatGet">
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
                {img &&
                    <div className="od_chatSend">
                        <div className="od_chatImg">
                            <img src={img} alt='' />
                        </div>
                        <p>12:12</p>
                    </div>
                } */}
            </div>
            <RoleAccess role={roles?.create}>
                <div className="od_chatBottom">
                    <input onChange={(e) => setMsg(e.target.value)} type='text' placeholder='Type message..' />
                    <div className="od_chatSend">
                        <img style={{ width: "20px" }} src={att} alt='' />
                        <div className='od_upload'>
                            <input className='uploadInput' type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} />
                            <img onClick={handleSendMsg} src={send} alt='' style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                </div>
            </RoleAccess>
        </div>
    )
}

export default OrderDetailChat