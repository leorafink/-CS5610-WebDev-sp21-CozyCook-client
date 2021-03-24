// API Key: 9e111b53b970445b9b4b9db4ece6f907
// in URL as: &apiKey=9e111b53b970445b9b4b9db4ece6f907

export const findRecipesByTitle = (title) => {
    return(
        fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${title}&apiKey=aef88fbe31534cf4b349ff44279f3fcb`)
            .then(response => response.json())
    )
}
export const findRecipeById = (id) => {
    return(
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=aef88fbe31534cf4b349ff44279f3fcb`)
        .then(response => response.json())
    )
}

export default {
    findRecipesByTitle,
    findRecipeById // test
}