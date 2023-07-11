import "./themeToggle.css"

export default function({theme, setTheme}) {

    const toggleTheme = () =>{

        if(theme == "light") setTheme("dark");
        else setTheme("light");
    }

    return (

        <button className = {`themeToggleBtn ${theme}`} onClick={toggleTheme}></button>
    )
}