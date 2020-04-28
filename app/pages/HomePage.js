import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomePage(props) {
    return (
        <View style={styles.center}>
            <Button
                title="SHOP NOW!"
                onPress={() => props.navigation.navigate('Products')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    center:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});