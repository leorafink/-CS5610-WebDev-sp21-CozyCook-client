import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";

function App() {
  return(
    <div className = "container-fluid">
      <BrowserRouter>
        <Route
            exact={true}
            path={["/"]}>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
