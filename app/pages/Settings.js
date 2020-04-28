import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput,View, Button } from 'react-native';
import { userUpdate } from '../redux/actions/userActions';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.user
        }
    }
    update = () => {
        this.props.userUpdate(this.state);
    }
	render() {
		console.log("userUpdate " + JSON.stringify(this.props));
        return(
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
			        justifyContent: 'center',
			        padding: 15
				}}>
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
							height: 200
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
					  	title="Update"
					  	color="#4285f4"
					  	onPress={this.update}/>
				</View>
			</View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, {userUpdate})(Settings);