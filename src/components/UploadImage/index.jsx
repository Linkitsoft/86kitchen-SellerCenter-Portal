import { toast } from 'react-toastify'
const UploadImg = async (e, setImageUrl) => {
    const file = e.target.files[0]
    const fileType = ['image/jpeg', 'image/png'].includes(file?.type)
    if (file.size <= 10000000) {
        if (fileType) {
            setImageUrl(URL.createObjectURL(file))
        } else {
            toast.error("Image type should be JPG , JPEG , PNG")
        }
    } else {
        toast.error("Image size should be less than 10mb")
    }
    return setImageUrl
}
export default UploadImg