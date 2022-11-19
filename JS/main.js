const API_URL = "http://localhost:3000" //json-server


const saveCard = (div) => {
    let div_main = document.querySelector("#estates")
    div_main.appendChild(div)
}

const estates = async () => {
    try {
        let response = await fetch(API_URL + "/estates")
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

const showEstates = async () => {
    let data = await estates()
    data.forEach(element => {
        console.log(element)
        let div = document.createElement("div")
        div.setAttribute("class", "card")
        div.innerHTML = `             
        <style>
        .card .img {
            background: url('${element.img}');
            width: 100%;
            height: 50%;
            background-size: cover;
            background-position: center;

        }
        .parks:before {
            content: url("../IMG/park.svg");
            margin-right: 5px;

        }
        .bathrooms:before {
            content: url("../IMG/bathroom.svg");
            margin-right: 5px;

        }

        .rooms:before {
            content: url("../IMG/room.svg");
            margin-right: 5px;

        }
    </style>
    <section class="img" style="
    background: url('${element.img}');
    width: 100%;
    height: 50%;
    background-size: cover;
    background-position: center;">
        <section class="type">
            <button>${element.type}</button>
        </section>
        <section class="status">
            <button>${element.status}</button>
        </section>
        <section class="price">
            <button>${element.price}</button>
        </section>
    </section>
    <section class="location">
        <p>${element.location}</p>
    </section>
    <section class="name">
        <p>${element.name}</p>
    </section>
    <section class="agent">
        <p>${element.agent}</p>
    </section>
    <section class="date">
        <p>${element.date}</p>
    </section>
    <section class="area">
        <p>${element.area}</p>
    </section>
    <section class="features">
        <p class="rooms">${element.rooms}</p>
        <p class="bathrooms">${element.bathrooms}</p>
        <p class="parks">${element.parks}</p>
    </section>`;
        saveCard(div)
    });
}

showEstates()

