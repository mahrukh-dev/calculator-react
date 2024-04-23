import React from 'react';
import './Calculator.css';
import ButtonRow from './ButtonRow';

function Calculator() {

    const buttons = [
        { id: 'clear', className: 'Clear', value: 'C' },
        { id: '!', className: 'Operator', value: '!' },
        { id: '%', className: 'Operator', value: '%' },
        { id: '/', className: 'Operator', value: '/' },
        { id: '7', className: 'Number', value: '7' },
        { id: '8', className: 'Number', value: '8' },
        { id: '9', className: 'Number', value: '9' },
        { id: '*', className: 'Operator', value: '*' },
        { id: '4', className: 'Number', value: '4' },
        { id: '5', className: 'Number', value: '5' },
        { id: '6', className: 'Number', value: '6' },
        { id: '-', className: 'Operator', value: '-' },
        { id: '1', className: 'Number', value: '1' },
        { id: '2', className: 'Number', value: '2' },
        { id: '3', className: 'Number', value: '3' },
        { id: '+', className: 'Operator', value: '+' },
        { id: '0', className: 'Number', value: '0' },
        { id: 'nPr', className: 'Operator', value: 'nPr' },
        { id: 'nCr', className: 'Operator', value: 'nCr' },
        { id: '=', className: 'Equal', value: '=' },
    ];

    return (
        <div className="container">
            <h1>Calculator</h1>
            <input type="text" className='inputfield' disabled />
            <table className="calctable">
                <tbody>
                    <ButtonRow buttons={buttons.slice(0, 4)} />
                    <ButtonRow buttons={buttons.slice(4, 8)} />
                    <ButtonRow buttons={buttons.slice(8, 12)} />
                    <ButtonRow buttons={buttons.slice(12, 16)} />
                    <ButtonRow buttons={buttons.slice(16)} />
                </tbody>
            </table>
        </div>
    );
}

export default Calculator;
