//include a dropdown for date to filter the posts from a selected year

import { getPosts, getUsers } from "./Data/DataAccess.js"


/*
    Calculate the number of posts since a given year
*/
const postsSince = (year) => {
    const posts = getPosts()
    const epoch = year
    const postsSinceYear = []

    for (const post of posts) {
        const yearTimestamp = post.timestamp.slice(post.timestamp.length - 4, post.timestamp.length)
        if (parseInt(yearTimestamp) >= epoch) {
            postsSinceYear.push(post)
        }
    }

    return postsSinceYear.length
}

/*
    Initial state of post count
*/
let yearChosenByUser = 2022
let postSinceYearChosen = postsSince(yearChosenByUser)


//create event listeners for each dropdown section
//event listener for year selection:
const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("change", (event) => {

    if (event.target.id === "yearSelection") {
        const yearAsNumber = parseInt(event.target.value)

        // Update the two component state variables
        yearChosenByUser = yearAsNumber
        postSinceYearChosen = postsSince(yearAsNumber)


        // Broadcast your own, custom event stating that some state changed
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        //function that has variable as a year and parInt - ('01/01/' + ___)

        //conditional that checks if post date year is equal to year selection value


        //store matching year in empty array
        //return the array as posts filtered through


    
    }
})



//include a dropdown for users to filters posts from selected user

//include a favorites checkbox to filter by favorited posts

export const Footer = () => {
    let user = getUsers()
    const posts = getPosts()
    


    // HTML to be returned to GiffyGram component
    let html = ""

    html += `
        <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option ${yearChosenByUser === 2022 ? "selected" : ""}>2022</option>
                    <option ${yearChosenByUser === 2021 ? "selected" : ""}>2021</option>
                    <option ${yearChosenByUser === 2020 ? "selected" : ""}>2020</option>
                    <option ${yearChosenByUser === 2019 ? "selected" : ""}>2019</option>
                </select>
                <span id="postCount">${postsSince(yearChosenByUser)}</span>
            </div>
            
            <div class="footer__item">
                Posts by <select id="posterSelection">
                ${user.map(user => {
        return `   <option value="${user.id}">${user.name}</option>`
    }).join("")
        }
        </select>
            </div> 

            <div class="footer__item">
            
          <input name="showOnlyFavorites" type="checkbox"/> <label for="showOnlyFavorites"> Show only Favorites </label>
            </div>
        </footer>
    `
    return html
}