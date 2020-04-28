import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItems from '../components/CartItems.component';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

class Cart extends Component {
    render() {
        const { cartItems, navigation, cartTotal, user } = this.props;
        console.log("CartPage: user" + JSON.stringify(user));
        return (
            <View>
                <View>
                    <Text>Cart</Text>
                </View>
            {(cartItems.length > 0)? (
                <View>
                    <FlatList 
                        data={cartItems}
                        renderItem={({item, index}) => <CartItems item={item} index={index} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
                    />
                    <Text style={styles.text}>Total: {(cartTotal).toFixed(2)} TL</Text> 
                    <Button
                        title="Proceed to Checkout"
                        onPress={() => navigation.navigate('Checkout')}
                    />
                </View>
            ): 
            (
                <View>
                    <Text style={styles.text}>There is no item in your Cart</Text> 
                    <Button
                        title="Go to SHOP!"
                        onPress={() => navigation.navigate('Products')}
                    />
                </View>
            )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
      text: {
        textAlign: 'center',
        color: 'red'
      },
  });

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total,
    user: state.user
});

export default connect(
    mapStateToProps
)(Cart);;