import { GiphyGram } from "./GiphyGram.js";

//target the main container and rendering all HTML

const mainContainer= document.querySelector("#container")


//chain all fetches to display data with HTML
const renderHTML= ()=>{
    
   mainContainer.innerHTML= GiphyGram()
}
renderHTML()


//custom event for stateChanged to get permanent state