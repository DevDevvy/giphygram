import { deleteFavorite, deletePost, getLikes, getNewPost, getPosts, getUsers, setFavorite, setNewPost } from "../Data/DataAccess.js"

export const NewPostButton = ()=> {
    return `<div id='post-button' class='post-button'> Have a gif to post? </div>`
}

//We'll generate unordered list HTML representation of the users choices in the post entry form
export const Post = () => {
    const userState = getUsers()
    // get posts
    const postArray = getPosts()
    // reverse posts to show up as newest one on top of feed
    const posts = postArray.reverse()
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
            liked = `<img class="favorite-button-yellow" id="unfavorite--${post.id}" src="../images/favorite-star-yellow.svg" alt="yellowStar"/>`
        } else {
            liked = `<img class="favorite-button-hollow" id="favorite--${post.id}" src="../images/favorite-star-blank.svg" alt="hollowStar" />`
        }
    

        const foundUser= userState.find(
            (user)=>{
                return foundUserId===user.id
            }
        )
        const foundName= foundUser 

        const foundPoster = userState.find(user => user.id === post.userId).name

        let trashed = `` 
        if (foundUser.id === post.userId) {
            trashed = `<img class="trash-button" id="trash--${post.id}" src="../images/trash-can.svg" alt="trashIcon"/>`
        }

        return `<h2>${post.title}</h2>
        <img id="post--${post.id} class="postImage" src="${post.imageURL}">
        <div class="description">
        ${post.description}
        </div>
        <div class="post_tagline">
        Posted By: ${foundPoster} on ${post.timestamp}
        </div>
        <div id="favoriteButton">
        ${liked}
        </div>
        <div id="trashButton">
        ${trashed}
        </div>
        `
    }).join("")
html+=PostArray
html+= "</section>"
    return html

}




const favoriteContainer = document.getElementById("favorite")

// add listener to add favorite 
document.addEventListener("click", (click) => {
    const likes = getLikes()
    const posts = getPosts()
    const foundUserId = parseInt(localStorage.getItem("gg_user"))
    let foundLike = null
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
        const postArray = posts.find((post) => {
            post.userId === foundUserId 
            foundLike = likes.find((like) => parseInt(like.postId) === post.id && parseInt(like.userId) === foundUserId )
            
        })
        setFavorite(likeObj)

        // get likes and posts state
        
    }
})
// add listener to remove favorite 
document.addEventListener("click", (click) => {
    const likes = getLikes()
    const posts = getPosts()
    const foundUserId = parseInt(localStorage.getItem("gg_user"))
    let foundLike = null
    // find starts with
    if (click.target.id.startsWith("unfavorite--")) {
        // split id to get value
        const [ , postId] = click.target.id.split("--")
        const postUserId= parseInt(localStorage.getItem("gg_user"))
        // find favorite that was chosen
        foundLike = likes.find((like) => like.postId === parseInt(postId) && parseInt(like.userId) === foundUserId )
        deleteFavorite(parseInt(foundLike.id))
        // get likes and posts state
        
    }
})
//delete post event listener
document.addEventListener("click", (click) => {
    const posts = getPosts()
    const foundUserId = parseInt(localStorage.getItem("gg_user"))
    // find starts with
    if (click.target.id.startsWith("trash--")) {
        // split id to get value
        const [ , postId] = click.target.id.split("--")
        const postUserId= parseInt(localStorage.getItem("gg_user"))
        // find favorite that was chosen
        deletePost(parseInt(postId))
        // get likes and posts state
        
    }
})

// add listener to reveal post form
document.addEventListener("click", (click) => {
    //target the pen icon in nav bar to display message form
if (click.target.id === "post-button") {
    //if pen icon is clicked, then display the message form
    //invoke function that displays message form HTML
    const newPost = getNewPost()
    if (newPost === false){
        setNewPost(true)
    } 
}
})



//add the timestamp date by defining a getDate function

//add a "posted by" div that gets the current user and displays string of username

//import pictures

//add a delete button with a click event listener that deleted the post when selected 

//add a favorite button

//add event listener for favorites that sets to a favorites list