import axios from 'axios'
import { toast } from 'react-toastify'
// import { baseUrl } from '../Instances/baseUrl'

const UploadImg = async (e, setImageUrl, setImageLoader) =>
{
    const file = e.target.files[0]
    // const fileType = ['image/jpeg', 'image/png', 'image/gif'].includes(file?.type)

    if (file.size <= 5000000)
    {
        setImageLoader(true)
        const formData = new FormData()
        formData.append("uploadFor", 'file')
        formData.append('file', file, file.name)
        await axios.post(`http://3.142.184.86/media/uploadMedia`, formData).then(res =>
        {
            setImageUrl(res?.data?.data[0]?.uploadedLink)
            setImageLoader(false)
        }).catch(err =>
        {
            console.log(err)
            setImageLoader(false)
            toast.error("Some error occured while uploading file")
        })
    } else
    {
        toast.error("Image size should be less than 5mb")
    }
    // }
    return setImageUrl
}

export default UploadImg