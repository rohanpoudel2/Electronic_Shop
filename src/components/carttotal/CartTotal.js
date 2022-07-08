import './carttotal.scss';

const CartTotal = () => {
  return (
    <div className="cart-total">
      <div className="total-price"><h3>Total Price: </h3> 111</div>
      <div className="total-qty"> <h3>Total Qty: </h3> 111</div>
      <div className="discount"> <h3>Discount Amt: </h3> 111</div>
      <hr />
      <div className="final-price"> <h3>Final Price: </h3> 111</div>
      <button>Checkout</button>
    </div>
  )
}

export default CartTotal