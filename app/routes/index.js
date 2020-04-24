import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import UserRegister from '../pages/UserRegister';

const Tab = createBottomTabNavigator();

export function Route(props) {
  
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomePage}/>
        <Tab.Screen name="Products" component={Products}/>
        <Tab.Screen name="Checkout" component={Checkout}/>
        {(props.user.token) ? (
          <Tab.Screen name="Profile" component={Profile} />
        ):(
          <Tab.Screen name="Register" component={UserRegister} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const mapStateToProps = (state) => ({
  user: state.user
})
export default connect(mapStateToProps)(Route);