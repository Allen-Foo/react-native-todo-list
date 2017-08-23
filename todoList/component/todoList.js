// todoList.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import Todo from './todo';
import { toggleTodo } from '../redux/actions'

class TodoList extends Component {
	render() {
		let { todos, onTodoClick } = this.props
		return (
			<View style={styles.container}>
				{
					todos && todos.map(todo => 
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

const mapStateToProps = (state) => {
	return {
		todos: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
	}
}


TodoList = connect(
	mapStateToProps,
	mapDispatchToProps)
(TodoList)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default TodoList