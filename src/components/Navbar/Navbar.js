import React from "react";
import styles from "./Navbar.module.css"
import {
    Link,
    NavLink
  } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({quantity, logout}) => {
    const handleLogout = () => {
        logout();
    }

    return (
        <div className={styles.topnav}>
            {/* Dùng Navlink để biết element nào đang active */}
            <NavLink to="/" activeClassName={styles.active} exact={true}>Home</NavLink>
            <NavLink to="/products" activeClassName={styles.active}>Products</NavLink>
            <NavLink to="/carts" activeClassName={styles.active}>Cart</NavLink>
            <NavLink to="/logout" onClick={handleLogout} activeClassName={styles.active}>Logout</NavLink>
            <div className={styles.cart}>
                <img className={styles.avarta} src="./images/cart.jpg" />
                <span>{quantity}</span>
            </div>
            {/* Dùng Link không thể biết element nào actiev được*/}
            {/* <Link className={styles.active} to="/">Cart</Link>
            <Link to="/products">Products</Link>
            <Link to="/carts">Cart</Link> */}
        </div>
    );
};

// export default Navbar;
// export default Product;
function mapStateToProps(state) {
    // console.log(state.shop)
    return { quantity: state.shop.quantity};
}
const mapDispatchToProps = (dispatch) => {
	return{
		logout: () => dispatch({type: 'LOG_OUT', payload: null}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);