import React, { Component } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import  Product  from './Product.component';

export default function Products (props) {
    const { products, addToCart } = props;
    return (
        <View style={styles.container}>
        
        <View style={styles.body}>
            <FlatList 
                data={products} 
                renderItem={({item}) => <Product item={item} addItemsToCart={addToCart} product={item}/>}
                keyExtractor ={(item) => item.id}
                ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
      flex: 1,
      justifyContent: 'center'
    }
});