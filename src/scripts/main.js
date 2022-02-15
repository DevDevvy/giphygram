import { LoginFormHTML } from "./Auth/Login.js";
import { fetchUsers } from "./Data/DataAccess.js";
import { GiphyGram } from "./GiphyGram.js";

//target the main container and rendering all HTML

const mainContainer= document.querySelector("#container")


//chain all fetches to display data with HTML
const renderHTML= ()=>{
    
   mainContainer.innerHTML= GiphyGram()
}

const renderLogin = () => {
   fetchUsers()
   .then(
      () => {
         mainContainer.innerHTML= LoginFormHTML()
      })
}
renderLogin()



//custom event for stateChanged to get permanent state
mainContainer.addEventListener("stateChanged", event => {
   console.log("State of data has changed. Regenerating HTML...")
   renderHTML()
})