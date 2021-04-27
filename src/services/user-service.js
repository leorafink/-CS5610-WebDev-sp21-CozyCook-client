// local: const USER_API = "http://localhost:8080/api";
const USER_API = "http://wbdv-sp21-01-cozycook-server.herokuapp.com/api";

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

const findUserByUsername = (username) => {
    return(
        fetch(`${USER_API}/users/${username}`)
            .then(response => response.json())
            .catch(error => console.log(error))
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
    findMostRecentUser,
    findUserByUsername
}

export default api