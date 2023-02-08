import React, { useState } from 'react'
import 'react-modern-drawer/dist/index.css'
import './styles/header.css'

import Switcher from './switcher'

const Nav = () => {

    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    
    let [open,setOpen]=useState(false);

  return (
<header className="ml-4 py-3">
    <nav class=" border-gray-200 px-4 lg:px-6 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" class="flex items-center">
                {/* <img src="/logo_ARTX.png" class="mr-3 h-10"/> */}
                <span id="logo" class="text-2xl font-bold">ARTX </span>
            </a>

            <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-100 ease-in
              ${open ? 'top-14 ': 'top-[-450px]'}`}>

                {Links.map((link,index)=>{
                  return(
                    <li key={index} className={`md:mr-4 ${open ? 'mt-11 ': 'mt-1'}` }>
                      <a href={link.link} className={`font-medium text-sm hover:text-gray-200 md:ml-5`}>{link.name}</a>
                    </li>
                  )
                }
                )}
        
            </ul>

            <div class="flex  flex-wrap items-center">
                <button href="login.html" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</button>
                <button href="start.html" className="bg-dark_theme text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sign up</button>
                <button className='pl-4'>  Theme </button>
                <div onClick={async()=>{
                          setOpen(!open);
                      }}
                  
                    className='cursor-pointer md:hidden pt-2 pl-4'>
                      <ion-icon color="dark" name={open ? 'close':'menu'}></ion-icon>
                </div>                
            </div>

            </div>
    </nav>
</header>
  )
}


export default Nav