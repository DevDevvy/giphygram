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
        displayMessages: ![]
    }
}

// HTTP GET Request with Fetch
const API = "http://giffyapi.nss.team/"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (user) => {
                applicationState.users = user
            }
        )
}

// returns a copy of the state
export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
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
    return applicationState.posts.map(post => ({...post}))
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
    return applicationState.likes.map(like => ({...like}))
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

export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
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
    return applicationState.follows.map(follow => ({...follow}))
}