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
                {/*
                    results.Search.map(recipe =>
                                           <li className="list-group-item" key={recipe.id}>
                                               <Link to={`/details/${recipe.id}`}>
                                                   {recipe.title}
                                               </Link>
                                           </li>
                    )
                */}
                {JSON.stringify(results)}
            </ul>
        </div>
    )
}

export default Search