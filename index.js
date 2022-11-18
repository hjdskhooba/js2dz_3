let row = document.querySelector('.row')
console.log(row);

fetch(`https://api.sampleapis.com/rickandmorty/characters/?limit=18`)
.then((res) => res.json())
.then((res) => {
    res.forEach((el) => {
        row.innerHTML += `
            <div class="card_content">
                <img src="${el.image}" alt=""/ class="img">
                <p>${el.name}</p>
                <p>${el.status}</p>
                <p>${el.species}</p>
                <p>${el.type}</p>
                <p>${el.gender}</p>
                <p>${el.origin}</p>
            </div>
        `
    })
})

