// Spoonacular API Key: 9e111b53b970445b9b4b9db4ece6f907
// Spoonacular in URL as: &apiKey=9e111b53b970445b9b4b9db4ece6f907

// Edamam Application ID: d0cab371 (in URL as &app_id=d0cab371)
// Edamam Application Key: de9c6b500612b05267393f89cd94df76 (in URL as &app_key=de9c6b500612b05267393f89cd94df76)

// Edamam L App ID: 0f692b71
// Edamam L App Key: d1d863b39ba9f2d9e589ac606adeec38

// Edamam A App ID: 8bc332bb
// Edamam A App Key: c65adc373fa0821d289b38c395b4a129

const EDAMAM_URL = "https://api.edamam.com/search?app_id=8bc332bb&app_key=c65adc373fa0821d289b38c395b4a129"

export const findRecipesByTitle = (title, health) => {
    let url = EDAMAM_URL + `&q=${title}`
    for (let i = 0; i < health.length; i++) {
        url = url + `&health=${health[i]}`
    }
    return(
        /*fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${title}&apiKey=aef88fbe31534cf4b349ff44279f3fcb`)
            .then(response => response.json())*/
        fetch(url)
            .then(response => response.json())
    )
}
export const findRecipeById = (id) => {
    return(
    /*fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=aef88fbe31534cf4b349ff44279f3fcb`)
        .then(response => response.json())*/
        fetch(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}&app_id=d0cab371&app_key=de9c6b500612b05267393f89cd94df76`)
            .then(response => response.json())
    )
}

export default {
    findRecipesByTitle,
    findRecipeById
}