import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"

//Pizza Form Component
import PizzaForm from "./Components/PizzaForm";

//Home Page Component
import HomeComponent from "./Components/Home"
import Conformation from "./Components/Conformation";


const initialState = {
    name: '',
    size: '',
    pepperoni: false,
    tomato: false,
    sausage: false,
    black_olives: false,
    cana_bacon: false,
    roasted_garlic: false,
    red_sauce: false,
    garlic_sauce: false,
    bbq_sauce: false,
    alfredo_sauce: false,
}


const App = () => {

    const [formValues, setFormValues] = useState(initialState)

    return (
        <>
            <Router>
                <div>
                    <h1>Lambda Eats</h1>
                    <nav>
                        <Link to='/'>
                            <button id='Home'>Home</button>
                        </Link>
                        <Link to='/pizza'>
                            <button id='order-pizza'>Order Pizza</button>
                        </Link>
                    </nav>
                </div>

                <Switch>
                    <Route exact path='/'>
                        <HomeComponent/>
                    </Route>
                    <Route path='/help'>
                        Help
                    </Route>
                    <Route path='/pizza'>
                        <PizzaForm values={formValues}/>
                    </Route>
                    <Route path='/conformation'>
                        <Conformation/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};
export default App;
