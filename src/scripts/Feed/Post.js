import { getPosts, getUsers } from "../Data/DataAccess.js"


//We'll generate unordered list HTML representation of the users choices in the post entry form
export const Post = () => {
    const userState = getUsers()
    const posts = getPosts()
    let html = "<section class='post'>"
    const PostArray= posts.map(post => {
        const foundUserId = parseInt(localStorage.getItem("gg_user"))
        const foundUser= userState.find(
            (user)=>{
                return foundUserId===user.id

            }
        )
            const foundName= foundUser 

        return `<h2>${post.title}</h2>
        <img class="postImage" src="${post.imageURL}">
        <div class="description">
        ${post.description}
        </div>
        <div class="post_tagline">
        Posted By: ${foundName.name} on ${post.timestamp}
        </div>
        `
    }).join("")
html+=PostArray
html+= "</section>"
    return html

}



//add the timestamp date by defining a getDate function

//add a "posted by" div that gets the current user and displays string of username

//import pictures

//add a delete button with a click event listener that deleted the post when selected 

//add a favorite button

//add event listener for favorites that sets to a favorites list