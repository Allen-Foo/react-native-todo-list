// addTodo.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	TextInput,
	StyleSheet,
	Keyboard,
} from 'react-native';

import {connect} from 'react-redux';
import { addTodo } from '../redux/actions'

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todo: undefined
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					onChangeText={text => this.setState({todo: text})}
					clearButtonMode={'while-editing'}
				/>
				<TouchableOpacity
					style={styles.button}
				  onPress={() =>{
						Keyboard.dismiss()
						this.props.addTodo(this.state.todo)
					}} 
				>
					<Text> Add </Text>
				</TouchableOpacity>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: 20,
		height: 50,
	},
	textInput: {
		width: 200,
		borderWidth: 1,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10
	}
})

export default connect(null, { addTodo })(AddTodo)