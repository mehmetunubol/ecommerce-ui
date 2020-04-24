import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';


class Profile extends Component {
    componentDidMount () {
        const { navigation } = this.props;
        this.props.navigation.setOptions({ 
            headerTitle: 'Checkout',
            headerLeft: () => (<Logo navigation={navigation}/>),
            headerRight: () => (<Button title="Home" onPress={() => navigation.navigate('Home')}/>)
        });
    }
    render() {
        const { navigation, user } = this.props;
        if (!user.token) navigation.navigate('Login');
        return (
            <ScrollView >
                <View>
                    <Text>{user.email}</Text>
                </View>
                <View>
                    <Text>{user.password}</Text>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(
    mapStateToProps
)(Profile);