//Dispays logo, title, pen icon, message count icon, and logout

import { setNewMessage, getNewMessage } from "./Data/DataAccess.js"

export const NavBarHTML = () => {
    return `
        <nav class="navigation">
            <div class="nav_icon">
                <img src="./images/pb.png" alt="giphygram_logo" id="logo" />
            </div>
            <div class="company_name">
                <h1 id="company_name">Giphygram</h1>
            </div>
            <div class="pen_and_count">
                <img id="penMessage" src="./images/fountain-pen-1.svg" alt="pen_icon" />
                <div class="message_count" id="message_count">
                    ?
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
//getNewMessage is invoked in GiphyGram.js to check if true, then invoke the message form function




//message count is rendered when current user has a message in their inbox
//links to message inbox when clicked - click event

//logout includes a click event that clears local storage and returns to login