import './index.css'
import {FaShoppingCart} from 'react-icons/fa'
const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="header-container">
      <h1 className="head">UNI Resto Cafe</h1>
      <div className="order-container">
        <p className="order-head">My Orders</p>
        <div className="cart-container">
          <FaShoppingCart />
          <p className="item-count">{getCartItemsCount()}</p>
        </div>
      </div>
    </header>
  )
}
export default Header
