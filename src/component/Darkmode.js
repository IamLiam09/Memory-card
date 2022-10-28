import { Switch } from "antd";
const Themeback = () => {
    const body = document.body;
    const lightTheme = "light"
    const darkTheme = "dark";
    let theme;
    if(localStorage){
        theme = localStorage.getItem("theme")
    }
    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme)
    }else{
        body.classList.add(lightTheme)
    }
    const switchTheme = (e) => {
        if(theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            localStorage.setItem("theme", "light");
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
    }
    return(
        <Switch 
        onClick={(e) => switchTheme(e)} />
    )
}
export default Themeback;