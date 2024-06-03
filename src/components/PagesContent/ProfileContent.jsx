import React, { useRef, useState } from 'react'
import arrow from "../../assets/images/Admin-20 (25).png"
import user from "../../assets/images/Admin-20 (86).png"
import loc from "../../assets/images/Admin-20 (90).png"
import uploadImg from "../../assets/images/Admin-20 (20).png"
import { toast } from 'react-toastify'
// import RoleAccess from '../../hoc/RoleAccess';
// import useUserRole from '../../hooks/useUserRole'

const ProfileContent = () => {
    const [img, setImg] = useState("")
    const Ref = useRef()
    // const roles = useUserRole()
    function generateStars(num) {
        const starsArray = Array.from({ length: num }, (_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
        ));

        return <div>{starsArray}</div>;
    }

    const handleImg = (e) => {
        const file = e?.target?.files[0]
        if (file?.size <= 10 * 1024 * 1024) {
            setImg(URL.createObjectURL(file))
            Ref.current.value = null
        } else {
            toast.warning("File size should be less than 10mb")
        }
    }


    return (
        <div className="profile">
            <p className="profile_title">Profile</p>
            <div className="profile_banner">
                <img src={arrow} alt='' />
                <div className="profile_verify"><i className="fa-solid fa-check"></i> Verified</div>
            </div>
            <div className="profile_inner">
                <div className="profile_dp">
                    {/* <img src={user} alt='' /> */}
                    <div className='profile_uploader'>
                        {img && <i onClick={() => setImg("")} class="fa-solid fa-trash"></i>}
                        <img className={img ? "fullImg" : "uploadImg"} src={img ? img : uploadImg} alt="uploadImg" />
                        <input type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} />
                    </div>
                </div>
                <p style={{ fontSize: "12px", marginTop: '10px' }}>Recomended resolution banner : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p>
                <div className="container">
                    <p className="profile_head">Storm Fiber</p>
                    <div className="profile_star">{generateStars(4)}</div>
                    <p className="profile_review">4.8 rating based on 149 reviews</p>
                    <p className="profile_loc"><img src={loc} alt='' /> 17230 NE Sacramento Street Portland Oregon</p>
                    <p className="profile_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                        doloremque. Quaerat provident commodi consectetur veniam similique ad
                        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                        modi minima sunt esse temporibus sint culpa</p>
                </div>
                {/* <RoleAccess role={roles.create}>
                    <button className="profile_btn">Edit Details</button>
                </RoleAccess> */}
            </div>
        </div>
    )
}

export default ProfileContent