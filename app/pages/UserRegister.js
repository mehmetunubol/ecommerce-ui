import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Text, Button } from 'react-native';
import { userRegister } from '../redux/actions/userActions';

class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: "",
            address: "",
        }
    }
    register = () => {
        this.props.userRegister(this.state);
    }
	render() {
		console.log("UserRegister " + JSON.stringify(this.props));
        if (this.props.user.token) {
            this.props.navigation.navigate('Profile');
        }
        return(
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
			        justifyContent: 'center',
			        padding: 15
				}}>
                { this.props.user.authError &&
                    <View>
                        <Text style={{ height: 50 }}>
                                {this.props.user.authError}
                        </Text>
                    </View>
                }
				<View>
					<TextInput
						style={{
							height: 50
						}}
						value={this.state.name}
						onChangeText={(value) => this.setState({name: value})}
						placeholder="Name"/>
				</View>
				<View>
					<TextInput
						style={{
							height: 50
						}}
						value={this.state.email}
						onChangeText={(value) => this.setState({email: value})}
						placeholder="Email"/>
				</View>
				<View>
					<TextInput
						style={{
							height: 50
						}}
						onChangeText={(value) => this.setState({password: value})}
						value={this.state.password}
						placeholder="Password"/>
				</View>
				<View>
					<TextInput
						style={{
							height: 50
						}}
						onChangeText={(value) => this.setState({address: value})}
						value={this.state.address}
						placeholder="Address"/>
				</View>
				<View
					style={{
						height: 50
					}}>
					<Button
					  	title="Register"
					  	color="#4285f4"
					  	onPress={this.register}/>
				</View>
			</View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, {userRegister})(UserRegister);