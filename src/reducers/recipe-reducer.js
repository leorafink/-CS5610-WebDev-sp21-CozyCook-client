import {FIND_RECIPES_FOR_SEARCH, CREATE_RECIPE_FOR_USER} from "../actions/recipes-actions";

const initialState = {
    recipes: []
}

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_RECIPES_FOR_SEARCH:
            return {
                ...state,
                recipes: action.recipes
            }
        case CREATE_RECIPE_FOR_USER:
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.recipe
                ]
            }
        default:
            return state
    }
}

export default RecipeReducer;