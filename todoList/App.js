import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Provider } from 'react-redux';
import TodoList from './component/todoList';
import AddTodo from './component/addTodo';
import store from './configureStore'

import mockData from './mockData'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddTodo />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
