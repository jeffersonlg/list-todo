import React , { useState, useEffect} from  'react'
import styled from 'styled-components'

import TodoItemCheckbox from './ItemCheckbox'
import todoServece from '../service/todo.service'

const Item = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 15px 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #EAECEE;
    border-top: 1px solid #EAECEE;
    /* border: solid 1px red; */
`
const ItemLabel = styled.label`
    display: flex;
    flex-direction: row;
    color: #808B96;
    font-size: 15px;
    margin: 0 12px;
    width: 80%;
`
const ItemSpan = styled.span`
    color: #808B96;
    font-size: 15px;
    margin: 0 5px;
`
const ItemDelete = styled.span`
    text-decoration: none;
    padding:0;
    width: 16px;
    height: 16px;
    text-align: center;
    cursor: pointer;  
    color: #808B96;
    font-weight: bold;
`

const TodoItem = ({ value, idItem, data}) => {
    const [checked, setchecked] = useState(false)
    const [todo, setTodo] = useState(data)

    const handleCheckboxChange = (event) => {
        setchecked(event.target.checked)

        const arrayU = todoServece.atrTodo(idItem)

        setTodo(arrayU)
    }

    const handleDelete = () => {
        todoServece.deleteTodo(idItem)
    }

    return (
        <Item>
            <ItemLabel>
                <TodoItemCheckbox 
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <ItemSpan>
                    { value }
                </ItemSpan>
                </ItemLabel>
                <ItemDelete
                    onClick={handleDelete}
                >
                    x
                </ItemDelete>
    
        </Item>
    )
}

export default TodoItem