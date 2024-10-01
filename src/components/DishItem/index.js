import './index.css'
const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails
  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)
  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }
  const renderControllerButton = () => (
    <div className="button-container">
      <button className="button" type="button" onClick={onDecreaseQuantity}>
        -
      </button>
      <p className="quantity">{getQuantity()}</p>
      <button className="button" type="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )
  return (
    <li className="dish-items-container">
      <div className="item-container">
        <h1 className="dishName">{dishName}</h1>
        <p className="dishPrice">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dishDescription">{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && <p className="not">Not available</p>}
        {addonCat.length !== 0 && <p className="not">Customizations available</p>}
      </div>
      <p className="dishCalories">{dishCalories} calories</p>
      <img className="dish-img" alt={dishName} src={dishImage} />
    </li>
  )
}
export default DishItem
