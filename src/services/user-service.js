import React from 'react'

// const USERS_URL = "http://localhost:8080/api"
const USERS_URL = "postgres://hkutlvbzodllyu:a8b1e2ea098fcac432b6c4e7976c75f587c3b774c6673023e5264bfe91175064@ec2-34-233-0-64.compute-1.amazonaws.com:5432/dep9tc9qn0pm1r/api"

// const DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

export const createUser = (user) => {
    return(
        fetch(`${USERS_URL}/users`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
    )
}

/*export const findUsersForTopic = (tid) => {
    return(
        fetch(`${TOPICS_URL}/topics/${tid}/widgets`)
            .then(response => response.json())
    )
}*/

export const findUser = (uid) => {
    return(
        0
    )
}

export const updateUser = (uid, user) => {
    return(
        fetch(`${USERS_URL}/users/${uid}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
    )
}

export const deleteUser = (uid) => {
    return(
        fetch(`${USERS_URL}/users/${uid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

const api = {
    createUser,
    // findUsersForTopic,
    findUser,
    updateUser,
    deleteUser
}

export default api