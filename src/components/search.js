import React, {useState, useEffect} from 'react'
import recipeService from '../services/recipe-service'
import {Link, useParams, useHistory} from "react-router-dom";
import '../index.css'

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
        <div className="container-xl ">
            <h1 className="wbdv-page-title">Search</h1>
            <input
                onChange={(event) => {
                    setSearchTitle(event.target.value)
                }}
                className="form-control wbdv-search-input"
                value={searchTitle}/>
            <button
                onClick={() => {history.push(`/search/${searchTitle}`)}}
                className="btn btn-block wbdv-search-btn">
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

            </ul>
        </div>
    )
}

export default Search