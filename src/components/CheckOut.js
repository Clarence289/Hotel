import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
  const [endDate, setEndDate] = useState(null);

  const handleDatePickerClick = () => {
    // Your logic when the date picker is clicked
    console.log('CheckOut date picker clicked!');
  };

  return (
    <div
      className='relative flex items-center justify-end h-full cursor-pointer'
      onClick={handleDatePickerClick}
    >
      {/* icon */}
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={endDate}
        placeholderText='Check out'
        onChange={(date) => setEndDate(date)}
        onClickOutside={() => console.log('Clicked outside CheckOut date picker')}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
          },
        }}
      />
    </div>
  );
};

export default CheckOut;
