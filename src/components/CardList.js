/* eslint-disable no-undef */
import React , { useState, useEffect } from  'react'
import styled from 'styled-components'

import TodoItem from  './TodoItem'

import todoServece from '../service/todo.service'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding: 20px 0 20px 0;
    background-color: #FDFEFE;
    border-radius: 10px;
    align-items: center;
    box-shadow: #1C2833 0.1em 0.1em 0.4em;
`
const CardTitle = styled.span`
    color: #808B96;
    font-size: 20px;
    text-transform: uppercase;
`
const CardSearch = styled.input`
    margin: 20px 40px;
    border-radius: 4px;
    padding: 8px 8px;
    font-weight: bold;
    font-size: 15px
    color: #808B96;
    border: 1px solid #AEB6BF;
`
const CardHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const LabelMsg = styled.label`
    color: #808B96;
    font-size: 20px;
    margin: 0 12px;
`
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`
const CardList = ({ title }) => {
    const [todos, setTodos] = useState([])
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        const initTodos = todoServece.localStorange()
        setTodos(initTodos)
    }, [todos])

    function handleKeypressChange (event) {
        if (event.keyCode === 13){
            const newData = todoServece.postTodo(inputText)
            setTodos(newData)
        }
    }

    return (
      <Card>
        <CardHeader>
            <CardTitle>
                { title }
            </CardTitle>
            <CardSearch
                type="text"
                placeholder="Add a new todo..."
                onKeyDownCapture={handleKeypressChange}
                onInput={(e) => setInputText(e.target.value)}
            />
        </CardHeader>
        <CardBody>
            {todos ?
                todos.map(item => (
                    <TodoItem
                        idItem={item.id}
                        key={item.id}
                        value={item.name}
                        data={todos}
                    />
                ))
                :
                <LabelMsg> Não há Todos </LabelMsg>
            }
        </CardBody>
      </Card>
    )
}

export default CardList