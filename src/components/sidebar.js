
import { HiOutlineGlobe } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

export default function Header() {
  return (
    <header className="App-header">
        <div className="md:flex justify-between items-center px-4 py-3 bg-dark_theme">
            <div className="flex-no-grow flex">
                <img className="max-w-full h-16" src="/logo_ARTX.png" alt="image" />

                <div className="flex items-center mr-5">

                    <form>   
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full mt-1 p-3 pl-10 mr-64 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Rechercher des éléments, des collections.. " required/>
                        </div>
                    </form>
                    
                    <div className="mt-1 ml-4 ">
                        <button className=" text-white py-2 mr-4 px-4">
                            Tendances
                        </button>
                        <a href="#responsive-header" className="text-white mt-4 lg:inline-block lg:mt-0 mx-4">
                            Collections
                        </a>
                        <a href="#responsive-header" className="text-white mt-4 lg:inline-block lg:mt-0 mx-4">
                            Enchères
                        </a>
                    </div>

                </div>

            </div>
        
            <div>
                {/* vos icônes ici */}
            </div>

            <div className="flex justify-between items-center mt-1">
                <div className="">
                    <button className=" text-white py-2 mr-4 px-4">
                        Se connecter
                    </button>
                </div>   
                <div className="">
                    <button className="bg-blue_theme text-white py-2 mr-8 px-4 rounded-md">
                        S'inscrire
                    </button>
                </div>      
                {/* <div>
                    <HiOutlineGlobe className="text-white mr-4 h-8 w-8"/>
                </div>     */}
                <div>
                    <HiOutlineMoon/>
                </div>     
            </div>
    </div>
  </header>
);
}

