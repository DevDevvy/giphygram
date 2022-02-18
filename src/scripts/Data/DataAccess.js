//create an applicationState object to store API, transient state, and permanent state
const applicationState = {
    users: [],
    posts: [],
    likes: [],
    messages: [],
    follows: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: ![],
        displayMessages: [],
        newPost: false,
        datePosted: null,
        newMessage: false
    }
}

const mainContainer = document.querySelector("#container")

//HTTP GET Request with Fetch
const API = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (user) => {
                applicationState.users = user
            }
        )
}

//GETS data from API
//returns a copy of the state
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then(
            (post) => {
                applicationState.posts = post
            }
        )
}

export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}

export const fetchLikes = () => {
    return fetch(`${API}/likes`)
        .then(response => response.json())
        .then(
            (like) => {
                applicationState.likes = like
            }
        )
}


export const getLikes = () => {
    return applicationState.likes.map(like => ({ ...like }))
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (message) => {
                applicationState.messages = message
            }
        )
}

//gets messages array from application state
export const getMessages = () => {

    return applicationState.messages.map(message => ({ ...message }))
}

//get unread messages in messages array and matching recipient
export const getUsersMessages = () => {
    const userState = getUsers()
    const foundUserId = parseInt(localStorage.getItem("gg_user"))
    const foundUser = userState.find(
        (user) => {
            return foundUserId === user.id
        }
    )
    //match the message.recipientId with the currentUser (gg_user id)
    const messages = getMessages()
    //map through array of messages and list them
    const messagesArray = messages.filter((message) => {
        if (message.recipientId === foundUserId && message.read === false) {
            return true
        } 
        return false
    })
    return messagesArray
}
export const getDisplayMessages = () => {

    return applicationState.feed.displayMessages.map(displayMessage => ({ ...displayMessage }))
}

//gets newMessage from feed object in application state
export const getNewMessage = () => {
    return applicationState.feed.newMessage
}

//setter function for newMessage for clickEvent that displays message form
export const setNewMessage = (message) => {
    applicationState.feed.newMessage = message
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}


export const fetchFollows = () => {
    return fetch(`${API}/follows`)
        .then(response => response.json())
        .then(
            (follow) => {
                applicationState.follows = follow
            }
        )
}

export const getFollows = () => {
    return applicationState.follows.map(follow => ({ ...follow }))
}


export const savedPost = (newPostObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPostObj)
    }
    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendMessage = (messageObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    }
    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}




export const setFavorite = (postId) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postId)
    }
    return fetch(`${API}/likes`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


//create a click event listener that listens for the logout button and clears localStorage

//delete method fetch() to delete messages and includes a custom event for stateChanged

//POST method fetch to save messages to inbox and dispatch custom event for stateChanged - to permanent state
//POST method saves to permanent state/setter for API

//POST method fetch to save posts to feed and dispatch custom event for stateChanged - to permanent state

//set item function is used with localStorage

//setter functions that fetch from API to applicationState for new message, current user, display favorites, new posts, and date posted
//SET takes user choices and stores in the applicationState

// delete favorited
export const deleteFavorite = (id) => {
    return fetch(`${API}/likes/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
