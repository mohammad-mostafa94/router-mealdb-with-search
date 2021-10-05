// import './App.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import MealDetails from "./components/MealDetails/MealDetails";
import Meals from "./components/Meals/Meals";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/meals">
            <Meals></Meals>
        </Route>
          <Route exact path="/meal/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path = "/">
            <Restaurant></Restaurant>
          </Route>
          <Route path ="*">
            <h1>Not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
