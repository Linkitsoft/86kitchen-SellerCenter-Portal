import React, { useEffect, useRef, useState } from 'react'
import att from "../../assets/images/Admin-20 (27).png"
import sample from "../../assets/images/Admin-20 (24).png"
import sample1 from "../../assets/images/Admin-20 (34).png"
import send from "../../assets/images/vdd-01.png"
import RoleAccess from '../../hoc/RoleAccess';
import useUserRole from '../../hooks/useUserRole'
import UploadImg from '../UploadImage'
import { io } from "socket.io-client";
import { GetChat, PartnerChat } from '../../Services/Partner'
import { useUserDetails } from '../../context/profileContext'
import ChatLoader from '../Loader/ChatLoader'
import { useInView } from "react-intersection-observer";

const socket = io("https://kjjp4n4d-8080.inc1.devtunnels.ms/");

const OrderDetailChat = ({ customerId, queryId }) =>
{
    const chatInnerRef = useRef(null);
    const roles = useUserRole()
    const [img, setImg] = useState()
    const Ref = useRef()
    const msgRef = useRef()
    const messagesEndRef = useRef()
    const [mainLoader, setMainLoader] = useState(false)
    const [pageNo, setPageNo] = useState(1);
    const [messages, setMessages] = useState([]);
    const { ref, inView } = useInView({});

    const [loader, setLoader] = useState(false)
    const userId = localStorage.getItem('userId')
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

    // useEffect(() =>
    // {
    //     chatInnerRef.current.scrollBottom = chatInnerRef.current.scrollHeight;
    // }, [messages]);

    const handleSendMsg = async () =>
    {
        setLoader(true)
        const body = {
            queryId: queryId,
            receiverId: customerId,
            chat: msgRef.current.value
        }

        await PartnerChat(body)
        msgRef.current.value = null
        setLoader(false)
    }

    const getAllChats = async () =>
    {
        setMainLoader(true)
        const res = await GetChat({ queryId, pageNo })
        if (res.data?.data?.length > 0)
        {
            let temp = res?.data?.data?.map((item) =>
            {
                return {
                    ...item,
                    type: userId === item?.senderId ? 'sent' : 'receive'
                }
            })
            // setData((prevData) => [...prevData, ...res.data]);
            setMessages((prevData) => [...prevData, ...temp])
            setMainLoader(false)
        }
        else
        {
            setMainLoader(false)
        }

    }

    useEffect(() =>
    {
        getAllChats()
    }, [])


    useEffect(() =>
    {

        socket.on('connect', () =>
        {
            console.log('Connected to Socket.IO server');
        });

        socket.on(queryId, (data) =>
        {
            console.log("DATA", data)
            setMessages(prevMessages => [...prevMessages, { ...data, type: userId === data?.senderId ? 'sent' : 'receive' }]);

        });
        // eslint-disable-next-line
    }, [])

    const handleEnterKey = (e) =>
    {
        if (loader) return
        if (e.key === "Enter")
        {
            handleSendMsg()
        }
    }

    useEffect(() =>
    {
        !inView && messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() =>
    {
        if (inView && !mainLoader)
        {
            const timeoutId = setTimeout(() =>
            {
                setPageNo(pageNo + 1);
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [inView]);

    return (
        <div className="od_right">
            <div className="od_chatHead">
                <p>Live Chat</p>
                <p>StormFiber</p>
            </div>
            <p className="od_chatLimit">Limited Time Offer</p>
            <div className="od_chatInner" ref={chatInnerRef}>
                {!mainLoader && <div ref={ref}>
                    {pageNo >= 1 && <ChatLoader />}
                </div>}
                {messages?.map((item) => (
                    item?.type === 'sent' ?
                        <div className='od_chatSend'>
                            <div>{item?.chat}</div>
                            <p>12:12</p>
                        </div> :
                        <div className='od_chatGet'>
                            <div>{item?.chat}</div>
                            <p>12:12</p>
                        </div>))}

                <div ref={messagesEndRef}></div>
            </div>
            <RoleAccess role={roles?.create}>
                <div className="od_chatBottom">
                    <input onKeyDown={handleEnterKey} ref={msgRef} type='text' placeholder='Type message..' />
                    {loader ?
                        <ChatLoader /> :
                        <div className="od_chatSend">
                            <img style={{ width: "20px" }} src={att} alt='' />
                            <div className='od_upload'>
                                <input className='uploadInput' type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} />
                                <img onClick={handleSendMsg} src={send} alt='' style={{ cursor: "pointer" }} />
                            </div>
                        </div>}

                </div>
            </RoleAccess>
        </div>
    )
}

export default OrderDetailChat