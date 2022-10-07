import React from 'react';
import './results.css';

export default function ResultsComponent({ list }) {
    return (
        <div >

            <div className='container-header-results'>
                <h2 className='title-results'>ID</h2>
                <h2 className='title-results'>{list.firstName}</h2>
                <h2 className='title-results'>{list.lastName}</h2>
                <h2 className='title-results'>{list.age}</h2>
                <h2 className='title-results'>{list.phone}</h2>


                <div className='buttons'>
                    <button className='button-edit'>
                        EDITAR</button>
                    <button className='button-edit'>
                        EXCLUIR</button>
                </div>

            </div>
        </div>
    )
}
