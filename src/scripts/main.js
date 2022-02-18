import { LoginFormHTML } from "./Auth/Login.js";
import { fetchLikes, fetchMessages, fetchPosts, fetchUsers } from "./Data/DataAccess.js";
import { GiphyGram } from "./GiphyGram.js";
import { NavBarHTML } from "./Navbar.js";
import { messageInbox } from "./Messages/DirectMessageList.js";


//target the main container and rendering all HTML

const mainContainer = document.querySelector("#container")

//chain all fetches to display data with HTML
export const renderLogin = () => {
   fetchUsers()
      .then(
         () => {

            mainContainer.innerHTML = LoginFormHTML()
         })
}

const renderHTML = () => {
   fetchUsers()
      .then(() => {
         return fetchPosts()
            .then(() => {
               return fetchLikes()
                  .then(() => {
                     return fetchMessages()
                  })
            })
      })
      .then(() => {
         mainContainer.innerHTML = GiphyGram()

      })

}




if (localStorage.getItem("gg_user")) {
   renderHTML()
} else {
   renderLogin()

}




const renderMessage = () => {
   fetchUsers()
      .then(() => {
         return fetchMessages()
            .then(
               () => {

                  mainContainer.innerHTML =    NavBarHTML() + messageInbox()
               })
      })
}




mainContainer.addEventListener("messageStateChanged", event => {
   console.log("State of data has changed. Regenerating HTML...")

   renderMessage()
})


//custom event for stateChanged to get permanent state
mainContainer.addEventListener("stateChanged", event => {
   console.log("State of data has changed. Regenerating HTML...")
   renderHTML()
})


