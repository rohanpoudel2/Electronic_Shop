
import './carttotal.scss';

const CartTotal = ({ d }) => {

  let totalAmount = 0;
  let totalQuantity = 0;

  console.log(d.map((d) => (totalAmount += parseInt(d.price))));
  console.log(d.map((d) => (totalQuantity += parseInt(d.amount))));

  return (
    <div className="cart-total">
      <div className="total-price"><h3>Total Price: </h3>Rs.{totalAmount}</div>
      <div className="total-qty"> <h3>Total Qty: </h3>{totalQuantity}</div>
      <div className="discount"> <h3>Discount Amt: </h3>Rs. 0</div>
      <hr />
      <div className="final-price"> <h3>Final Price: </h3>Rs.{totalAmount}</div>
      <button>Checkout</button>
    </div>
  )
}

export default CartTotal