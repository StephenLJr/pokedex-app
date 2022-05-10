let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Ivysaur', height: 1, type: ['grass', 'poison']},
    {name: 'Venusaur', height: 2, type: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Charmeleon', height: 1.1, type: 'fire'},
    {name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
    {name: 'Squirtle', height: 0.5, type: 'water'},
    {name: 'Wartortle', height: 1, type: 'water'},
    {name: 'Blastoise', height: 1.6, type: 'water'},
]

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.7) { //highlighting large pokemon
        document.write('<p class="large">' + '<strong>' + pokemonList[i].name, + '</strong>' +'(height: ' + pokemonList[i].height + ')-Wow, that\'s big!</p>')
    } else if (pokemonList[i].height < 0.6) { //highlighting small pokemon
        document.write('<p class="small">' + '<strong>' + pokemonList[i].name, + '</strong>' + '(height: ' + pokemonList[i].height + ')-Wow, that\'s tiny!</p>')
    } else{
        document.write('<p>' + '<strong>' + pokemonList[i].name, + '</strong>' + '(height: ' + pokemonList[i].height + ')</p>')
    }
}
function divide(dividend, divisor){
    if(divisor === 0){
        return "You're trying to divide by zero."
    }else{
        let result = dividend / divisor;
        return result;
    }
}