// todoList.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import Todo from './todo';

export default class TodoList extends Component {
	render() {
		let { todos, onTodoClick } = this.props
		return (
			<View style={styles.container}>
				{
					todos.map(todo => 
						<Todo 
							key={todo.id}
							{...todo}
							onPress={() => onTodoClick(todo.id)}
						/>
					)
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})