import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';

import {addToCart} from '../../../redux/Shopping/shopping-actions';
import {allProductsSelector} from '../../selector.js'

const Product = ({addProduct}) => {

    const product = useSelector(allProductsSelector);
    const dispatch = useDispatch();

    function handleAddCart(item) {
        dispatch(addToCart(item));
    }

    return (
            product.map((item, i) => (
                <div key={i} className={styles.container}>
                <div className={styles.product}>
                    <img
                        className={styles.product__image}
                        src={item.image}
                    />
                    <div className={styles.product__details}>
                        <p className={styles.details__title}>{item.name}</p>
                        <p className={styles.details__price}>{item.price} VNĐ</p>
                    </div>
                    <div className={styles.product__buttons}>
                        <button
                        onClick={() => handleAddCart(item)}
                        className={`${styles.buttons__btn} ${styles.buttons__add}`}
                        >
                        Add To Cart
                        </button>
                    </div>
                </div>
                </div>
    ))
        
)};

export default Product;
// function mapStateToProps(state) {
//     return { product: state.shop.product };
// }
// const mapDispatchToProps = (dispatch) => {
// 	return{
// 		addProduct: (item) => dispatch({type: 'ADD_PRODUCT', payload: {item}}),
// 	}
	
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Product);
