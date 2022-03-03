import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Product from "./components/Products/Product/Product";
import Cart from "./components/Carts/Cart";
import Home from "./components/Home/Home";
import { connect } from "react-redux";
import  { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App({ isLogin }) {
  if (isLogin === false) {
    return (
      <Router>
        <div className="App">
          <Login />
          <Redirect to="/logins" />
        </div>
      </Router>
    );
  }else {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
            <Route path="/logins" exact>
              <Redirect to="/" />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/products">
              <Product />
            </Route>
            <Route path="/carts">
              <Cart />
            </Route>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {

  return { isLogin: state.user.isLogin };
}

export default connect(mapStateToProps)(App);
