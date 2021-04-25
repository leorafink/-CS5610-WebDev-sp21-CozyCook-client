import recipeService from "../services/recipe-service";

export const FIND_RECIPES_FOR_SEARCH = "FIND_RECIPES_FOR_SEARCH";

export const CREATE_RECIPE_FOR_USER = "CREATE_RECIPE_FOR_USER";

export const FIND_ALL_RECIPES_FOR_USER = "FIND_ALL_RECIPES_FOR_USER";

const findRecipesForSearchTitle = (dispatch, searchTitle, healthFilters) => {
    recipeService.findRecipesByTitle(searchTitle, healthFilters)
        .then(recipes => dispatch({type: FIND_RECIPES_FOR_SEARCH, recipes: recipes}))
}

const createRecipeForUser = (dispatch, userId, recipe) => {
    recipeService.createRecipeForUser(userId, recipe)
        .then((recipe) => dispatch({
                                       type: CREATE_RECIPE_FOR_USER,
                                       recipe: recipe
        }))
}

const findAllRecipesForUser = (dispatch, uid) => {
    recipeService.findAllRecipesForUser(uid)
        .then(recipes => dispatch({type: FIND_ALL_RECIPES_FOR_USER, recipes: recipes}))
}

const recipeActions = {
    findRecipesForSearchTitle,
    createRecipeForUser,
    findAllRecipesForUser
}

export default recipeActions;