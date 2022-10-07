
import './alert.css'
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Alert() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div className='container-modal-alert'>
            <div className='input-dados'>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                <input placeholder='Age' />
                <input placeholder='Phone' />
                <button type='submit'>Submit</button>
            </div>
        </div>
    )
}
