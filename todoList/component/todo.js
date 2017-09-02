// todo.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';

export default class Todo extends Component {
	render() {
		const { completed, onPress, text } = this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<View style={styles.container}>
					<Text
					  style={StyleSheet.flatten([
					  	styles.text, 
					  	{
					  		textDecorationLine: completed ? 'line-through' : 'none',
					  		color: completed ? 'green' : 'red',
					  	}
					  ])} 
					>
						{text}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
	},
	container: {
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		marginHorizontal: 20,
		paddingVertical: 10,
	}
})