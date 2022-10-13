import React from 'react';
import ButtonEdit from '../ButtonEdit';
import './results.css';

export default function ResultsComponent({ user }) {
   
    return (
        <div>
            <div className='container-header-results'>
                <h2 className='title-results'>{user._id}</h2>
                <h2 className='title-results'>{user.firstName}</h2>
                <h2 className='title-results'>{user.lastName}</h2>
                <h2 className='title-results'>{user.age}</h2>
                <h2 className='title-results'>{user.phone}</h2>


                <div className='buttons'>
                    <ButtonEdit userId={user._id} />

                    <button className='button-edit'>EXCLUIR</button>
                </div>

            </div>
        </div>
    )
}
