import Button from '../Button/Button';
import CartCard from '../Card/CartCard';

const Cart = ({ uniqueCartItems, showCart, handleDeleteFromCart, onAddHandler, onRemoveHandler }) => {

  let cartTotal = 0
  uniqueCartItems.forEach(item => {
    let discountedPrice = 0;
    discountedPrice = Math.round(item.price - (item.price * (item.discount / 100)));
    cartTotal += discountedPrice * item.count
  })

  let shipping = Math.round(cartTotal * 0.02)
  let totalAmount = cartTotal + shipping;

  return (
    <div className={showCart ? 'cart' : 'cart hidden'}>
      {uniqueCartItems.length > 0 ?
        <>
          {uniqueCartItems.length > 0 && uniqueCartItems.map((item, index) => (
            <CartCard key={index}
              item={item}
              handleRemoveFromCart={() => { handleDeleteFromCart(item.id) }}
              onAddHandler={() => { onAddHandler(item.id) }}
              onRemoveHandler={() => { onRemoveHandler(item.id) }}
            />

          ))}

          <hr />
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <h1>Subtotal</h1>
              <p>{`$${cartTotal}`}</p>
            </div>
            <div className='flex justify-between'>
              <h1>Shipping</h1>
              <p>{`$${shipping < 50 ? shipping : 50}`}</p>
            </div>
            <div className='flex justify-between'>
              <h1 className='font-bold'>Total</h1>
              <p>{`$${totalAmount}`}</p>
            </div>
          </div>

          <div className='flex justify-center'>
            <Button classes={'bg-primary leading-none py-3 px-14 uppercase text-xs font-bold rounded'} text={'Proceed To Checkout'} />
          </div>
        </> :
        <div>Cart is empty!</div>}

    </div>
  )
}

export default Cart