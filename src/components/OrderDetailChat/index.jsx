import React, { useEffect, useRef, useState } from 'react';
import att from "../../assets/images/Admin-20 (27).png";
// import sample from "../../assets/images/Admin-20 (24).png";
// import sample1 from "../../assets/images/Admin-20 (34).png";
import send from "../../assets/images/vdd-01.png";
import RoleAccess from '../../hoc/RoleAccess';
import useUserRole from '../../hooks/useUserRole';
import UploadImg from '../UploadImage';
import { io } from "socket.io-client";
import { GetChat, PartnerChat } from '../../Services/Partner';
import ChatLoader from '../Loader/ChatLoader';
import { useInView } from "react-intersection-observer";

const socket = io("http://3.142.184.86/");

const OrderDetailChat = ({ customerId, queryId }) =>
{
    const chatInnerRef = useRef(null);
    const roles = useUserRole();
    const [img, setImg] = useState();
    const Ref = useRef();
    const msgRef = useRef();
    const messagesEndRef = useRef();
    const [mainLoader, setMainLoader] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loader, setLoader] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const { ref: topRef, inView: topInView } = useInView();
    const userId = localStorage.getItem('userId');
    const [hasMore, setHasMore] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    const handleImg = (e) =>
    {
        UploadImg(e, setImg);
        Ref.current.value = null;
    };

    const handleSendMsg = async () =>
    {
        setLoader(true);
        const body = {
            queryId: queryId,
            receiverId: customerId,
            chat: msgRef.current.value
        };

        await PartnerChat(body);
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        msgRef.current.value = null;
        setLoader(false);
    };

    const getAllChats = async (page) =>
    {
        setMainLoader(true);
        const res = await GetChat({ queryId, pageNo: page });
        if (res.data?.data?.length > 0)
        {
            let temp = res?.data?.data?.map((item) =>
            {
                return {
                    ...item,
                    type: userId === item?.senderId ? 'sent' : 'receive'
                };
            });
            setMessages((prevData) => {
                const sortedMessages = [...temp, ...prevData].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                return sortedMessages;
            });
            // Adjust scroll position slightly after loading more messages
            if (chatInnerRef.current)
            {
                chatInnerRef.current.scrollTo(0, 700);
            }
        } else
        {
            setHasMore(false); // No more data to load
        }
        setMainLoader(false);
    };

    useEffect(() =>
    {
        getAllChats(pageNo);
    }, [pageNo]);

    useEffect(() =>
    {
        socket.on('connect', () =>
        {
            console.log('Connected to Socket.IO server');
        });

        socket.on(queryId, (data) =>
        {
            setMessages(prevMessages => [...prevMessages, { ...data, type: userId === data?.senderId ? 'sent' : 'receive' }]);
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        });

        return () =>
        {
            socket.off('connect');
            socket.off(queryId);
        };
    }, [queryId, userId]);

    const handleEnterKey = (e) =>
    {
        if (loader) return;
        if (e.key === "Enter")
        {
            handleSendMsg();
        }
    };

    useEffect(() =>
    {
        if(initialLoad && messages){
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
            setInitialLoad(false)
        } 
    }, [messages]);

    useEffect(() =>
    {
        if (topInView && !mainLoader && hasMore)
        {
            const timeoutId = setTimeout(() =>
            {
                setPageNo(pageNo + 1);
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [topInView, mainLoader, hasMore]);


    console.log("messages", messages)

    return (
        <div className="od_right">
            <div className="od_chatHead">
                <p>Live Chat</p>
                <p>StormFiber</p>
            </div>
            <p className="od_chatLimit">Limited Time Offer</p>
            <div className="od_chatInner" ref={chatInnerRef}>
                <div ref={topRef}></div>
                {messages?.length > 0 ? messages?.map((item, index) => (
                    item?.type === 'sent' ?
                        <div key={index} className='od_chatSend'>
                            <div>{item?.chat}</div>
                            <p>12:12</p>
                        </div> :
                        <div key={index} className='od_chatGet'>
                            <div>{item?.chat}</div>
                            <p>12:12</p>
                        </div>
                )) : 
                <div className='od_nomsg'>No messages found</div>
                }
                <div ref={messagesEndRef}></div>
            </div>
            <RoleAccess role={roles?.create}>
                <div className="od_chatBottom">
                    <input onKeyDown={handleEnterKey} ref={msgRef} type='text' placeholder='Type message..' />
                    {loader ? <ChatLoader /> :
                        <div className="od_chatSend">
                            <img style={{ width: "20px" }} src={att} alt='' />
                            <div className='od_upload'>
                                <input className='uploadInput' type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} />
                                <img onClick={handleSendMsg} src={send} alt='' style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    }
                </div>
            </RoleAccess>
        </div>
    );
};

export default OrderDetailChat;
