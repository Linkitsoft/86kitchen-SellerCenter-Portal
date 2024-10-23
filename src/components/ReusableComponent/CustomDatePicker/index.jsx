import React from 'react'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import { addDays, startOfMonth, endOfMonth, startOfYear, endOfYear, startOfWeek, endOfWeek } from 'date-fns';

const CustomDatePicker = ({ handleChange, value }) => {
    const shortcuts = [
        {
            label: 'Today',
            value: () => {
                const today = new Date();
                return [today, today];
            }
        },
        {
            label: 'Yesterday',
            value: () => {
                const yesterday = addDays(new Date(), -1);
                return [yesterday, yesterday];
            }
        },
        {
            label: 'This Week',
            value: () => {
                const start = startOfWeek(new Date());
                const end = endOfWeek(new Date());
                return [start, end];
            }
        },
        {
            label: 'Last Week',
            value: () => {
                const end = new Date();
                const start = addDays(end, -7);
                return [start, end];
            }
        },
        {
            label: 'This Month',
            value: () => {
                const start = startOfMonth(new Date());
                const end = endOfMonth(new Date());
                return [start, end];
            }
        },
        {
            label: 'Last Month',
            value: () => {
                const start = startOfMonth(addDays(new Date(), -30));
                const end = endOfMonth(addDays(new Date(), -30));
                return [start, end];
            }
        },
        {
            label: 'This Year',
            value: () => {
                const start = startOfYear(new Date());
                const end = endOfYear(new Date());
                return [start, end];
            }
        },
        {
            label: 'Last Year',
            value: () => {
                const start = startOfYear(addDays(new Date(), -365));
                const end = endOfYear(addDays(new Date(), -365));
                return [start, end];
            }
        },
    ];

    return (
        <>
            <DateRangePicker
                style={{ width: "100%", zIndex: "9999" }}
                showOneCalendar
                ranges={shortcuts}
                value={[value[0].startDate, value[0].endDate]} // Set default value
                onChange={handleChange} />
        </>
    )
}

export default CustomDatePicker