import React from 'react';
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

const KidsDropdown = () => {
  const list = [
    { name: '0 Kids' },
    { name: '1 Kids' },
    { name: '2 Kids' },
    { name: '3 Kids' },
    { name: '4 Kids' },
  ];

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        Kids 
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* items */}
      <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
        {list.map((li, index) => (
          <Menu.Item
            as="li"
            key={index}
            className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
          >
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
