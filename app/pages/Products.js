import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import ProductsComponent  from '../components/Products.component';
import Cart from '../components/Cart.component';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';

const Stack = createStackNavigator();

class Products extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount = () => {
    this.props.fetchProducts();
  }
  addItemsToCart = (product) => {
      this.props.addToCart(product);
  }
  render() {
    const { products, navigation } = this.props
    return (
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Checkout" component={Checkout}/>
        <Stack.Screen name="Receipt" component={Receipt}/>
        <Stack.Screen name="Products" 
                      options={{ 
                        headerTitle: 'Products' , 
                        headerRight: () => (<Cart navigation={this.props.navigation}/>)}}>
          {props => <ProductsComponent {...this.props} products={products} addToCart={this.addItemsToCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);