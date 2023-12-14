// Initial References
let Result = document.getElementById('result')
let SearchButton = document.querySelector('.search-btn') // Changed from getElementsByClassName to querySelector
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='


let userInp = document.getElementById('input-box').value;

fetch(url + 'big mac') 
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
