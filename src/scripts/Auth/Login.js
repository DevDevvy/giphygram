//get the getUsers from DataAccess 
import {getUsers} from "../Data/DataAccess.js"

// create a login form 

export const LoginFormHTML = () => {
    return `
    <div class="login_form">
        <form>
            <fieldset>
                <h2>Email:</h2>
                <input type="email" name="email" autofocus placeholder="Email address" />
            </fieldset>
            <fieldset>
                <h2>Password:</h2>
                <input type="password" name="password" class="password" placeholder="Password" />
            </fieldset>
        </form>
        <button id="login_button">Login</button>
    </div>
    `
}

//add a click event listener that listens for the login button selection and authentication
const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
if (clickEvent.target.id === "login_button") {
//let foundUser = null initially
let foundUser = null
//get and store the value for the input email and password value
const users = getUsers()
const emailValue = document.querySelector("input[name='email']").value
const passwordValue = document.querySelector("input[name='password']").value
//iterate through the userState array and add a conditional that matches user.email with email 
//and user.password with password
//then foundUser = user
for (const user of users) {
    if (emailValue === user.email && passwordValue === user.password) {
        foundUser = user

    }
}
//conditional that states if foundUser does not equal null, then the foundUser is stored in localStorage
//if true, then dispatch the stateChanged custom event ".giffygram"
if (foundUser !== null) {
    localStorage.setItem("gg_user", foundUser.id)
    document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged"))
}
}
})










