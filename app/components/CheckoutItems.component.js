import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomerForm from './CustomerForm.component';

class CheckoutItems extends Component {  
  render() {
    const { cartItems, navigation, cartTotal } = this.props;
    return (
      <View style={styles.container}>   
        <View style={styles.annouc}>
            <Text style={styles.anncText}>You have {cartItems.length} items in your Checkout</Text>
            <Text style={styles.text}>Total Price: TL {(cartTotal).toFixed(2)}</Text>  
        </View>
        <View style={styles.custForm}>
          <ScrollView>
            <CustomerForm navigation={navigation}/>
          </ScrollView> 
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  custForm: {
    flex: 1
  },
  ckitems: {
    height: 170
  },
    annouc:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'red'
    },
    anncText:{
        textAlign: 'center',
        color: '#fff'  
    }
});

export default CheckoutItems;