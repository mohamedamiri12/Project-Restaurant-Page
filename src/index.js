//import "./initial-page-load.js"
import { displayControler } from "./initial-page-load"
import { displayMenu  } from "./menu"
import { aboutDisplay } from "./about"

const displayFunction = () => {
    const buttons = document.querySelector(".middle-bar")
    const content = document.querySelector(".content")
    

    buttons.addEventListener("click",(e) => {
        
        if(e.target.id == "home"){
            content.innerHTML = ""
            displayControler();
        }
        else if(e.target.id == "menu"){
            content.innerHTML = ""
            displayMenu();
        }
        else if(e.target.id == "about"){
            content.innerHTML = ""
            aboutDisplay();
        }
    })
    displayControler();
}

displayFunction();