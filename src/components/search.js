import React, {useState, useEffect} from 'react'
import recipeService from '../services/recipe-service'
import {Link, useParams, useHistory} from "react-router-dom";

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState({Search: []})
    const history = useHistory()
    useEffect(() => {
        setSearchTitle(title)
        if(title) {
            recipeService.findRecipesByTitle(title)
                .then(results => setResults(results /*.results*/ ))
        }
    }, [title])
    return(
        <div>
            <h1>Search</h1>
            <input
                onChange={(event) => {
                    setSearchTitle(event.target.value)
                }}
                className="form-control"
                value={searchTitle}/>
            <button
                onClick={() => {history.push(`/search/${searchTitle}`)}}
                className="btn btn-primary btn-block">
                Search
            </button>
            <ul className="list-group">
                {
                    results && results.hits && results.hits.map(hit => {
                                            let id = hit.recipe.uri.substring(51)
                                            return (
                                               <li className="list-group-item" key={id}>
                                                   <Link to={`${title}/details/${id}`}>
                                                       {hit.recipe.label}
                                                   </Link>
                                               </li>
                    )
                })}
                {/*JSON.stringify(results.hits[0].recipe)*/}
                results:
                {JSON.stringify(results)}

                {/*results.hits:
                {JSON.stringify(results.hits)}

                results.hits[0]:
                {JSON.stringify(results.hits[0])}

                results.hits[0].recipe:
                {JSON.stringify(results.hits[0].recipe)}

                results.hits[0].recipe.uri:
                {JSON.stringify(results.hits[0].recipe.uri)}

                results.hits[0].recipe.uri.substring(51):
                {JSON.stringify(results.hits[0].recipe.uri.substring(51))}*!/*/}
                {/*JSON.stringify(results)*/}
            </ul>
        </div>
    )
}

export default Search