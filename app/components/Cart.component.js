import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import Logo from '../components/Logo.component';

export class Cart extends Component {
    constructor(props) {
      super(props);
        console.log("Cart Component");
      this.state = {
        opacity: new Animated.Value(0),
        cartItems: props.cartItems
      };
    }
    startAnimation = () => {
        console.log("startAnimation");
        Animated.timing(this.state.opacity,
        {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start(()=> {
            setTimeout(()=> {
                this.endAnimation()
            }, 1000);
        })
    }
    endAnimation(){
        Animated.timing(this.state.opacity,
        {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }
    onPress = () => {
        this.props.navigation.navigate('Cart');
    }
    render() {
        const { cartItems, navigation} = this.props;
        if(cartItems.length > 0 ) this.startAnimation();
        let animatedStyle = {opacity:this.state.opacity}
        return (
            <Animated.View style={[styles.container, animatedStyle]}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.cart}>Your cart: {(cartItems).length} items</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cart:{
        color: 'red',
        fontSize: 14
    }
})

export default connect(
    mapStateToProps
)(Cart);