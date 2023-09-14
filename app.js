function myFunc(){
    
    let celsius = parseFloat(document.getElementById('celsius').value);
    
    if(!isNaN(celsius)){
        let kelvin = celsius + 273;
        let fahrenheit = celsius * (9/5) + 32;
        let rankine = (celsius + 273) * (9/5);
    

    fahrenheit = Math.floor(fahrenheit);
    rankine = Math.floor(rankine);

    document.getElementById('fahrenheit').innerHTML = fahrenheit;
    document.getElementById('kelvin').innerHTML = kelvin;
    document.getElementById('rankine').innerHTML = rankine;
    }
    else {
        document.getElementById('alert').style.display = 'flex';
    }

    let btnClose = document.getElementById('btnClose');

    btnClose.addEventListener('click', function(){
        document.getElementById('alert').style.display = 'none';
    })
}

