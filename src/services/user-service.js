//import React from 'react'

// const USERS_URL = "http://localhost:8080/api"
//const USERS_URL = "postgres://hkutlvbzodllyu:a8b1e2ea098fcac432b6c4e7976c75f587c3b774c6673023e5264bfe91175064@ec2-34-233-0-64.compute-1.amazonaws.com:5432/dep9tc9qn0pm1r/api"
// const DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

    const url = 'https://wbdv-generic-server.herokuapp.com/api/cozycook/users';

export const createUser = (user) => {
    alert(JSON.stringify(user))
    return(
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
    )
}


export const findUserById = (uid) => {
    return(
        fetch(`${url}/${uid}`)
            .then(response => response.json())
    )
}

function findAllUsers() {
    return fetch(url)
        .then(function (response) {
            return response.json()
        })

}

export const updateUser = (uid, user) => {
    return(
        fetch(`${url}/${uid}`, {
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
    return(fetch(`${url}/${uid}`,
        {method: 'DELETE'})
            .then(response => response.json())
    )
}

const api = {
    createUser,
    findUserById,
    findAllUsers,
    updateUser,
    deleteUser
}

export default api



