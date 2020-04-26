import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { addOrder } from '../redux/actions/orderAction';
import { emptyCart } from '../redux/actions/cartActions';

class CustomerForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ...props.user
        }
    }

  renderTextfield(options) {
    return (
        <TextInput style={styles.textField} onChangeText={(value) => this.setState({[options.name]: value})} 
                placeholder= {options.label} value={this.state[options.name]} keyboardType= {options.keyboard || 'default'}/>
      );
  }
  renderAddressField(options) {
    return (
        <TextInput style={styles.addressTextField} onChangeText={(value) => this.setState({[options.name]: value})} 
                placeholder= {options.label} value={this.state[options.name]} keyboardType= {options.keyboard || 'default'}/>
      );
  }
  onPressButton = () => {
        const {name, phone, email, address} = this.state;
        const { cartItems, navigation, addOrder, emptyCart } = this.props;
        if (name === '') { return Alert.alert('enter name')}
        if (phone === '') { return Alert.alert('enter phone')}
        if (email === '') { return Alert.alert('enter email')}
        if (address === '') { return Alert.alert('enter address')}
        let customer = { name: name, phone: phone, email: email, address: address}
        addOrder({cartItems: cartItems, customer: customer});
        emptyCart();
        this.setState({name: ''});
        this.setState({phone: ''});
        this.setState({email: ''});
        this.setState({address: ''});
        navigation.navigate('Receipt');
    }
  renderButton() {
        return (
            <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                <Text style={styles.btnText}>Complete the Checkout</Text>
            </TouchableOpacity>
        );
    }
  render() {
    return (
            <View style={styles.panel}>
                {this.renderTextfield({name: 'name', label: 'Your name'})}
                {this.renderTextfield({name: 'phone', label: 'Your phone number', keyboard: 'phone-pad'})}
                {this.renderTextfield({name: 'email', label: 'Your email address', keyboard: 'email-address'})}
                {this.renderAddressField({name: 'address', label: 'Your address'})}
                {this.renderButton()}
            </View>
    );
  }
}

const styles = StyleSheet.create({
        panel: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 10,
        margin: 10
    },
    textField: {
        height: 40,
        margin: 8
    },
    addressTextField: {
        height: 100,
        margin: 8
    },
    btn: {
        backgroundColor: '#34495e',
        borderRadius: 3,
        padding: 12,
        flex: 1,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14
    }
});

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    user: state.user
})

const mapDispatchToProps = (dispatch) => {
    return {
      emptyCart: () => dispatch(emptyCart()),
      addOrder: (order) => dispatch(addOrder(order))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);