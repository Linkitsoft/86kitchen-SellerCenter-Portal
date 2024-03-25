import React from 'react'

const InputField = ({ label, control, name, register, handleBlur, errors }) =>
{
    return (
        <div>
            <p>{label}</p>
            <input
                control={control}
                {...register(name)}
                onBlur={() => handleBlur(name)}
                type="text"
                name={name}
                placeholder={label}
            />
            {errors ? <div className="verify_err">{errors?.message}</div> : null}
        </div>
    )
}

export default InputField