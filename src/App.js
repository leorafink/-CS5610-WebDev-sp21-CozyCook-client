import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import RecipeReducer from "./reducers/recipe-reducer";
import LoginPage from "./components/login/login-page";
import Register from "./components/register/register";
import UserList from "./components/users/user-list";

const reducer = combineReducers({recipeReducer: RecipeReducer});
const store = createStore(reducer);

function App() {
  return(
      <Provider store={store}>
          <div className = "container-fluid">
              <BrowserRouter>
                  <Route
                      exact={true}
                      path={["/",
                             "/home"]}>
                      <Home/>
                  </Route>
                  <Route
                      exact={true}
                      path={["/search",
                             "/search/:title",
                             "/search/:title/health/:health1",
                             "/search/:title/health/:health1/health/:health2",
                             "/search/:title/health/:health1/health/:health2/health/:health3",
                             "/search/:title/health/:health1/health/:health2/health/:health3/health/:health4"]}>
                      <Search/>
                  </Route>
                  <Route
                      exact={true}
                      path={["/search/:title/details/:id",
                             "/search/:title/health/:health1/details/:id",
                             "/search/:title/health/:health1/health/:health2/details/:id",
                             "/search/:title/health/:health1/health/:health2/health/:health3/details/:id",
                             "/search/:title/health/:health1/health/:health2/health/:health3/health/:health4/details/:id"]}>
                      <Details/>
                  </Route>
                  <Route exact={true}
                         path={["/login"]}>
                      <LoginPage/>
                  </Route>
                  <Route exact={true}
                         path={["/register"]}>
                      <Register/>
                  </Route>
                  <Route exact={true}
                         path={["/users"]}>
                      <UserList/>
                  </Route>
              </BrowserRouter>
          </div>
      </Provider>
  );
}

export default App;
