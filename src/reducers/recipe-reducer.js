import {FIND_RECIPES_FOR_SEARCH} from "../actions/recipes-actions";

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
        default:
            return state
    }
}

export default RecipeReducer;