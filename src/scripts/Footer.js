//include a dropdown for date to filter the posts from a selected year

import { getUsers } from "./Data/DataAccess.js"

//include a dropdown for users to filters posts from selected user

//include a favorites checkbox to filter by favorited posts

export const Footer = () => {
    let user = getUsers()
    let yearChosenByUser = 2020
    let postSinceYearChosen = 0

    // HTML to be returned to GiffyGram component
    let html = ""

    html += `
        <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option ${yearChosenByUser === 2020 ? "selected" : ""}>2020</option>
                    <option ${yearChosenByUser === 2019 ? "selected" : ""}>2019</option>
                    <option ${yearChosenByUser === 2018 ? "selected" : ""}>2018</option>
                    <option ${yearChosenByUser === 2017 ? "selected" : ""}>2017</option>
                </select>
                <span id="postCount">${postSinceYearChosen}</span>
            </div>
            
            <div class="footer__item">
                Posts by <select id="posterSelection">
                ${user.map(user => {
        return `   <option value="${user.id}">${user.name}</option>`
    }).join("")
        }
            </div> 

            <div class="footer__item">
            
          <input name="showOnlyFavorites" type="checkbox"/> <label for="showOnlyFavorites"> Show only Favorites </label>
            </div>
        </footer>
    `
    return html
}