//get the getUsers from DataAccess 
import {getUsers} from "../Data/DataAccess.js"
const users = getUsers()
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
                <input type="text" class="passsword" placeholder="Password" />
            </fieldset>
        </form>
        <button id="login_button">Login</button>
    </div>
    `
}

//add a click event listener that lsitens for the login button slection and authenitcation

//let foundUser = null initially

//get and store the value for the input email and password value

//iterate through the userState array and add a conditional that matches user.email with email 
//and user.password with password
//then foundUser = user


//conditional that states if foundUser does not equal null, then the foundUser is stored in localStorage
//if true, then dispatch the stateChanged custom event ".giffygram"