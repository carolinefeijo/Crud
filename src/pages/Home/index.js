import React from 'react';
import './home.css';

import edit from '../../assets/edit.png';
import apagar from '../../assets/apagar.png'


const Home = () => {
  return (
    <div className='container-home'>
      <h1 className='title'>CRUD BASICO - MEU PRIMEIRO CRUD BASICO </h1>

      <div className='container-header'>
        <h2 className='title-main'>ID</h2>
        <h2 className='title-main'>Name</h2>
        <h2 className='title-main'>LastName</h2>
        <h2 className='title-main'>Age</h2>
        <h2 className='title-main'>Phone</h2>
        <h2 className='title-main'>Ações</h2>

      </div>

      <div className='container-header-results'>
        <h2 className='title-results'>ID</h2>
        <h2 className='title-results'>Name</h2>
        <h2 className='title-results'>LastName</h2>
        <h2 className='title-results'>Age</h2>
        <h2 className='title-results'>Phone</h2>



        <div className='buttons'>

          <button className='button-edit'>
            <img className='img-button' src={edit} />EDITAR</button>
          <button className='button-edit'>
            <img className='img-button' src={apagar} /> EXCLUIR</button>
        </div>

      </div>
    </div>
  );
}

export default Home;