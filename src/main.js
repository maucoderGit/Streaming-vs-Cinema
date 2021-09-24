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

function how_many_select(){
    const input = document.getElementById("price")
    const input_value = parseInt(input.value)
    
    return input_value
}

function stream_platforms_values() {
    let sum_values = 0
    if(document.getElementById("add_0").checked){
        sum_values += platforms[0].price
    }
    if(document.getElementById("add_1").checked){
        sum_values += platforms[1].price
    }
    if(document.getElementById("add_2").checked){
        sum_values += platforms[2].price
    }
    if(document.getElementById("add_3").checked){
        sum_values += platforms[3].price
    }

    return sum_values
}

const cinema_value = document.getElementById("price").value

function show_prices(){
    const cinema = how_many_select()
    const total_cinema = cinema_value * cinema
    
    
    console.log(stream_platforms_values())
}
