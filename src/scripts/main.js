import { LoginFormHTML } from "./Auth/Login.js";
import { fetchLikes, fetchPosts, fetchUsers } from "./Data/DataAccess.js";
import { GiphyGram } from "./GiphyGram.js";


//target the main container and rendering all HTML

const mainContainer= document.querySelector("#container")



const renderLogin = () => {
   fetchUsers()
   .then(
      () => {
         
         mainContainer.innerHTML= LoginFormHTML()
      })
}

//chain all fetches to display data with HTML
const renderHTML= ()=>{
   fetchUsers()
   .then(()=>{
      return fetchPosts()
      .then(()=>{
         return fetchLikes()
      })
   })
   .then(()=>{
      mainContainer.innerHTML= GiphyGram()
      
   })
   
}
renderHTML()

if (localStorage.getItem("gg_user")) {
   renderHTML()
} else {
   renderLogin()
   
}


//custom event for stateChanged to get permanent state
mainContainer.addEventListener("stateChanged", event => {
   console.log("State of data has changed. Regenerating HTML...")
   renderHTML()
})


