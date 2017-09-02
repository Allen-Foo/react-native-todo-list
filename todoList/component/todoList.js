// todoList.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import Todo from './todo';
import { toggleTodo } from '../redux/actions'

const {width, height} = Dimensions.get('window');

/**
 * @class todoList is composed of a list of todo items
 *
 * @props todos an array of todos
 * @props onTodoClick the action when user clicks on a to do item
 */
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
		justifyContent: 'flex-start',
		width: width,
		//alignItems: 'center',
	}
})

export default TodoList