import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isSameDay, parseISO } from 'date-fns';

const CalenderAvailability = ({ handleMonthChange, gettingCalenderAnyData, teamMemberId, gettingCalenderInfo, calenderData, selectedDate, setSelectedDate, currentMonth, setTimeSlots, timeSlots }) => {
    const enabledDates = calenderData?.map(item => parseISO(item.date));
    const today = new Date();

    const isDateEnabled = (date) => {
        return enabledDates?.some(enabledDate => isSameDay(enabledDate, date));
    };

    const filterDates = (date) => {
        return isDateEnabled(date);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='sm2:my-3 w-full flex justify-start sm4:justify-center items-center'>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateSelect}
                filterDate={false}
                inline
                minDate={today}
                renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
                    <div>
                        <button
                            aria-label="Previous Month"
                            className={'react-datepicker__navigation react-datepicker__navigation--previous'}
                            style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
                            onClick={decreaseMonth}
                            disabled={monthDate.getMonth() <= today.getMonth() && monthDate.getFullYear() <= today.getFullYear()}
                        >
                            <span onClick={() => handleMonthChange(-1)} className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>{"<"}</span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString('default', { month: 'long' })} {monthDate.getFullYear()}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={'react-datepicker__navigation react-datepicker__navigation--next'}
                            onClick={increaseMonth}
                        >
                            <span onClick={() => handleMonthChange(1)} className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>{">"}</span>
                        </button>
                    </div>
                )}
                openToDate={currentMonth}
            />
        </div>
    );
};

export default CalenderAvailability;
