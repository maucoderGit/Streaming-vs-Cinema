const platforms = [
    id_0 = { 
    name: "Disney", 
    price: 8.99 
    },
    id_1 = {
        name: "Netflix",
        price: 7.99
    },
    id_2 = {
        name: "Amazon",
        price: 12.99
    },
    id_3 = {
        name: "HBO MAX",
        price: 11.99
    }
]

// getting inputs of users

const cinema_price = document.getElementById("cinema_price")
const streaming_price = document.getElementById("streaming_price")
const show_difference = document.getElementById("show_difference")

const cinema_value = () => document.getElementById("input_movies").value

const how_many_select = () => {
    const input = document.getElementById("price")
    const input_value = parseInt(input.value)

    return input_value
}

// sum streaming prices

function stream_platforms_values() {
    let sum_values = 0

    for(let i = 0; i < platforms.length; i++){
        if(document.getElementById(`add_${i}`).checked){
            sum_values += platforms[i].price
        }
    }

    return sum_values
}

// print in html 

function show_prices(){
    const cinema = how_many_select()
    const total_cinema = cinema_value() * cinema
    const stream = stream_platforms_values()

    streaming_price.innerText = `Gastas en peliculas ${total_cinema || 0}`
    cinema_price.innerText = `Gastas en streaming ${stream || 0}`
    show_difference.innerText = `Gastas ${total_cinema - stream} comprando en Streaming en vez de cinema`
}
