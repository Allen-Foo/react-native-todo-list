// todo.js
import React, { Component } from 'react';
import {
	TouchableOpacity,
} from 'react-native';

import { TodoItemRowContainer,  } from '../styled-components/container'
import { TodoItemText } from '../styled-components/text'

export default class Todo extends Component {
	render() {
		const { completed, onPress, text } = this.props;
		return (
			<TouchableOpacity onPress={onPress}>
				<TodoItemRowContainer>
					<TodoItemText completed={completed}>
						{text}
					</TodoItemText>
				</TodoItemRowContainer>
			</TouchableOpacity>
		)
	}
}
