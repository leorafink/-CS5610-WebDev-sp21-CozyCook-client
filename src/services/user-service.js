//import React from 'react'

// const url = "http://localhost:3306/api"
// const USERS_URL = "postgres://hkutlvbzodllyu:a8b1e2ea098fcac432b6c4e7976c75f587c3b774c6673023e5264bfe91175064@ec2-34-233-0-64.compute-1.amazonaws.com:5432/dep9tc9qn0pm1r/api"
// const DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

//const url = 'https://wbdv-generic-server.herokuapp.com/api/cozycook/';

const url = 'https://wbdv-sp21-01-cozycook-server.herokuapp.com/api/'
const USER_API = "http://localhost:8080/api";

const createUser = (user) => {
    return(
        fetch(`${USER_API}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
    )
}


const findUserById = (uid) => {
    return(
        fetch(`${USER_API}/${uid}`)
            .then(response => response.json())
    )
}

const findAllUsers = () => {
    return fetch(`${USER_API}/users`)
        .then((response) => response.json())
}

const updateUser = (uid, user) => {
    return(
        fetch(`${USER_API}/users/${uid}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
    )
}

const findMostRecentUser = () => {
    return(
        fetch(`${USER_API}/home/mostRecentUser`)
            .then((response) => response.json())
    )
}

const deleteUser = (uid) => {
    alert("uid in deleteuser is: " + uid)
    return(fetch(`${USER_API}/users/${uid}`,
        {method: 'DELETE'})
            .then(response => response.json())
    )
}

const register = (credentials) => {
    return fetch(`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => console.log(error))
};

const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => console.log(error))
};

const logout = (credentials) => {
    return fetch(`${USER_API}/logout`, {
        method: "GET",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

const publicProfile = (userId) => {
    return fetch(`${USER_API}/profile/${userId}`, {
        method: "GET",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
};

const getSession = () => {
    return fetch(`${USER_API}/session`, {
        method: "GET",
        credentials: "include",
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}

const api = {
    createUser,
    findUserById,
    findAllUsers,
    updateUser,
    deleteUser,
    register,
    profile,
    publicProfile,
    login,
    logout,
    getSession,
    findMostRecentUser
}

export default api



