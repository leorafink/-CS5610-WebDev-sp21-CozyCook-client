import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link, useParams, useHistory} from "react-router-dom";
import ToggleButton from 'react-bootstrap/ToggleButton';
import recipeActions from "../actions/recipes-actions";

import '../index.css'

const Search = ({recipes = [], findRecipesForSearch
            }) => {

    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [isVegetarian, setVegetarian] = React.useState(false);
    const [isEggFree, setEggFree] = React.useState(false);
    const [isKosher, setKosher] = React.useState(false);
    const [isPeanutFree, setPeanutFree] = React.useState(false);
    const history = useHistory()

    useEffect(() => {
        if(searchTitle) {
            findRecipesForSearch()
        }
    }, [])

    const doSetFilters = () => {
        let filterArray = []
        if (isVegetarian) {
            filterArray.push("vegetarian")
        }
        if (isEggFree) {
            filterArray.push("egg-free")
        }
        if(isKosher) {
            filterArray.push("kosher")
        }
        if(isPeanutFree) {
            filterArray.push("peanut-free")
        }
        return filterArray
    }

    const setPath = () => {
        let path = `/search/${searchTitle}`
        if (isVegetarian) {
            path = path + `/health/vegetarian`
        }
        if (isEggFree) {
            path = path + `/health/egg-free`
        }
        if(isKosher) {
            path = path + `/health/kosher`
        }
        if(isPeanutFree) {
            path = path + `/health/peanut-free`
        }
        return path;
    }

    return(
        <div className = "container-fluid">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Search</li>

                </ol>
            </nav>

            <h1 className="wbdv-page-title">Search</h1>
            <div className="container-xl wbdv-search-main-area">
                <div className="wbdv-input-area">
                    <input
                        onChange={(event) => {
                            setSearchTitle(event.target.value)
                        }}
                        className="form-control wbdv-search-input"
                        value={searchTitle}
                        title = "Input search terms here"
                        placeholder = "Search..."/>

                    <div className = "wbdv-search-health-buttons">
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
                                      textOn = "test"
                                      onChange={e => setPeanutFree(e.currentTarget.checked)}>
                            Peanut-Free
                        </ToggleButton>
                    </div>

                    <div className = "wbdv-search-button-area">
                        <Link to={setPath()}>
                            <button
                                onClick={() => {history.push(`/search/${searchTitle}`); {findRecipesForSearch(searchTitle, doSetFilters())}}}
                                className="btn btn-block wbdv-search-btn">
                                Search
                            </button>
                        </Link>
                    </div>
                </div>


                <div className = "container-fluid">
                    <ul className="list-group">
                        {
                            recipes && recipes.hits && recipes.hits.map(hit => {
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
            </div>
        </div>
    )
}

const stateToPropMapper = (state) => {
    return ({
        recipes: state.recipeReducer.recipes
    })
}

const dispatchToPropMapper = (dispatch) => ({
    findRecipesForSearch: (searchTitle, healthFilters) => recipeActions.findRecipesForSearchTitle(dispatch, searchTitle, healthFilters)
})

export default connect(stateToPropMapper, dispatchToPropMapper)(Search)