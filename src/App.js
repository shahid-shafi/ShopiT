import './App.scss';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CustomRouter from './components/CustomRouter/CustomRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Newsletter from './components/Newsletter/Newsletter';
import ContactSection from "./components/ContactSection/ContactSection";
import Swal from 'sweetalert2';
import Genre from './components/Genre/Genre';
// import SectionCard from './components/Card/SectionCard';
// import ProductDetail from './components/ProductDetail.jsx/ProductDetail';



const items = [
  {
    id: 1,
    brand: 'Pure Natural Honey',
    imgSrc: '/images/honeyBottle-1.png',
    price: 280,
    discount: 36,
    rating: 4,
    numRatings: 100
  },
  {
    id: 2,
    brand: 'Raw Organic Honey',
    imgSrc: '/images/honeyBottle-2.webp',
    price: 250,
    discount: 26,
    rating: 4,
    numRatings: 100
  },
  {
    id: 3,
    brand: 'Orara Valley Honey',
    imgSrc: '/images/honeyBottle-3.jpg',
    price: 180,
    discount: 18,
    rating: 4,
    numRatings: 100
  },
  {
    id: 4,
    brand: 'Green Natural Honey',
    imgSrc: '/images/honeyBottle-4.webp',
    price: 150,
    discount: 20,
    rating: 4,
    numRatings: 100
  }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (item) => {
    let index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item, count: 1 }]);
    }
    else {
      const cartitems = cart;
      cartitems[index].count += 1;
      setCart([...cartitems]);
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }


  const removeFromCartHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#eee',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const cartList = cart.filter(item => item.id !== id);
        setCart([...cartList])
        Swal.fire(
          {
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            type: 'success',
            confirmButtonColor: '#fdc726',
          }
        )
      }
    })
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }


  const onAddHandler = (id) => {
    let index = cart.findIndex(uitem => uitem.id === id);
    if (index >= 0) {
      const cartitems = cart;
      cartitems[index].count += 1;
      setCart([...cartitems]);
    }
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }

  const onRemoveHandler = (id) => {
    let index = cart.findIndex(uitem => uitem.id === id);
    if (index >= 0) {
      let cartitems = cart;
      cartitems[index].count -= 1;
      cartitems = cartitems.filter(item => item.count !== 0)
      setCart([...cartitems]);
    }
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }


  useEffect(() => {
    let previousCartItems = localStorage.getItem('cartItems')
    previousCartItems = JSON.parse(previousCartItems)
   previousCartItems ? setCart([...previousCartItems]) : setCart([])
  }, [])
  
  return (
    
    <Router>
      {/* {items.map(item => <SectionCard item={item}/>
)} */}
      <Header uniqueCartItems={cart}
        handleDeleteFromCart={removeFromCartHandler}
        onAddHandler={onAddHandler}
        onRemoveHandler={onRemoveHandler}
      />
      <Genre/>
       <CustomRouter items={items}
        addToCartHandler={addToCartHandler}
        cart={cart || []}
      /> 
       {/* <Newsletter />  */}
      <ContactSection addToCartHandler={addToCartHandler}/>
      <Footer />
    </Router> 
  );
}

export default App;
