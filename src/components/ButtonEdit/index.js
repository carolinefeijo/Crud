import React from 'react'
import './buttonEdit.css'

export default function ButtonEdit({ userId }) {
    return (
        <div>
            <a href="/edit" >
                <button className='button-edit'>EDITAR </button>
            </a>

        </div>
    )
}
