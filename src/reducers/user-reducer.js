//import React from 'react'

const initialState = {
    users: []
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
                    if (user.id === action.updatedUser.id) {
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
                    if (user.id !== action.userToDelete.id) {
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