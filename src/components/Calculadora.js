import React, { useState } from 'react';
import './Calculadora.css';
import CalculadoraItem from './CalculadoraItem';
import { evaluate } from 'mathjs';

const Calculadora = () => {

  const [numbers, setNumbers] = useState('')

  const addNumber = (number) => {
    console.log('hola')
    setNumbers( numbers + number )
  }
  const borrar = () =>{
    setNumbers('')
  }
  const resultado = () => {
    setNumbers( evaluate(numbers))
    // let resp =  parseInt(numbers);
    // console.log( parseFloat(numbers) )
  }

  return (
    <div className='calculadora'>
        {/* <div className='togle'></div> */}
        <input type='text' value={numbers} className='pantalla' readOnly/>

        <div className='calculadora-btns'>
          <div className='fila'>
            <CalculadoraItem content='c' type="clear" borrar={borrar} />
            <CalculadoraItem content='7' type="number" addNumber={addNumber} />
            <CalculadoraItem content='4' type="number" addNumber={addNumber} />
            <CalculadoraItem content='1' type="number" addNumber={addNumber} />
            <CalculadoraItem content='.' type="operador" addNumber={addNumber} />
          </div>
          <div className='fila'>
            <CalculadoraItem content=' /' type="operador" addNumber={addNumber} />
            <CalculadoraItem content='8' type="number" addNumber={addNumber} />
            <CalculadoraItem content='5' type="number" addNumber={addNumber} />
            <CalculadoraItem content='2' type="number" addNumber={addNumber} />
            <CalculadoraItem content='0' type="number" addNumber={addNumber} />
          </div>
          <div className='fila'>
            <CalculadoraItem content='*' type="operador" addNumber={addNumber} />
            <CalculadoraItem content='9' type="number" addNumber={addNumber} />
            <CalculadoraItem content='6' type="number" addNumber={addNumber} />
            <CalculadoraItem content='3' type="number" addNumber={addNumber} />
            <CalculadoraItem content='00' type="operador" addNumber={addNumber} />
          </div>
          <div className='fila'>
            <CalculadoraItem content='<' type="operador" addNumber={addNumber} />
            <CalculadoraItem content='-' type="operador" addNumber={addNumber} />
            <CalculadoraItem content='+' type="operador" addNumber={addNumber} />
            <CalculadoraItem content='=' type="result" resultado={resultado} />
          </div>
        </div>
      

    </div>
  )
}

export default Calculadora;
