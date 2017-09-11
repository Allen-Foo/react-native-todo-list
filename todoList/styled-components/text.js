import styled from 'styled-components/native';

const TodoItemText = styled.Text`
  font-size: 24;
  text-decoration-line: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? 'green' : 'red'};
`

export {
  TodoItemText
}