import styles from "./Cart.module.css";
import { removeCart } from "../../redux/Shopping/shopping-actions";
import { connect } from "react-redux";

const Cart = ({order, removeCart, setQuantity}) => {
    // console.log(order)
    
    function handleRemoveCart(item) {
        removeCart(item);
    }

    const handleValue = (value, item) => {
        setQuantity(item, value);
    }
    return (
        <table id={styles.customers}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(order).map((item, i) => (
                <tr key={i}>
                    <td>{order[item].id}</td>
                    <td><img 
                        className={styles.avatar}
                        src={order[item].image}
                    /></td>
                    <td>{order[item].name}</td>
                    <td>{order[item].price} VNĐ</td>
                    <td>
                        <input onChange={(e) => {handleValue(e.target.value, item)}} min="1" type="number" defaultValue={order[item].qty} max="100" />
                    </td>
                    <td><button onClick={() => {handleRemoveCart(item)}} id={styles.delete}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

// export default Cart;

function mapStateToProps(state) {
    return { order: state.shop.order, id: state.shop.order.id};
}

const mapDispatchToProps = (dispatch) => {
	return{
		removeCart: (item) => dispatch({type: 'REMOVE_ITEM', payload: {item}}),
        setQuantity: (item, value) => dispatch({type: 'SET_QUANTITY', payload: {item, value}}),
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
