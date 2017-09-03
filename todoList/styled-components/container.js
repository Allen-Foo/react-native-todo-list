import styled from 'styled-components/native';

import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');


const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

const TodoListContainer = styled.View`
  flex: 1;
  width: ${width};
`

const TodoItemRowContainer = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #000;
  margin-horizontal: 20;
  padding-vertical: 10;
`

export {
  TodoListContainer,
  TodoItemRowContainer
}