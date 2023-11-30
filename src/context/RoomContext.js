import React, { createContext, useEffect, useState, useCallback } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);
    console.log(rooms);

    // Filter rooms based on total (person)
    const newRooms = roomData.filter(room => total <= room.maxPerson);
    setRooms(newRooms);
  };

  // console.log(rooms);

  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
