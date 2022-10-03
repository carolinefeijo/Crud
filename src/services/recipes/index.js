export const fetchRecipeHighlight = () => {
    return fetch('http://localhost:8000/recipe/list/highlights')
        .then(response => response.json())
        .then(data => { return data })
}

export const fetchRecipeId = (id) => {
    return fetch(`http://localhost:8000/recipe?id=${id}`)
        .then(response => response.json())
        .then(data => { return data })
}

export const fetchCreateRecipe = (title) => {
    fetch('http://localhost:8000/recipe/create', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "timeCook": 10,
            "description": "Em uma panela coloque tudo",
            "image": "https://www.alegrafoods.com.br/wp-content/uploads/2021/07/pasted-image-0.png",

        })

    })


}