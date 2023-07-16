import React from 'react'
import styled from 'styled-components'
type ButtonProps = {
    height?:string
    bgColor?:string
    color?:string
    Text?:string
}
function Button({height,bgColor,color,Text}:ButtonProps) {
  return (
    <Btn height={height} bgColor={bgColor} color={color} type='submit'>{Text}</Btn>
  )
}

const Btn = styled.button<ButtonProps>`
        flex-shrink: 0;
    border-radius: 8px;
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: 1rem;
  font-style: normal;
    font-weight: 600;
    line-height: 150%;
    cursor: pointer;

`

export default Button