import React, { useState } from 'react'

export const EditUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    
    return (
        <div className='container-form'>
            <form >
                <div className='div-container-input'>

                    <h1>EDITAR USUARIO</h1>
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

                <input className='custom-input-button' type="submit" value="Enviar" />

            </form>


        </div>
    )
}
