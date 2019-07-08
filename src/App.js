import React from 'react';
import styled from 'styled-components'

import CardList from './components/CardList'

const TodoBody = styled.div`
  text-align: center;
`
const TodoHeader = styled.header`
  background-color: #F4F6F6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <TodoBody>
      <TodoHeader>
        <CardList title="Todo List" />
      </TodoHeader>
    </TodoBody>
  );
}

export default App;
