import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
//component
import AdultDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
//scroll top component
import scrollToTop from '../components/ScrollToTop';

//context
import { RoomContext } from '../context/RoomContext';
//icons
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  

  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
//destructure room
const {name, description, facilities, imageLg, price} = room;

  return <section>
    {/*banner*/}
    <div className='bg-room bg-cover bg-center h-[560px] relative flex 
    justify-center items-center'>
      {/*overlay*/}
      <div className='absolute w-full h-full bg-black/70'></div>
      {/*tittle*/}
      <h1 className='text-6xl text-white z-20 font-primary text-center'>
        {name}Details
      </h1>
    </div>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row h-full py-24'>
  {/*left*/}
  <div className='w-full h-full lg:w-[60%] px-6  bg-yellow-100'>
  <h2 className='h2'>{name}</h2>
  <p className='mb-8'>{description}</p>
  <img src={imageLg} alt=''/>
  {/*facilities*/}
  <div className='mt-12'>
    <h3 className='h3 mb-3'>Room Facilities</h3>
    <p className='mb-12'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris vel nisi volutpat pellentesque.

Quisque eu elit in velit posuere pharetra id eu urna. 
    </p>
    {/*grid*/}
    <div>
      {facilities.map((item, index) =>{
        return<div>item</div>
      })}
    </div>
  </div>
  </div>
  {/*right*/}
  <div className='w-full h-full lg:w-[60%] bg-blue-300'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris vel nisi volutpat pellentesque.

Quisque eu elit in velit posuere pharetra id eu urna. 


  </div>
      </div>
    </div>
    </section>;
};

export default RoomDetails;
