// LISTAR USUARIOS
export const FetchgetListUser = async () => {
    return fetch('http://localhost:8000/user/list', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => { return data })
        .catch(error => console.log(error))
}


// CRIAR USUARIO
export const FetchNewUser = async (firstName, lastName, age, phone) => {
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



// EDITAR USUARIO
export const FetchEditUser = async (id) => {
    return fetch(`http://localhost:8000/user/find`, {
        params: JSON.stringify({
           id:'AAAKKK'
        }),
        method: 'GET',

        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))

}