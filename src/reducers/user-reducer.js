//import React from 'react'

const initialState = {
    users: [/*{username: "aliceInWonderland", password: "whiteRabbit"},
        {username: "snowWhite", password: "hiHo"},
        {username: "arielOfTheSea", password: "partOfYourWorld"}*/]
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }

        case "FIND_ALL_USERS":
            return {
                ...state,
                users: action.users
            }

        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user._id === action.updatedUser._id) {
                        return action.updatedUser
                    }
                    else {
                        return user
                    }
                })
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => {
                    if (user._id !== action.userToDelete._id) {
                        return true
                    }
                    else {
                        return false
                    }
                })
            }
        default:
            return state
    }
}

export default UserReducer