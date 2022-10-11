import React, { useEffect } from 'react';
import { useState } from 'react';

import ButtonCreate from '../../components/ButtonCreate';
import ResultsComponent from '../../components/ResultsComponent';
import './home.css';

import { FetchgetListUser, FetchNewUser } from '../../services/users';


const Home = () => {

  const [ListUser, setListUser] = useState([])
  // const [NewUser, setNewUser] = useState()

  const GetList = async () => {
    const data = await FetchgetListUser();
    setListUser(data)
  }

  // const createNewUser = async () => {
  //   const data = await FetchNewUser();
  //   setNewUser(data)
  // }

  useEffect(() => {
    GetList()


  }, []);

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
      {ListUser.map((list) => <ResultsComponent list={list} />)}


    </div>
  );
}

export default Home;