import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button
} from 'react-native';
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
						placeholder="Kullanıcı adı"/>
				</View>
				<View>
					<TextInput
						style={{
							height: 50
						}}
						onChangeText={(value) => this.setState({password: value})}
						value={this.state.password}
						placeholder="Şifre"/>
				</View>
				<View
					style={{
						height: 50
					}}>
					<Button
					  	title="Giriş" // butonun yazısı
					  	color="#4285f4" // arkaplan rengi
					  	onPress={this.login} /* butona tıklandığında tetiklenecek fonksiyon*/ />
				</View>
			</View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

const mapStateToProps = (state) => ({
    user: state.user
})
export default connect(mapStateToProps, {userLogin})(UserLogin);