import React, {useState, useEffect} from 'react'
import recipeService from '../services/recipe-service'
import {Link, useParams, useHistory} from "react-router-dom";
import ToggleButton from "react-bootstrap/ToggleButton";

import '../index.css'

const Search = () => {
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState({Search: []})
    const [isVegetarian, setVegetarian] = React.useState(false);
    const [isEggFree, setEggFree] = React.useState(false);
    const [isKosher, setKosher] = React.useState(false);
    const [isPeanutFree, setPeanutFree] = React.useState(false);
    const history = useHistory()

    const doSetFilters = () => {
        let filterArray = []
        if (isVegetarian) {
            filterArray.push("Vegetarian")
        }
        if (isEggFree) {
            filterArray.push("Egg-Free")
        }
        if(isKosher) {
            filterArray.push("Kosher")
        }
        if(isPeanutFree) {
            filterArray.push("Peanut-Free")
        }
        return filterArray
    }

    useEffect(() => {
        setSearchTitle(title)
        if(title) {
            recipeService.findRecipesByTitle(title, doSetFilters())
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

            <ToggleButton className="wbdv-health-check-box"
                          type="checkbox"
                          checked={isVegetarian}
                          value="1"
                          onChange={e => setVegetarian(e.currentTarget.checked)}>
                Vegetarian
            </ToggleButton>
            <ToggleButton className="wbdv-health-check-box"
                          type="checkbox"
                          checked={isEggFree}
                          value="1"
                          onChange={e => setEggFree(e.currentTarget.checked)}>
                Egg-Free
            </ToggleButton>
            <ToggleButton className="wbdv-health-check-box"
                          type="checkbox"
                          checked={isKosher}
                          value="1"
                          onChange={e => setKosher(e.currentTarget.checked)}>
                Kosher
            </ToggleButton>
            <ToggleButton className="wbdv-health-check-box"
                          type="checkbox"
                          checked={isPeanutFree}
                          value="1"
                          onChange={e => setPeanutFree(e.currentTarget.checked)}>
                Peanut-Free
            </ToggleButton>

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