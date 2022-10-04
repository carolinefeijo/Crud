import React from 'react';
import './results.css';

import editUser from '../../assets/editUser.png';
import deleteUser from '../../assets/deleteUser.png';


export default function ResultsComponent() {
    return (
        <div>
            <div className='container-header-results'>
                <h2 className='title-results'>ID</h2>
                <h2 className='title-results'>Name</h2>
                <h2 className='title-results'>LastName</h2>
                <h2 className='title-results'>Age</h2>
                <h2 className='title-results'>Phone</h2>


                <div className='buttons'>
                    <button className='button-edit'>
                        <img className='img-button' src={editUser} />EDITAR</button>
                    <button className='button-edit'>
                        <img className='img-button' src={deleteUser} />EXCLUIR</button>
                </div>

            </div>
        </div>
    )
}
