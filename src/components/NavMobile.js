import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { navigation } from '../data'

const NavMobile = () => {

   const [isOpen, setIsOpen] = useState(false);

  return(
    <nav>
      {/* menu btn */}
      <div
        onClick={() => setIsOpen(!isOpen)} 
        className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'
      >
        <BiMenu />
      </div>
      {/* Menu items*/}
      <ul className={`${ isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0' } flex flex-col absolute w-full top-24 left-0 bg-white rounded-md shadow-primary space-y-6 overflow-hidden transition-all`}>
        { navigation.map((item, index) => {
            return (
              <li key={ index }>
                <a href={ item.href }>{ item.name }</a>
              </li>
        )})}
      </ul>
    </nav>
)};

export default NavMobile;
