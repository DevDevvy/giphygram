import { GiphyGram } from "./GiphyGram.js";


const mainContainer= document.querySelector("#container")

const renderHTML= ()=>{
    
   mainContainer.innerHTML= GiphyGram()
}
renderHTML()