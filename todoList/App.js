import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Provider } from 'react-redux';
import TodoList from './component/todoList';

import mockData from './mockData'

export default class App extends React.Component {
  render() {
    return (
      <TodoList todos={mockData}/>
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
