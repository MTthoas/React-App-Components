import React, { useState } from 'react'

// For the drawer
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Nav = () => {

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
    let [search,setSearch] = useState(false);
    let [loop, setLoop] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'>
            <div> Bar de rechercher drawer </div>
        </Drawer>


      <div className={`md:flex items-center justify-between bg-blue_theme py-4 md:px-10 px-7 
      ${loop ? null : null}`}>

         <div>

          {loop && ( 
            <div>
              <a> Test </a>
            </div> 
          )}

            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
              text-gray-800 mr-4'>
                <img className="max-w-full object-cover h-16" src="/logo_ARTX.png" alt="image" />
              </div>

              <div className=''>
            
                <div onClick={async()=>{
                  setOpen(!open);
                  await sleep(500);
                  setSearch(!search);
                  }} className='text-3xl absolute text-white right-8 top-8 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <div onClick={()=>setLoop(!loop)} className='text-3xl absolute text-white right-20 top-8 cursor-pointer md:hidden'>
                  <ion-icon name="search-outline"></ion-icon>
                </div>

              </div>
              

              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue_theme md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
              ${open ? 'top-20 ': 'top-[-500px]'}`}>
              
              {!open && !search && (
              
                <form class="flex items-center z-20">   
                      <label for="simple-search" class="sr-only">Search</label>
                      <div class="relative w-full">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                          </div>
                          <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                      </div>
                      <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </form> 

              )}
                
              
                {
                  Links.map((link)=>(
                    <li key={link.name} className='md:ml-10 text-xl md:my-0 my-7'>
                      <a href={link.link} className='ml-4 text-gray-800 text-white hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                  ))
                }
              </ul>



         </div>

   

  


      </div>

      
    </div>
  )
}


export default Nav