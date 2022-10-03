import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContexteProvider = (props) => {

    const [theme , setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(!theme);
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContexteProvider;