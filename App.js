// this is app.js file

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faUser /* ...other icons... */,
} from "@fortawesome/free-solid-svg-icons";

//and this is the method where you used the different icons and add
// in library and then you can used those icons every compoent without import them
library.add(
  faShoppingCart,
  faUser
  // ...other icons...
);

// this is other compoentnt khere you are not import the font because you used libabray and add them icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <FontAwesomeIcon icon={faUser} />
      {/* ...other components... */}
    </div>
  );
}

///////////////////////////////////////////

import About from "./components/Misc/About";

<Route exact path="/about" component={About} />;

//write way to make a route

// like one thing

let a = "sameer";
let b = "uzair";
let c = "kabeer";

// if a export the a like export default so

// export default a;

// so in this case i import that type

// import a from './app.js'
// // like
// import b from './app.js'
// import c from './app.js'

// and console.log(b)
//sameer because you export default and when you import you get any name from those file

// if you are not  export default
// like you just like this




// export a
// so you import like the achual name where you export the name same name that you import like import a fro "xyz"




//Props



// the props


// import React from 'react'

// function Navbar(props) {
//   return (
//     <div>
//         <li>{props.title}</li>   Home appear hear
//         <li>About</li>
//         <li>Shop</li>
//     </div>
//   )
// }

// export default Navbar


// and what is props types so here  
   
Navbar.propTypes={
    title:PropTypes.string.required
    // its mean when you pass props from my compoent its must be string
}



// and if you forget to pass the props so you can make a default props where you forget props to pass so react used this props 
// of your Navbar compoent and if you set key .required so you must to give props bydefault or pass 
// propsTypes  is good for  code improving and not mistake in code while pass props


// Navbar.defaultProps{
// title:"Home",
// }
//now you used this compoennt here for example 




import React from 'react'

function MyCompoent() {
  return (
    <div><h1>
        my compoent
    </h1>
        <Navbar title="Home" />
    </div>
  )
}

export default MyCompoent





// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { fetchProducts } from "../../store/actions/storeActions";
// import { Spinner } from "reactstrap";
// import Product from "./Product";
// import "./css/products.css";

// const ProductList = ({ dispatch, loading, products }) => {
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return loading ? (
//     <Spinner color="secondary" style={{ width: "3rem", height: "3rem" }} className="m-auto" />
//   ) : (
//     <>
//       <h1 className="mb-3 text-center">All Products</h1>
//       <ul className="grid list-unstyled mb-4">
//         {products.map(item => (
//           <li key={item.id}>
//             <Product item={item} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// ProductList.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   loading: PropTypes.bool,
//   products: PropTypes.array
// };

// const mapStateToProps = state => {
//   return state.store;
// };

// export default connect(mapStateToProps)(ProductList);


// here is the basic example of how you used a props types in this