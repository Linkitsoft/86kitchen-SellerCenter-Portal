import React, { useState } from "react";

export const useDateSelector = () => {
    const [selectedRange, setSelectedRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleDateChange = (range) => {
        const [startDate, endDate] = range;
        setSelectedRange(
            [
                {
                    startDate: startDate,
                    endDate: endDate,
                    key: 'selection',
                }
            ]
        )
    };

    return { selectedRange, setSelectedRange, handleDateChange }

}