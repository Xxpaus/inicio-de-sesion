const todo = document.querySelector("#todos")
const btnSearch =  document.querySelector("#btnFetch")

const url = "https://fakestoreapi.com/products"




const tarjetaData = (data) => {
    return `<div class='Tarjeta'>
        <h1>${data.title}</h1>
        <p>${data.id}</p>
        <p>${data.price}</p>
        <p>${data.category}</p>
        <p>${data.description}</p>
        <img src = '${data.image}'/>
    </div>`
}

async function fetchData() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

btnSearch.addEventListener('click', async () => {
    const data = await fetchData() 
    const tarjeta = data.map((element) => tarjetaData(element)).join("")
    todo.innerHTML = tarjeta 
                 
}
)
