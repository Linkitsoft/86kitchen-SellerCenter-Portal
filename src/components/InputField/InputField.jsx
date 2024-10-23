import React from 'react'

const InputField = ({ placeholder, labelClass, className, label, control, name, register, handleBlur, errors, isLabel, disabled, value, type, min }) => {

    return (
        <div>
            {isLabel ? <label className={`${labelClass}`}>{label}</label> : <p>{label}</p>}
            <input
                control={control}
                {...register(name)}
                onBlur={() => handleBlur(name)}
                type={type === 'number' ? 'number' : (type === 'date' ? 'date' : 'text')}
                name={name}
                placeholder={label || placeholder}
                disabled={disabled}
                value={value && value}
                style={{ paddingRight: type === 'date' ? "12px !important" : "" }}
                min={min}
                className={className && className}
            />
            {errors ? <div className="verify_err">{errors?.message}</div> : null}
        </div>
    )
}

export default InputField