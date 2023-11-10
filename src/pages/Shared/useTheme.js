import { useEffect, useState } from "react";

const useTheme = () => {
    const dark = localStorage.getItem('customDarkTheme')
    const [isDarkMode, setIsDarkMode] = useState(dark == 'true' ? true : false);
    console.log(dark, 'IsDArk ', isDarkMode);

    useEffect(() => {
        // const dark = localStorage.getItem('customDarkTheme')
        if (isDarkMode == true) {
            localStorage.removeItem('customDarkTheme')
            localStorage.setItem('customDarkTheme', 'true')

            document.documentElement.removeAttribute('data-theme')
            document.documentElement.setAttribute('data-theme', 'customDarkTheme')
        } else {
            localStorage.removeItem('customDarkTheme')
            localStorage.setItem('customDarkTheme', 'false')

            document.documentElement.removeAttribute('data-theme')
            document.documentElement.setAttribute('data-theme', 'customLightTheme')
        }
    }, [isDarkMode, dark])
    const toggleIsDarkAndSunMode = () => {
        setIsDarkMode(!isDarkMode)
    };
    
    return { isDarkMode, setIsDarkMode, toggleIsDarkAndSunMode };
};
export default useTheme