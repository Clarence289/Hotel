import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar } from 'react-icons/bs';
import { debounce } from 'lodash';

const CheckIn = () => {
  const [startDate, setStartDate] = useState(null);

  const handleIconClick = debounce(() => {
    // Your logic when the icon is clicked
    console.log('Icon clicked!');
  }, 300); // Adjust the delay as needed

  return (
    <div className='relative flex items-center justify-end h-full'>
      {/* clickable icon */}
      <div
        className='absolute z-10 pr-8 cursor-pointer'
        onClick={handleIconClick}
      >
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={startDate}
        placeholderText='Check in'
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
