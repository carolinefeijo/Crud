
export const FetchgetListUser = () => {
    return fetch('http://localhost:8000/user/list') // LISTAR USUARIOS
        .then(response => response.json())
        .then(data => { return data })
        .catch(error => console.log(error))
}

export const FetchNewUser = async (firstName, lastName, age, phone) => { // CRIAR USUARIO
   return fetch('http://localhost:8000/user/create', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            age,
            phone
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
        .then(response => response.json())
    // .then(data );


}

