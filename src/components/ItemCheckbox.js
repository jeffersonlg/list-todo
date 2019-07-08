import React from  'react'
import styled from 'styled-components'

const ItemCheckBox = styled.div`
    display: inline-block;
    vertical-align: middle;
`
const ItemIcon = styled.svg`
    fill: none;
    stroke: #808B96;
    stroke-width: 3px;
`
const ItemHiddenCheck = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`
const ItemStyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => (props.checked ? '#FDFEFE' : '#FDFEFE')}
    border-radius: 3px;
    transition: all 150ms;
    border: 1px solid #D5D8DC;

    ${ItemHiddenCheck}:hover + & {
        box-shadow: 0 0 0 3px #F0F3F4;
        cursor: pointer;      
    }

    ${ItemHiddenCheck}:focus + & {
        box-shadow: 0 0 0 0 #FDFEFE;
    }
    ${ItemIcon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')}
    }
`
const TodoItemCheckbox = ({ checked, ...props }) => {
    
    return (
        <ItemCheckBox>
            <ItemHiddenCheck checked={checked} {...props} />
                <ItemStyledCheckbox checked={checked}>
                    <ItemIcon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </ItemIcon>
                </ItemStyledCheckbox>
        </ItemCheckBox>
    )
}

export default TodoItemCheckbox