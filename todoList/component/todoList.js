// todoList.js
import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import Todo from './todo';
import { toggleTodo } from '../redux/actions'

import { TodoListContainer } from '../styled-components/container'

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
			<TodoListContainer>
				{
					todos && todos.map(todo => 
						<Todo 
							key={todo.id}
							{...todo}
							onPress={() => onTodoClick(todo.id)}
						/>
					)
				}
			</TodoListContainer>
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

export default TodoList