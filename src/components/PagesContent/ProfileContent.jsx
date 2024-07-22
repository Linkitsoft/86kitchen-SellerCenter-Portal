import React, { useState } from 'react'
// import user from "../../assets/images/Admin-20 (86).png"
import loc from "../../assets/images/Admin-20 (90).png"
// import { toast } from 'react-toastify'
import { useUserDetails } from '../../context/profileContext'
// import RoleAccess from '../../hoc/RoleAccess';
// import useUserRole from '../../hooks/useUserRole'

const ProfileContent = () =>
{
    const [img, setImg] = useState("")
    const { userDetails } = useUserDetails()

    // const roles = useUserRole()
    function generateStars(num)
    {
        const starsArray = Array.from({ length: num }, (_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
        ));

        return <div>{starsArray}</div>;
    }

    return (
        <div className="profile">
            <p className="profile_title">Profile</p>
            <div className="profile_banner">
                <img src={userDetails?.businessImage} alt='' />
                {userDetails?.status !== 2 ? <div className="profile_verify"><i className="fa-solid fa-times"></i>Not Verified</div> :
                    <div className="profile_verify"><i className="fa-solid fa-check"></i>Verified</div>
                }
            </div>
            <div className="profile_inner">
                <div className="profile_dp">
                    <div className='profile_uploader'>
                        {img && <i onClick={() => setImg("")} class="fa-solid fa-trash"></i>}
                        <img className={img ? "fullImg" : "uploadImg"} src={userDetails?.businessLogo} alt="uploadImg" />
                        {/* <input type="file" accept="image/*" ref={Ref} onChange={(e) => handleImg(e)} /> */}
                    </div>
                </div>
                {/* <p style={{ fontSize: "12px", marginTop:'6px' }}>Recommended Image type : <span style={{ fontWeight: "700" }}>JPG , JPEG , PNG</span></p>
                <p style={{ fontSize: "12px",  }}>Recomended resolution banner : <span style={{ fontWeight: "700" }}>1024 * 1024</span></p>
                <p style={{ fontSize: "12px" }}>Image Size limit : <span style={{ fontWeight: "700" }}>10 MB</span></p> */}
                <div className="container">
                    <p className="profile_head">{userDetails?.firstName} {userDetails?.lastName}</p>
                    <div className="profile_star">{generateStars(4)}</div>
                    <p className="profile_review">4.8 rating based on 149 reviews</p>
                    <p className="profile_loc"><img src={loc} alt='' /> {userDetails?.address1}</p>
                    <p className="profile_desc">{userDetails?.description}</p>
                </div>
                {/* <RoleAccess role={roles.create}>
                    <button className="profile_btn">Edit Details</button>
                </RoleAccess> */}
            </div>
        </div>
    )
}

export default ProfileContent