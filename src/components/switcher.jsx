import React, {useState} from 'react';
import useDarkSide from"../hook/useDarkSide" ;
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Switcher(){
const [ colorTheme, setTheme] = useDarkSide() ;
const [darkSide, setDarkSide] = useState( colorTheme === "light" ? true : false);

const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide (checked )
};

return(
    <>
        <div className="m-2 flex flex-col items-center">
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
            {/* <h3 className="text-dark_theme dark:text-white pt-4">{ colorTheme === 'light' ? "Dark mode" : "Light mode" }</h3> */}
        </div>
    </>
)

}