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

const cinema_value = document.getElementById("price").value
const how_many_select = () => {
    const input = document.getElementById("price")
    const input_value = parseInt(input.value)
}

function stream_platforms_values() {
    let sum_values = 0

    for(let i = 0; i < platforms.length; i++){
        if(document.getElementById(`add_${i}`).checked){
            sum_values += platforms[i].price
        }
    }

    return sum_values
}

stream_platforms_values()

function show_prices(){
    const cinema = how_many_select()
    const total_cinema = cinema_value * cinema
    
    console.log(stream_platforms_values())
}
