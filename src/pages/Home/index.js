import React from 'react';
import ButtonCreate from '../../components/ButtonCreate';
import ResultsComponent from '../../components/ResultsComponent';
import './home.css';


const Home = () => {
  return (
    <div className='container-home'>
      
      <div className='header-main-title-button'>
        <h1 className='title'>CRUD BÁSICO - MEU PRIMEIRO CRUD BÁSICO </h1>
        <ButtonCreate />
      </div>

      <div className='container-header'>
        <h2 className='title-main'>ID</h2>
        <h2 className='title-main'>Name</h2>
        <h2 className='title-main'>LastName</h2>
        <h2 className='title-main'>Age</h2>
        <h2 className='title-main'>Phone</h2>
        <h2 className='title-main'>Ações</h2>

      </div>
      <ResultsComponent />

    </div>
  );
}

export default Home;