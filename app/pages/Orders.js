import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getAllOrders } from '../fakebackend/Orders'

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount () {
        getAllOrders().then( (orders) => {
            this.setState({
                orders
            });
        });
    }
    eachItemDetail = (item) => {
        return (
            <View style={styles.container}>
                <View style={styles.productDes}>
                    <Text>{item.title}</Text>
                    <Text>{(item.cost).toFixed(2)} TL</Text>
                </View>
            </View>
        );
    }
    eachOrder = (order) => {
        return(
            <View>
                <View><Text>Status:  {order.status} </Text></View>
                <View><Text>Address:  {order.address} </Text></View>
                <FlatList 
                    data={order.detail} 
                    renderItem={({item}) => this.eachItemDetail(item)}
                    keyExtractor ={(item) => item.id}
                    ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }/>
                <View><Text>Total Price: {order.totalPrice} TL</Text></View>
            </View>
        );
    }
    render() {
        const { orders } = this.state;
        console.log("Orders: "  + JSON.stringify(orders));
        return (
            <View>
                <FlatList 
                    data={orders} 
                    renderItem={({item}) => this.eachOrder(item)}
                    keyExtractor ={(item) => item.id}
                    ItemSeparatorComponent= {()=> <View style={{height:1.5, backgroundColor:'#34495e90'}}/> }/>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container:{
        flex: 2,
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
    },
    productDes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10
    }
});

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total,
    user: state.user
});

export default connect(
    mapStateToProps
)(Orders);