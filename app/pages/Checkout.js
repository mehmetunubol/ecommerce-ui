import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutItems from '../components/CheckoutItems.component';
import Logo from '../components/Logo.component';

export class Checkout extends Component {
    componentDidMount () {
        const { navigation } = this.props;
        this.props.navigation.setOptions({ 
            headerTitle: 'Checkout',
            headerLeft: () => (<Logo navigation={navigation}/>)
        });
    }
    render() {
        const { cartItems, navigation, cartTotal, user } = this.props;
        return (
            <CheckoutItems cartItems={cartItems} cartTotal={cartTotal} navigation={navigation}/>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total,
    user: state.user
});

export default connect(
    mapStateToProps
)(Checkout);