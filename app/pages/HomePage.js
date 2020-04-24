import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    View, 
    Text,
    Button,
    StyleSheet
  } from 'react-native';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import UserLogin from '../pages/UserLogin';
import Profile from '../pages/Profile';
import UserRegister from '../pages/UserRegister';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
            title="SHOP NOW!"
            onPress={() => navigation.navigate('Products')}
            />
            <Text>--------------</Text>
            <Text>------Test Side--------</Text>
            <Text>--------------</Text>
            <Button
            title="Receipt"
            onPress={() => navigation.navigate('Receipt')}
            />
            <Button
            title="Checkout"
            onPress={() => navigation.navigate('Checkout')}
            />
            <Text>--------------</Text>
    
            <Button
            title="Log in"
            onPress={() => navigation.navigate('Login')}
            />
            <Text>--------------</Text>
        </View>
    );
}
const Stack = createStackNavigator();

class HomePage extends Component {
    render() {
        const { navigation } = this.props;
        
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Products" component={Products}/>
                <Stack.Screen name="Checkout" component={Checkout}/>
                <Stack.Screen name="Receipt" component={Receipt} />
                <Stack.Screen name="Login" component={UserLogin} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Register" component={UserRegister} />
            </Stack.Navigator>
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
)(HomePage);