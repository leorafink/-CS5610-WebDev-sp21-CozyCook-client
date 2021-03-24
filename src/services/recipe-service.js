// Spoonacular API Key: 9e111b53b970445b9b4b9db4ece6f907
// Spoonacular in URL as: &apiKey=9e111b53b970445b9b4b9db4ece6f907

// Edamam Application ID: d0cab371 (in URL as &app_id=d0cab371)
// Edamam Application Key: de9c6b500612b05267393f89cd94df76 (in URL as &app_key=de9c6b500612b05267393f89cd94df76)

export const findRecipesByTitle = (title) => {
    return(
        /*fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${title}&apiKey=aef88fbe31534cf4b349ff44279f3fcb`)
            .then(response => response.json())*/
        fetch(`https://api.edamam.com/search?q=${title}&app_id=d0cab371&app_key=de9c6b500612b05267393f89cd94df76`)
            .then(response => response.json())
    )
}
export const findRecipeById = (id) => {
    return(
    /*fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=aef88fbe31534cf4b349ff44279f3fcb`)
        .then(response => response.json())*/
        fetch(`https://api.edamam.com/search?q=${id}&app_id=d0cab371&app_key=de9c6b500612b05267393f89cd94df76`)
            .then(response => response.json())
    )
}

export default {
    findRecipesByTitle,
    findRecipeById
}