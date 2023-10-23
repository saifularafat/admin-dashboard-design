import { useEffect, useState } from "react";

const Theme = () => {
    const dark = localStorage.getItem('customDarkTheme')
    const [isDarkMode, setIsDarkMode] = useState(dark == 'true' ? true : false);

    useEffect(() => {
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
export default Theme