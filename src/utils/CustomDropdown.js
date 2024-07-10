import React, { useState } from 'react';

const CustomDropdown = ({ options, onSelectionChange }) =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleDropdown = () =>
    {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) =>
    {
        let updatedOptions = [...selectedOptions];
        if (updatedOptions.some(item => item.id === option.id))
        {
            updatedOptions = updatedOptions.filter(item => item.id !== option.id);
        } else
        {
            updatedOptions.push(option);
        }
        setSelectedOptions(updatedOptions);
        onSelectionChange(updatedOptions);
    };

    // const getSelectedLabels = () =>
    // {
    //     return selectedOptions.map(option => option.name).join(', ');
    // };

    return (
        <div className='dropdown'>
            <div className='dropdown_tag' onClick={toggleDropdown}>
                <p>{selectedOptions?.length > 0 ? `${ selectedOptions?.length } services selected` : "Add Services"}</p>
                <p> {isOpen ? '▲' : '▼'}</p>
            </div>
            {isOpen && (
                <div className='dropdown_options'>
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className={`${ selectedOptions.some(item => item.id === option.id) ? 'dropdown_selected' : '' }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option?.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;