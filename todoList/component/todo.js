// todo.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text
} from 'react-native';

export default class Todo extends Component {
	render() {
		const { completed, onPress, text } = this.props;
		return (
			<Text
				onPress={onPress}
			  style={{textDecorationLine: completed ? 'line-through' : 'none'}} 
			>
				{text}
			</Text>
		)
	}
}