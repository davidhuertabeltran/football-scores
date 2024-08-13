import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi'

export const ToggleTheme = ({ theme, toggleTheme }) => {
    return (
        <button className="theme-toggle cursor-pointer" onClick={toggleTheme}>
            {theme === 'light' ? <BiMoon style={{ fontSize: "2em" }} /> : <BiSun style={{ fontSize: "2em" }} />}
        </button>
    )
}