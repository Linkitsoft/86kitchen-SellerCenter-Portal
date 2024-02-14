import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ captchaValue, setCaptchaValue }) =>
{
    const handleCaptchaChange = (value) =>
    {
        setTimeout(() =>
        {
            setCaptchaValue(value);
        }, 1000)
    };
    return (
        !captchaValue && <ReCAPTCHA
            className="custom-recaptcha"
            sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
            // sitekey="6LeujQwoAAAAABPlkuqGnDwQEaCoHQLg5c5sgEvs" // Replace with your actual site key
            onChange={handleCaptchaChange}
        />
    )
}

export default Recaptcha