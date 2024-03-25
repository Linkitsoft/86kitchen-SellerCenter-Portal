import React, {useState} from 'react'

const PasswordInputField = ({ label, control, name, register, handleBlur, errors }) =>
{
    const [eyeIcon, setEyeIcon] = useState(false);

    return (
        <div>
            {/* <Field placeholder='password' type={eyeIcon === false ? "password" : "text"} id="password" name="password" />
            <ErrorMessage className="verify_err" name="password" component="div" />
            <i
                onClick={() => setEyeIcon(!eyeIcon)}
                className={
                    eyeIcon === false
                        ? "fa-regular showEye fa-eye-slash"
                        : "fa-regular showEye fa-eye"
                }
            ></i> */}
            <input
                control={control}
                {...register(name)}
                onBlur={() => handleBlur(name)}
                type={eyeIcon === false ? "password" : "text"}
                name={name}
                placeholder={label}
            />
            {errors ? <div className="verify_err">{errors?.message}</div> : null}
            <i
                onClick={() => setEyeIcon(!eyeIcon)}
                className={
                    eyeIcon === false
                        ? "fa-regular showEye fa-eye-slash"
                        : "fa-regular showEye fa-eye"
                }
            ></i>
        </div>
    )
}

export default PasswordInputField