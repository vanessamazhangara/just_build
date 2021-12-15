let cars = document.getElementById('cars');


function display() {
        
        console.log('this is Cars element',cars);
        // console.log(cars.length);
        // console.log(cars[0].text);
        // console.log(cars[1].value);
        // console.log(cars.selected);

        // let carSelection = cars.selectedOptions.value;
        // console.log(carSelection);
        
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].selected === true) {
                x = cars[i].value;
    
                document.getElementById("output").innerHTML = ` ${x} is a excellent choice!`
            }
            console.log(cars[i])
        }

}

cars.addEventListener('change', display);

// display('cars')

let carProducts = [
    {name: cars[0].text, image:"volvo.jpeg", price: 45000, color: undefined},
    {name: cars[1].text, image: "saab.jpeg", price: 35000, color: undefined},
    {name: cars[2].text, image:"audi.jpeg", price: 65000, color: undefined},
    {name: cars[3].text, image: "mercedes.jpeg", price: 70000, color: undefined},
    
]

function chooseCar () {
    carProducts.forEach((cars, index) => { 

        let carCard = document.createElement('div');
        carCard.innerHTML = `
        <div class=product>
        <img class="car-img" src="images/${cars.image}">
        <div class="name">${cars.name}</div>
        <span><p class="price">$${cars.price}</p>
        <select class="car-colors">
        <option>${cars.color = "white"}</option>
        <option>${cars.color = "grey"}</option>
        <option>${cars.color = "blue"}</option>
        <option>${cars.color = "red"}</option>
        </select></span>
        <button class="add">Add to Cart</button>
        </div>`

        const display = document.getElementById('display');

        display.append(carCard)
        console.log(display)
    });

    
};

chooseCar();