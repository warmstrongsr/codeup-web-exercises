"use strict"

// Coffee table content (per Johnson)
coffees = [

     id: 1, name: 'Cinnamon', roast: 'light'
     id: 2, name: 'Half City', roast: 'light'
     id: 3, name: 'Light City', roast: 'light'
     id: 4, name: 'American', roast: 'medium'
     id: 5, name: 'Breakfast', roast: 'medium'
     id: 6, name: 'City', roast: 'medium'
     id: 7, name: 'Continental', roast: 'dark'
     id: 8, name: 'Espresso', roast: 'dark'
     id: 9, name: 'European', roast: 'dark'
     id: 10, name: 'French', roast: 'dark'
     id: 11, name: 'High', roast: 'dark'
     id: 12, name: 'Italian', roast: 'dark'
     id: 13, name: 'New Orleans', roast: 'dark'
     id: 14, name: 'Viennese', roast: 'dark'
    
];

inputName = document.querySelector('input-name');
inputRoast = document.querySelector('input-roast');
addCoffeeButton = document.querySelector('#input-submit');
addCoffeeButton.addEventListener('click', addCoffees);

function addCoffees(input) {
    addID = coffees.length + 1;
    addName = inputName.value.toString();
    addRoast.value.toString();
    input = {id: addID, Name: addName, roast: addRoast };
    coffees.push(input);
    console.log(coffees);
    tbody.innerHTML = renderCoffees(coffees);
}


// Live Sbar compilation

function searchCoffees() {
    searchRoast = searchBox.value.toUpperCase();
    filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

searchbox = document.querySelector('searchBox');
searchBox.addEventListener('keyup', searchCoffees)
submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees)