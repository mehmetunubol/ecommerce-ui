import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Text, Button } from 'react-native';
import { userLogin } from '../redux/actions/userActions';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    login = () => {
        this.props.userLogin(this.state);
	}
	gotoRegister = () => {
		this.props.navigation.navigate('Register');
	}
	render() {
        if (this.props.user.token) {
            this.props.navigation.navigate('Home');
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
				<View
					style={{
						height: 50
					}}>
					<Button
					  	title="Login"
					  	color="#4285f4"
					  	onPress={this.login}/>
				</View>
				<View
					style={{
						height: 30
					}}>
					<Button
					  	title="Register"
					  	color="#1185f4"
					  	onPress={this.gotoRegister}/>
				</View>

			</View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
export default connect(mapStateToProps, {userLogin})(UserLogin);