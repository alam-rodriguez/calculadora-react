import React from 'react';
import './CalculadoraItem.css';

const CalculadoraItem = ({ content, addNumber, borrar, resultado, type}) => {
  return (
        <input 
            type='button' 
            value={content} 
            className={type} 
            onClick={ (e) => {
                if( content == 'c') borrar();
                else if( content == '=') resultado();
                else addNumber(e.target.value);   
            }} 
        />
  )
}

export default CalculadoraItem;
