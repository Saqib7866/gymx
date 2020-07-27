import React, { Component } from "react";
import Axios from "axios";

const AppContext = React.createContext();

class AppProvider extends Component {
  // Context state
  state = {
    user: {},
    products: [],
    cartProducts: [],

    cart: {
      totalBill: 0,
      shipping: 0,
      tax: 0,
    },
  };

  componentDidMount() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) !== null) {
      Axios.get(process.env.REACT_APP_API_URL + "/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_TOKEN_NAME
          )}`,
        },
      }).then((res) => {
        this.setUser(res.data);
      });
    }
  }

  // Methods to update state
  setUser = (user) => {
    this.setState({ user });
  };

  setProducts = (products) => {
    this.setState({ products });
  };

  getProduct = (id) => {
    let product = this.state.products.find((p) => {
      return p.id === id;
    });
    return product;
  };

  addCartProduct = (product) => {
    let { cartProducts } = this.state;
    cartProducts.push(product);
    this.setState({ cartProducts: [...this.state.cartProducts, product] });
  };

  setTotalBill = (bill) => {
    const cart = this.state.cart;
    cart.totalBill = bill;
    this.setState({ cart });
  };

  setShipping = (shipping) => {
    const cart = this.state.cart;
    cart.shipping = shipping;
    this.setState({ cart });
  };

  setTax = (tax) => {
    const cart = this.state.cart;
    cart.tax = tax;
    this.setState({ cart });
  };

  calculateTotalBill = () => {
    let total = 0;
    this.state.cartProducts.forEach((product) => {
      total +=
        this.state.products.find((p) => {
          return p.id + "" === product.id + "";
        }).price * product.quantity;
    });
    this.setTotalBill(total);
  };

  setCartProductQuantity = (id, quantity) => {
    if (quantity !== null) {
      this.state.cartProducts.forEach((product) => {
        if (product.id === id) {
          product.quantity = quantity;
        }
      });
    }
  };

  removeProductFromCart = (id) => {
    let products = this.state.cartProducts;

    products = products.filter((p) => p.id !== id);
    console.log(products);

    this.setState({ cartProducts: products });
    this.calculateTotalBill();
  };

  updateProductQuantity = (id, quantity) => {
    const products = this.state.cartProducts;
    var index = products
      .map(function (item) {
        return item.id;
      })
      .indexOf(id);

    products[index].quantity = quantity;

    this.setState({ cartProducts: products });
  };

  render() {
    const { children } = this.props;

    const { user } = this.state;
    const { products } = this.state;
    const { cartProducts } = this.state;
    const { cart } = this.state;

    const { setProducts } = this;
    const { addCartProduct } = this;
    const { setTotalBill } = this;
    const { setShipping } = this;
    const { setTax } = this;
    const { calculateTotalBill } = this;
    const { setCartProductQuantity } = this;
    const { removeProductFromCart } = this;
    const { updateProductQuantity } = this;
    const { setUser } = this;

    return (
      <AppContext.Provider
        value={{
          user,
          products,
          cartProducts,
          cart,
          setUser,
          setProducts,
          addCartProduct,
          setTotalBill,
          setShipping,
          setTax,
          calculateTotalBill,
          setCartProductQuantity,
          removeProductFromCart,
          updateProductQuantity,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export { AppProvider };
