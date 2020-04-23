import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import themes from '../styles/theme.style';
/*const Route = createStackNavigator(
{
  Products: { screen: Products},
  Checkout: { screen: Checkout},
  Receipt: { screen: Receipt}
},
{
 navigationOptions: {
    headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
    },
    headerTintColor: '#fff'
 }
}
);*/
import { 
  View, 
  Text,
  Button
} from 'react-native';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <Text>Home Screen</Text>
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
      <Text>--------------</Text>
      <Button
        title="Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
      
    </View>
  );
}

const Stack = createStackNavigator();
export function Route() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Receipt" component={Receipt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Route;