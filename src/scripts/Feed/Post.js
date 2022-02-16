import { getLikes, getPosts, getUsers, setFavorite } from "../Data/DataAccess.js"
import { foundLikesArray } from "../Feed/Likes.js"

foundLikesArray()

//We'll generate unordered list HTML representation of the users choices in the post entry form
export const Post = () => {
    const userState = getUsers()
    const posts = getPosts()
    let html = "<section class='post'>"
    const PostArray= posts.map(post => {
        const foundUserId = parseInt(localStorage.getItem("gg_user"))

        // find likes.postid === posts.id
        // if they match show colored star
        // else blank star
        const likes = getLikes()
        let liked = ``
        //find method = object or undefined
        //callback = true or false
        const foundLike = likes.find((like) => like.postId === post.id && like.userId === foundUserId )

        if (foundLike) {
            liked = `<img class="favorite-button-yellow" id="favorite--${post.id}" src="../images/favorite-star-yellow.svg" alt="yellowStar"/>`
        } else {
            liked = `<img class="favorite-button-hollow" id="favorite--${post.id}" src="../images/favorite-star-blank.svg" alt="hollowStar" />`
        }
    

        const foundUser= userState.find(
            (user)=>{
                return foundUserId===user.id
            }
        )
        const foundName= foundUser 

        return `<h2>${post.title}</h2>
        <img id="post--${post.id} class="postImage" src="${post.imageURL}">
        <div class="description">
        ${post.description}
        </div>
        <div class="post_tagline">
        Posted By: ${foundName.name} on ${post.timestamp}
        </div>
        <div id="favoriteButton">
        ${liked}
        </div>
        `
    }).join("")
html+=PostArray
html+= "</section>"
    return html

}

const favoriteContainer = document.getElementById("favorite")

// add listener
document.addEventListener("click", (click) => {
    // find starts with
    if (click.target.id.startsWith("favorite--")) {
        // split id to get value
        const [ , postId] = click.target.id.split("--")
        const postUserId= parseInt(localStorage.getItem("gg_user"))
        const likeObj = {
            userId: postUserId,
            postId: parseInt(postId)
        }
        // set favorite that was chosen
        setFavorite(likeObj)
        // get likes and posts state
        
    }
})



//add the timestamp date by defining a getDate function

//add a "posted by" div that gets the current user and displays string of username

//import pictures

//add a delete button with a click event listener that deleted the post when selected 

//add a favorite button

//add event listener for favorites that sets to a favorites list