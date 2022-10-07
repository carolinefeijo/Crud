import React from 'react';
import './buttonCreate.css';
import Alert from '../Alert';

export default function ButtonCreate() {

    
    return (
        <div>
            <button onClick={() => alert()}>

                <p className='title-button'>CRIAR USUARIO</p>
            </button>

        </div>
    )
}
