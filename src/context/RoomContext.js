import React, { createContext, useEffect, useState } from 'react';
// data
import { roomData } from '../data';

// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [ rooms, setRooms] = useState (roomData);

  return (
    <RoomContext.Provider value={{rooms}}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
