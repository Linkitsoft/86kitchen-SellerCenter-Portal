import React from 'react'

const DropdownField = ({ label, control, name, register, handleBlur, errors, options, placeholder }) =>
{
    return (
        <div>
            <p>{label}</p>
            <select
                {...register(name)}
                onBlur={() => handleBlur(name)}
                name={name}
                control={control}
                defaultValue=""
            >
                <option value="" disabled>Select {placeholder}</option>
                {options.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
            {errors ? <div className="verify_err">{errors?.message}</div> : null}
        </div>
    )
}

export default DropdownField