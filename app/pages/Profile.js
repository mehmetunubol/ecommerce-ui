import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Logo.component';
import UserLogin from '../pages/UserLogin';
import UserRegister from '../pages/UserRegister';
import Orders from '../pages/Orders';
import Settings from '../pages/Settings'
import { userLogout } from '../redux/actions/userActions';

const Stack = createStackNavigator();

function ProfileScreen (props) {
    const { user, userLogout, navigation} = props;
    return (
        <View>
            <Text>Welcome '{user.name}'</Text>
            <Button title="Orders" onPress={()=> {navigation.navigate('Orders')}}/>
            <Button title="Settings" onPress={()=> {navigation.navigate('Settings')}}/>
            <Button	title="Log out" color="#4285f4" onPress={userLogout}/>
        </View> 
    );
}

class Profile extends Component {
    render() {
        const { navigation, user } = this.props;
        console.log("Profile =>  " + JSON.stringify(this.props));
        return (
            <Stack.Navigator initialRouteName={(user.token) ? "Profile" : "Login"}>
            <Stack.Screen name="Profile"  
                          options={{ 
                            headerTitle: 'Profile' ,
                            headerLeft: () => (<Logo navigation={navigation}/>)}}>
              {props => <ProfileScreen {...this.props}/>}
            </Stack.Screen>
            <Stack.Screen name="Login" component={UserLogin}/>
            <Stack.Screen name="Register" component={UserRegister}/>
            <Stack.Screen name="Orders" component={Orders}/>
            <Stack.Screen name="Settings" component={Settings}/>
          </Stack.Navigator>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    {userLogout}
)(Profile);