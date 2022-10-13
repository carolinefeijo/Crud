import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchEditUser, FetchUpdateUser } from '../../services/users';


export const EditUser = () => {

    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");

    const GetEditUser = async () => {
        const data = await FetchEditUser(id)
        setFirstName(data.firstName)
        setLastname(data.lastName)
        setAge(data.age)
        setPhone(data.phone)
    }

    const updateUser = async () => {
        const user = {
            firstName,
            lastName,
            age,
            phone
        }
        const data = await FetchUpdateUser(id, user)
        
    }

    useEffect(() => {
        GetEditUser()
    }, [])



    return (
        <div className='container-form'>
            <form >
                <div className='div-container-input'>

                    <h1>EDITAR USUARIO</h1>
                    <p> ID : {id}  </p>
                    <label className='label-text' htmlFor='name'> Nome:</label>

                    <input className='label-text-secundar' type="text" name='name' placeholder='Digite seu nome' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>

                <div className='div-container-input'>
                    <label className='label-text' htmlFor='lastname' > LastName:</label>
                    <input className='label-text-secundar' type="text" name='lastname' placeholder='Digite seu sobrenome' onChange={(e) => setLastname(e.target.value)} value={lastName} />
                </div>

                <div className='div-container-input'>
                    <label className='label-text' htmlFor='age' > Age:</label>
                    <input className='label-text-secundar' type="date" name='age' placeholder='Digite sua idade' onChange={(e) => setAge(e.target.value)} value={age} />
                </div>


                <div className='div-container-input'>
                    <label className='label-text' htmlFor='phone' > Phone:</label>
                    <input className='label-text-secundar' type="text" name='phone' placeholder='Digite seu telefone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>


                <input className='custom-input-button' type="submit" value="Enviar" onClick={updateUser}/>

            </form>


        </div>
    )
}
