import React from 'react';
import './results.css';

export default function ResultsComponent({ list }) {

    return (
        <div>
            <div className='container-header-results'>
                <h2 className='title-results'>{list._id}</h2>
                <h2 className='title-results'>{list.firstName}</h2>
                <h2 className='title-results'>{list.lastName}</h2>
                <h2 className='title-results'>{list.age}</h2>
                <h2 className='title-results'>{list.phone}</h2>


                <div className='buttons'>
                    <a href="/edit" >
                        <button className='button-edit'>EDITAR USUARIO</button>
                    </a>

                    <button className='button-edit'>EXCLUIR</button>
                </div>

            </div>
        </div>
    )
}
