import React, { useEffect, useState } from 'react'
import backImg from "../../assets/images/Admin-20 (29).png"
import loc from "../../assets/images/Admin-20 (90).png"
import { useNavigate } from 'react-router-dom'
import SalesTable from '../Tables/SalesTable'
import { newService } from '../../utils/newService'
import CustomDropdown from '../../utils/CustomDropdown'
import { searchUrl } from '../../utils/searchUrl'
import { GenerateOrder, GetPartnerServices } from '../../Services/Partner'
import NoDataFound from '../NoDataFound/NoDataFound'
import { toast } from 'react-toastify'

const GenerateSalesContent = () =>
{
    const navigate = useNavigate()
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [services, setServices] = useState([])
    const [disable, setDisable] = useState(false)

    const queryId = searchUrl('queryId')
    const customerId = searchUrl('customerId')

    const handleSelectionChange = (newSelectedOptions) =>
    {
        setSelectedOptions(newSelectedOptions);
    };

    const totalPrice = selectedOptions?.reduce((accumulator, currentItem) =>
    {
        return accumulator + parseInt(currentItem?.price);
    }, 0);

    const getServices = async () =>
    {
        const res = await GetPartnerServices({ categoryId: "" })
        setServices(res?.data?.data)
        // try
        // {
        //     const res = await GetPartnerServices({ categoryId: "" })
        //     setServices(res?.data?.data)
        //     setLoader(true)
        // } catch (error)
        // {
        //     setLoader(false)

        // } finally
        // {
        //     setLoader(false)

        // }
    }

    useEffect(() =>
    {
        getServices()
    }, [])

    const handleSaleStart = async () =>
    {
        setDisable(true)
        const body = {
            userId: customerId,
            queryId,
            total: totalPrice?.toString(),
            status: 0,
            orderService: selectedOptions?.map((item) =>
            {
                return {
                    partnerServiceId: item?.id,
                    price: item?.price,
                }
            })
        }
        try
        {
            const res = await GenerateOrder(body)
            if (res?.data?.status === 'success')
            {
                toast.success("Sale initiated successfully")
                setDisable(true)
            }
        } catch (error)
        {
            toast.error("Some error occurred")
            setDisable(false)

        } finally
        {
            setDisable(false)

        }

    }
    return (
        <div className="sales">
            <div className="sales_header">
                <p className="sales_title"><img src={backImg} alt='' onClick={() => navigate(-1)} />Generate Sales</p>
                <div>
                    <p className="sales_text">Name : Samentha John</p>
                    <p className="sales_text">Business Name : Coffee & Restaurant</p>
                    <p className="sales_loc"><img src={loc} alt='' /> 17230 NE Sacramento...</p>
                </div>
            </div>
            <div className="sales_input">
                <CustomDropdown options={services} onSelectionChange={handleSelectionChange} />
            </div>

            {
                selectedOptions.length > 0 ?
                    <>
                        <SalesTable queryId={queryId} selectedOptions={selectedOptions} />
                        <div className="sales_bottom">
                            <p className="">Total Tax</p>
                            <p className="">0</p>
                        </div>
                        <div className="sales_total">
                            <p>Total Amount: <span>${totalPrice?.toFixed(2)}</span></p>
                            <button className="sales_btn" disabled={disable} onClick={handleSaleStart}>{disable ? "Please wait..." : "Initiate Sale"}</button>
                        </div>
                    </>
                    :
                    <NoDataFound msg={"Please add services from top"} />
            }
        </div>
    )
}

export default GenerateSalesContent
