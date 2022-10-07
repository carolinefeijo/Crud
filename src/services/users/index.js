
export const FetchgetListUser = () => {
    return fetch('http://localhost:8000/user/list') // LISTAR USUARIOS
        .then(response => response.json())
        .then(data => { return data })
        .catch(error => console.log(error))
}

export const FetchNewUser = () => { // CRIAR USUARIO
    fetch('http://localhost:8000/user/create', {
        method: 'POST',
        body: JSON.stringify({
            firstName: "Fernanda",
            lastName: "Oliveira",
            age: "24/10/1971",
            phone: "(41)99477-2222",
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
        .then(response => response.json())
        .then(data => console.log(data));


}

