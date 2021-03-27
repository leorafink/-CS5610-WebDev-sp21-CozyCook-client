import recipeService from "../services/recipe-service";

export const FIND_RECIPES_FOR_SEARCH = "FIND_ RECIPES_FOR_SEARCH";

export const findRecipesForSearchTitle = (dispatch, searchTitle, healthFilters) => {
    recipeService.findRecipesByTitle(searchTitle, healthFilters)
        .then(recipes => dispatch({type: FIND_RECIPES_FOR_SEARCH, recipes: recipes}))
}

const recipeActions = {
    findRecipesForSearchTitle
}

export default recipeActions;