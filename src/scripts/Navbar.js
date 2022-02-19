//Dispays logo, title, pen icon, message count icon, and logout

import { setNewMessage, getNewMessage, getUsersMessages } from "./Data/DataAccess.js"
import { renderLogin } from "./main.js"


export const NavBarHTML = () => {
    const allMessages = getUsersMessages()
    const messageLength = allMessages.length
    return `
        <nav class="navigation">
            <div class="nav_icon">
                <img src="./images/pb.png" alt="giphygram_logo" id="logo" />
            </div>
            <div class="company_name">
                <div id="company_name">Giphygram</div>
            </div>
            <div class="pen_and_count">
                <img id="penMessage" src="./images/fountain-pen-1.svg" alt="pen_icon" />
                <div class="message_count" id="message_count">
                    ${messageLength}
                </div>
            </div>
            <div class="logout">
                <button id="logout_button">Logout</button>
            </div>
        </nav>
    `
}

//logo refreshes to the feed page


// add listener to add favorite 

//pen icon displays the message form
//click event that stores true value into applicationState.feed.newMessage and if true, message form is displayed
document.addEventListener("click", (click) => {
    //target the pen icon in nav bar to display message form
if (click.target.id === "penMessage") {
    const newMessage = getNewMessage()
    //if pen icon is clicked, then display the message form
    //invoke function that displays message form HTML
    if (newMessage === false){
        setNewMessage(true)
    } else {
        setNewMessage(false)
    }
}
})

// cancel button for direct messages
document.addEventListener("click", (click) => {
    //target the pen icon in nav bar to display message form
if (click.target.id === "cancelMessage") {
    const newMessage = getNewMessage()
        setNewMessage(false)
    
}
})



//logout includes a click event that clears local storage and returns to login
document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "logout_button") {
        localStorage.clear 
        renderLogin()
    }
})
// logo click listener
document.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "logo") {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    }
})
