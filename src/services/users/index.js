// LISTAR USUARIOS
export const FetchgetListUser = async() => {
    return fetch('http://localhost:8000/user/list', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => { return data })
        .catch(error => console.log(error))
}

// CRIAR USUARIO
export const FetchNewUser = async(firstName, lastName, age, phone) => {
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
    // LISTAR USUARIO POR ID
export const FetchEditUser = async(id) => {
    console.log(id)
    return fetch(`http://localhost:8000/user/find?id=${id}`, {

            method: 'GET',

            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
}

// ATUALIZAR USUARIO
export const FetchUpdateUser = async(id, user) => {
    return fetch(`http://localhost:8000/user/update?id=${id}`, {

            method: 'PUT',

            body: JSON.stringify({
                user
            }),

            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const FetchDeleteUser = async(id) => {
    console.log(id)
    return fetch(`http://localhost:8000/user/delete?id=${id}`, {

            method: 'DELETE',

            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
}