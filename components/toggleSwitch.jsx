import React from 'react';
import { useContext, useState } from "react"
import { langContext } from "../context/langContext"


const ToggleSwitch = () => {

    // Context
    const lang = useContext(langContext);

    // State checkbox
    const [isChecked, setIsChecked] = useState(false);

    //lang changue
    const handleOnChange = () => {
        setIsChecked(!isChecked);
       
        if (isChecked) {
            lang.establecerIdioma('en')
        } else {
            lang.establecerIdioma('sp')
        }

    };



    return (
        <div className='flex flex-row p-3 items-center'>
            <div>EN</div>
            <label className="switch ml-1 mr-1">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange} />
                <span className="slider"></span>
                <span className="barra"></span>
            </label>
            <div>SP</div>
        </div>
    );
}

export default ToggleSwitch;
