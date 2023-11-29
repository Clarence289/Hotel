import React, { createContext, useEffect, useState, useCallback } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);

  const handleClick = useCallback((e) => {
    e.preventDefault()
    console.log(total);
    console.log(rooms);

    const newRooms =roomData.filter(room =>{
      return total <= room.maxPerson
    })
    setRooms(newRooms)
  

  
    // Your handleClick logic here
  }, [adults, kids]); // Include dependencies of handleClick in the useCallback dependency array

  useEffect(() => {
    setTotal(prevTotal => Number(adults[0]) + Number(kids[0]));
    console.log(total);
  }, [adults, kids, total, handleClick]); // Include handleClick in the dependency array

  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
