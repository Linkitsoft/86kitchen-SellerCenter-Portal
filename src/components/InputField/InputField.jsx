import React from 'react'

const InputField = ({ label, control, name, register, handleBlur, errors, isLabel, disabled, value, type ,min}) =>
{
    
    return (
        <div>
            {isLabel ? <label>{label}</label> : <p>{label}</p>}
            <input
                control={control}
                {...register(name)}
                onBlur={() => handleBlur(name)}
                type={type === 'number' ? 'number' : (type === 'date' ? 'date' : 'text')}
                name={name}
                placeholder={label}
                disabled={disabled}
                value={value && value }
                style={{paddingRight:type === 'date' ? "12px":""}}
                min={min}
            />
            {errors ? <div className="verify_err">{errors?.message}</div> : null}
        </div>
    )
}

export default InputField